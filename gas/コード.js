// 顧客管理Webアプリで使用するスプレッドシート
const CRM_SPREADSHEET_ID =
  "1FviYJEtrMSyWGgtlMfsD_E_36yBNoJoqiG8asxLTdlQ";

// 顧客写真を管理するシート名
const CUSTOMER_PHOTO_SHEET_NAME =
  "顧客写真";

// 顧客写真を保存するGoogle Driveフォルダ名
const CUSTOMER_PHOTO_FOLDER_NAME =
  "顧客管理Webアプリ_顧客写真";


/**
 * 顧客マスタから顧客一覧を取得する
 *
 * 学習メモ：
 * スプレッドシートの各行を、
 * JavaScriptで扱いやすい顧客オブジェクトへ変換する。
 */
function getCustomers() {
  // Webアプリからも確実に取得できるよう、
  // スプレッドシートIDを指定して開く
  const spreadsheetId =
    "1FviYJEtrMSyWGgtlMfsD_E_36yBNoJoqiG8asxLTdlQ";

  const spreadsheet =
    SpreadsheetApp.openById(
      spreadsheetId
    );

  const sheet =
    spreadsheet.getSheetByName(
      "顧客マスタ"
    );

  // 指定したシートが見つからない場合は処理を止める
  if (!sheet) {
    throw new Error(
      "「顧客マスタ」シートが見つかりません。"
    );
  }

  // シートに表示されている文字列をすべて取得する
  const values =
    sheet
      .getDataRange()
      .getDisplayValues();

  // 見出し行しかない場合は空の一覧を返す
  if (values.length <= 1) {
    return [];
  }

  // 1行目の見出しを除き、顧客データへ変換する
  return values
    .slice(1)
    .filter((row) => {
      const customerId =
        row[0].trim();

      const status =
        row[8].trim();

      return (
        customerId !== "" &&
        status !== "無効"
      );
    })
    .map((row) => {
      return {
        customerId:
          row[0].trim(),

        name:
          row[1].trim(),

        registrationDate:
          row[2],

        birthday:
          row[3],

        staffMember:
          row[4].trim(),

        photoUrl:
          row[5].trim(),

        photoPreviewUrl:
          "",

        features:
          row[6]
            .split(",")
            .map((feature) => {
              return feature.trim();
            })
            .filter(Boolean),

        memo:
          row[7].trim(),

        status:
          row[8].trim(),
      };
    });
}


/**
 * 来店履歴シートから来店データを取得する
 *
 * 学習メモ：
 * スプレッドシートの1行を、
 * JavaScriptで扱いやすい来店履歴オブジェクトへ変換する。
 */
function getVisitHistories() {
  // Webアプリからも確実に取得できるよう、
  // スプレッドシートIDを指定して開く
  const spreadsheetId =
    "1FviYJEtrMSyWGgtlMfsD_E_36yBNoJoqiG8asxLTdlQ";

  const spreadsheet =
    SpreadsheetApp.openById(
      spreadsheetId
    );

  const sheet =
    spreadsheet.getSheetByName(
      "来店履歴"
    );

  // 指定したシートが見つからない場合は処理を止める
  if (!sheet) {
    throw new Error(
      "「来店履歴」シートが見つかりません。"
    );
  }

  // シートに表示されている文字列をすべて取得する
  const values =
    sheet
      .getDataRange()
      .getDisplayValues();

  // 見出し行しかない場合は空の一覧を返す
  if (values.length <= 1) {
    return [];
  }

  // 1行目の見出しを除き、
  // 来店履歴データへ変換する
  return values
    .slice(1)
    .filter((row) => {
      const visitId =
        row[0].trim();

      const customerId =
        row[1].trim();

      const status =
        row[7].trim();

      return (
        visitId !== "" &&
        customerId !== "" &&
        status !== "無効"
      );
    })
    .map((row) => {
      const paymentAmountText =
        row[3].replace(
          /[¥￥,\s]/g,
          ""
        );

      const paymentAmount =
        paymentAmountText === ""
          ? 0
          : Number(
              paymentAmountText
            );

      return {
        visitId:
          row[0].trim(),

        customerId:
          row[1].trim(),

        visitDate:
          row[2],

        paymentAmount:
          Number.isNaN(
            paymentAmount
          )
            ? 0
            : paymentAmount,

        staffMember:
          row[4].trim(),

        visitMemo:
          row[5].trim(),

        registeredAt:
          row[6],

        status:
          row[7].trim(),
      };
    })
    .sort((firstVisit, secondVisit) => {
      return secondVisit.visitDate
        .localeCompare(
          firstVisit.visitDate
        );
    });
}


