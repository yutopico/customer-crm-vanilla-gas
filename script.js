// 通知エリア・通知ボタン・通知パネルを取得する
const notificationArea = document.querySelector(".notification-area");
const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector("#notification-panel");

// メニューエリア・メニューボタン・メニューパネルを取得する
const menuArea = document.querySelector(".menu-area");
const menuButton = document.querySelector(".menu-button");
const menuPanel = document.querySelector("#menu-panel");
const menuCloseButton = document.querySelector(".menu-close-button");

// 画面切り替えボタンと、アプリ内の各画面を取得する
const viewButtons = document.querySelectorAll("[data-view]");
const appViews = document.querySelectorAll(".app-view");

// 新規顧客登録フォームを取得する
const newCustomerForm = document.querySelector(
  "#new-customer-form"
);

// 来店日の入力欄を取得する
const visitDateInput = document.querySelector("#visit-date");

// 誕生日入力に使用する要素を取得する
const birthdayStatusInputs = document.querySelectorAll(
  'input[name="birthdayStatus"]'
);

const birthYearSelect = document.querySelector("#birth-year");
const birthMonthSelect = document.querySelector("#birth-month");
const birthDaySelect = document.querySelector("#birth-day");

// お客様の特徴を選択するボタンを取得する
const featureButtons = document.querySelectorAll(".feature-chip");

// 特徴の追加に使用する要素を取得する
const featureList = document.querySelector(".feature-list");
const customFeatureInput = document.querySelector("#custom-feature");
const featureAddButton = document.querySelector(".feature-add-button");

// 特徴タグの編集に使用する要素を取得する
const featureCard = document.querySelector(".feature-card");
const featureEditButton = document.querySelector(
  ".feature-edit-button"
);
const featureEditorBar = document.querySelector(
  ".feature-editor-bar"
);
const featureSelectedCount = document.querySelector(
  ".feature-selected-count"
);
const featureDeleteButton = document.querySelector(
  ".feature-delete-button"
);

// 特徴タグの重複警告に使用する要素を取得する
const featureDuplicateDialog = document.querySelector(
  "#feature-duplicate-dialog"
);

const featureDuplicateDialogButton = document.querySelector(
  ".feature-duplicate-dialog-button"
);

// 特徴タグの削除確認に使用する要素を取得する
const featureDeleteDialog = document.querySelector(
  "#feature-delete-dialog"
);

const featureDeleteDialogMessage = document.querySelector(
  ".feature-delete-dialog-message"
);

const featureDeleteDialogCancel = document.querySelector(
  ".feature-delete-dialog-cancel"
);

const featureDeleteDialogConfirm = document.querySelector(
  ".feature-delete-dialog-confirm"
);

// 新規顧客メモの入力欄を取得する
const newCustomerMemo = document.querySelector(
  "#new-customer-memo"
);

// 顧客写真のプレビューに使用する要素を取得する
const customerPhotoInput = document.querySelector(
  "#customer-photo"
);

const photoPreview = document.querySelector(
  ".photo-preview"
);

const photoPreviewPlaceholder = document.querySelector(
  ".photo-preview-placeholder"
);

const photoPreviewList = document.querySelector(
  ".photo-preview-list"
);

const photoRemoveButton = document.querySelector(
  ".photo-remove-button"
);

// 新規顧客の登録確認画面に使用する要素を取得する
const newCustomerConfirmDialog =document.querySelector(
  "#new-customer-confirm-dialog"
);

const newCustomerConfirmSummary =document.querySelector(
  "#new-customer-confirm-summary"
);

const newCustomerConfirmBack =document.querySelector(
  ".new-customer-confirm-back"
);

const newCustomerSubmitButton =document.querySelector(
  "#new-customer-submit-button"
);

const newCustomerConfirmMain =document.querySelector(
  ".new-customer-confirm-main"
);

const newCustomerConfirmRegister =document.querySelector(
  ".new-customer-confirm-register"
);

const newCustomerRegisterSuccess =document.querySelector(
  ".new-customer-register-success"
);

const newCustomerSuccessBack =document.querySelector(
  ".new-customer-success-back"
);

// 確認画面へ表示する入力欄を取得する
const customerNameInput = document.querySelector(
  "#customer-name"
);

const paymentAmountInput = document.querySelector(
  "#payment-amount"
);

