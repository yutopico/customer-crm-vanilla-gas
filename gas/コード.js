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