/**
 * アプリの初期表示に必要なデータをまとめて取得する
 */
function getInitialAppData() {
  return {
    customers:
      getCustomers(),

    visitHistories:
      getVisitHistories(),
  };
}


/**
 * 顧客写真シートを取得する
 *
 * シートがまだ存在しない場合は、
 * 必要な見出しと一緒に自動作成する。
 */
function getCustomerPhotoSheet_() {
  const spreadsheet =
    SpreadsheetApp.openById(
      CRM_SPREADSHEET_ID
    );

  let sheet =
    spreadsheet.getSheetByName(
      CUSTOMER_PHOTO_SHEET_NAME
    );

  if (!sheet) {
    sheet =
      spreadsheet.insertSheet(
        CUSTOMER_PHOTO_SHEET_NAME
      );

    sheet
      .getRange(
        1,
        1,
        1,
        7
      )
      .setValues([
        [
          "写真ID",
          "顧客ID",
          "ファイルID",
          "写真URL",
          "ファイル名",
          "登録日時",
          "状態",
        ],
      ]);

    sheet.setFrozenRows(1);
  }

  return sheet;
}


/**
 * 顧客写真を保存する親フォルダを取得する
 *
 * フォルダがまだ存在しない場合は、
 * Google Driveへ自動作成する。
 */
function getCustomerPhotoRootFolder_() {
  const folders =
    DriveApp.getFoldersByName(
      CUSTOMER_PHOTO_FOLDER_NAME
    );

  if (folders.hasNext()) {
    return folders.next();
  }

  return DriveApp.createFolder(
    CUSTOMER_PHOTO_FOLDER_NAME
  );
}


/**
 * 顧客ごとの写真フォルダを取得する
 *
 * 例：
 * 顧客管理Webアプリ_顧客写真
 *   └ MU00001
 *   └ MU00002
 */
function getCustomerPhotoFolder_(
  customerId
) {
  const rootFolder =
    getCustomerPhotoRootFolder_();

  const folders =
    rootFolder.getFoldersByName(
      customerId
    );

  if (folders.hasNext()) {
    return folders.next();
  }

  return rootFolder.createFolder(
    customerId
  );
}


/**
 * 写真保存用のシートとDriveフォルダを
 * 作成できるか確認する。
 */
function testPrepareCustomerPhotoStorage() {
  const sheet =
    getCustomerPhotoSheet_();

  const folder =
    getCustomerPhotoRootFolder_();

  console.log(
    "写真シート:",
    sheet.getName()
  );

  console.log(
    "写真フォルダ:",
    folder.getName()
  );
}


/**
 * DriveのURLからファイルIDを取得する
 */
function getDriveFileIdFromUrl_(url) {
  const urlText =
    String(url || "");

  const filePathMatch =
    urlText.match(
      /\/d\/([a-zA-Z0-9_-]+)/
    );

  if (filePathMatch) {
    return filePathMatch[1];
  }

  const idParameterMatch =
    urlText.match(
      /[?&]id=([a-zA-Z0-9_-]+)/
    );

  return idParameterMatch
    ? idParameterMatch[1]
    : "";
}


/**
 * Drive上の画像をブラウザ表示用Data URLへ変換する
 *
 * 写真自体を一般公開せずに、
 * GAS経由でアプリへ表示する。
 */
function createPhotoPreviewDataUrl_(
  fileId
) {
  if (!fileId) {
    return "";
  }

  try {
    const file =
      DriveApp.getFileById(
        fileId
      );

    const blob =
      file.getBlob();

    const contentType =
      blob.getContentType() ||
      "image/jpeg";

    const base64 =
      Utilities.base64Encode(
        blob.getBytes()
      );

    return (
      `data:${contentType};base64,` +
      base64
    );
  } catch (error) {
    console.error(
      "写真プレビューの生成に失敗しました:",
      error
    );

    return "";
  }
}