const staffMemberSelect = document.querySelector(
  "#staff-member"
);

// 通知パネルを閉じる共通処理
const closeNotificationPanel = () => {
  notificationPanel.classList.remove("notification-panel--open");
  notificationButton.setAttribute("aria-expanded", "false");
};

// メニューパネルを閉じる共通処理
const closeMenuPanel = () => {
  menuPanel.classList.remove("menu-panel--open");
  menuButton.setAttribute("aria-expanded", "false");

  // 背後のページのスクロールを再開する
  document.body.classList.remove("menu-open");
};

// 指定された画面だけを表示する共通処理
const showView = (viewName, scrollBehavior = "smooth") => {
  // data-viewの値に対応する画面を探す
  const nextView = document.querySelector(`#${viewName}-view`);

  // 対応する画面が見つからなければ処理を終了する
  if (!nextView) {
    return;
  }

  // すべての画面をいったん非表示にする
  appViews.forEach((view) => {
    view.classList.remove("app-view--active");
  });

  // 選択された画面だけを表示する
  nextView.classList.add("app-view--active");

  // 現在の画面を、このタブが開いている間だけ記憶する
  sessionStorage.setItem("currentView", viewName);

  // 切り替え後は画面の先頭へ移動する
  window.scrollTo({
    top: 0,
    behavior: scrollBehavior,
  });
};

// 通知ボタンをクリックしたときにパネルの表示を切り替える
notificationButton.addEventListener("click", () => {
  const isOpen = notificationPanel.classList.toggle(
    "notification-panel--open"
  );

  // 支援技術にも現在の開閉状態を伝える
  notificationButton.setAttribute("aria-expanded", String(isOpen));

  // 通知を開いたときはメニューを閉じる
  if (isOpen) {
    closeMenuPanel();
  }
});

// メニューボタンをクリックしたときにパネルの表示を切り替える
menuButton.addEventListener("click", () => {
  // メニューボタンの画面上の位置と大きさを取得する
  const buttonRect = menuButton.getBoundingClientRect();

  // ボタンの中心位置を開くアニメーションの起点にする
  const originX = buttonRect.left + buttonRect.width / 2;
  const originY = buttonRect.top + buttonRect.height / 2;

  menuPanel.style.setProperty("--menu-origin-x", `${originX}px`);
  menuPanel.style.setProperty("--menu-origin-y", `${originY}px`);

  // メニューパネルの開閉状態を切り替える
  const isOpen = menuPanel.classList.toggle("menu-panel--open");

  // 支援技術にも現在の開閉状態を伝える
  menuButton.setAttribute("aria-expanded", String(isOpen));

  // メニューを開いたときは通知を閉じる
  if (isOpen) {
    closeNotificationPanel();

    // 全画面メニュー表示中は背後のページを固定する
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
});

// closeボタンをクリックしたらメニューパネルを閉じる
menuCloseButton.addEventListener("click", () => {
  closeMenuPanel();

  // 収束アニメーションが終わってからメニューボタンへ戻す
  const returnFocusToMenuButton = (event) => {
    if (event.propertyName !== "clip-path") {
      return;
    }

    menuPanel.removeEventListener(
      "transitionend",
      returnFocusToMenuButton
    );

    menuButton.focus();
  };

  menuPanel.addEventListener(
    "transitionend",
    returnFocusToMenuButton
  );
});

// 各パネルの外側をクリックしたら閉じる
document.addEventListener("click", (event) => {
  const isOutsideNotificationArea = !notificationArea.contains(event.target);
  const isOutsideMenuArea = !menuArea.contains(event.target);

  if (isOutsideNotificationArea) {
    closeNotificationPanel();
  }

  if (isOutsideMenuArea) {
    closeMenuPanel();
  }
});

// Escキーを押したら開いているパネルを閉じる
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const isNotificationPanelOpen = notificationPanel.classList.contains(
    "notification-panel--open"
  );

  const isMenuPanelOpen = menuPanel.classList.contains(
    "menu-panel--open"
  );

  if (isNotificationPanelOpen) {
    closeNotificationPanel();

    // 閉じたあと、操作位置をベルボタンへ戻す
    notificationButton.focus();
  } else if (isMenuPanelOpen) {
    closeMenuPanel();

    // 閉じたあと、操作位置をメニューボタンへ戻す
    menuButton.focus();
  }
});

