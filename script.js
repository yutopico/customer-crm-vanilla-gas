// 通知エリア・通知ボタン・通知パネルを取得する
const notificationArea = document.querySelector(".notification-area");
const notificationButton = document.querySelector(".notification-button");
const notificationPanel = document.querySelector("#notification-panel");

// 通知パネルを閉じる共通処理
const closeNotificationPanel = () => {
  notificationPanel.classList.remove("notification-panel--open");
  notificationButton.setAttribute("aria-expanded", "false");
};

// 通知ボタンをクリックしたときにパネルの表示を切り替える
notificationButton.addEventListener("click", () => {
  const isOpen = notificationPanel.classList.toggle(
    "notification-panel--open"
  );

  // 支援技術にも現在の開閉状態を伝える
  notificationButton.setAttribute("aria-expanded", String(isOpen));
});

// 通知エリアの外側をクリックしたらパネルを閉じる
document.addEventListener("click", (event) => {
  const isOutsideNotificationArea = !notificationArea.contains(event.target);

  if (isOutsideNotificationArea) {
    closeNotificationPanel();
  }
});

// Escキーを押したらパネルを閉じる
document.addEventListener("keydown", (event) => {
  const isPanelOpen = notificationPanel.classList.contains(
    "notification-panel--open"
  );

  if (event.key === "Escape" && isPanelOpen) {
    closeNotificationPanel();

    // 閉じたあと、操作位置をベルボタンへ戻す
    notificationButton.focus();
  }
});