/**
 * Drive URLから写真プレビューを取得する
 */
function getPhotoPreviewDataUrlByDriveUrl_(
  photoUrl
) {
  const fileId =
    getDriveFileIdFromUrl_(
      photoUrl
    );

  return createPhotoPreviewDataUrl_(
    fileId
  );
}


/**
 * 必要な代表写真だけまとめて取得する
 *
 * 初期表示では写真本体を読み込まず、
 * ブラウザ側で必要になった写真だけ取得する。
 */
function getCustomerPhotoPreviews(
  photoUrls
) {
  if (
    !Array.isArray(
      photoUrls
    )
  ) {
    return [];
  }

  // 同じ写真URLが複数含まれていても
  // Driveから読み込むのは1回だけにする
  const uniquePhotoUrls =
    Array.from(
      new Set(
        photoUrls
          .map((photoUrl) => {
            return String(
              photoUrl || ""
            ).trim();
          })
          .filter(Boolean)
      )
    );

  return uniquePhotoUrls.map(
    (photoUrl) => {
      return {
        photoUrl,

        previewUrl:
          getPhotoPreviewDataUrlByDriveUrl_(
            photoUrl
          ),
      };
    }
  );
}


/**
 * シート内の最大番号から
 * 次のIDを作る
 *
 * 例：
 * MU00001
 * VI00001
 * PH00001
 */
function createNextId_(
  sheet,
  prefix
) {
  const lastRow =
    sheet.getLastRow();

  if (lastRow <= 1) {
    return `${prefix}00001`;
  }

  const idValues =
    sheet
      .getRange(
        2,
        1,
        lastRow - 1,
        1
      )
      .getDisplayValues()
      .flat();

  let maximumNumber = 0;

  idValues.forEach((idValue) => {
    const match =
      String(idValue).match(
        new RegExp(
          `^${prefix}(\\d+)$`
        )
      );

    if (!match) {
      return;
    }

    maximumNumber =
      Math.max(
        maximumNumber,
        Number(match[1])
      );
  });

  return (
    prefix +
    String(
      maximumNumber + 1
    ).padStart(
      5,
      "0"
    )
  );
}


/**
 * 顧客マスタから顧客IDの行番号を探す
 */
function findCustomerRow_(
  sheet,
  customerId
) {
  const lastRow =
    sheet.getLastRow();

  if (lastRow <= 1) {
    return 0;
  }

  const customerIds =
    sheet
      .getRange(
        2,
        1,
        lastRow - 1,
        1
      )
      .getDisplayValues();

  for (
    let index = 0;
    index < customerIds.length;
    index += 1
  ) {
    if (
      customerIds[index][0].trim() ===
      customerId
    ) {
      return index + 2;
    }
  }

  return 0;
}


/**
 * ブラウザから受け取ったBase64写真を
 * Driveへ保存できるBlobへ変換する
 */
function createCustomerPhotoBlob_(
  photoData
) {
  const base64 =
    String(
      photoData?.base64 || ""
    );

  if (!base64) {
    throw new Error(
      "写真データが空です。"
    );
  }

  const bytes =
    Utilities.base64Decode(
      base64
    );

  return Utilities.newBlob(
    bytes,
    photoData.mimeType ||
      "application/octet-stream",
    photoData.fileName ||
      "customer-photo"
  );
}


/**
 * 顧客マスタF列の代表写真URLを更新する
 */
function updateCustomerRepresentativePhoto_(
  customerId,
  photoUrl
) {
  const spreadsheet =
    SpreadsheetApp.openById(
      CRM_SPREADSHEET_ID
    );

  const customerSheet =
    spreadsheet.getSheetByName(
      "顧客マスタ"
    );

  if (!customerSheet) {
    throw new Error(
      "「顧客マスタ」シートが見つかりません。"
    );
  }

  const customerRow =
    findCustomerRow_(
      customerSheet,
      customerId
    );

  if (!customerRow) {
    throw new Error(
      `顧客ID「${customerId}」が見つかりません。`
    );
  }

  customerSheet
    .getRange(
      customerRow,
      6
    )
    .setValue(
      photoUrl || ""
    );
}