// data-viewを持つボタンで画面を切り替える
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // クリックされたボタンの移動先を取得する
    const targetView = button.dataset.view;

    // 全画面メニューを閉じる
    closeMenuPanel();

    // 指定された画面へ切り替える
    showView(targetView);
  });
});

// ページを更新したとき、最後に表示していた画面を復元する
const savedView = sessionStorage.getItem("currentView") || "home";

// 保存されていた画面を、アニメーションなしで表示する
showView(savedView, "auto");

// 表示する画面が決まったため、アプリ全体を表示する
document.documentElement.classList.remove("app-loading");

// 来店日が未入力の場合、今日の日付を自動で設定する
const setTodayToVisitDate = () => {
  // 来店日の入力欄が存在しない、または入力済みなら何もしない
  if (!visitDateInput || visitDateInput.value) {
    return;
  }

  const today = new Date();

  // 年・月・日を「YYYY-MM-DD」の形式へ整える
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  visitDateInput.value = `${year}-${month}-${day}`;
};

// ページを表示したときに今日の日付を設定する
setTodayToVisitDate();

// セレクトボックスへ選択肢を追加する共通処理
const addSelectOptions = (selectElement, start, end) => {
  for (let number = start; number <= end; number += 1) {
    const option = document.createElement("option");

    option.value = String(number);
    option.textContent = String(number);

    selectElement.appendChild(option);
  }
};

// 誕生年を今年から1900年まで追加する
const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 1900; year -= 1) {
  const option = document.createElement("option");

  option.value = String(year);
  option.textContent = String(year);

  birthYearSelect.appendChild(option);
}

// 誕生月と誕生日の選択肢を追加する
addSelectOptions(birthMonthSelect, 1, 12);
addSelectOptions(birthDaySelect, 1, 31);

// 「不明」の選択状態に合わせて入力欄を切り替える
const updateBirthdayInputs = () => {
  const selectedStatus = document.querySelector(
    'input[name="birthdayStatus"]:checked'
  );

  const isUnknown = selectedStatus?.value === "unknown";

  birthYearSelect.disabled = isUnknown;
  birthMonthSelect.disabled = isUnknown;
  birthDaySelect.disabled = isUnknown;

  if (isUnknown) {
    birthYearSelect.value = "";
    birthMonthSelect.value = "";
    birthDaySelect.value = "";
  }
};

// ラジオボタンが変更されたときに入力状態を更新する
birthdayStatusInputs.forEach((input) => {
  input.addEventListener("change", updateBirthdayInputs);
});

// ページ読み込み時の状態を反映する
updateBirthdayInputs();

// 特徴タグが編集モードかどうかを記録する
let isFeatureEditMode = false;

// 削除確認中の特徴タグを一時的に記録する
let pendingDeleteFeatureButtons = [];

// 編集対象として選択されているタグを取得する
const getSelectedEditFeatureButtons = () => {
  return featureList.querySelectorAll(
    ".feature-chip--edit-selected"
  );
};

// 編集中の選択件数と削除ボタンを更新する
const updateFeatureEditor = () => {
  const selectedButtons = getSelectedEditFeatureButtons();
  const selectedCount = selectedButtons.length;

  featureSelectedCount.textContent = String(selectedCount);
  featureDeleteButton.disabled = selectedCount === 0;
};

// 編集対象の選択状態をすべて解除する
const clearFeatureEditSelection = () => {
  const selectedButtons = getSelectedEditFeatureButtons();

  selectedButtons.forEach((button) => {
    button.classList.remove("feature-chip--edit-selected");
  });

  updateFeatureEditor();
};

// 顧客へ登録する特徴の選択状態を切り替える
const toggleFeatureButton = (button) => {
  const isSelected = button.classList.toggle(
    "feature-chip--selected"
  );

  // 支援技術にも選択状態を伝える
  button.setAttribute("aria-pressed", String(isSelected));
};

// 編集モード中に削除対象を選択する
const toggleFeatureEditSelection = (button) => {
  button.classList.toggle("feature-chip--edit-selected");

  updateFeatureEditor();
};

// 特徴タグに表示されている名前を取得する
const getFeatureButtonName = (button) => {
  const label = button.querySelector(".feature-chip-label");

  if (label) {
    return label.textContent.trim();
  }

  return button.textContent.trim();
};

