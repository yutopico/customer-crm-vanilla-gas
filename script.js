// 通知エリア・通知ボタン・通知パネルを取得する
const notificationArea = document.querySelector(".notification-area");
const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector("#notification-panel");

// メニューエリア・メニューボタン・メニューパネルを取得する
const menuArea = document.querySelector(".menu-area");
const menuButton = document.querySelector(".menu-button");
const menuPanel = document.querySelector("#menu-panel");
const menuCloseButton = document.querySelector(".menu-close-button");

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