/**
 * 顧客写真をDriveと顧客写真シートへ保存する
 */
function saveCustomerPhotos_(
  customerId,
  photoDataList
) {
  if (
    !Array.isArray(
      photoDataList
    ) ||
    photoDataList.length === 0
  ) {
    return [];
  }

  const photoSheet =
    getCustomerPhotoSheet_();

  const customerFolder =
    getCustomerPhotoFolder_(
      customerId
    );

  // 次に使用する写真IDを最初に1回だけ取得する
  const firstPhotoId =
    createNextId_(
      photoSheet,
      "PH"
    );

  const firstPhotoNumber =
    Number(
      firstPhotoId.replace(
        /^PH/,
        ""
      )
    );

  // シートへ最後にまとめて書き込むため、
  // 写真情報を一度配列へためる
  const photoRows = [];

  const savedPhotos = [];

  photoDataList.forEach(
    (photoData, index) => {
      const blob =
        createCustomerPhotoBlob_(
          photoData
        );

      const file =
        customerFolder.createFile(
          blob
        );

      // 最初に取得した番号を基準に、
      // 写真ごとの連番を作る
      const photoId =
        "PH" +
        String(
          firstPhotoNumber +
            index
        ).padStart(
          5,
          "0"
        );

      // Drive情報も1回ずつ取得して使い回す
      const fileId =
        file.getId();

      const photoUrl =
        file.getUrl();

      const fileName =
        file.getName();

      const registeredAt =
        new Date();

      photoRows.push([
        photoId,
        customerId,
        fileId,
        photoUrl,
        fileName,
        registeredAt,
        "有効",
      ]);

      savedPhotos.push({
        photoId,
        customerId,
        fileId,
        photoUrl,
        fileName,
      });
    }
  );

  // 写真枚数分の行を1回でまとめて書き込む
  const startRow =
    photoSheet.getLastRow() +
    1;

  photoSheet
    .getRange(
      startRow,
      1,
      photoRows.length,
      7
    )
    .setValues(
      photoRows
    );

  return savedPhotos;
}


/**
 * 指定した顧客の保存済み写真を取得する
 */
function getCustomerPhotos(
  customerId
) {
  const photoSheet =
    getCustomerPhotoSheet_();

  const spreadsheet =
    SpreadsheetApp.openById(
      CRM_SPREADSHEET_ID
    );

  const customerSheet =
    spreadsheet.getSheetByName(
      "顧客マスタ"
    );

  const customerRow =
    findCustomerRow_(
      customerSheet,
      customerId
    );

  const representativePhotoUrl =
    customerRow
      ? customerSheet
          .getRange(
            customerRow,
            6
          )
          .getDisplayValue()
          .trim()
      : "";

  const values =
    photoSheet
      .getDataRange()
      .getDisplayValues();

  if (values.length <= 1) {
    return [];
  }

  return values
    .slice(1)
    .filter((row) => {
      return (
        row[1].trim() ===
          customerId &&
        row[6].trim() !==
          "無効"
      );
    })
    .map((row) => {
      const fileId =
        row[2].trim();

      const photoUrl =
        row[3].trim();

      return {
        photoId:
          row[0].trim(),

        customerId:
          row[1].trim(),

        fileId,

        photoUrl,

        fileName:
          row[4].trim(),

        registeredAt:
          row[5],

        isRepresentative:
          photoUrl ===
          representativePhotoUrl,

        previewUrl:
          createPhotoPreviewDataUrl_(
            fileId
          ),
      };
    });
}


/**
 * 既存顧客へ写真を追加する
 */