// 特徴タグの文字と編集アイコンを分ける
const prepareFeatureButton = (button) => {
  // すでに準備済みの場合は何もしない
  if (button.querySelector(".feature-chip-label")) {
    return;
  }

  const featureName = button.textContent.trim();

  const label = document.createElement("span");
  label.className = "feature-chip-label";
  label.textContent = featureName;

  const editIcon = document.createElement("span");
  editIcon.className = "feature-chip-edit-icon";
  editIcon.textContent = "✎";
  editIcon.setAttribute("aria-hidden", "true");

  button.textContent = "";
  button.append(label, editIcon);
};

// 特徴タグを入力欄へ切り替え、名前をその場で編集する
const startFeatureRename = (button) => {
  const originalName = getFeatureButtonName(button);
  const buttonWidth = button.getBoundingClientRect().width;

  // 編集用の入力欄を作成する
  const renameInput = document.createElement("input");

  renameInput.className = "feature-chip-inline-input";
  renameInput.type = "text";
  renameInput.value = originalName;
  renameInput.setAttribute(
    "aria-label",
    `${originalName}のタグ名を変更`
  );

  // 編集前のタグと近い横幅にする
  renameInput.style.width =
    `${Math.max(buttonWidth, 112)}px`;

  let isFinished = false;
  let isDuplicateAlertOpen = false;

  // 入力内容を保存またはキャンセルする
  const finishRename = (shouldSave) => {
    if (isFinished || isDuplicateAlertOpen) {
      return;
    }

    const enteredName = renameInput.value.trim();

    // キャンセル時や空欄の場合は元の名前へ戻す
    const nextName =
      shouldSave && enteredName
        ? enteredName
        : originalName;

    // 同じ名前のタグが存在するか確認する
    const duplicateButton = Array.from(
      featureList.querySelectorAll(".feature-chip")
    ).find((featureButton) => {
      return (
        getFeatureButtonName(featureButton).toLowerCase() ===
        nextName.toLowerCase()
      );
    });

    if (shouldSave && duplicateButton) {
      // blurによる保存処理が重ならないよう記録する
      isDuplicateAlertOpen = true;

      // オリジナル警告を表示する
      featureDuplicateDialog.hidden = false;

      // 警告を開いたらボタンへ操作位置を移す
      featureDuplicateDialogButton.focus();

      // 「入力に戻る」を押したときの処理
      const returnToRenameInput = () => {
        featureDuplicateDialog.hidden = true;
        isDuplicateAlertOpen = false;

        renameInput.focus();
        renameInput.select();
      };

      featureDuplicateDialogButton.addEventListener(
        "click",
        returnToRenameInput,
        { once: true }
      );

      return;
    }

    isFinished = true;

    // 元のタグへ新しい名前を反映する
    const label = button.querySelector(
      ".feature-chip-label"
    );

    label.textContent = nextName;

    // 入力欄を元のタグへ戻す
    renameInput.replaceWith(button);
    button.focus();
  };

  // Enterで変更を保存する
  renameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finishRename(true);
    }

    // Escで変更を取り消す
    if (event.key === "Escape") {
      event.preventDefault();
      finishRename(false);
    }
  });

  // 入力欄の外へ移動したときも保存する
  renameInput.addEventListener("blur", (event) => {
    // 「編集を完了」を押した場合は、変更を保存せず元の名前へ戻す
    const isClosingEditMode =
      event.relatedTarget === featureEditButton;

    finishRename(!isClosingEditMode);
  });

  // タグを入力欄へ置き換える
  button.replaceWith(renameInput);

  renameInput.focus();
  renameInput.select();
};

// 特徴タグへクリック処理を登録する
const addFeatureButtonEvent = (button) => {
  // タグの文字と鉛筆アイコンを準備する
  prepareFeatureButton(button);

  button.addEventListener("click", (event) => {
    if (isFeatureEditMode) {
      // 鉛筆を押した場合はタグ名を編集する
      const clickedEditIcon = event.target.closest(
        ".feature-chip-edit-icon"
      );

      if (clickedEditIcon) {
        startFeatureRename(button);
        return;
      }

      // タグ本体を押した場合は削除対象へ追加する
      toggleFeatureEditSelection(button);
      return;
    }

    // 通常時は顧客へ登録する特徴を選択する
    toggleFeatureButton(button);
  });

  // 編集モード中はEnterキーでも名前を変更できる
  button.addEventListener("keydown", (event) => {
    if (
      !isFeatureEditMode ||
      event.key !== "Enter"
    ) {
      return;
    }

    event.preventDefault();
    startFeatureRename(button);
  });
};

