// 通知エリア・通知ボタン・通知パネルを取得する
const notificationArea = document.querySelector(".notification-area");
const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector("#notification-panel");

// メニューエリア・メニューボタン・メニューパネルを取得する
const menuArea = document.querySelector(".menu-area");
const menuButton = document.querySelector(".menu-button");
const menuPanel = document.querySelector("#menu-panel");

// 通知パネルを閉じる共通処理
const closeNotificationPanel = () => {
  notificationPanel.classList.remove("notification-panel--open");
  notificationButton.setAttribute("aria-expanded", "false");
};

// メニューパネルを閉じる共通処理
const closeMenuPanel = () => {
  menuPanel.classList.remove("menu-panel--open");
  menuButton.setAttribute("aria-expanded", "false");
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
  const isOpen = menuPanel.classList.toggle("menu-panel--open");

  // 支援技術にも現在の開閉状態を伝える
  menuButton.setAttribute("aria-expanded", String(isOpen));

  // メニューを開いたときは通知を閉じる
  if (isOpen) {
    closeNotificationPanel();
  }
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