function addCustomerPhotos(
  customerId,
  photoDataList
) {
  const lock =
    LockService.getScriptLock();

  lock.waitLock(
    30000
  );

  try {
    const savedPhotos =
      saveCustomerPhotos_(
        customerId,
        photoDataList
      );

    const spreadsheet =
      SpreadsheetApp.openById(
        CRM_SPREADSHEET_ID
      );

    const customerSheet =
      spreadsheet.getSheetByName(
        "顧客マスタ"
      );

    const customerRow =
      findCustomerRow_(
        customerSheet,
        customerId
      );

    if (!customerRow) {
      throw new Error(
        "対象の顧客が見つかりません。"
      );
    }

    const currentPhotoUrl =
      customerSheet
        .getRange(
          customerRow,
          6
        )
        .getDisplayValue()
        .trim();

    // 写真未登録なら、
    // 最初の追加写真を自動で代表写真にする
    if (
      !currentPhotoUrl &&
      savedPhotos.length > 0
    ) {
      updateCustomerRepresentativePhoto_(
        customerId,
        savedPhotos[0].photoUrl
      );
    }

    return getCustomerPhotos(
      customerId
    );
  } finally {
    lock.releaseLock();
  }
}


/**
 * 代表写真を変更する
 */
function setRepresentativeCustomerPhoto(
  customerId,
  photoId
) {
  const lock =
    LockService.getScriptLock();

  lock.waitLock(
    30000
  );

  try {
    const photoSheet =
      getCustomerPhotoSheet_();

    const values =
      photoSheet
        .getDataRange()
        .getDisplayValues();

    const photoRow =
      values
        .slice(1)
        .find((row) => {
          return (
            row[0].trim() ===
              photoId &&
            row[1].trim() ===
              customerId &&
            row[6].trim() !==
              "無効"
          );
        });

    if (!photoRow) {
      throw new Error(
        "代表写真にする画像が見つかりません。"
      );
    }

    updateCustomerRepresentativePhoto_(
      customerId,
      photoRow[3].trim()
    );

    return getCustomerPhotos(
      customerId
    );
  } finally {
    lock.releaseLock();
  }
}


/**
 * 顧客写真を削除する
 */
function deleteCustomerPhoto(
  customerId,
  photoId
) {
  const lock =
    LockService.getScriptLock();

  lock.waitLock(
    30000
  );

  try {
    const photoSheet =
      getCustomerPhotoSheet_();

    const values =
      photoSheet
        .getDataRange()
        .getDisplayValues();

    let deletedSheetRow = 0;
    let deletedFileId = "";
    let deletedPhotoUrl = "";

    values
      .slice(1)
      .some(
        (row, index) => {
          if (
            row[0].trim() !==
              photoId ||
            row[1].trim() !==
              customerId ||
            row[6].trim() ===
              "無効"
          ) {
            return false;
          }

          deletedSheetRow =
            index + 2;

          deletedFileId =
            row[2].trim();

          deletedPhotoUrl =
            row[3].trim();

          return true;
        }
      );

    if (!deletedSheetRow) {
      throw new Error(
        "削除する写真が見つかりません。"
      );
    }

    const spreadsheet =
      SpreadsheetApp.openById(
        CRM_SPREADSHEET_ID
      );

    const customerSheet =
      spreadsheet.getSheetByName(
        "顧客マスタ"
      );

    const customerRow =
      findCustomerRow_(
        customerSheet,
        customerId
      );

    const currentRepresentativeUrl =
      customerRow
        ? customerSheet
            .getRange(
              customerRow,
              6
            )
            .getDisplayValue()
            .trim()
        : "";

    // シート上では無効として履歴を残す
    photoSheet
      .getRange(
        deletedSheetRow,
        7
      )
      .setValue(
        "無効"
      );

    // Drive上の実ファイルはゴミ箱へ移動する
    if (deletedFileId) {
      try {
        DriveApp
          .getFileById(
            deletedFileId
          )
          .setTrashed(
            true
          );
      } catch (error) {
        console.error(
          "Drive写真の削除に失敗しました:",
          error
        );
      }
    }

    // 代表写真を削除した場合は、
    // 残っている最初の写真を新しい代表にする
    if (
      currentRepresentativeUrl ===
      deletedPhotoUrl
    ) {
      const remainingPhoto =
        values
          .slice(1)
          .find((row) => {
            return (
              row[0].trim() !==
                photoId &&
              row[1].trim() ===
                customerId &&
              row[6].trim() !==
                "無効"
            );
          });

      updateCustomerRepresentativePhoto_(
        customerId,
        remainingPhoto
          ? remainingPhoto[3].trim()
          : ""
      );
    }

    return getCustomerPhotos(
      customerId
    );
  } finally {
    lock.releaseLock();
  }
}