// 最初から表示されている特徴タグへ処理を登録する
featureButtons.forEach((button) => {
  addFeatureButtonEvent(button);
});

// 特徴タグの編集モードを切り替える
const setFeatureEditMode = (isEditing) => {
  isFeatureEditMode = isEditing;

  featureCard.classList.toggle(
    "feature-card--editing",
    isEditing
  );

  featureEditorBar.hidden = !isEditing;

  featureEditButton.textContent = isEditing
    ? "編集を完了"
    : "タグを編集";

  featureEditButton.setAttribute(
    "aria-expanded",
    String(isEditing)
  );

  // 編集を終了したら、削除対象の選択状態を解除する
  if (!isEditing) {
    clearFeatureEditSelection();
  } else {
    updateFeatureEditor();
  }
};

// 編集ボタンをクリックしたとき
featureEditButton.addEventListener("click", () => {
  setFeatureEditMode(!isFeatureEditMode);
});

// 選択した特徴タグの削除確認を表示する
featureDeleteButton.addEventListener("click", () => {
  // 現在選択されているタグを削除予定として記録する
  pendingDeleteFeatureButtons = Array.from(
    getSelectedEditFeatureButtons()
  );

  if (pendingDeleteFeatureButtons.length === 0) {
    return;
  }

  // 選択件数を確認画面へ表示する
  featureDeleteDialogMessage.textContent =
    `${pendingDeleteFeatureButtons.length}件の特徴タグを削除します。`;

  // オリジナルの削除確認を表示する
  featureDeleteDialog.hidden = false;

  // 最初はキャンセルボタンへ操作位置を移す
  featureDeleteDialogCancel.focus();
});

// キャンセルを押した場合は削除せず閉じる
featureDeleteDialogCancel.addEventListener("click", () => {
  featureDeleteDialog.hidden = true;
  pendingDeleteFeatureButtons = [];

  featureDeleteButton.focus();
});

// 「削除する」を押した場合は選択中のタグを削除する
featureDeleteDialogConfirm.addEventListener("click", () => {
  pendingDeleteFeatureButtons.forEach((button) => {
    button.remove();
  });

  pendingDeleteFeatureButtons = [];
  featureDeleteDialog.hidden = true;

  // 選択件数と削除ボタンの状態を更新する
  updateFeatureEditor();

  // 削除後は編集ボタンへ操作位置を戻す
  featureEditButton.focus();
});

// 入力された特徴を新しいタグとして追加する
const addCustomFeature = () => {
  // 入力欄の前後にある余分な空白を取り除く
  const featureName = customFeatureInput.value.trim();

  // 何も入力されていない場合は追加しない
  if (!featureName) {
    customFeatureInput.focus();
    return;
  }

  // 現在表示されている特徴タグを取得する
  const currentFeatureButtons = featureList.querySelectorAll(
    ".feature-chip"
  );

  // 同じ名前の特徴がすでに存在するか確認する
  const existingButton = Array.from(currentFeatureButtons).find(
    (button) => {
      return (
        getFeatureButtonName(button).toLowerCase() ===
        featureName.toLowerCase()
      );
    }
  );

  // 同じ特徴がある場合は、新しく作らず選択状態にする
  if (existingButton) {
    existingButton.classList.add("feature-chip--selected");
    existingButton.setAttribute("aria-pressed", "true");

    customFeatureInput.value = "";
    existingButton.focus();

    return;
  }

  // 新しい特徴タグを作成する
  const newFeatureButton = document.createElement("button");

  newFeatureButton.className =
    "feature-chip feature-chip--selected";

  newFeatureButton.type = "button";
  newFeatureButton.textContent = featureName;
  newFeatureButton.setAttribute("aria-pressed", "true");

  // 新しく作ったタグにも選択切り替え機能を付ける
  addFeatureButtonEvent(newFeatureButton);

  // 特徴一覧の最後へ追加する
  featureList.appendChild(newFeatureButton);

  // 入力欄を空にして、次の入力へ備える
  customFeatureInput.value = "";
  customFeatureInput.focus();
};

// 追加ボタンをクリックしたとき
featureAddButton.addEventListener("click", addCustomFeature);

// 入力欄でEnterキーを押したときも追加する
customFeatureInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  // フォーム全体が送信されるのを防ぐ
  event.preventDefault();

  addCustomFeature();
});

// 新規顧客メモを入力内容に合わせて伸び縮みさせる
const resizeNewCustomerMemo = () => {
  // 文字を削除したときにも縮められるよう、一度高さを解除する
  newCustomerMemo.style.height = "auto";

  // 入力内容全体が収まる高さを設定する
  newCustomerMemo.style.height =
    `${newCustomerMemo.scrollHeight}px`;
};

// メモを入力するたびに高さを調整する
newCustomerMemo.addEventListener(
  "input",
  resizeNewCustomerMemo
);

// ページ表示時にも現在の内容に合わせる
resizeNewCustomerMemo();

// 現在選択されている顧客写真を記録する
let customerPhotoFiles = [];

// プレビュー表示用に作成したURLを記録する
let customerPhotoPreviewUrls = [];

// 2つの写真ファイルが同じものか確認する
const isSameCustomerPhoto = (firstFile, secondFile) => {
  return (
    firstFile.name === secondFile.name &&
    firstFile.size === secondFile.size &&
    firstFile.lastModified === secondFile.lastModified
  );
};

// 写真一覧をファイル入力欄へ反映する
const syncCustomerPhotoInput = () => {
  const dataTransfer = new DataTransfer();

  customerPhotoFiles.forEach((file) => {
    dataTransfer.items.add(file);
  });

  customerPhotoInput.files = dataTransfer.files;
};

// 古いプレビューURLを解放する
const clearCustomerPhotoPreviewUrls = () => {
  customerPhotoPreviewUrls.forEach((previewUrl) => {
    URL.revokeObjectURL(previewUrl);
  });

  customerPhotoPreviewUrls = [];
};

// 選択されている写真をプレビューへ表示する
const renderCustomerPhotoPreviews = () => {
  // 前回のプレビューURLと表示内容を削除する
  clearCustomerPhotoPreviewUrls();
  photoPreviewList.replaceChildren();

  // 写真がない場合は未選択表示へ戻す
  if (customerPhotoFiles.length === 0) {
    photoPreviewPlaceholder.hidden = false;
    photoPreviewPlaceholder.style.display = "";

    photoRemoveButton.hidden = true;

    return;
  }

  // 写真がある場合は未選択表示を隠す
  photoPreviewPlaceholder.hidden = true;
  photoPreviewPlaceholder.style.display = "none";

  // 写真の枚数に合わせて削除ボタンの文字を変更する
  photoRemoveButton.textContent =
    customerPhotoFiles.length === 1
      ? "写真を削除"
      : "写真をすべて削除";

  photoRemoveButton.hidden = false;

  customerPhotoFiles.forEach((file, index) => {
    // 写真1枚分の領域を作る
    const previewItem = document.createElement("div");

    previewItem.className = "photo-preview-item";

    // 写真を表示する要素を作る
    const previewImage = document.createElement("img");
    const previewUrl = URL.createObjectURL(file);

    customerPhotoPreviewUrls.push(previewUrl);

    previewImage.className = "photo-preview-image";
    previewImage.src = previewUrl;
    previewImage.alt =
      `選択した顧客写真 ${index + 1}枚目`;

    // 1枚だけ削除するボタンを作る
    const removeButton = document.createElement("button");

    removeButton.className =
      "photo-preview-item-remove";

    removeButton.type = "button";
    removeButton.textContent = "×";

    removeButton.setAttribute(
      "aria-label",
      `${index + 1}枚目の写真を削除`
    );

    // 個別削除ボタンを押したとき
    removeButton.addEventListener("click", () => {
      customerPhotoFiles.splice(index, 1);

      syncCustomerPhotoInput();
      renderCustomerPhotoPreviews();
    });

    previewItem.append(
      previewImage,
      removeButton
    );

    photoPreviewList.appendChild(
      previewItem
    );
  });
};