/**
 * 新規顧客と初回来店をまとめて登録する
 */
function registerNewCustomer(
  customerData
) {
  const lock =
    LockService.getScriptLock();

  lock.waitLock(
    30000
  );

  try {
    const spreadsheet =
      SpreadsheetApp.openById(
        CRM_SPREADSHEET_ID
      );

    const customerSheet =
      spreadsheet.getSheetByName(
        "顧客マスタ"
      );

    const visitSheet =
      spreadsheet.getSheetByName(
        "来店履歴"
      );

    if (
      !customerSheet ||
      !visitSheet
    ) {
      throw new Error(
        "登録に必要なシートが見つかりません。"
      );
    }

    const name =
      String(
        customerData?.name || ""
      ).trim();

    const visitDate =
      String(
        customerData?.visitDate ||
          ""
      ).trim();

    if (!name) {
      throw new Error(
        "顧客名を入力してください。"
      );
    }

    if (!visitDate) {
      throw new Error(
        "来店日を入力してください。"
      );
    }

    const customerId =
      createNextId_(
        customerSheet,
        "MU"
      );

    const visitId =
      createNextId_(
        visitSheet,
        "VI"
      );

    const photos =
      Array.isArray(
        customerData?.photos
      )
        ? customerData.photos
        : [];

    const savedPhotos =
      saveCustomerPhotos_(
        customerId,
        photos
      );

    let representativePhotoUrl =
      "";

    if (savedPhotos.length > 0) {
      const requestedIndex =
        Number(
          customerData
            ?.representativePhotoIndex
        );

      const safeIndex =
        Number.isInteger(
          requestedIndex
        ) &&
        requestedIndex >= 0 &&
        requestedIndex <
          savedPhotos.length
          ? requestedIndex
          : 0;

      representativePhotoUrl =
        savedPhotos[
          safeIndex
        ].photoUrl;
    }

    const features =
      Array.isArray(
        customerData?.features
      )
        ? customerData.features
            .map((feature) => {
              return String(
                feature
              ).trim();
            })
            .filter(Boolean)
        : [];

    const registrationDate =
      Utilities.formatDate(
        new Date(),
        Session.getScriptTimeZone(),
        "yyyy-MM-dd"
      );

    const paymentAmount =
      Number(
        customerData
          ?.paymentAmount ||
          0
      );

    customerSheet.appendRow([
      customerId,
      name,
      registrationDate,
      String(
        customerData?.birthday ||
          ""
      ),
      String(
        customerData
          ?.staffMember ||
          ""
      ).trim(),
      representativePhotoUrl,
      features.join(","),
      String(
        customerData?.memo || ""
      ).trim(),
      "有効",
    ]);

    visitSheet.appendRow([
      visitId,
      customerId,
      visitDate,
      Number.isFinite(
        paymentAmount
      )
        ? paymentAmount
        : 0,
      String(
        customerData
          ?.staffMember ||
          ""
      ).trim(),
      "",
      new Date(),
      "有効",
    ]);

    return {
      customerId,
      visitId,
    };
  } finally {
    lock.releaseLock();
  }
}


/**
 * 顧客と来店履歴をまとめて取得できるか確認する
 */
function testGetInitialAppData() {
  const appData =
    getInitialAppData();

  console.log(
    JSON.stringify(
      appData,
      null,
      2
    )
  );
}


/**
 * getCustomersの動作確認用
 */
function testGetCustomers() {
  const customers =
    getCustomers();

  console.log(
    JSON.stringify(
      customers,
      null,
      2
    )
  );
}


/**
 * 顧客管理Webアプリの画面を表示する
 */
function doGet() {
  return HtmlService
    .createTemplateFromFile(
      "App"
    )
    .evaluate()
    .setTitle(
      "顧客管理Webアプリ"
    );
}


/**
 * GAS内のHTMLファイルを、
 * メイン画面へ読み込む
 */
function include(filename) {
  return HtmlService
    .createHtmlOutputFromFile(
      filename
    )
    .getContent();
}