// 新しく選択された写真を一覧へ追加する
const addCustomerPhotoFiles = (files) => {
  // 画像ファイルだけを取り出す
  const imageFiles = Array.from(files).filter(
    (file) => file.type.startsWith("image/")
  );

  imageFiles.forEach((file) => {
    // 同じ写真がすでに登録されているか確認する
    const alreadyExists =
      customerPhotoFiles.some((currentFile) => {
        return isSameCustomerPhoto(
          currentFile,
          file
        );
      });

    // 同じ写真でなければ一覧へ追加する
    if (!alreadyExists) {
      customerPhotoFiles.push(file);
    }
  });

  syncCustomerPhotoInput();
  renderCustomerPhotoPreviews();
};

// ファイル選択画面から写真を選んだとき
customerPhotoInput.addEventListener(
  "change",
  () => {
    addCustomerPhotoFiles(
      customerPhotoInput.files
    );
  }
);

// 「写真をすべて削除」を押したとき
photoRemoveButton.addEventListener(
  "click",
  () => {
    customerPhotoFiles = [];

    syncCustomerPhotoInput();
    renderCustomerPhotoPreviews();
  }
);

// ドラッグ中のブラウザ標準動作を止める
const preventPhotoDragDefault = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

// 写真を枠へ重ねたとき
photoPreview.addEventListener(
  "dragenter",
  (event) => {
    preventPhotoDragDefault(event);

    photoPreview.classList.add(
      "photo-preview--dragging"
    );
  }
);

// 写真を枠の上で動かしているとき
photoPreview.addEventListener(
  "dragover",
  (event) => {
    preventPhotoDragDefault(event);

    event.dataTransfer.dropEffect = "copy";

    photoPreview.classList.add(
      "photo-preview--dragging"
    );
  }
);

// 写真が枠から離れたとき
photoPreview.addEventListener(
  "dragleave",
  (event) => {
    preventPhotoDragDefault(event);

    // 枠内の別要素へ移動しただけなら解除しない
    if (
      event.relatedTarget &&
      photoPreview.contains(event.relatedTarget)
    ) {
      return;
    }

    photoPreview.classList.remove(
      "photo-preview--dragging"
    );
  }
);

// 複数の写真を枠へドロップしたとき
photoPreview.addEventListener(
  "drop",
  (event) => {
    preventPhotoDragDefault(event);

    photoPreview.classList.remove(
      "photo-preview--dragging"
    );

    addCustomerPhotoFiles(
      event.dataTransfer.files
    );
  }
);

// YYYY-MM-DD形式の日付を日本語表示へ変換する
const formatCustomerDate = (dateValue) => {
  if (!dateValue) {
    return "未入力";
  }

  const [year, month, day] =
    dateValue.split("-");

  return (
    `${year}年` +
    `${Number(month)}月` +
    `${Number(day)}日`
  );
};

// 確認画面へ表示する1項目を作成する
const createCustomerConfirmItem = (
  label,
  value
) => {
  const item = document.createElement("div");
  const term = document.createElement("dt");
  const description =
    document.createElement("dd");

  item.className =
    "new-customer-confirm-item";

  term.textContent = label;
  description.textContent = value;

  item.append(term, description);

  return item;
};

// 入力内容を確認画面へ表示する
const renderNewCustomerConfirmSummary = () => {
  const confirmList =
    document.createElement("dl");

  confirmList.className =
    "new-customer-confirm-list";

  // 誕生日の表示内容を作る
  const birthdayStatus =
    document.querySelector(
      'input[name="birthdayStatus"]:checked'
    )?.value;

  let birthdayText = "未入力";

  if (birthdayStatus === "unknown") {
    birthdayText = "不明";
  } else if (
    birthYearSelect.value &&
    birthMonthSelect.value &&
    birthDaySelect.value
  ) {
    birthdayText =
      `${birthYearSelect.value}年` +
      `${Number(birthMonthSelect.value)}月` +
      `${Number(birthDaySelect.value)}日`;
  }

  // 選択されている特徴タグを取得する
  const selectedFeatureNames = Array.from(
    featureList.querySelectorAll(
      ".feature-chip--selected"
    )
  ).map((button) => {
    return getFeatureButtonName(button);
  });

  const featureText =
    selectedFeatureNames.length > 0
      ? selectedFeatureNames.join("、")
      : "なし";

  // 会計金額をカンマ付きで表示する
  const paymentText =
    paymentAmountInput.value === ""
      ? "未入力"
      : `${Number(
          paymentAmountInput.value
        ).toLocaleString("ja-JP")}円`;

  // 選択中のスタッフ名を取得する
  const staffText =
    staffMemberSelect.selectedOptions[0]
      ?.textContent.trim() || "未選択";

  // メモが空欄の場合は「なし」と表示する
  const memoText =
    newCustomerMemo.value.trim() || "なし";

  confirmList.append(
    createCustomerConfirmItem(
      "顧客名",
      customerNameInput.value.trim()
    ),
    createCustomerConfirmItem(
      "来店日",
      formatCustomerDate(
        visitDateInput.value
      )
    ),
    createCustomerConfirmItem(
      "誕生日",
      birthdayText
    ),
    createCustomerConfirmItem(
      "特徴",
      featureText
    ),
    createCustomerConfirmItem(
      "会計金額",
      paymentText
    ),
    createCustomerConfirmItem(
      "担当スタッフ",
      staffText
    ),
    createCustomerConfirmItem(
      "新規顧客メモ",
      memoText
    ),
    createCustomerConfirmItem(
      "顧客写真",
      `${customerPhotoFiles.length}枚`
    )
  );

  newCustomerConfirmSummary.replaceChildren(
    confirmList
  );
};

// 新規顧客の登録確認画面を開く
const openNewCustomerConfirmDialog = () => {
  newCustomerConfirmMain.hidden = false;
  newCustomerRegisterSuccess.hidden = true;

  // 現在の入力内容を確認画面へ反映する
  renderNewCustomerConfirmSummary();

  newCustomerConfirmDialog.hidden = false;

  document.body.classList.add(
    "confirm-dialog-open"
  );

  newCustomerConfirmBack.focus();
};

// 新規顧客の登録確認画面を閉じる
const closeNewCustomerConfirmDialog = () => {
  newCustomerConfirmDialog.hidden = true;

  document.body.classList.remove(
    "confirm-dialog-open"
  );

  newCustomerSubmitButton.focus();
};

// 必須項目を通過したあと、登録確認画面を開く
newCustomerForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    openNewCustomerConfirmDialog();
  }
);

// 「戻って修正」を押したとき
newCustomerConfirmBack.addEventListener(
  "click",
  closeNewCustomerConfirmDialog
);

// 確認画面の「登録する」を押したとき
newCustomerConfirmRegister.addEventListener(
  "click",
  () => {
    // 登録処理中の表示へ切り替える
    newCustomerConfirmRegister.disabled = true;
    newCustomerConfirmRegister.textContent =
      "登録中...";

    // 現段階では通信を想定した仮処理
    setTimeout(() => {
      newCustomerConfirmMain.hidden = true;
      newCustomerRegisterSuccess.hidden = false;

      newCustomerConfirmRegister.disabled = false;
      newCustomerConfirmRegister.textContent =
        "登録する";

      newCustomerSuccessBack.focus();
    }, 900);
  }
);

// 新規顧客フォームを初期状態へ戻す
const resetNewCustomerForm = () => {
  // 通常の入力欄・選択欄を初期化する
  newCustomerForm.reset();

  // 選択されている特徴タグをすべて解除する
  featureList
    .querySelectorAll(".feature-chip")
    .forEach((button) => {
      button.classList.remove(
        "feature-chip--selected",
        "feature-chip--edit-selected"
      );

      button.setAttribute(
        "aria-pressed",
        "false"
      );
    });

  // 特徴タグの編集モードも終了する
  setFeatureEditMode(false);

  // 選択されている顧客写真をすべて解除する
  customerPhotoFiles = [];

  syncCustomerPhotoInput();
  renderCustomerPhotoPreviews();

  // 誕生日欄を初期状態へ戻す
  updateBirthdayInputs();

  // 来店日に今日の日付を設定する
  setTodayToVisitDate();

  // メモ欄を最初の2行分へ縮める
  resizeNewCustomerMemo();
};

// 登録完了画面から初期化した入力画面へ戻る
newCustomerSuccessBack.addEventListener(
  "click",
  () => {
    resetNewCustomerForm();
    closeNewCustomerConfirmDialog();

    // 新しい顧客を続けて入力しやすいよう画面上部へ戻す
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // 顧客名の入力欄へ操作位置を移す
    customerNameInput.focus({
      preventScroll: true
    });
  }
);

// ページを閉じる前にプレビューURLを解放する
window.addEventListener(
  "beforeunload",
  clearCustomerPhotoPreviewUrls
);