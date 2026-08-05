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

// 画面に合わせて変更するヘッダー文字を取得する
const brandTitle = document.querySelector(".brand-text h1");
const brandDescription = document.querySelector(".brand-text p");

// ホーム画面のAIサマリー表示先を取得する
const homeAiSummaryList =
  document.querySelector(
    "#home-ai-summary-list"
  );

// お知らせの件数と一覧の表示先を取得する
const notificationBadge =
  document.querySelector(
    "#notification-badge"
  );

const notificationPanelCount =
  document.querySelector(
    "#notification-panel-count"
  );

const notificationList =
  document.querySelector(
    "#notification-list"
  );

// ホーム画面のやることボタンを取得する
const homeTodoActionButtons =
  document.querySelectorAll(
    "[data-home-todo-action]"
  );

// ホーム画面のお客様一覧ボタンを取得する
const homeCustomerListButtons =
  document.querySelectorAll(
    "[data-home-customer-list-action]"
  );

// やることカードの人数表示先を取得する
const homeTodoPhotoCount =
  document.querySelector(
    "#home-todo-photo-count"
  );

const homeTodoBirthdayCount =
  document.querySelector(
    "#home-todo-birthday-count"
  );

const homeTodoMemoCount =
  document.querySelector(
    "#home-todo-memo-count"
  );

const homeTodoFeaturesCount =
  document.querySelector(
    "#home-todo-features-count"
  );

// 各画面のヘッダーに表示するタイトルと説明文
const viewHeaderSettings = {
  home: {
    title: "顧客管理",
    description: "顧客情報を、もっとスマートに。",
  },

  "visit-registration": {
    title: "来店を登録",
    description: "お客様の種類を選んでください。",
  },

  "new-customer": {
    title: "新規顧客",
    description: "初めて来店するお客様を登録します。",
  },

  "regular-customer": {
    title: "常連顧客",
    description: "登録済みのお客様を検索して、来店情報を追加します。",
  },

  "customer-search": {
    title: "顧客検索",
    description: "お客様を検索して、登録情報や来店履歴を確認できます。",
  },

  summary: {
    title: "サマリー",
    description: "お店全体の状況をまとめて確認できます。",
  },

  "customer-detail": {
    title: "顧客詳細",
    description: "お客様の基本情報や来店履歴、売上情報を確認できます。",
  },
};

// 下部ナビゲーションの各ボタンを取得する
const bottomNavItems = document.querySelectorAll(".bottom-nav-item[data-view]");

// 顧客検索画面に使用する要素を取得する
const customerSearchInput = document.querySelector("#customer-search-input");
const customerSearchClearButton = document.querySelector(".customer-search-clear-button");
const customerSearchResultCards = document.querySelectorAll(".customer-search-result-card");
const customerSearchResultOpenButtons = document.querySelectorAll(".customer-search-result-open");
const customerSearchResultCount = document.querySelector("#customer-search-result-count");
const customerSearchEmptyState = document.querySelector("#customer-search-empty-state");
const customerSearchResetButton = document.querySelector(".customer-search-reset-button");
const customerSearchLoadMoreButton = document.querySelector("#customer-search-load-more");
const customerSearchLoading = document.querySelector("#customer-search-loading");
const customerSearchScrollTopButton = document.querySelector(".customer-search-scroll-top");

// クイックフィルターに使用する要素を取得する
const customerQuickFilterButtons = document.querySelectorAll(".customer-quick-filter");
const customerBirthdayQuickFilterButton = document.querySelector('[data-quick-filter="birthday"]');

// 現在選択しているクイックフィルター
let activeCustomerQuickFilter = "all";

// 誕生日フィルターで表示する月
let activeCustomerBirthdayFilterMonth = null;

// 顧客検索結果の並び替えに使用する要素を取得する
const customerSearchResultList = document.querySelector("#customer-search-result-list");
const customerSearchViewButtons = document.querySelectorAll(".customer-search-view-button");
const customerSearchResultViewStorageKey = "customerCrmResultView";
const customerSearchSortInputs = document.querySelectorAll('input[name="customerSearchSort"]');
const customerSearchMobileSortInputs = document.querySelectorAll('input[name="customerSearchSortMobile"]');
const customerSearchMobileSortButton = document.querySelector("#customer-search-mobile-sort-button");
const customerSearchSortPanel = document.querySelector("#customer-search-sort-panel");
const customerSearchSortPanelCloseButton = document.querySelector("#customer-search-sort-panel .customer-search-mobile-panel-close");
const customerSearchSortPanelSubmitButton = document.querySelector("#customer-search-sort-panel .customer-search-mobile-panel-submit");

// 顧客検索の詳細条件に使用する要素を取得する
const customerSearchConditionRows = document.querySelectorAll(".customer-search-sidebar [data-condition]");
const customerSearchMobileConditionRows = document.querySelectorAll("#customer-search-condition-panel [data-mobile-condition]");
const customerSearchConditionSubmitButton = document.querySelector(".customer-search-condition-submit");
const customerSearchConditionResetButton = document.querySelector(".customer-search-condition-reset");
const customerSearchMobileConditionButton = document.querySelector("#customer-search-mobile-condition-button");
const customerSearchConditionPanel = document.querySelector("#customer-search-condition-panel");
const customerSearchConditionPanelCloseButton = document.querySelector("#customer-search-condition-panel .customer-search-mobile-panel-close");
const customerSearchMobileConditionResetButton = document.querySelector(".customer-search-mobile-condition-reset");
const customerSearchConditionPanelSubmitButton = document.querySelector("#customer-search-condition-panel .customer-search-mobile-panel-submit");

// 詳細条件1項目の選択肢パネルに使用する要素を取得する
const customerSearchConditionChoicePanel = document.querySelector("#customer-search-condition-choice-panel");
const customerSearchConditionChoiceTitle = document.querySelector("#customer-search-condition-choice-title");
const customerSearchConditionChoiceOptions = document.querySelector("#customer-search-condition-choice-options");
const customerSearchConditionChoiceCloseButton = document.querySelector(".customer-search-condition-choice-close");

// 顧客詳細画面に使用する要素を取得する
const customerDetailBackButton = document.querySelector(".customer-detail-back-button");
const customerDetailTabButtons = document.querySelectorAll("[data-customer-detail-tab]");
const customerDetailPanels = document.querySelectorAll("[data-customer-detail-panel]");
const customerDetailMainPhoto = document.querySelector("#customer-detail-main-photo");
const customerDetailAvatar = document.querySelector("#customer-detail-avatar");
const customerDetailPhotoStatus = document.querySelector("#customer-detail-photo-status");
const customerDetailName = document.querySelector("#customer-detail-name");
const customerDetailId = document.querySelector("#customer-detail-id");
const customerDetailLastVisit = document.querySelector("#customer-detail-last-visit");
const customerDetailLastVisitRelative = document.querySelector("#customer-detail-last-visit-relative");
const customerDetailBasicId = document.querySelector("#customer-detail-basic-id");
const customerDetailBirthday = document.querySelector("#customer-detail-birthday");
const customerDetailAge = document.querySelector("#customer-detail-age");
const customerDetailStaff = document.querySelector("#customer-detail-staff");
const customerDetailRegistrationDate = document.querySelector("#customer-detail-registration-date");
const customerDetailVisitCount = document.querySelector("#customer-detail-visit-count");
const customerDetailFirstVisit = document.querySelector("#customer-detail-first-visit");
const customerDetailTotalSales = document.querySelector("#customer-detail-total-sales");
const customerDetailSummaryAverage = document.querySelector("#customer-detail-summary-average");
const customerDetailAverageSpend = document.querySelector("#customer-detail-average-spend");
const customerDetailDaysSinceVisit = document.querySelector("#customer-detail-days-since-visit");
const customerDetailSummaryLastVisit = document.querySelector("#customer-detail-summary-last-visit");
const customerDetailFeatureList = document.querySelector("#customer-detail-feature-list");
const customerDetailLatestMemo = document.querySelector("#customer-detail-latest-memo");
const customerDetailGalleryList = document.querySelector("#customer-detail-gallery-list");
const customerDetailTimelineList = document.querySelector("#customer-detail-timeline-list");
const customerDetailTimelineLoading = document.querySelector("#customer-detail-timeline-loading");
const customerDetailTimelineLoadMoreButton = document.querySelector("#customer-detail-timeline-load-more");
const customerDetailSalesChart = document.querySelector("#customer-detail-sales-chart");
const customerDetailRecentVisitCount = document.querySelector("#customer-detail-recent-visit-count");
const customerDetailAverageInterval = document.querySelector("#customer-detail-average-interval");
const customerDetailSalesFirstVisit = document.querySelector("#customer-detail-sales-first-visit");
const customerDetailSalesLastVisit = document.querySelector("#customer-detail-sales-last-visit");
const customerDetailSalesTotal = document.querySelector("#customer-detail-sales-total");
const customerDetailSalesAverage = document.querySelector("#customer-detail-sales-average");
const customerDetailSalesVisitCount = document.querySelector("#customer-detail-sales-visit-count");
const customerDetailHighestSpend = document.querySelector("#customer-detail-highest-spend");
const customerDetailFavoriteWeekday = document.querySelector("#customer-detail-favorite-weekday");
const customerDetailWeekdayList = document.querySelector("#customer-detail-weekday-list");
const customerDetailTendencyList = document.querySelector("#customer-detail-tendency-list");
const customerDetailEditTriggers = document.querySelectorAll(".customer-detail-edit-trigger");
const customerDetailRegisterButtons = document.querySelectorAll(".customer-detail-register-button");
const customerDetailEditDialog = document.querySelector("#customer-detail-edit-dialog");
const customerDetailEditForm = document.querySelector("#customer-detail-edit-form");
const customerDetailEditCloseButton = document.querySelector(".customer-detail-edit-close");
const customerDetailEditCancelButton = document.querySelector(".customer-detail-edit-cancel");
const customerDetailEditNameInput = document.querySelector("#customer-detail-edit-name");
const customerDetailEditStaffInput = document.querySelector("#customer-detail-edit-staff");
const customerDetailEditFeaturesInput = document.querySelector("#customer-detail-edit-features");
const customerDetailEditMemoInput = document.querySelector("#customer-detail-edit-memo");

// サマリー画面に使用する要素を取得する
const summaryMonthPicker = document.querySelector(".summary-month-picker");
const summaryMonthButton = document.querySelector("#summary-month-button");
const summaryMonthLabel = document.querySelector("#summary-month-label");
const summaryMonthOptions = document.querySelector("#summary-month-options");
const summaryMonthOptionButtons = document.querySelectorAll("[data-summary-month]");
const summarySalesTitle = document.querySelector("#summary-sales-title");
const summaryBirthdayTitle = document.querySelector("#summary-birthday-title");
const summaryPeriodButtons = document.querySelectorAll("[data-summary-period]");
const summaryChartModeButtons = document.querySelectorAll("[data-summary-chart-mode]");
const summarySalesValue = document.querySelector("#summary-sales-value");
const summarySalesRate = document.querySelector("#summary-sales-rate");
const summarySalesDifference = document.querySelector("#summary-sales-difference");
const summaryVisitValue = document.querySelector("#summary-visit-value");
const summaryVisitDifference = document.querySelector("#summary-visit-difference");
const summaryVisitRate = document.querySelector("#summary-visit-rate");
const summaryNewValue = document.querySelector("#summary-new-value");
const summaryNewDifference = document.querySelector("#summary-new-difference");
const summaryNewRate = document.querySelector("#summary-new-rate");
const summaryAverageValue = document.querySelector("#summary-average-value");
const summaryAverageDifference = document.querySelector("#summary-average-difference");
const summaryAverageRate = document.querySelector("#summary-average-rate");
const summaryTrendChart = document.querySelector("#summary-trend-chart");
const summaryRatioDonut = document.querySelector("#summary-ratio-donut");
const summaryRatioTotal = document.querySelector("#summary-ratio-total");
const summaryRegularCount = document.querySelector("#summary-regular-count");
const summaryRegularPercent = document.querySelector("#summary-regular-percent");
const summaryNewCount = document.querySelector("#summary-new-count");
const summaryNewPercent = document.querySelector("#summary-new-percent");
const summaryNoVisitCount = document.querySelector("#summary-no-visit-count");
const summaryNoVisitFilters = document.querySelectorAll("[data-no-visit-days]");
const summaryNoVisitList = document.querySelector("#summary-no-visit-list");
const summaryNoVisitShowAllButton = document.querySelector("#summary-no-visit-show-all");
const summaryBirthdayTotal = document.querySelector("#summary-birthday-total");
const summaryBirthdayThisWeek = document.querySelector("#summary-birthday-this-week");
const summaryBirthdayNextWeek = document.querySelector("#summary-birthday-next-week");
const summaryBirthdaySearchButton = document.querySelector("#summary-birthday-search-button");
const summaryWeekdayList = document.querySelector("#summary-weekday-list");
const summaryAiList = document.querySelector("#summary-ai-list");

// 一度に表示する顧客数
const customerSearchPageSize = 3;

// 現在表示できる顧客数
let customerSearchVisibleLimit = customerSearchPageSize;

// 前回の検索条件を記録する
let lastCustomerSearchConditionSignature = "";

// 追加読み込みの状態を管理する
let isCustomerSearchLoadingMore = false;
let customerSearchLoadMoreRequestId = 0;

// 現在選択している並び順
let activeCustomerSort = "last-visit";

// 前回選択した検索結果の表示方法を取得する
const savedCustomerResultView = localStorage.getItem(customerSearchResultViewStorageKey);

// 現在選択している検索結果の表示方法
let activeCustomerResultView = [
  "grid",
  "list",
].includes(savedCustomerResultView)
  ? savedCustomerResultView
  : "list";

// 詳細条件の初期状態を作る
const createDefaultCustomerSearchConditions = () => {
  return {
    "staff-member": "all",
    birthday: "all",
    "registration-date": "all",
    "visit-count": "all",
    "total-sales": "all",
    photo: "all",
    features: "all",
    memo: "all",
  };
};

// 画面で選択中の条件
let draftCustomerSearchConditions = createDefaultCustomerSearchConditions();

// 検索結果へ適用中の条件
let activeCustomerSearchConditions = createDefaultCustomerSearchConditions();

// 現在編集している詳細条件
let editingCustomerSearchCondition = "";

// 詳細条件ごとの選択肢
const customerSearchConditionSettings = {
  "staff-member": {
    title: "担当スタッフ",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "よっしー",
        label: "よっしー",
      },
      {
        value: "ずーみん",
        label: "ずーみん",
      },
      {
        value: "はるちゃん",
        label: "はるちゃん",
      },
    ],
  },

  birthday: {
    title: "誕生日",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "this-month",
        label: "今月が誕生日",
      },
      {
        value: "registered",
        label: "誕生日登録あり",
      },
      {
        value: "unregistered",
        label: "誕生日未登録",
      },
    ],
  },

  "registration-date": {
    title: "登録日",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "this-month",
        label: "今月登録",
      },
      {
        value: "within-3-months",
        label: "3か月以内",
      },
      {
        value: "within-1-year",
        label: "1年以内",
      },
    ],
  },

  "visit-count": {
    title: "来店回数",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "0-5",
        label: "0〜5回",
      },
      {
        value: "6-10",
        label: "6〜10回",
      },
      {
        value: "11-20",
        label: "11〜20回",
      },
      {
        value: "21-plus",
        label: "21回以上",
      },
    ],
  },

  "total-sales": {
    title: "累計売上",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "under-50000",
        label: "5万円未満",
      },
      {
        value: "50000-99999",
        label: "5万〜10万円未満",
      },
      {
        value: "100000-299999",
        label: "10万〜30万円未満",
      },
      {
        value: "300000-plus",
        label: "30万円以上",
      },
    ],
  },

  photo: {
    title: "写真",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "registered",
        label: "写真あり",
      },
      {
        value: "unregistered",
        label: "写真なし",
      },
    ],
  },

  features: {
    title: "特徴",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "registered",
        label: "特徴あり",
      },
      {
        value: "unregistered",
        label: "特徴なし",
      },
    ],
  },

  memo: {
    title: "メモ",
    options: [
      {
        value: "all",
        label: "すべて",
      },
      {
        value: "registered",
        label: "メモあり",
      },
      {
        value: "unregistered",
        label: "メモなし",
      },
    ],
  },
};

// 最近見た顧客の保存に使用する設定
const customerRecentlyViewedStorageKey = "customerCrmRecentlyViewedCustomers";
const customerRecentlyViewedLimit = 20;

// 最近検索に使用する要素を取得する
const customerRecentSearchSection = document.querySelector(".customer-recent-search-section");
const customerRecentSearchList = document.querySelector(".customer-recent-search-list");
const customerRecentSearchClearButton = document.querySelector(".customer-recent-search-clear");
const customerRecentSearchStorageKey = "customerCrmRecentSearches";
const customerRecentSearchLimit = 8;

// HTMLに最初から用意されている検索履歴を取得する
const defaultCustomerRecentSearches = Array.from(
  document.querySelectorAll(".customer-recent-search-button")
).map((searchButton) => {
  return searchButton.dataset.searchValue || searchButton.textContent.trim();
}).filter(Boolean).slice(0, customerRecentSearchLimit);

// 常連顧客の検索に使用する要素を取得する
const regularCustomerSearchInput = document.querySelector("#regular-customer-search");

const regularCustomerSearchResults = document.querySelector("#regular-customer-search-results");

const regularCustomerResultItems = document.querySelectorAll(".regular-customer-result-item");

const regularCustomerNoResults = document.querySelector(".regular-customer-no-results");

// 選択中のお客様カードに使用する要素を取得する
const regularCustomerSelectButtons = document.querySelectorAll(".regular-customer-select-button");

const regularSelectedCustomer = document.querySelector("#regular-selected-customer");

const regularCustomerChangeButton = document.querySelector(".regular-customer-change-button");

const regularSelectedAvatar = document.querySelector("#regular-selected-avatar");

const regularSelectedName = document.querySelector("#regular-selected-name");

const regularSelectedId = document.querySelector("#regular-selected-id");

const regularSelectedLastVisit = document.querySelector("#regular-selected-last-visit");

const regularSelectedVisitCount = document.querySelector("#regular-selected-visit-count");

const regularSelectedTotalSales = document.querySelector("#regular-selected-total-sales");

const regularSelectedAverageSpend = document.querySelector("#regular-selected-average-spend");

const regularSelectedFeatures = document.querySelector("#regular-selected-features");

const regularSelectedMemo = document.querySelector("#regular-selected-memo");

const regularSelectedCustomerIdInput = document.querySelector("#regular-selected-customer-id");

// 常連顧客の誕生日入力に使用する要素を取得する
const regularBirthdayStatusInputs = document.querySelectorAll('input[name="regularBirthdayStatus"]');
const regularBirthdayKnownInput = document.querySelector("#regular-birthday-known");
const regularBirthdayUnknownInput = document.querySelector("#regular-birthday-unknown");
const regularBirthYearSelect = document.querySelector("#regular-birth-year");
const regularBirthMonthSelect = document.querySelector("#regular-birth-month");
const regularBirthDaySelect = document.querySelector("#regular-birth-day");
const regularBirthdayCard = document.querySelector(".regular-birthday-card");

// 常連顧客更新フォームに使用する要素を取得する
const regularCustomerForm = document.querySelector("#regular-customer-form");
const regularCustomerSearchCard = document.querySelector(".regular-customer-search-card");
const regularVisitDateInput = document.querySelector("#regular-visit-date");
const regularPaymentAmountInput = document.querySelector("#regular-payment-amount");
const regularStaffMemberInput = document.querySelector("#regular-staff-member");

// 常連顧客の更新確認画面に使用する要素を取得する
const regularCustomerMemo = document.querySelector("#regular-customer-memo");
const regularCustomerSubmitButton = document.querySelector("#regular-customer-submit-button");
const regularCustomerConfirmDialog = document.querySelector("#regular-customer-confirm-dialog");
const regularCustomerConfirmSummary = document.querySelector("#regular-customer-confirm-summary");
const regularCustomerConfirmMain = document.querySelector(".regular-customer-confirm-main");
const regularCustomerConfirmBack = document.querySelector(".regular-customer-confirm-back");
const regularCustomerUpdateSuccess = document.querySelector(".regular-customer-update-success");
const regularCustomerConfirmUpdate = document.querySelector(".regular-customer-confirm-update");
const regularCustomerSuccessBack = document.querySelector(".regular-customer-success-back");

// 新規顧客登録フォームを取得する
const newCustomerForm = document.querySelector("#new-customer-form");

// 来店日の入力欄を取得する
const visitDateInput = document.querySelector("#visit-date");

// 誕生日入力に使用する要素を取得する
const birthdayStatusInputs = document.querySelectorAll('input[name="birthdayStatus"]');

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
const featureEditButton = document.querySelector(".feature-edit-button");
const featureEditorBar = document.querySelector(".feature-editor-bar");
const featureSelectedCount = document.querySelector(".feature-selected-count");
const featureDeleteButton = document.querySelector(".feature-delete-button");

// 特徴タグの重複警告に使用する要素を取得する
const featureDuplicateDialog = document.querySelector("#feature-duplicate-dialog");

const featureDuplicateDialogButton = document.querySelector(".feature-duplicate-dialog-button");

// 特徴タグの削除確認に使用する要素を取得する
const featureDeleteDialog = document.querySelector("#feature-delete-dialog");

const featureDeleteDialogMessage = document.querySelector(".feature-delete-dialog-message");

const featureDeleteDialogCancel = document.querySelector(".feature-delete-dialog-cancel");

const featureDeleteDialogConfirm = document.querySelector(".feature-delete-dialog-confirm");

// 新規顧客メモの入力欄を取得する
const newCustomerMemo = document.querySelector("#new-customer-memo");

// 顧客写真のプレビューに使用する要素を取得する
const customerPhotoInput = document.querySelector("#customer-photo");

const photoPreview = document.querySelector(".photo-preview");

const photoPreviewPlaceholder = document.querySelector(".photo-preview-placeholder");

const photoPreviewList = document.querySelector(".photo-preview-list");

const photoRemoveButton = document.querySelector(".photo-remove-button");

// 新規顧客の登録確認画面に使用する要素を取得する
const newCustomerConfirmDialog = document.querySelector("#new-customer-confirm-dialog");

const newCustomerConfirmSummary = document.querySelector("#new-customer-confirm-summary");

const newCustomerConfirmBack = document.querySelector(".new-customer-confirm-back");

const newCustomerSubmitButton = document.querySelector("#new-customer-submit-button");

const newCustomerConfirmMain = document.querySelector(".new-customer-confirm-main");

const newCustomerConfirmRegister = document.querySelector(".new-customer-confirm-register");

const newCustomerRegisterSuccess = document.querySelector(".new-customer-register-success");

const newCustomerSuccessBack = document.querySelector(".new-customer-success-back");

// 確認画面へ表示する入力欄を取得する
const customerNameInput = document.querySelector("#customer-name");

// 似ている顧客のお知らせ欄を取得する
const similarCustomerAlert =document.querySelector(".similar-customer-alert");

const paymentAmountInput = document.querySelector("#payment-amount");

// 会計金額からカンマを除き、数値として取得する
const getPaymentAmountNumber = () => {
  const numberText =
    paymentAmountInput.value.replace(
      /,/g,
      ""
    );

  if (numberText === "") {
    return null;
  }

  return Number(numberText);
};

// 会計金額へ3桁ごとのカンマを付ける
const formatPaymentAmountInput = () => {
  // 全角数字を1文字ずつ半角数字へ変換する
  const convertedValue =
    paymentAmountInput.value.replace(
      /[０-９]/g,
      (character) => {
        return String.fromCharCode(
          character.charCodeAt(0) - 0xfee0
        );
      }
    );

  // 全角カンマも半角カンマへ変換する
  const normalizedValue =
    convertedValue.replace(
      /，/g,
      ","
    );

  // 数字以外を取り除く
  const enteredNumbers =
    normalizedValue.replace(
      /[^0-9]/g,
      ""
    );

  // 数字がなければ空欄にする
  if (enteredNumbers === "") {
    paymentAmountInput.value = "";

    return;
  }

  // 先頭の不要な0を取り除く
  const normalizedNumbers =
    enteredNumbers.replace(
      /^0+(?=\d)/,
      ""
    );

  // 3桁ごとにカンマを追加する
  paymentAmountInput.value =
    normalizedNumbers.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
};

// 入力するたびに会計金額を整形する
paymentAmountInput.addEventListener(
  "input",
  (event) => {
    // 日本語入力の変換途中では処理しない
    if (event.isComposing) {
      return;
    }

    formatPaymentAmountInput();
  }
);

// 全角入力の変換が確定したあとに整形する
paymentAmountInput.addEventListener(
  "compositionend",
  formatPaymentAmountInput
);

const staffMemberInput = document.querySelector("#staff-member");

// 常連顧客の会計金額を数値として取得する
const getRegularPaymentAmountNumber = () => {
  const numberText = regularPaymentAmountInput.value.replace(/,/g, "");

  if (numberText === "") {
    return null;
  }

  return Number(numberText);
};

// 常連顧客の会計金額へ3桁ごとのカンマを付ける
const formatRegularPaymentAmountInput = () => {
  const convertedValue = regularPaymentAmountInput.value.replace(
    /[０-９]/g,
    (character) => {
      return String.fromCharCode(
        character.charCodeAt(0) - 0xfee0
      );
    }
  );

  const enteredNumbers = convertedValue
    .replace(/，/g, ",")
    .replace(/[^0-9]/g, "");

  if (enteredNumbers === "") {
    regularPaymentAmountInput.value = "";
    return;
  }

  const normalizedNumbers = enteredNumbers.replace(
    /^0+(?=\d)/,
    ""
  );

  regularPaymentAmountInput.value = normalizedNumbers.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
};

// 入力するたびに常連顧客の会計金額を整形する
regularPaymentAmountInput.addEventListener(
  "input",
  (event) => {
    if (event.isComposing) {
      return;
    }

    formatRegularPaymentAmountInput();
  }
);

// 全角入力の変換が確定したあとに整形する
regularPaymentAmountInput.addEventListener(
  "compositionend",
  formatRegularPaymentAmountInput
);

// スタッフ名の候補を表示するdatalistを取得する
const staffMemberOptions =
  document.querySelector(
    "#staff-member-options"
  );

// 保存時に使用する名前
const staffMemberStorageKey =
  "customerCrmStaffMembers";

// HTMLに最初から用意されているスタッフ名を取得する
const defaultStaffMembers =
  Array.from(
    staffMemberOptions.options
  ).map((option) => {
    return option.value;
  });

// ブラウザに保存されているスタッフ名を取得する
const getSavedStaffMembers = () => {
  const savedData =
    localStorage.getItem(
      staffMemberStorageKey
    );

  if (!savedData) {
    return [];
  }

  try {
    const staffMembers =
      JSON.parse(savedData);

    return Array.isArray(staffMembers)
      ? staffMembers
      : [];
  } catch {
    return [];
  }
};

// datalistへスタッフ候補を表示する
const renderStaffMemberOptions = () => {
  const savedStaffMembers =
    getSavedStaffMembers();

  // 初期候補と保存済み候補をまとめ、重複をなくす
  const staffMembers = [
    ...new Set([
      ...defaultStaffMembers,
      ...savedStaffMembers
    ])
  ];

  staffMemberOptions.textContent = "";

  staffMembers.forEach((staffName) => {
    const option =
      document.createElement("option");

    option.value = staffName;

    staffMemberOptions.appendChild(
      option
    );
  });
};

// 入力されたスタッフ名を保存する
const saveStaffMemberName = (inputElement = staffMemberInput) => {
  const staffName =
    inputElement.value.trim();

  if (!staffName) {
    return;
  }

  const savedStaffMembers =
    getSavedStaffMembers();

  // 同じ名前が保存済みか確認する
  const isDuplicate =
    savedStaffMembers.some(
      (savedName) => {
        return (
          savedName.toLocaleLowerCase() ===
          staffName.toLocaleLowerCase()
        );
      }
    );

  if (isDuplicate) {
    return;
  }

  savedStaffMembers.push(staffName);

  localStorage.setItem(
    staffMemberStorageKey,
    JSON.stringify(savedStaffMembers)
  );

  renderStaffMemberOptions();
};

// ページを開いたときに保存済み候補を反映する
renderStaffMemberOptions();

// 似ている顧客のお知らせを表示する
const showSimilarCustomerAlert = () => {
  similarCustomerAlert.hidden = false;
};

// 似ている顧客のお知らせを非表示にする
const hideSimilarCustomerAlert = () => {
  similarCustomerAlert.hidden = true;
};

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

// 表示中の画面に合わせて下部ナビの選択状態を更新する
const updateBottomNavigation = (viewName) => {
  // 来店登録に含まれる3つの画面
  const visitRegistrationViews = [
    "visit-registration",
    "new-customer",
    "regular-customer",
  ];

  // 新規・常連画面では「来店登録」を選択中にする
  const activeNavView =
  visitRegistrationViews.includes(viewName)
    ? "visit-registration"
    : viewName === "customer-detail"
      ? "customer-search"
      : viewName;

  bottomNavItems.forEach((navItem) => {
    const isActive =
      navItem.dataset.view === activeNavView;

    navItem.classList.toggle(
      "bottom-nav-item--active",
      isActive
    );

    // 読み上げ機能にも現在地を伝える
    if (isActive) {
      navItem.setAttribute(
        "aria-current",
        "page"
      );
    } else {
      navItem.removeAttribute(
        "aria-current"
      );
    }
  });
};

// 検索文字を比較しやすい形へ整える
const normalizeRegularCustomerSearchText = (
  value
) => {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
};

// 入力文字に合う常連顧客だけを表示する
const updateRegularCustomerSearchResults =
  () => {
    const searchText =
      normalizeRegularCustomerSearchText(
        regularCustomerSearchInput.value
      );

    // 入力欄が空の場合は検索結果を閉じる
    if (searchText === "") {
      regularCustomerSearchResults.hidden =
        true;

      regularCustomerResultItems.forEach(
        (resultItem) => {
          resultItem.hidden = false;
        }
      );

      regularCustomerNoResults.hidden =
        true;

      return;
    }

    let matchCount = 0;

    regularCustomerResultItems.forEach(
      (resultItem) => {
        const customerSearchText =
          normalizeRegularCustomerSearchText(
            resultItem.dataset.searchText || ""
          );

        const isMatch =
          customerSearchText.includes(
            searchText
          );

        resultItem.hidden = !isMatch;

        if (isMatch) {
          matchCount += 1;
        }
      }
    );

    // 文字が入力されたら検索結果欄を開く
    regularCustomerSearchResults.hidden =
      false;

    // 一致する顧客がいない場合だけ案内を表示する
    regularCustomerNoResults.hidden =
      matchCount > 0;
  };

// 検索欄へ文字を入力するたびに結果を更新する
regularCustomerSearchInput.addEventListener(
  "input",
  updateRegularCustomerSearchResults
);

// 選択した顧客の情報をプロフィールカードへ表示する
const showSelectedRegularCustomer = (
  resultItem
) => {
  const customerData = resultItem.dataset;

  // 基本情報を表示する
  regularSelectedAvatar.textContent =
    customerData.customerInitial || "客";

  regularSelectedName.textContent =
    customerData.customerName || "";
   regularSelectedId.textContent =
    customerData.customerId || "";

  regularSelectedLastVisit.textContent =
    customerData.lastVisit || "未登録";

  regularSelectedVisitCount.textContent =
    customerData.visitCount || "0";

// 売上金額をカンマ付きで表示する
const totalSales =
  Number(customerData.totalSales || 0);

const averageSpend =
  Number(customerData.averageSpend || 0);

  regularSelectedTotalSales.textContent =
    `${totalSales.toLocaleString("ja-JP")}円`;

  regularSelectedAverageSpend.textContent =
    `${averageSpend.toLocaleString("ja-JP")}円`;

  // 特徴タグを一度すべて消す
  regularSelectedFeatures.replaceChildren();

// カンマ区切りの特徴をタグとして表示する
const featureNames =
  (customerData.features || "")
    .split(",")
    .map((featureName) => {
      return featureName.trim();
    })
    .filter(Boolean);

featureNames.forEach((featureName) => {
  const featureTag =
    document.createElement("span");

  featureTag.textContent = featureName;

  regularSelectedFeatures.appendChild(
    featureTag
  );
});

  // 最近のメモを表示する
  regularSelectedMemo.textContent =
    customerData.recentMemo || "なし";

  // 更新時に使用する顧客IDを保持する
  regularSelectedCustomerIdInput.value =
    customerData.customerId || "";

  // 来店日が空欄なら今日の日付を入れる
  setTodayToRegularVisitDate();

  // 登録済みの誕生日をフォームへ反映する
  const isBirthdayUnknown =
    customerData.birthdayStatus ===
    "unknown";

  regularBirthdayKnownInput.checked =
    !isBirthdayUnknown;

  regularBirthdayUnknownInput.checked =
    isBirthdayUnknown;

  regularBirthYearSelect.value =
    isBirthdayUnknown
      ? ""
      : customerData.birthYear || "";

  regularBirthMonthSelect.value =
    isBirthdayUnknown
      ? ""
      : customerData.birthMonth || "";

  regularBirthDaySelect.value =
    isBirthdayUnknown
      ? ""
      : customerData.birthDay || "";

  updateRegularBirthdayInputs();

  // 誕生日が未登録のお客様だけ入力カードを表示する
  regularBirthdayCard.hidden =
    !isBirthdayUnknown;

  // 自動入力されたため、誕生日のエラーを解除する
  setFormCardError(
    regularBirthdayCard,
    false
  );

  // 顧客選択の必須エラーを消す
  setFormCardError(
    regularCustomerSearchCard,
    false
  );

  // 選択中のお客様カードを表示する
  regularSelectedCustomer.hidden = false;

  // 検索結果は閉じる
  regularCustomerSearchResults.hidden = true;

  // 選択中のお客様カードまで移動する
  regularSelectedCustomer.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

// 各「この顧客を選択」ボタンに処理を登録する
regularCustomerSelectButtons.forEach(
  (selectButton) => {
    selectButton.addEventListener(
      "click",
      () => {
        const resultItem =
          selectButton.closest(
            ".regular-customer-result-item"
          );

        if (!resultItem) {
          return;
        }

        showSelectedRegularCustomer(
          resultItem
        );
      }
    );
  }
);

// 「変更」を押したら顧客を選び直せるようにする
regularCustomerChangeButton.addEventListener(
  "click",
  () => {
    regularSelectedCustomer.hidden = true;
    regularBirthdayCard.hidden = true;
    regularSelectedCustomerIdInput.value = "";

    updateRegularCustomerSearchResults();

    regularCustomerSearchInput.focus();
  }
);

// 顧客検索文字を比較しやすい形へ整える
const normalizeCustomerSearchText = (value) => {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "");
};

// 保存されている最近検索を取得する
const getCustomerRecentSearches = () => {
  const savedData = localStorage.getItem(customerRecentSearchStorageKey);

  // まだ保存データがない場合はHTMLの仮データを使用する
  if (savedData === null) {
    return [...defaultCustomerRecentSearches];
  }

  try {
    const recentSearches = JSON.parse(savedData);

    if (!Array.isArray(recentSearches)) {
      return [...defaultCustomerRecentSearches];
    }

    return recentSearches
      .filter((searchValue) => {
        return typeof searchValue === "string" && searchValue.trim() !== "";
      })
      .slice(0, customerRecentSearchLimit);
  } catch {
    return [...defaultCustomerRecentSearches];
  }
};

// 最近検索をブラウザへ保存する
const saveCustomerRecentSearches = (recentSearches) => {
  localStorage.setItem(
    customerRecentSearchStorageKey,
    JSON.stringify(recentSearches)
  );
};

// 最近検索を画面へ表示する
const renderCustomerRecentSearches = () => {
  const recentSearches = getCustomerRecentSearches();

  customerRecentSearchList.replaceChildren();

  recentSearches.forEach((searchValue) => {
    const recentSearchItem = document.createElement("li");
    const recentSearchButton = document.createElement("button");
    const recentSearchRemoveButton = document.createElement("button");

    recentSearchItem.className = "customer-recent-search-item";

    recentSearchButton.className = "customer-recent-search-button";
    recentSearchButton.type = "button";
    recentSearchButton.dataset.searchValue = searchValue;
    recentSearchButton.textContent = searchValue;

    recentSearchRemoveButton.className = "customer-recent-search-remove";
    recentSearchRemoveButton.type = "button";
    recentSearchRemoveButton.setAttribute(
      "aria-label",
      `${searchValue}を検索履歴から削除`
    );
    recentSearchRemoveButton.textContent = "×";

    recentSearchItem.appendChild(recentSearchButton);
    recentSearchItem.appendChild(recentSearchRemoveButton);
    customerRecentSearchList.appendChild(recentSearchItem);
  });

  // 履歴が0件の場合は最近検索カードを隠す
  customerRecentSearchSection.hidden = recentSearches.length === 0;
};

// 新しい検索語を最近検索へ追加する
const addCustomerRecentSearch = (searchValue) => {
  const trimmedSearchValue = searchValue.trim();
  const normalizedSearchValue = normalizeCustomerSearchText(trimmedSearchValue);

  if (normalizedSearchValue === "") {
    return;
  }

  const recentSearches = getCustomerRecentSearches();

  // 同じ検索語を取り除いてから先頭へ追加する
  const updatedRecentSearches = recentSearches.filter((savedSearchValue) => {
    return normalizeCustomerSearchText(savedSearchValue) !== normalizedSearchValue;
  });

  updatedRecentSearches.unshift(trimmedSearchValue);

  // 最大8件だけ保存する
  const limitedRecentSearches = updatedRecentSearches.slice(
    0,
    customerRecentSearchLimit
  );

  saveCustomerRecentSearches(limitedRecentSearches);
  renderCustomerRecentSearches();
};

// 顧客が選択中のクイックフィルターに一致するか確認する
const isCustomerQuickFilterMatch = (resultCard) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  // サマリーから移動した場合は、サマリーで選択した月を使用する
  const birthdayFilterMonth =
    activeCustomerBirthdayFilterMonth ||
    currentMonth;

  if (activeCustomerQuickFilter === "all") {
    return true;
  }

  // 何らかの情報が未登録のお客様
  if (
    activeCustomerQuickFilter ===
    "needs-action"
  ) {
    return (
      resultCard.dataset.hasPhoto ===
        "false" ||
      resultCard.dataset
        .birthdayStatus ===
        "unknown" ||
      resultCard.dataset.hasMemo ===
        "false" ||
      resultCard.dataset
        .hasFeatures ===
        "false"
    );
  }

  // 誕生日が未登録のお客様
  if (
    activeCustomerQuickFilter ===
    "no-birthday"
  ) {
    return (
      resultCard.dataset
        .birthdayStatus ===
      "unknown"
    );
  }

  if (activeCustomerQuickFilter === "registered-this-month") {
    const registrationDate = resultCard.dataset.registrationDate || "";

    const [
      registrationYear,
      registrationMonth,
    ] = registrationDate
      .split("-")
      .map(Number);

    return (
      registrationYear === currentYear &&
      registrationMonth === currentMonth
    );
  }

  if (activeCustomerQuickFilter === "birthday") {
    return (
      Number(resultCard.dataset.birthMonth) ===
      birthdayFilterMonth
    );
  }

  if (activeCustomerQuickFilter === "no-photo") {
    return resultCard.dataset.hasPhoto === "false";
  }

  if (activeCustomerQuickFilter === "no-memo") {
    return resultCard.dataset.hasMemo === "false";
  }

  if (activeCustomerQuickFilter === "no-features") {
    return resultCard.dataset.hasFeatures === "false";
  }

  return true;
};

// 検索条件に一致する顧客を表示件数の範囲で表示する
const updateCustomerSearchResults = () => {
  const searchText = normalizeCustomerSearchText(customerSearchInput.value);

  // 現在の検索条件を文字列化して前回の条件と比較する
  const currentConditionSignature = JSON.stringify({
    searchText,
    quickFilter: activeCustomerQuickFilter,
    detailConditions: activeCustomerSearchConditions,
    sort: activeCustomerSort,
  });

  // 検索条件が変わった場合は最初の表示件数へ戻す
  if (
    currentConditionSignature !==
    lastCustomerSearchConditionSignature
  ) {
    lastCustomerSearchConditionSignature =
      currentConditionSignature;

    customerSearchVisibleLimit =
      customerSearchPageSize;

    // 進行中の追加読み込みを無効にする
    customerSearchLoadMoreRequestId += 1;
    isCustomerSearchLoadingMore = false;
    customerSearchLoading.hidden = true;
  }

  // 並び替え後のDOM順で顧客カードを取得する
  const orderedResultCards = Array.from(
    customerSearchResultList.querySelectorAll(
      ".customer-search-result-card"
    )
  );

  const matchedResultCards = [];

  orderedResultCards.forEach((resultCard) => {
    const customerSearchText = normalizeCustomerSearchText(
      resultCard.dataset.searchText || ""
    );

    const isSearchMatch =
      searchText === "" ||
      customerSearchText.includes(searchText);

    const isQuickFilterMatch =
      isCustomerQuickFilterMatch(resultCard);

    const isDetailConditionMatch =
      isCustomerSearchDetailConditionMatch(
        resultCard
      );

    const isMatch =
      isSearchMatch &&
      isQuickFilterMatch &&
      isDetailConditionMatch;

    // いったん全カードを隠してから表示対象を決める
    resultCard.hidden = true;

    if (isMatch) {
      matchedResultCards.push(resultCard);
    }
  });

  const matchCount =
    matchedResultCards.length;

  const visibleCount = Math.min(
    customerSearchVisibleLimit,
    matchCount
  );

  // 表示上限までの顧客カードだけ表示する
  matchedResultCards.forEach((resultCard, index) => {
    resultCard.hidden =
      index >= customerSearchVisibleLimit;
  });

  // 一部だけ表示中の場合は表示人数も知らせる
  customerSearchResultCount.textContent =
    visibleCount < matchCount
      ? `${matchCount}名中${visibleCount}名表示`
      : `${matchCount}名`;

  customerSearchEmptyState.hidden =
    matchCount > 0;

  const remainingCount =
    matchCount - visibleCount;

  customerSearchLoadMoreButton.hidden =
    remainingCount === 0 ||
    isCustomerSearchLoadingMore;

  // 残り人数に合わせてボタンの文字を更新する
  if (remainingCount > 0) {
    const nextLoadCount = Math.min(
      customerSearchPageSize,
      remainingCount
    );

    customerSearchLoadMoreButton.textContent =
      `さらに${nextLoadCount}名読み込む`;
  }

  customerSearchClearButton.hidden =
    customerSearchInput.value === "";
};

// 検索入力欄だけを空にする
const clearCustomerSearch = () => {
  customerSearchInput.value = "";

  updateCustomerSearchResults();

  customerSearchInput.focus();
};

// 選択中のクイックフィルターをボタンへ反映する
const syncCustomerQuickFilterButtons = () => {
  customerQuickFilterButtons.forEach(
    (filterButton) => {
      const isActive =
        filterButton.dataset
          .quickFilter ===
        activeCustomerQuickFilter;

      filterButton.classList.toggle(
        "customer-quick-filter--active",
        isActive
      );

      filterButton.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    }
  );

  // サマリーから移動した場合は対象月も表示する
  customerBirthdayQuickFilterButton.textContent =
    activeCustomerQuickFilter ===
      "birthday" &&
    activeCustomerBirthdayFilterMonth
      ? `${activeCustomerBirthdayFilterMonth}月誕生日`
      : "誕生日";
};

// 検索文字とクイックフィルターを初期状態へ戻す
const resetCustomerSearchConditions = () => {
  customerSearchInput.value = "";
  activeCustomerQuickFilter = "all";
  activeCustomerBirthdayFilterMonth = null;

  draftCustomerSearchConditions =
    createDefaultCustomerSearchConditions();

  activeCustomerSearchConditions =
    createDefaultCustomerSearchConditions();

  syncCustomerQuickFilterButtons();

  syncCustomerSearchConditionRows();

  updateCustomerSearchResults();

  customerSearchInput.focus();
};

// 保存されている最近見た顧客IDを取得する
const getCustomerRecentlyViewedIds = () => {
  const savedData = localStorage.getItem(customerRecentlyViewedStorageKey);

  if (!savedData) {
    return [];
  }

  try {
    const customerIds = JSON.parse(savedData);

    return Array.isArray(customerIds)
      ? customerIds
      : [];
  } catch {
    return [];
  }
};

// 顧客を最近見た履歴の先頭へ保存する
const saveCustomerRecentlyViewedCustomer = (customerId) => {
  if (!customerId) {
    return;
  }

  const recentlyViewedIds = getCustomerRecentlyViewedIds();

  const updatedRecentlyViewedIds = recentlyViewedIds.filter(
    (savedCustomerId) => {
      return savedCustomerId !== customerId;
    }
  );

  updatedRecentlyViewedIds.unshift(customerId);

  localStorage.setItem(
    customerRecentlyViewedStorageKey,
    JSON.stringify(
      updatedRecentlyViewedIds.slice(
        0,
        customerRecentlyViewedLimit
      )
    )
  );
};

// 日付を並び替えに使用できる数値へ変換する
const getCustomerSearchDateNumber = (dateValue) => {
  const dateNumber = Date.parse(dateValue || "");

  return Number.isNaN(dateNumber)
    ? 0
    : dateNumber;
};

// 顧客番号を英字と数字の昇順で比較する
const compareCustomerSearchIds = (
  firstCard,
  secondCard
) => {
  const firstCustomerId =
    firstCard.dataset.customerId ||
    "";

  const secondCustomerId =
    secondCard.dataset.customerId ||
    "";

  return firstCustomerId.localeCompare(
    secondCustomerId,
    "en",
    {
      sensitivity: "base",
      numeric: true,
    }
  );
};

// 現在選択中の条件で顧客カードを並び替える
const applyCustomerSearchSort = () => {
  const recentlyViewedIds =
    getCustomerRecentlyViewedIds();

  const recentlyViewedOrder =
    new Map(
      recentlyViewedIds.map(
        (customerId, index) => {
          return [
            customerId,
            index,
          ];
        }
      )
    );

  const sortedResultCards =
    Array.from(
      customerSearchResultCards
    ).sort(
      (firstCard, secondCard) => {
        if (activeCustomerSort === "recently-viewed") {
          const firstCustomerId =
            firstCard.dataset.customerId ||
            "";

          const secondCustomerId =
            secondCard.dataset.customerId ||
            "";

          const firstOrder =
            recentlyViewedOrder.has(
              firstCustomerId
            )
              ? recentlyViewedOrder.get(
                  firstCustomerId
                )
              : Number.MAX_SAFE_INTEGER;

          const secondOrder =
            recentlyViewedOrder.has(
              secondCustomerId
            )
              ? recentlyViewedOrder.get(
                  secondCustomerId
                )
              : Number.MAX_SAFE_INTEGER;

          if (firstOrder !== secondOrder) {
            return firstOrder - secondOrder;
          }
        }

        if (activeCustomerSort === "registration-date") {
          const dateDifference =
            getCustomerSearchDateNumber(
              secondCard.dataset.registrationDate
            ) -
            getCustomerSearchDateNumber(
              firstCard.dataset.registrationDate
            );

          if (dateDifference !== 0) {
            return dateDifference;
          }
        }

        if (activeCustomerSort === "customer-id") {
          return compareCustomerSearchIds(
            firstCard,
            secondCard
          );
        }

        if (activeCustomerSort === "visit-count") {
          const visitCountDifference =
            Number(
              secondCard.dataset.visitCount ||
              0
            ) -
            Number(
              firstCard.dataset.visitCount ||
              0
            );

          if (visitCountDifference !== 0) {
            return visitCountDifference;
          }
        }

        if (activeCustomerSort === "total-sales") {
          const totalSalesDifference =
            Number(
              secondCard.dataset.totalSales ||
              0
            ) -
            Number(
              firstCard.dataset.totalSales ||
              0
            );

          if (totalSalesDifference !== 0) {
            return totalSalesDifference;
          }
        }

        // 最終来店順と、ほかの条件が同じ場合の並び順
        const lastVisitDifference =
          getCustomerSearchDateNumber(
            secondCard.dataset.lastVisit
          ) -
          getCustomerSearchDateNumber(
            firstCard.dataset.lastVisit
          );

        if (lastVisitDifference !== 0) {
          return lastVisitDifference;
        }

        return compareCustomerSearchIds(
          firstCard,
          secondCard
        );
      }
    );

  sortedResultCards.forEach(
    (resultCard) => {
      customerSearchResultList.appendChild(
        resultCard
      );
    }
  );
};

// PCとスマホの選択状態を同じ並び順へそろえる
const syncCustomerSearchSortInputs = () => {
  [
    ...customerSearchSortInputs,
    ...customerSearchMobileSortInputs,
  ].forEach((sortInput) => {
    sortInput.checked =
      sortInput.value ===
      activeCustomerSort;
  });
};

// 並び順を変更する
const setCustomerSearchSort = (sortValue) => {
  const availableSortValues = [
    "recently-viewed",
    "last-visit",
    "registration-date",
    "customer-id",
    "visit-count",
    "total-sales",
  ];

  if (!availableSortValues.includes(sortValue)) {
    return;
  }

  activeCustomerSort = sortValue;

  syncCustomerSearchSortInputs();
  applyCustomerSearchSort();
  updateCustomerSearchResults();
};

// 顧客検索結果の表示方法を切り替える
const setCustomerSearchResultView = (
  viewName,
  shouldSave = true
) => {
  const availableViewNames = [
    "grid",
    "list",
  ];

  if (!availableViewNames.includes(viewName)) {
    return;
  }

  activeCustomerResultView = viewName;

  // 一覧表示の場合だけ専用クラスを付ける
  customerSearchResultList.classList.toggle(
    "customer-search-result-list--list",
    viewName === "list"
  );

  // 選択中のボタンデザインと読み上げ状態を更新する
  customerSearchViewButtons.forEach((viewButton) => {
    const isActive =
      viewButton.dataset.resultView ===
      viewName;

    viewButton.classList.toggle(
      "customer-search-view-button--active",
      isActive
    );

    viewButton.setAttribute(
      "aria-pressed",
      String(isActive)
    );
  });

  // 次にページを開いたときも同じ表示方法を復元する
  if (shouldSave) {
    localStorage.setItem(
      customerSearchResultViewStorageKey,
      viewName
    );
  }
};

// スマホ用の並び替えパネルを開く
const openCustomerSearchSortPanel = () => {
  syncCustomerSearchSortInputs();

  customerSearchSortPanel.hidden = false;

  customerSearchMobileSortButton.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "customer-search-panel-open"
  );

  const checkedSortInput =
    customerSearchSortPanel.querySelector(
      'input[name="customerSearchSortMobile"]:checked'
    );

  checkedSortInput?.focus();
};

// スマホ用の並び替えパネルを閉じる
const closeCustomerSearchSortPanel = () => {
  customerSearchSortPanel.hidden = true;

  customerSearchMobileSortButton.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "customer-search-panel-open"
  );
};

// 詳細条件の値に対応する表示名を取得する
const getCustomerSearchConditionLabel = (
  conditionKey,
  conditionValue
) => {
  const conditionSetting =
    customerSearchConditionSettings[
      conditionKey
    ];

  if (!conditionSetting) {
    return "すべて";
  }

  const conditionOption =
    conditionSetting.options.find(
      (option) => {
        return (
          option.value ===
          conditionValue
        );
      }
    );

  return conditionOption
    ? conditionOption.label
    : "すべて";
};

// PCとスマホの詳細条件表示をそろえる
const syncCustomerSearchConditionRows = () => {
  [
    ...customerSearchConditionRows,
    ...customerSearchMobileConditionRows,
  ].forEach((conditionRow) => {
    const conditionKey =
      conditionRow.dataset.condition ||
      conditionRow.dataset.mobileCondition ||
      "";

    const conditionValue =
      draftCustomerSearchConditions[
        conditionKey
      ] ||
      "all";

    const conditionValueElement =
      conditionRow.querySelector(
        ".customer-search-condition-value"
      );

    if (conditionValueElement) {
      conditionValueElement.textContent =
        getCustomerSearchConditionLabel(
          conditionKey,
          conditionValue
        );
    }

    conditionRow.classList.toggle(
      "customer-search-condition-row--selected",
      conditionValue !== "all"
    );
  });
};

// 選択肢パネルの内容を表示する
const renderCustomerSearchConditionChoices = () => {
  const conditionSetting =
    customerSearchConditionSettings[
      editingCustomerSearchCondition
    ];

  customerSearchConditionChoiceOptions.replaceChildren();

  if (!conditionSetting) {
    return;
  }

  const selectedValue =
    draftCustomerSearchConditions[
      editingCustomerSearchCondition
    ] ||
    "all";

  conditionSetting.options.forEach((option) => {
    const optionButton =
      document.createElement("button");

    const optionLabel =
      document.createElement("span");

    const optionCheck =
      document.createElement("span");

    const isSelected =
      option.value ===
      selectedValue;

    optionButton.className =
      "customer-search-condition-choice-button";

    optionButton.type = "button";
    optionButton.dataset.conditionValue =
      option.value;

    optionButton.classList.toggle(
      "customer-search-condition-choice-button--active",
      isSelected
    );

    optionButton.setAttribute(
      "aria-pressed",
      String(isSelected)
    );

    optionLabel.textContent =
      option.label;

    optionCheck.className =
      "customer-search-condition-choice-check";

    optionCheck.textContent = "✓";
    optionCheck.setAttribute(
      "aria-hidden",
      "true"
    );

    optionButton.appendChild(
      optionLabel
    );

    optionButton.appendChild(
      optionCheck
    );

    customerSearchConditionChoiceOptions.appendChild(
      optionButton
    );
  });
};

// 詳細条件1項目の選択肢パネルを開く
const openCustomerSearchConditionChoicePanel = (
  conditionKey
) => {
  const conditionSetting =
    customerSearchConditionSettings[
      conditionKey
    ];

  if (!conditionSetting) {
    return;
  }

  editingCustomerSearchCondition =
    conditionKey;

  customerSearchConditionChoiceTitle.textContent =
    conditionSetting.title;

  renderCustomerSearchConditionChoices();

  customerSearchConditionChoicePanel.hidden =
    false;

  document.body.classList.add(
    "customer-search-panel-open"
  );

  const selectedOptionButton =
    customerSearchConditionChoiceOptions.querySelector(
      ".customer-search-condition-choice-button--active"
    );

  selectedOptionButton?.focus();
};

// 詳細条件1項目の選択肢パネルを閉じる
const closeCustomerSearchConditionChoicePanel = () => {
  customerSearchConditionChoicePanel.hidden =
    true;

  editingCustomerSearchCondition = "";

  if (
    customerSearchConditionPanel.hidden &&
    customerSearchSortPanel.hidden
  ) {
    document.body.classList.remove(
      "customer-search-panel-open"
    );
  }
};

// スマホ用の詳細条件パネルを開く
const openCustomerSearchConditionPanel = () => {
  syncCustomerSearchConditionRows();

  customerSearchConditionPanel.hidden =
    false;

  customerSearchMobileConditionButton.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "customer-search-panel-open"
  );

  const firstConditionRow =
    customerSearchConditionPanel.querySelector(
      ".customer-search-condition-row"
    );

  firstConditionRow?.focus();
};

// スマホ用の詳細条件パネルを閉じる
const closeCustomerSearchConditionPanel = () => {
  customerSearchConditionPanel.hidden =
    true;

  customerSearchMobileConditionButton.setAttribute(
    "aria-expanded",
    "false"
  );

  if (
    customerSearchConditionChoicePanel.hidden &&
    customerSearchSortPanel.hidden
  ) {
    document.body.classList.remove(
      "customer-search-panel-open"
    );
  }
};

// 詳細条件を初期状態へ戻す
const resetCustomerSearchDetailConditions = () => {
  draftCustomerSearchConditions =
    createDefaultCustomerSearchConditions();

  activeCustomerSearchConditions =
    createDefaultCustomerSearchConditions();

  syncCustomerSearchConditionRows();
  updateCustomerSearchResults();
};

// 選択中の詳細条件を検索結果へ反映する
const applyCustomerSearchDetailConditions = () => {
  activeCustomerSearchConditions = {
    ...draftCustomerSearchConditions,
  };

  syncCustomerSearchConditionRows();
  updateCustomerSearchResults();
};

// 顧客が詳細条件に一致するか確認する
const isCustomerSearchDetailConditionMatch = (
  resultCard
) => {
  const today = new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );

  const currentYear =
    today.getFullYear();

  const currentMonth =
    today.getMonth() + 1;

  const staffMemberCondition =
    activeCustomerSearchConditions[
      "staff-member"
    ];

  if (
    staffMemberCondition !== "all" &&
    resultCard.dataset.staffMember !==
      staffMemberCondition
  ) {
    return false;
  }

  const birthdayCondition =
    activeCustomerSearchConditions.birthday;

  if (
    birthdayCondition === "this-month" &&
    Number(
      resultCard.dataset.birthMonth
    ) !== currentMonth
  ) {
    return false;
  }

  if (
    birthdayCondition === "registered" &&
    resultCard.dataset.birthdayStatus !==
      "known"
  ) {
    return false;
  }

  if (
    birthdayCondition === "unregistered" &&
    resultCard.dataset.birthdayStatus !==
      "unknown"
  ) {
    return false;
  }

  const registrationDateCondition =
    activeCustomerSearchConditions[
      "registration-date"
    ];

  const registrationDateNumber =
    getCustomerSearchDateNumber(
      resultCard.dataset.registrationDate
    );

  if (
    registrationDateCondition !== "all"
  ) {
    if (registrationDateNumber === 0) {
      return false;
    }

    const registrationDate =
      new Date(
        registrationDateNumber
      );

    if (
      registrationDateCondition ===
      "this-month"
    ) {
      const isThisMonth =
        registrationDate.getFullYear() ===
          currentYear &&
        registrationDate.getMonth() + 1 ===
          currentMonth;

      if (!isThisMonth) {
        return false;
      }
    }

    if (
      registrationDateCondition ===
      "within-3-months"
    ) {
      const threeMonthsAgo =
        new Date(today);

      threeMonthsAgo.setMonth(
        threeMonthsAgo.getMonth() - 3
      );

      if (
        registrationDateNumber <
        threeMonthsAgo.getTime()
      ) {
        return false;
      }
    }

    if (
      registrationDateCondition ===
      "within-1-year"
    ) {
      const oneYearAgo =
        new Date(today);

      oneYearAgo.setFullYear(
        oneYearAgo.getFullYear() - 1
      );

      if (
        registrationDateNumber <
        oneYearAgo.getTime()
      ) {
        return false;
      }
    }
  }

  const visitCount =
    Number(
      resultCard.dataset.visitCount ||
      0
    );

  const visitCountCondition =
    activeCustomerSearchConditions[
      "visit-count"
    ];

  if (
    visitCountCondition === "0-5" &&
    (
      visitCount < 0 ||
      visitCount > 5
    )
  ) {
    return false;
  }

  if (
    visitCountCondition === "6-10" &&
    (
      visitCount < 6 ||
      visitCount > 10
    )
  ) {
    return false;
  }

  if (
    visitCountCondition === "11-20" &&
    (
      visitCount < 11 ||
      visitCount > 20
    )
  ) {
    return false;
  }

  if (
    visitCountCondition === "21-plus" &&
    visitCount < 21
  ) {
    return false;
  }

  const totalSales =
    Number(
      resultCard.dataset.totalSales ||
      0
    );

  const totalSalesCondition =
    activeCustomerSearchConditions[
      "total-sales"
    ];

  if (
    totalSalesCondition ===
      "under-50000" &&
    totalSales >= 50000
  ) {
    return false;
  }

  if (
    totalSalesCondition ===
      "50000-99999" &&
    (
      totalSales < 50000 ||
      totalSales >= 100000
    )
  ) {
    return false;
  }

  if (
    totalSalesCondition ===
      "100000-299999" &&
    (
      totalSales < 100000 ||
      totalSales >= 300000
    )
  ) {
    return false;
  }

  if (
    totalSalesCondition ===
      "300000-plus" &&
    totalSales < 300000
  ) {
    return false;
  }

  const booleanConditions = [
    {
      key: "photo",
      datasetValue:
        resultCard.dataset.hasPhoto,
    },
    {
      key: "features",
      datasetValue:
        resultCard.dataset.hasFeatures,
    },
    {
      key: "memo",
      datasetValue:
        resultCard.dataset.hasMemo,
    },
  ];

  const isBooleanConditionMatch =
    booleanConditions.every(
      (condition) => {
        const conditionValue =
          activeCustomerSearchConditions[
            condition.key
          ];

        if (conditionValue === "all") {
          return true;
        }

        if (
          conditionValue ===
          "registered"
        ) {
          return (
            condition.datasetValue ===
            "true"
          );
        }

        return (
          condition.datasetValue ===
          "false"
        );
      }
    );

  return isBooleanConditionMatch;
};

// カード表示と一覧表示を切り替える
customerSearchViewButtons.forEach((viewButton) => {
  viewButton.addEventListener(
    "click",
    () => {
      setCustomerSearchResultView(
        viewButton.dataset.resultView ||
        "list"
      );
    }
  );
});

// PCの並び替えを変更したらすぐに検索結果へ反映する
customerSearchSortInputs.forEach((sortInput) => {
  sortInput.addEventListener(
    "change",
    () => {
      if (!sortInput.checked) {
        return;
      }

      setCustomerSearchSort(
        sortInput.value
      );
    }
  );
});

// スマホの並び替えボタンからパネルを開く
customerSearchMobileSortButton.addEventListener(
  "click",
  openCustomerSearchSortPanel
);

// ×ボタンから並び替えパネルを閉じる
customerSearchSortPanelCloseButton.addEventListener(
  "click",
  closeCustomerSearchSortPanel
);

// パネルの暗い背景を押した場合も閉じる
customerSearchSortPanel.addEventListener(
  "click",
  (event) => {
    if (event.target !== customerSearchSortPanel) {
      return;
    }

    closeCustomerSearchSortPanel();
  }
);

// スマホで選択した並び順を適用する
customerSearchSortPanelSubmitButton.addEventListener(
  "click",
  () => {
    const selectedSortInput =
      customerSearchSortPanel.querySelector(
        'input[name="customerSearchSortMobile"]:checked'
      );

    if (!selectedSortInput) {
      return;
    }

    setCustomerSearchSort(
      selectedSortInput.value
    );

    closeCustomerSearchSortPanel();
  }
);

// Escapeキーでも並び替えパネルを閉じる
document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key !== "Escape" ||
      customerSearchSortPanel.hidden
    ) {
      return;
    }

    closeCustomerSearchSortPanel();
  }
);

// PCの詳細条件を押したときに選択肢を開く
customerSearchConditionRows.forEach((conditionRow) => {
  conditionRow.addEventListener(
    "click",
    () => {
      openCustomerSearchConditionChoicePanel(
        conditionRow.dataset.condition ||
        ""
      );
    }
  );
});

// スマホの詳細条件を押したときに選択肢を開く
customerSearchMobileConditionRows.forEach((conditionRow) => {
  conditionRow.addEventListener(
    "click",
    () => {
      openCustomerSearchConditionChoicePanel(
        conditionRow.dataset.mobileCondition ||
        ""
      );
    }
  );
});

// 選択肢を押したときに条件を変更する
customerSearchConditionChoiceOptions.addEventListener(
  "click",
  (event) => {
    const optionButton =
      event.target.closest(
        ".customer-search-condition-choice-button"
      );

    if (
      !optionButton ||
      !editingCustomerSearchCondition
    ) {
      return;
    }

    draftCustomerSearchConditions[
      editingCustomerSearchCondition
    ] =
      optionButton.dataset.conditionValue ||
      "all";

    applyCustomerSearchDetailConditions();
    closeCustomerSearchConditionChoicePanel();
  }
);

// ×ボタンから条件選択を閉じる
customerSearchConditionChoiceCloseButton.addEventListener(
  "click",
  closeCustomerSearchConditionChoicePanel
);

// 条件選択パネルの暗い背景を押して閉じる
customerSearchConditionChoicePanel.addEventListener(
  "click",
  (event) => {
    if (
      event.target !==
      customerSearchConditionChoicePanel
    ) {
      return;
    }

    closeCustomerSearchConditionChoicePanel();
  }
);

// PCの詳細条件を検索結果へ反映する
customerSearchConditionSubmitButton.addEventListener(
  "click",
  applyCustomerSearchDetailConditions
);

// PCの詳細条件をリセットする
customerSearchConditionResetButton.addEventListener(
  "click",
  resetCustomerSearchDetailConditions
);

// スマホの詳細条件パネルを開く
customerSearchMobileConditionButton.addEventListener(
  "click",
  openCustomerSearchConditionPanel
);

// ×ボタンからスマホの詳細条件を閉じる
customerSearchConditionPanelCloseButton.addEventListener(
  "click",
  closeCustomerSearchConditionPanel
);

// スマホ用パネルの暗い背景を押して閉じる
customerSearchConditionPanel.addEventListener(
  "click",
  (event) => {
    if (
      event.target !==
      customerSearchConditionPanel
    ) {
      return;
    }

    closeCustomerSearchConditionPanel();
  }
);

// スマホの詳細条件をリセットする
customerSearchMobileConditionResetButton.addEventListener(
  "click",
  resetCustomerSearchDetailConditions
);

// スマホの詳細条件を検索結果へ反映する
customerSearchConditionPanelSubmitButton.addEventListener(
  "click",
  () => {
    applyCustomerSearchDetailConditions();
    closeCustomerSearchConditionPanel();
  }
);

// Escapeキーで詳細条件パネルを閉じる
document.addEventListener(
  "keydown",
  (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (
      !customerSearchConditionChoicePanel.hidden
    ) {
      closeCustomerSearchConditionChoicePanel();

      return;
    }

    if (
      !customerSearchConditionPanel.hidden
    ) {
      closeCustomerSearchConditionPanel();
    }
  }
);

// さらに読み込むボタンから次の顧客を表示する
customerSearchLoadMoreButton.addEventListener(
  "click",
  () => {
    if (isCustomerSearchLoadingMore) {
      return;
    }

    isCustomerSearchLoadingMore = true;

    const currentRequestId =
      ++customerSearchLoadMoreRequestId;

    const requestedConditionSignature =
      lastCustomerSearchConditionSignature;

    customerSearchLoadMoreButton.hidden =
      true;

    customerSearchLoading.hidden =
      false;

    // 通信中の動作を確認できるよう少し待ってから表示する
    window.setTimeout(
      () => {
        // 待機中に検索条件が変わった場合は追加しない
        if (
          currentRequestId !==
            customerSearchLoadMoreRequestId ||
          requestedConditionSignature !==
            lastCustomerSearchConditionSignature
        ) {
          return;
        }

        customerSearchVisibleLimit +=
          customerSearchPageSize;

        isCustomerSearchLoadingMore =
          false;

        customerSearchLoading.hidden =
          true;

        updateCustomerSearchResults();
      },
      500
    );
  }
);

// 入力するたびに検索結果を更新する
customerSearchInput.addEventListener(
  "input",
  updateCustomerSearchResults
);

// クイックフィルターを押したときに検索結果を更新する
customerQuickFilterButtons.forEach(
  (filterButton) => {
    filterButton.addEventListener(
      "click",
      () => {
        activeCustomerQuickFilter =
          filterButton.dataset
            .quickFilter ||
          "all";

        // 顧客検索画面から直接押した場合は、現在の月を使用する
        activeCustomerBirthdayFilterMonth =
          activeCustomerQuickFilter ===
          "birthday"
            ? new Date().getMonth() + 1
            : null;

        syncCustomerQuickFilterButtons();
        updateCustomerSearchResults();
      }
    );
  }
);

// Enterを押したときだけ最近検索へ保存する
customerSearchInput.addEventListener(
  "keydown",
  (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    addCustomerRecentSearch(
      customerSearchInput.value
    );
  }
);

// 検索文字を消去する
customerSearchClearButton.addEventListener(
  "click",
  clearCustomerSearch
);

// 該当なし画面から検索条件をすべてリセットする
customerSearchResetButton.addEventListener(
  "click",
  resetCustomerSearchConditions
);

// 最近検索の再検索と個別削除
customerRecentSearchList.addEventListener(
  "click",
  (event) => {
    const removeButton =
      event.target.closest(
        ".customer-recent-search-remove"
      );

    if (removeButton) {
      const recentSearchItem =
        removeButton.closest(
          ".customer-recent-search-item"
        );

      const recentSearchButton =
        recentSearchItem.querySelector(
          ".customer-recent-search-button"
        );

      const searchValue =
        recentSearchButton.dataset.searchValue ||
        "";

      const normalizedSearchValue =
        normalizeCustomerSearchText(
          searchValue
        );

      const updatedRecentSearches =
        getCustomerRecentSearches().filter(
          (savedSearchValue) => {
            return (
              normalizeCustomerSearchText(
                savedSearchValue
              ) !== normalizedSearchValue
            );
          }
        );

      saveCustomerRecentSearches(
        updatedRecentSearches
      );

      renderCustomerRecentSearches();

      return;
    }

    const searchButton =
      event.target.closest(
        ".customer-recent-search-button"
      );

    if (!searchButton) {
      return;
    }

    customerSearchInput.value =
      searchButton.dataset.searchValue ||
      "";

    updateCustomerSearchResults();

    customerSearchInput.focus();
  }
);

// 最近検索をすべて削除する
customerRecentSearchClearButton.addEventListener(
  "click",
  () => {
    saveCustomerRecentSearches([]);

    renderCustomerRecentSearches();
  }
);

// 顧客詳細画面で使用する補足の仮データ
const customerDetailSupplementData = {
  MU00001: {
    birthDate: "1985-04-20",
    memo: "とても気さくで話しやすい。\nシャンパンが好き。\n旅行によく行く。",
    galleryLabels: [
      "メイン写真",
      "好きなお酒",
      "名刺",
    ],
    tendencies: [
      "シャンパンやお酒の話題を好む。",
      "旅行について話すことが多い。",
      "友人と一緒に来店することがある。",
    ],
  },

  MU00002: {
    birthDate: "1992-08-12",
    memo: "笑顔が印象的。\n旅行の話をよくしている。\nスーツでの来店が多い。",
    galleryLabels: [
      "メイン写真",
      "旅行先の写真",
    ],
    tendencies: [
      "旅行の話題を好む。",
      "スーツで来店することが多い。",
      "週末に来店することが多い。",
    ],
  },

  MU00003: {
    birthDate: "1988-12-03",
    memo: "メガネとスーツが特徴。\n赤ワインが好き。\n落ち着いた席を希望する。",
    galleryLabels: [
      "メイン写真",
      "好きなワイン",
      "名刺",
    ],
    tendencies: [
      "赤ワインを好む。",
      "落ち着いた席を希望する。",
      "一人で来店することが多い。",
    ],
  },

  ME00001: {
    birthDate: "",
    memo: "音楽の話が好き。\nFEELCYCLEへ定期的に通っている。\n長身で覚えやすい。",
    galleryLabels: [
      "メイン写真",
    ],
    tendencies: [
      "音楽や運動の話題を好む。",
      "一人で来店することが多い。",
      "定期的に来店している。",
    ],
  },

  MU00050: {
    birthDate: "2003-08-26",
    memo: "学生。\n爽やかな雰囲気。\nボディメイクを継続している。",
    galleryLabels: [],
    tendencies: [
      "運動や食事管理の話題を好む。",
      "一人で来店することが多い。",
      "ボディメイクを継続している。",
    ],
  },

  MU00012: {
    birthDate: "1990-01-15",
    memo: "眼鏡をかけている。\n会社員。\nゴルフの話をよくする。",
    galleryLabels: [],
    tendencies: [
      "ゴルフの話題を好む。",
      "週末の来店が多い。",
      "友人と一緒に来店することがある。",
    ],
  },
};

// 来店履歴に使用する画面確認用のメモ
const customerDetailDefaultVisitMemos = [
  "友人と一緒に来店。",
  "いつもの内容で利用。",
  "おすすめについて質問された。",
  "一人でゆっくり利用。",
  "最近の出来事について話していた。",
  "次回も来店予定とのこと。",
];

// タイムラインで一度に表示する来店履歴数
const customerDetailTimelinePageSize = 5;

// 現在表示できる来店履歴数
let customerDetailTimelineVisibleLimit = customerDetailTimelinePageSize;

// 現在表示している顧客情報
let activeCustomerDetailData = null;

// タイムラインの読み込み状態
let isCustomerDetailTimelineLoading = false;

// 金額を円表記へ整える
const formatCustomerDetailCurrency = (amount) => {
  return `¥${Number(amount || 0).toLocaleString("ja-JP")}`;
};

// 日付をスラッシュ区切りへ整える
const formatCustomerDetailDate = (dateValue) => {
  if (!dateValue) {
    return "未登録";
  }

  return dateValue.replace(/-/g, "/");
};

// 日付をDate型へ変換する
const createCustomerDetailDate = (dateValue) => {
  if (!dateValue) {
    return null;
  }

  const normalizedDate = dateValue.replace(/\//g, "-");

  const date = new Date(`${normalizedDate}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date;
};

// 2つの日付の差を日数で取得する
const getCustomerDetailDayDifference = (
  newerDate,
  olderDate
) => {
  const newer = createCustomerDetailDate(newerDate);
  const older = createCustomerDetailDate(olderDate);

  if (!newer || !older) {
    return 0;
  }

  return Math.max(
    0,
    Math.floor(
      (newer.getTime() - older.getTime()) /
      86400000
    )
  );
};

// 最終来店日から今日までの日数を取得する
const getCustomerDetailDaysSinceVisit = (lastVisit) => {
  const today = new Date();

  const todayText =
    `${today.getFullYear()}-` +
    `${String(today.getMonth() + 1).padStart(2, "0")}-` +
    `${String(today.getDate()).padStart(2, "0")}`;

  return getCustomerDetailDayDifference(
    todayText,
    lastVisit
  );
};

// 誕生日から年齢を取得する
const getCustomerDetailAge = (birthDate) => {
  const birthday = createCustomerDetailDate(birthDate);

  if (!birthday) {
    return null;
  }

  const today = new Date();

  let age =
    today.getFullYear() -
    birthday.getFullYear();

  const hasNotHadBirthday =
    today.getMonth() < birthday.getMonth() ||
    (
      today.getMonth() === birthday.getMonth() &&
      today.getDate() < birthday.getDate()
    );

  if (hasNotHadBirthday) {
    age -= 1;
  }

  return age;
};

// 指定された日付から日数を戻す
const getCustomerDetailPreviousDate = (
  dateValue,
  daysBefore
) => {
  const date = createCustomerDetailDate(dateValue);

  if (!date) {
    return "";
  }

  date.setDate(
    date.getDate() - daysBefore
  );

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 今日の日付をinput用の形式で取得する
const getCustomerDetailTodayInputValue = () => {
  const today = new Date();

  const year = today.getFullYear();

  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    today.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 来店日の曜日を取得する
const getCustomerDetailWeekday = (dateValue) => {
  const date = createCustomerDetailDate(dateValue);

  if (!date) {
    return "不明";
  }

  const weekdays = [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土",
  ];

  return weekdays[date.getDay()];
};

// 画面確認用の来店履歴を作る
const createCustomerDetailHistory = (customerData) => {
  const dayOffsets = [
    0,
    8,
    17,
    25,
    36,
    49,
    63,
    79,
    96,
    115,
    137,
    162,
  ];

  const amountRates = [
    1.2,
    1,
    0.85,
    1.1,
    0.75,
    1.35,
    0.95,
    1.05,
    0.8,
    1.15,
    0.9,
    1.25,
  ];

  return dayOffsets.map(
    (daysBefore, index) => {
      const amount = Math.max(
        1000,
        Math.round(
          (
            customerData.averageSpend *
            amountRates[index]
          ) /
          100
        ) *
        100
      );

      return {
        date: getCustomerDetailPreviousDate(
          customerData.lastVisit,
          daysBefore
        ),

        amount,

        staff: customerData.staff,

        visitNumber: Math.max(
          1,
          customerData.visitCount - index
        ),

        memo:
          customerDetailDefaultVisitMemos[
            index %
            customerDetailDefaultVisitMemos.length
          ],
      };
    }
  );
};

// 顧客詳細画面のタブを切り替える
const setCustomerDetailTab = (tabName) => {
  customerDetailTabButtons.forEach(
    (tabButton) => {
      const isActive =
        tabButton.dataset.customerDetailTab ===
        tabName;

      tabButton.classList.toggle(
        "customer-detail-tab-button--active",
        isActive
      );

      tabButton.setAttribute(
        "aria-selected",
        String(isActive)
      );

      tabButton.tabIndex =
        isActive
          ? 0
          : -1;
    }
  );

  customerDetailPanels.forEach(
    (panel) => {
      panel.hidden =
        panel.dataset.customerDetailPanel !==
        tabName;
    }
  );
};

// 顧客の特徴をタグとして表示する
const renderCustomerDetailFeatures = () => {
  customerDetailFeatureList.replaceChildren();

  if (
    !activeCustomerDetailData ||
    activeCustomerDetailData.features.length === 0
  ) {
    const emptyMessage =
      document.createElement("span");

    emptyMessage.className =
      "customer-detail-feature-empty";

    emptyMessage.textContent =
      "特徴は登録されていません。";

    customerDetailFeatureList.appendChild(
      emptyMessage
    );

    return;
  }

  activeCustomerDetailData.features.forEach(
    (featureName) => {
      const featureTag =
        document.createElement("span");

      featureTag.className =
        "customer-detail-feature-tag";

      featureTag.textContent =
        featureName;

      customerDetailFeatureList.appendChild(
        featureTag
      );
    }
  );
};

// 顧客に登録されている写真・画像を表示する
const renderCustomerDetailGallery = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const galleryLabels =
    activeCustomerDetailData.galleryLabels;

  const galleryItems =
    galleryLabels.map((galleryLabel) => {
      return `
        <div class="customer-detail-gallery-item">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="15"
              rx="2"
            ></rect>

            <circle
              cx="9"
              cy="10"
              r="2"
            ></circle>

            <path
              d="m4 18 5-5 4 4 2-2 5 5"
            ></path>
          </svg>

          <span>
            ${galleryLabel}
          </span>
        </div>
      `;
    }).join("");

  const emptyItem =
    galleryLabels.length === 0
      ? `
        <div class="customer-detail-gallery-item customer-detail-gallery-item--empty">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="15"
              rx="2"
            ></rect>

            <circle
              cx="9"
              cy="10"
              r="2"
            ></circle>

            <path
              d="m4 18 5-5 4 4 2-2 5 5"
            ></path>
          </svg>

          <span>
            画像未登録
          </span>
        </div>
      `
      : "";

  customerDetailGalleryList.innerHTML = `
    ${emptyItem}
    ${galleryItems}

    <button
      class="customer-detail-gallery-item customer-detail-gallery-item--empty customer-detail-gallery-add"
      type="button"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>

      <span>
        追加
      </span>
    </button>
  `;
};

// 来店履歴をタイムラインとして表示する
const renderCustomerDetailTimeline = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const visibleHistory =
    activeCustomerDetailData.history.slice(
      0,
      customerDetailTimelineVisibleLimit
    );

  customerDetailTimelineList.innerHTML =
    visibleHistory.map((history) => {
      const date =
        createCustomerDetailDate(
          history.date
        );

      const year =
        date
          ? date.getFullYear()
          : "";

      const monthDay =
        date
          ? `${String(
              date.getMonth() + 1
            ).padStart(2, "0")}/${String(
              date.getDate()
            ).padStart(2, "0")}`
          : "未登録";

      const daysAgo =
        getCustomerDetailDaysSinceVisit(
          history.date
        );

      return `
        <article class="customer-detail-timeline-item">
          <div class="customer-detail-timeline-date">
            <span>
              ${year}
            </span>

            <strong>
              ${monthDay}
            </strong>

            <small>
              ${daysAgo}日前
            </small>
          </div>

          <div class="customer-detail-timeline-card">
            <div class="customer-detail-timeline-card-header">
              <strong>
                ${formatCustomerDetailCurrency(history.amount)}
              </strong>

              <span class="customer-detail-timeline-staff">
                担当：${history.staff}
              </span>

              <span class="customer-detail-timeline-count">
                来店回数：${history.visitNumber}回目
              </span>
            </div>

            <p class="customer-detail-timeline-memo">
              ${history.memo}
            </p>
          </div>
        </article>
      `;
    }).join("");

  const remainingCount =
    activeCustomerDetailData.history.length -
    customerDetailTimelineVisibleLimit;

  customerDetailTimelineLoadMoreButton.hidden =
    remainingCount <= 0;

  if (remainingCount > 0) {
    const nextLoadCount = Math.min(
      customerDetailTimelinePageSize,
      remainingCount
    );

    customerDetailTimelineLoadMoreButton.textContent =
      `さらに${nextLoadCount}件読み込む`;
  }
};

// 直近6か月の売上グラフを表示する
const renderCustomerDetailSalesChart = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const lastVisitDate =
    createCustomerDetailDate(
      activeCustomerDetailData.lastVisit
    ) ||
    new Date();

  const months = [];

  for (
    let monthIndex = 5;
    monthIndex >= 0;
    monthIndex -= 1
  ) {
    const monthDate =
      new Date(
        lastVisitDate.getFullYear(),
        lastVisitDate.getMonth() -
        monthIndex,
        1
      );

    months.push({
      year: monthDate.getFullYear(),
      month: monthDate.getMonth() + 1,
      total: 0,
    });
  }

  activeCustomerDetailData.history.forEach(
    (history) => {
      const historyDate =
        createCustomerDetailDate(
          history.date
        );

      if (!historyDate) {
        return;
      }

      const matchingMonth =
        months.find((monthData) => {
          return (
            monthData.year ===
              historyDate.getFullYear() &&
            monthData.month ===
              historyDate.getMonth() + 1
          );
        });

      if (matchingMonth) {
        matchingMonth.total +=
          history.amount;
      }
    }
  );

  const maximumSales = Math.max(
    ...months.map((monthData) => {
      return monthData.total;
    }),
    1
  );

  customerDetailSalesChart.innerHTML =
    months.map((monthData) => {
      const barHeight = Math.max(
        3,
        Math.round(
          (
            monthData.total /
            maximumSales
          ) *
          100
        )
      );

      const salesLabel =
        formatCustomerDetailCurrency(
          monthData.total
        );

      return `
        <div class="customer-detail-sales-bar-item">
          <small>
            ${salesLabel}
          </small>

          <div class="customer-detail-sales-bar-track">
            <div
              class="customer-detail-sales-bar"
              style="--bar-height: ${barHeight}%"
            ></div>
          </div>

          <span>
            ${monthData.month}月
          </span>
        </div>
      `;
    }).join("");
};

// 曜日ごとの来店回数を表示する
const renderCustomerDetailWeekdays = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const weekdays = [
    "月",
    "火",
    "水",
    "木",
    "金",
    "土",
    "日",
  ];

  const weekdayCounts = {
    月: 0,
    火: 0,
    水: 0,
    木: 0,
    金: 0,
    土: 0,
    日: 0,
  };

  activeCustomerDetailData.history.forEach(
    (history) => {
      const weekday =
        getCustomerDetailWeekday(
          history.date
        );

      if (
        Object.hasOwn(
          weekdayCounts,
          weekday
        )
      ) {
        weekdayCounts[weekday] += 1;
      }
    }
  );

  // 実際の最大来店回数を取得する
const actualMaximumCount = Math.max(
  ...Object.values(
    weekdayCounts
  )
);

// 棒グラフの0除算を防ぐため、最低値を1にする
const maximumCount = Math.max(
  actualMaximumCount,
  1
);

// 最大回数と同じ曜日をすべて取得する
const favoriteWeekdays =
  weekdays.filter((weekday) => {
    return (
      weekdayCounts[weekday] ===
      actualMaximumCount
    );
  });

// 同率の場合は、該当する曜日をすべて表示する
customerDetailFavoriteWeekday.textContent =
  actualMaximumCount === 0
    ? "データなし"
    : favoriteWeekdays
        .map((weekday) => {
          return `${weekday}曜日`;
        })
        .join("・");

  customerDetailWeekdayList.innerHTML =
    weekdays.map((weekday) => {
      const count =
        weekdayCounts[weekday];

      const width = Math.round(
        (
          count /
          maximumCount
        ) *
        100
      );

      return `
        <div class="customer-detail-weekday-item">
          <span>
            ${weekday}
          </span>

          <div class="customer-detail-weekday-track">
            <div
              class="customer-detail-weekday-bar"
              style="--weekday-width: ${width}%"
            ></div>
          </div>

          <strong>
            ${count}回
          </strong>
        </div>
      `;
    }).join("");
};

// 売上タブの分析内容を表示する
const renderCustomerDetailSales = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const history =
    activeCustomerDetailData.history;

  const recentVisitCount =
    history.filter((visit) => {
      const difference =
        getCustomerDetailDayDifference(
          activeCustomerDetailData.lastVisit,
          visit.date
        );

      return difference <= 90;
    }).length;

  const intervals = [];

  for (
    let index = 0;
    index < history.length - 1;
    index += 1
  ) {
    intervals.push(
      getCustomerDetailDayDifference(
        history[index].date,
        history[index + 1].date
      )
    );
  }

  const averageInterval =
    intervals.length > 0
      ? Math.round(
          intervals.reduce(
            (total, interval) => {
              return total + interval;
            },
            0
          ) /
          intervals.length
        )
      : 0;

  const highestSpend = Math.max(
    ...history.map((visit) => {
      return visit.amount;
    }),
    0
  );

  customerDetailRecentVisitCount.textContent =
    `${recentVisitCount}回来店`;

  customerDetailAverageInterval.textContent =
    averageInterval > 0
      ? `${averageInterval}日に1回`
      : "算出できません";

  customerDetailSalesFirstVisit.textContent =
    formatCustomerDetailDate(
      activeCustomerDetailData.registrationDate
    );

  customerDetailSalesLastVisit.textContent =
    formatCustomerDetailDate(
      activeCustomerDetailData.lastVisit
    );

  customerDetailSalesTotal.textContent =
    formatCustomerDetailCurrency(
      activeCustomerDetailData.totalSales
    );

  customerDetailSalesAverage.textContent =
    formatCustomerDetailCurrency(
      activeCustomerDetailData.averageSpend
    );

  customerDetailSalesVisitCount.textContent =
    `${activeCustomerDetailData.visitCount}回`;

  customerDetailHighestSpend.textContent =
    formatCustomerDetailCurrency(
      highestSpend
    );

  customerDetailTendencyList.innerHTML =
    activeCustomerDetailData.tendencies
      .map((tendency) => {
        return `
          <li>
            ${tendency}
          </li>
        `;
      }).join("");

  renderCustomerDetailSalesChart();
  renderCustomerDetailWeekdays();
};

// 顧客詳細画面全体へ情報を表示する
const renderCustomerDetailScreen = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const customerData =
    activeCustomerDetailData;

  customerDetailAvatar.textContent =
    customerData.initial;

  customerDetailMainPhoto.classList.toggle(
    "customer-detail-main-photo--empty",
    !customerData.hasPhoto
  );

  customerDetailPhotoStatus.textContent =
    customerData.hasPhoto
      ? "写真登録済み"
      : "写真未登録";

  customerDetailName.textContent =
    customerData.name;

  customerDetailId.textContent =
    customerData.id;

  customerDetailLastVisit.textContent =
    formatCustomerDetailDate(
      customerData.lastVisit
    );

  customerDetailLastVisitRelative.textContent =
    `${customerData.daysSinceVisit}日前`;

  customerDetailBasicId.textContent =
    customerData.id;

  customerDetailBirthday.textContent =
    customerData.birthDate
      ? formatCustomerDetailDate(
          customerData.birthDate
        )
      : "未登録";

  customerDetailAge.textContent =
    customerData.age === null
      ? ""
      : `${customerData.age}歳`;

  customerDetailStaff.textContent =
    customerData.staff;

  customerDetailRegistrationDate.textContent =
    formatCustomerDetailDate(
      customerData.registrationDate
    );

  customerDetailVisitCount.textContent =
    `${customerData.visitCount}回`;

  customerDetailFirstVisit.textContent =
    `初回来店：${formatCustomerDetailDate(
      customerData.registrationDate
    )}`;

  customerDetailTotalSales.textContent =
    formatCustomerDetailCurrency(
      customerData.totalSales
    );

  customerDetailSummaryAverage.textContent =
    `平均単価：${formatCustomerDetailCurrency(
      customerData.averageSpend
    )}`;

  customerDetailAverageSpend.textContent =
    formatCustomerDetailCurrency(
      customerData.averageSpend
    );

  customerDetailDaysSinceVisit.textContent =
    `${customerData.daysSinceVisit}日`;

  customerDetailSummaryLastVisit.textContent =
    formatCustomerDetailDate(
      customerData.lastVisit
    );

  customerDetailLatestMemo.textContent =
    customerData.memo;

  renderCustomerDetailFeatures();
  renderCustomerDetailGallery();
  renderCustomerDetailTimeline();
  renderCustomerDetailSales();
};

// 選択した顧客情報を詳細画面用にまとめる
const renderCustomerDetail = (
  requestedCustomerId
) => {
  const resultCard =
    Array.from(
      customerSearchResultCards
    ).find((card) => {
      return (
        card.dataset.customerId ===
        requestedCustomerId
      );
    }) ||
    customerSearchResultCards[0];

  if (!resultCard) {
    return;
  }

  const customerId =
    resultCard.dataset.customerId ||
    "";

  const supplementData =
    customerDetailSupplementData[
      customerId
    ] || {
      birthDate: "",
      memo:
        "メモは登録されていません。",
      galleryLabels: [],
      tendencies: [
        "現在、好みや傾向は登録されていません。",
      ],
    };

  const name =
    resultCard.querySelector(
      ".customer-search-result-name-row strong"
    )?.textContent.trim() ||
    "名前未登録";

  const initial =
    resultCard.querySelector(
      ".customer-search-result-avatar"
    )?.textContent.trim() ||
    name.slice(0, 1);

  const featureText =
    resultCard.querySelector(
      ".customer-search-result-features"
    )?.textContent.trim() ||
    "";

  const features =
    featureText
      .split("・")
      .map((featureName) => {
        return featureName.trim();
      })
      .filter(Boolean);

  const visitCount = Number(
    resultCard.dataset.visitCount ||
    0
  );

  const totalSales = Number(
    resultCard.dataset.totalSales ||
    0
  );

  const averageSpend =
    visitCount > 0
      ? Math.round(
          totalSales /
          visitCount
        )
      : 0;

  activeCustomerDetailData = {
    id: customerId,
    name,
    initial,

    birthDate:
      supplementData.birthDate,

    age:
      getCustomerDetailAge(
        supplementData.birthDate
      ),

    registrationDate:
      resultCard.dataset.registrationDate ||
      "",

    lastVisit:
      resultCard.dataset.lastVisit ||
      "",

    visitCount,
    totalSales,
    averageSpend,

    daysSinceVisit:
      getCustomerDetailDaysSinceVisit(
        resultCard.dataset.lastVisit ||
        ""
      ),

    staff:
      resultCard.dataset.staffMember ||
      "未登録",

    hasPhoto:
      resultCard.dataset.hasPhoto ===
      "true",

    features,

    memo:
      resultCard.dataset.detailMemo ||
      supplementData.memo,

    galleryLabels:
      supplementData.galleryLabels,

    tendencies:
      supplementData.tendencies,

    history: [],

    resultCard,
  };

  activeCustomerDetailData.history =
    createCustomerDetailHistory(
      activeCustomerDetailData
    );

  customerDetailTimelineVisibleLimit =
    customerDetailTimelinePageSize;

  setCustomerDetailTab(
    "overview"
  );

  renderCustomerDetailScreen();

  sessionStorage.setItem(
    "currentCustomerDetailId",
    customerId
  );
};

// 顧客詳細画面のタブを押したとき
customerDetailTabButtons.forEach(
  (tabButton) => {
    tabButton.addEventListener(
      "click",
      () => {
        setCustomerDetailTab(
          tabButton.dataset.customerDetailTab ||
          "overview"
        );
      }
    );
  }
);

// タイムラインをさらに表示する
customerDetailTimelineLoadMoreButton.addEventListener(
  "click",
  () => {
    if (
      isCustomerDetailTimelineLoading ||
      !activeCustomerDetailData
    ) {
      return;
    }

    isCustomerDetailTimelineLoading =
      true;

    customerDetailTimelineLoadMoreButton.hidden =
      true;

    customerDetailTimelineLoading.hidden =
      false;

    window.setTimeout(
      () => {
        customerDetailTimelineVisibleLimit +=
          customerDetailTimelinePageSize;

        isCustomerDetailTimelineLoading =
          false;

        customerDetailTimelineLoading.hidden =
          true;

        renderCustomerDetailTimeline();
      },
      400
    );
  }
);

// 顧客情報の編集画面を開く
const openCustomerDetailEditDialog = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  customerDetailEditNameInput.value =
    activeCustomerDetailData.name;

  customerDetailEditStaffInput.value =
    activeCustomerDetailData.staff;

  customerDetailEditFeaturesInput.value =
    activeCustomerDetailData.features.join(
      ", "
    );

  customerDetailEditMemoInput.value =
    activeCustomerDetailData.memo;

  customerDetailEditDialog.hidden =
    false;

  document.body.classList.add(
    "customer-search-panel-open"
  );

  customerDetailEditNameInput.focus();
};

// 顧客情報の編集画面を閉じる
const closeCustomerDetailEditDialog = () => {
  customerDetailEditDialog.hidden =
    true;

  document.body.classList.remove(
    "customer-search-panel-open"
  );
};

// 各編集ボタンから編集画面を開く
customerDetailEditTriggers.forEach(
  (editButton) => {
    editButton.addEventListener(
      "click",
      openCustomerDetailEditDialog
    );
  }
);

// ×ボタンで編集画面を閉じる
customerDetailEditCloseButton.addEventListener(
  "click",
  closeCustomerDetailEditDialog
);

// キャンセルボタンで編集画面を閉じる
customerDetailEditCancelButton.addEventListener(
  "click",
  closeCustomerDetailEditDialog
);

// 編集画面の背景を押したときに閉じる
customerDetailEditDialog.addEventListener(
  "click",
  (event) => {
    if (
      event.target ===
      customerDetailEditDialog
    ) {
      closeCustomerDetailEditDialog();
    }
  }
);

// Escapeキーで編集画面を閉じる
document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "Escape" &&
      !customerDetailEditDialog.hidden
    ) {
      closeCustomerDetailEditDialog();
    }
  }
);

// 編集内容を顧客詳細画面と検索結果へ反映する
customerDetailEditForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    if (!activeCustomerDetailData) {
      return;
    }

    const updatedName =
      customerDetailEditNameInput.value.trim();

    const updatedFeatures =
      customerDetailEditFeaturesInput.value
        .split(",")
        .map((featureName) => {
          return featureName.trim();
        })
        .filter(Boolean);

    const updatedMemo =
      customerDetailEditMemoInput.value.trim();

    activeCustomerDetailData.name =
      updatedName;

    activeCustomerDetailData.initial =
      updatedName.slice(0, 1) ||
      "客";

    activeCustomerDetailData.staff =
      customerDetailEditStaffInput.value;

    activeCustomerDetailData.features =
      updatedFeatures;

    activeCustomerDetailData.memo =
      updatedMemo ||
      "メモは登録されていません。";

    const resultCard =
      activeCustomerDetailData.resultCard;

    // 検索結果カードのデータも更新する
    resultCard.dataset.customerName =
      activeCustomerDetailData.name;

    resultCard.dataset.staffMember =
      activeCustomerDetailData.staff;

    resultCard.dataset.hasFeatures =
      String(
        updatedFeatures.length > 0
      );

    resultCard.dataset.hasMemo =
      String(updatedMemo !== "");

    resultCard.dataset.detailMemo =
      activeCustomerDetailData.memo;

    const resultName =
      resultCard.querySelector(
        ".customer-search-result-name-row strong"
      );

    const resultAvatar =
      resultCard.querySelector(
        ".customer-search-result-avatar"
      );

    const resultFeatures =
      resultCard.querySelector(
        ".customer-search-result-features"
      );

    if (resultName) {
      resultName.textContent =
        activeCustomerDetailData.name;
    }

    if (resultAvatar) {
      resultAvatar.textContent =
        activeCustomerDetailData.initial;
    }

    if (resultFeatures) {
      resultFeatures.textContent =
        updatedFeatures.length > 0
          ? updatedFeatures.join("・")
          : "特徴未登録";
    }

    resultCard.dataset.searchText = [
      activeCustomerDetailData.name,
      activeCustomerDetailData.id,
      ...updatedFeatures,
      activeCustomerDetailData.memo,
      activeCustomerDetailData.staff,
    ].join(" ");

    renderCustomerDetailScreen();
    closeCustomerDetailEditDialog();
  }
);

// 顧客一覧へ戻る
customerDetailBackButton.addEventListener(
  "click",
  () => {
    showView(
      "customer-search",
      "auto"
    );
  }
);

// 詳細画面で開いている顧客を選択済みにして来店登録画面を開く
const openCustomerVisitRegistration = () => {
  if (!activeCustomerDetailData) {
    return;
  }

  const birthDate =
    createCustomerDetailDate(
      activeCustomerDetailData.birthDate
    );

  // 既存の顧客選択処理へ渡す仮の検索結果を作る
  const temporaryResultItem =
    document.createElement("article");

  temporaryResultItem.dataset.customerName =
    activeCustomerDetailData.name;

  temporaryResultItem.dataset.customerId =
    activeCustomerDetailData.id;

  temporaryResultItem.dataset.customerInitial =
    activeCustomerDetailData.initial;

  temporaryResultItem.dataset.lastVisit =
    formatCustomerDetailDate(
      activeCustomerDetailData.lastVisit
    );

  temporaryResultItem.dataset.visitCount =
    String(
      activeCustomerDetailData.visitCount
    );

  temporaryResultItem.dataset.totalSales =
    String(
      activeCustomerDetailData.totalSales
    );

  temporaryResultItem.dataset.averageSpend =
    String(
      activeCustomerDetailData.averageSpend
    );

  temporaryResultItem.dataset.features =
    activeCustomerDetailData.features.join(
      ","
    );

  temporaryResultItem.dataset.recentMemo =
    activeCustomerDetailData.memo;

  temporaryResultItem.dataset.birthdayStatus =
    birthDate
      ? "known"
      : "unknown";

  temporaryResultItem.dataset.birthYear =
    birthDate
      ? String(
          birthDate.getFullYear()
        )
      : "";

  temporaryResultItem.dataset.birthMonth =
    birthDate
      ? String(
          birthDate.getMonth() + 1
        )
      : "";

  temporaryResultItem.dataset.birthDay =
    birthDate
      ? String(
          birthDate.getDate()
        )
      : "";

  // 常連顧客の来店登録画面へ移動する
  showView(
    "regular-customer",
    "auto"
  );

  window.requestAnimationFrame(
    () => {
      // 顧客名・ID・誕生日・特徴などを自動入力する
      showSelectedRegularCustomer(
        temporaryResultItem
      );

      // 今回の来店日には今日の日付を入れる
      regularVisitDateInput.value =
        getCustomerDetailTodayInputValue();

      // 既存の担当スタッフを初期選択する
      regularStaffMemberInput.value =
        activeCustomerDetailData.staff;

      // 会計金額と今回の来店メモは新規入力にする
      regularPaymentAmountInput.value =
        "";

      regularCustomerMemo.value =
        "";

      // 選択中の顧客を検索欄にも表示する
      regularCustomerSearchInput.value =
        `${activeCustomerDetailData.name} ${activeCustomerDetailData.id}`;
    }
  );
};

// 各「来店を登録する」ボタンを動かす
customerDetailRegisterButtons.forEach(
  (registerButton) => {
    registerButton.addEventListener(
      "click",
      openCustomerVisitRegistration
    );
  }
);

// 写真・画像の追加ボタンは現在のフロント版では案内を表示する
customerDetailGalleryList.addEventListener(
  "click",
  (event) => {
    const addButton =
      event.target.closest(
        ".customer-detail-gallery-add"
      );

    if (!addButton) {
      return;
    }

    window.alert(
      "写真・画像の保存機能は、GoogleスプレッドシートとGASの接続時に実装します。"
    );
  }
);

// 顧客カードから顧客詳細画面を開く
customerSearchResultOpenButtons.forEach((openButton) => {
  openButton.addEventListener(
    "click",
    () => {
      addCustomerRecentSearch(
        customerSearchInput.value
      );

      const customerId =
        openButton.dataset.customerId ||
        "";

      saveCustomerRecentlyViewedCustomer(
        customerId
      );

      if (
        activeCustomerSort ===
        "recently-viewed"
      ) {
        applyCustomerSearchSort();
      }

      renderCustomerDetail(
        customerId
      );

      showView(
        "customer-detail"
      );
    }
  );
});

// スクロール量に応じてTOPボタンの表示を切り替える
const updateCustomerSearchScrollTopButton = () => {
  const shouldShow =
    window.scrollY >= 360;

  customerSearchScrollTopButton.classList.toggle(
    "customer-search-scroll-top--visible",
    shouldShow
  );

  customerSearchScrollTopButton.setAttribute(
    "aria-hidden",
    String(!shouldShow)
  );

  customerSearchScrollTopButton.tabIndex =
    shouldShow
      ? 0
      : -1;
};

// TOPボタンを押したら画面上部へなめらかに戻る
customerSearchScrollTopButton.addEventListener(
  "click",
  () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
);

// スクロールするたびにTOPボタンの表示を更新する
window.addEventListener(
  "scroll",
  updateCustomerSearchScrollTopButton,
  {
    passive: true,
  }
);

// 初期表示時にも現在のスクロール位置を確認する
updateCustomerSearchScrollTopButton();

// ページ表示時に履歴・表示方法・並び順・検索結果を反映する
renderCustomerRecentSearches();
setCustomerSearchResultView(
  activeCustomerResultView,
  false
);
syncCustomerSearchSortInputs();
syncCustomerSearchConditionRows();
applyCustomerSearchSort();
updateCustomerSearchResults();

// 選択した月ごとのサマリー仮データ
const summaryMonthData = {
  "2026-07": {
    monthNumber: 7,
    referenceDate: "2026-07-31",

    periods: {
      month: {
        sales: 548000,
        salesRate: "+8.2%",
        salesDifference: "+¥41,000",
        visits: 63,
        visitDifference: "+6回",
        visitRate: "+10.5%",
        newCustomers: 12,
        newDifference: "+3名",
        newRate: "+33.3%",
        averageSpend: 8698,
        averageDifference: "+¥620",
        averageRate: "+7.7%",
        regularVisits: 51,
        newVisits: 12,
        chartFactor: 1,
      },

      "three-months": {
        sales: 1542000,
        salesRate: "+6.4%",
        salesDifference: "+¥93,000",
        visits: 184,
        visitDifference: "+15回",
        visitRate: "+8.9%",
        newCustomers: 34,
        newDifference: "+7名",
        newRate: "+25.9%",
        averageSpend: 8380,
        averageDifference: "+¥210",
        averageRate: "+2.6%",
        regularVisits: 150,
        newVisits: 34,
        chartFactor: 2.7,
      },

      "six-months": {
        sales: 2980000,
        salesRate: "+11.2%",
        salesDifference: "+¥300,000",
        visits: 352,
        visitDifference: "+31回",
        visitRate: "+9.7%",
        newCustomers: 61,
        newDifference: "+12名",
        newRate: "+24.5%",
        averageSpend: 8466,
        averageDifference: "+¥340",
        averageRate: "+4.2%",
        regularVisits: 291,
        newVisits: 61,
        chartFactor: 5.2,
      },

      year: {
        sales: 6320000,
        salesRate: "+13.7%",
        salesDifference: "+¥762,000",
        visits: 731,
        visitDifference: "+74回",
        visitRate: "+11.3%",
        newCustomers: 124,
        newDifference: "+25名",
        newRate: "+25.3%",
        averageSpend: 8646,
        averageDifference: "+¥185",
        averageRate: "+2.2%",
        regularVisits: 607,
        newVisits: 124,
        chartFactor: 10.8,
      },
    },

    birthdays: {
      total: 9,
      thisWeek: 2,
      nextWeek: 3,
    },

    weekdays: [
      { weekday: "月", count: 5 },
      { weekday: "火", count: 7 },
      { weekday: "水", count: 6 },
      { weekday: "木", count: 9 },
      { weekday: "金", count: 14 },
      { weekday: "土", count: 10 },
      { weekday: "日", count: 4 },
    ],

    noVisitCustomers: [
      {
        id: "MU00001",
        name: "浅田 けん",
        initial: "浅",
        lastVisit: "2026-06-18",
        staff: "よっしー",
      },

      {
        id: "MU00003",
        name: "山本 大輔",
        initial: "山",
        lastVisit: "2026-05-30",
        staff: "ずーみん",
      },

      {
        id: "MU00002",
        name: "田中 翔",
        initial: "田",
        lastVisit: "2026-04-08",
        staff: "ずーみん",
      },

      {
        id: "ME00001",
        name: "Ren",
        initial: "R",
        lastVisit: "2026-02-15",
        staff: "はるちゃん",
      },

      {
        id: "MU00012",
        name: "鈴木 健太",
        initial: "鈴",
        lastVisit: "2025-12-10",
        staff: "よっしー",
      },

      {
        id: "MU00050",
        name: "佐藤 亮介",
        initial: "佐",
        lastVisit: "2025-08-01",
        staff: "ずーみん",
      },
    ],

    charts: {
      daily: {
        labels: [
          "7/1",
          "7/3",
          "7/5",
          "7/8",
          "7/10",
          "7/13",
          "7/15",
          "7/18",
          "7/20",
          "7/23",
          "7/26",
          "7/31",
        ],

        sales: [
          10000,
          28000,
          13000,
          24000,
          17000,
          29000,
          8000,
          23000,
          18000,
          33000,
          75000,
          28000,
        ],

        visits: [
          1,
          2,
          2,
          3,
          2,
          4,
          2,
          3,
          3,
          4,
          6,
          3,
        ],
      },

      monthly: {
        labels: [
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
        ],

        sales: [
          360000,
          430000,
          468000,
          481000,
          507000,
          548000,
        ],

        visits: [
          48,
          52,
          56,
          53,
          57,
          63,
        ],
      },
    },
  },

  "2026-06": {
    monthNumber: 6,
    referenceDate: "2026-06-30",

    periods: {
      month: {
        sales: 507000,
        salesRate: "+5.4%",
        salesDifference: "+¥26,000",
        visits: 57,
        visitDifference: "+4回",
        visitRate: "+7.5%",
        newCustomers: 9,
        newDifference: "+1名",
        newRate: "+12.5%",
        averageSpend: 8078,
        averageDifference: "+¥230",
        averageRate: "+2.9%",
        regularVisits: 48,
        newVisits: 9,
        chartFactor: 1,
      },

      "three-months": {
        sales: 1458000,
        salesRate: "+5.8%",
        salesDifference: "+¥80,000",
        visits: 171,
        visitDifference: "+12回",
        visitRate: "+7.5%",
        newCustomers: 31,
        newDifference: "+5名",
        newRate: "+19.2%",
        averageSpend: 8526,
        averageDifference: "+¥180",
        averageRate: "+2.2%",
        regularVisits: 140,
        newVisits: 31,
        chartFactor: 2.6,
      },

      "six-months": {
        sales: 2810000,
        salesRate: "+9.6%",
        salesDifference: "+¥246,000",
        visits: 331,
        visitDifference: "+26回",
        visitRate: "+8.5%",
        newCustomers: 56,
        newDifference: "+10名",
        newRate: "+21.7%",
        averageSpend: 8489,
        averageDifference: "+¥280",
        averageRate: "+3.4%",
        regularVisits: 275,
        newVisits: 56,
        chartFactor: 5,
      },

      year: {
        sales: 6080000,
        salesRate: "+12.4%",
        salesDifference: "+¥671,000",
        visits: 702,
        visitDifference: "+65回",
        visitRate: "+10.2%",
        newCustomers: 117,
        newDifference: "+21名",
        newRate: "+21.9%",
        averageSpend: 8661,
        averageDifference: "+¥160",
        averageRate: "+1.9%",
        regularVisits: 585,
        newVisits: 117,
        chartFactor: 10.4,
      },
    },

    birthdays: {
      total: 7,
      thisWeek: 1,
      nextWeek: 2,
    },

    weekdays: [
      { weekday: "月", count: 6 },
      { weekday: "火", count: 8 },
      { weekday: "水", count: 5 },
      { weekday: "木", count: 10 },
      { weekday: "金", count: 12 },
      { weekday: "土", count: 9 },
      { weekday: "日", count: 7 },
    ],

    noVisitCustomers: [
      {
        id: "MU00003",
        name: "山本 大輔",
        initial: "山",
        lastVisit: "2026-05-20",
        staff: "よっしー",
      },

      {
        id: "ME00001",
        name: "Ren",
        initial: "R",
        lastVisit: "2026-04-12",
        staff: "はるちゃん",
      },

      {
        id: "MU00002",
        name: "田中 翔",
        initial: "田",
        lastVisit: "2026-03-18",
        staff: "ずーみん",
      },

      {
        id: "MU00012",
        name: "鈴木 健太",
        initial: "鈴",
        lastVisit: "2026-01-10",
        staff: "よっしー",
      },

      {
        id: "MU00050",
        name: "佐藤 亮介",
        initial: "佐",
        lastVisit: "2025-11-01",
        staff: "ずーみん",
      },

      {
        id: "MU00001",
        name: "浅田 けん",
        initial: "浅",
        lastVisit: "2025-07-20",
        staff: "よっしー",
      },
    ],

    charts: {
      daily: {
        labels: [
          "6/1",
          "6/3",
          "6/6",
          "6/9",
          "6/12",
          "6/15",
          "6/18",
          "6/21",
          "6/24",
          "6/26",
          "6/28",
          "6/30",
        ],

        sales: [
          14000,
          21000,
          18000,
          32000,
          12000,
          26000,
          19000,
          36000,
          24000,
          51000,
          29000,
          34000,
        ],

        visits: [
          1,
          2,
          2,
          3,
          1,
          3,
          2,
          4,
          3,
          5,
          3,
          4,
        ],
      },

      monthly: {
        labels: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
        ],

        sales: [
          332000,
          360000,
          430000,
          468000,
          481000,
          507000,
        ],

        visits: [
          44,
          48,
          52,
          56,
          53,
          57,
        ],
      },
    },
  },

  "2026-05": {
    monthNumber: 5,
    referenceDate: "2026-05-31",

    periods: {
      month: {
        sales: 481000,
        salesRate: "+4.1%",
        salesDifference: "+¥19,000",
        visits: 53,
        visitDifference: "+2回",
        visitRate: "+3.9%",
        newCustomers: 8,
        newDifference: "+2名",
        newRate: "+33.3%",
        averageSpend: 7848,
        averageDifference: "+¥150",
        averageRate: "+1.9%",
        regularVisits: 45,
        newVisits: 8,
        chartFactor: 1,
      },

      "three-months": {
        sales: 1379000,
        salesRate: "+4.9%",
        salesDifference: "+¥64,000",
        visits: 159,
        visitDifference: "+9回",
        visitRate: "+6%",
        newCustomers: 27,
        newDifference: "+4名",
        newRate: "+17.4%",
        averageSpend: 8673,
        averageDifference: "+¥120",
        averageRate: "+1.4%",
        regularVisits: 132,
        newVisits: 27,
        chartFactor: 2.5,
      },

      "six-months": {
        sales: 2640000,
        salesRate: "+8.1%",
        salesDifference: "+¥198,000",
        visits: 305,
        visitDifference: "+21回",
        visitRate: "+7.4%",
        newCustomers: 49,
        newDifference: "+8名",
        newRate: "+19.5%",
        averageSpend: 8656,
        averageDifference: "+¥210",
        averageRate: "+2.5%",
        regularVisits: 256,
        newVisits: 49,
        chartFactor: 4.8,
      },

      year: {
        sales: 5790000,
        salesRate: "+10.8%",
        salesDifference: "+¥565,000",
        visits: 663,
        visitDifference: "+55回",
        visitRate: "+9%",
        newCustomers: 108,
        newDifference: "+18名",
        newRate: "+20%",
        averageSpend: 8733,
        averageDifference: "+¥140",
        averageRate: "+1.6%",
        regularVisits: 555,
        newVisits: 108,
        chartFactor: 10,
      },
    },

    birthdays: {
      total: 6,
      thisWeek: 1,
      nextWeek: 1,
    },

    weekdays: [
      { weekday: "月", count: 5 },
      { weekday: "火", count: 6 },
      { weekday: "水", count: 7 },
      { weekday: "木", count: 8 },
      { weekday: "金", count: 11 },
      { weekday: "土", count: 10 },
      { weekday: "日", count: 6 },
    ],

    noVisitCustomers: [
      {
        id: "MU00001",
        name: "浅田 けん",
        initial: "浅",
        lastVisit: "2026-04-20",
        staff: "よっしー",
      },

      {
        id: "MU00002",
        name: "田中 翔",
        initial: "田",
        lastVisit: "2026-03-29",
        staff: "ずーみん",
      },

      {
        id: "MU00003",
        name: "山本 大輔",
        initial: "山",
        lastVisit: "2026-02-14",
        staff: "よっしー",
      },

      {
        id: "ME00001",
        name: "Ren",
        initial: "R",
        lastVisit: "2026-01-08",
        staff: "はるちゃん",
      },

      {
        id: "MU00012",
        name: "鈴木 健太",
        initial: "鈴",
        lastVisit: "2025-10-15",
        staff: "よっしー",
      },

      {
        id: "MU00050",
        name: "佐藤 亮介",
        initial: "佐",
        lastVisit: "2025-06-01",
        staff: "ずーみん",
      },
    ],

    charts: {
      daily: {
        labels: [
          "5/1",
          "5/4",
          "5/7",
          "5/10",
          "5/13",
          "5/16",
          "5/19",
          "5/21",
          "5/24",
          "5/27",
          "5/29",
          "5/31",
        ],

        sales: [
          12000,
          19000,
          26000,
          15000,
          31000,
          22000,
          17000,
          29000,
          38000,
          24000,
          46000,
          27000,
        ],

        visits: [
          1,
          2,
          3,
          2,
          3,
          2,
          2,
          3,
          4,
          3,
          5,
          3,
        ],
      },

      monthly: {
        labels: [
          "12月",
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
        ],

        sales: [
          310000,
          332000,
          360000,
          430000,
          468000,
          481000,
        ],

        visits: [
          41,
          44,
          48,
          52,
          56,
          53,
        ],
      },
    },
  },
};

// 選択した月を保存するときに使用する名前
const summaryMonthStorageKey =
  "customerCrmSummaryMonth";

// 前回選択した月を取得する
const savedSummaryMonth =
  localStorage.getItem(
    summaryMonthStorageKey
  );

// 保存されている月が使用可能なら復元する
let activeSummaryMonth =
  Object.prototype.hasOwnProperty.call(
    summaryMonthData,
    savedSummaryMonth
  )
    ? savedSummaryMonth
    : "2026-07";

// 現在選択中の集計期間
let activeSummaryPeriod = "month";

// 現在選択中のグラフ表示
let activeSummaryChartMode = "daily";

// 現在選択中の来店なし期間
let activeSummaryNoVisitDays = 30;

// 来店なし顧客をすべて表示するか
let isSummaryNoVisitShowingAll = false;

// 現在選択中の月データを取得する
const getActiveSummaryMonthData = () => {
  return (
    summaryMonthData[
      activeSummaryMonth
    ] ||
    summaryMonthData["2026-07"]
  );
};

// 現在選択中の集計期間データを取得する
const getActiveSummaryPeriodData = () => {
  const monthData =
    getActiveSummaryMonthData();

  return (
    monthData.periods[
      activeSummaryPeriod
    ] ||
    monthData.periods.month
  );
};

// 選択中の期間名を取得する
const getActiveSummaryPeriodLabel = () => {
  const monthData =
    getActiveSummaryMonthData();

  const periodLabels = {
    month:
      `${monthData.monthNumber}月`,
    "three-months":
      "3か月",
    "six-months":
      "6か月",
    year:
      "1年",
  };

  return (
    periodLabels[
      activeSummaryPeriod
    ] ||
    `${monthData.monthNumber}月`
  );
};

// サマリー用の円表記
const formatSummaryCurrency = (amount) => {
  return `¥${Number(amount || 0).toLocaleString("ja-JP")}`;
};

// 来店日から選択月の基準日までの日数を計算する
const getSummaryDaysSinceVisit = (
  lastVisit,
  referenceDate
) => {
  const visitDate = new Date(
    `${lastVisit}T00:00:00`
  );

  const selectedReferenceDate =
    new Date(
      `${referenceDate}T00:00:00`
    );

  if (
    Number.isNaN(
      visitDate.getTime()
    ) ||
    Number.isNaN(
      selectedReferenceDate.getTime()
    )
  ) {
    return 0;
  }

  return Math.max(
    0,
    Math.floor(
      (
        selectedReferenceDate.getTime() -
        visitDate.getTime()
      ) /
      86400000
    )
  );
};

// ホーム画面に必要な最新データをまとめる
const getHomeDashboardData = () => {
  const monthData =
    getActiveSummaryMonthData();

  const periodData =
    monthData.periods.month;

  const customerCards =
    Array.from(
      customerSearchResultCards
    );

  // 現在の月を取得する
  const currentMonth =
    new Date().getMonth() + 1;

  // 今月が誕生日のお客様を数える
  const currentMonthBirthdayCount =
    customerCards.filter(
      (customerCard) => {
        return (
          Number(
            customerCard.dataset.birthMonth
          ) === currentMonth
        );
      }
    ).length;

  // 誕生日が未登録のお客様を数える
  const birthdayUnregisteredCount =
    customerCards.filter(
      (customerCard) => {
        return (
          customerCard.dataset
            .birthdayStatus ===
          "unknown"
        );
      }
    ).length;

  // 30日以上来店していない顧客を数える
  const noVisitCount =
    monthData.noVisitCustomers.filter(
      (customer) => {
        return (
          getSummaryDaysSinceVisit(
            customer.lastVisit,
            monthData.referenceDate
          ) >= 30
        );
      }
    ).length;

  // 指定した情報が未登録の顧客を数える
  const countUnregisteredCustomers = (
    datasetKey
  ) => {
    return customerCards.filter(
      (customerCard) => {
        return (
          customerCard.dataset[
            datasetKey
          ] !== "true"
        );
      }
    ).length;
  };

  return {
    monthNumber: monthData.monthNumber,

    sales: periodData.sales,
    salesRate: periodData.salesRate,
    visits: periodData.visits,
    newCustomers:
      periodData.newCustomers,
    averageSpend:
      periodData.averageSpend,

    birthdayMonth:
      currentMonth,

    // 誕生日通知で表示する対象月
    birthdayMonth:
      currentMonth,

    // 今月が誕生日のお客様の人数
    birthdays:
      currentMonthBirthdayCount,

    birthdayUnregistered:
      birthdayUnregisteredCount,

    noVisitCount,

    photoUnregistered:
      countUnregisteredCustomers(
        "hasPhoto"
      ),

    memoUnregistered:
      countUnregisteredCustomers(
        "hasMemo"
      ),

    featuresUnregistered:
      countUnregisteredCustomers(
        "hasFeatures"
      ),
  };
};


// ホーム画面のAIサマリーと通知を表示する
const renderHomeDashboard = () => {
  const homeData =
    getHomeDashboardData();

  // 現在のデータからサマリー文章を作る
  const summaryItems = [
    `${homeData.monthNumber}月の売上は${formatSummaryCurrency(
      homeData.sales
    )}で、前月比${homeData.salesRate}です。`,

    `新規顧客は${homeData.newCustomers}名、来店回数は${homeData.visits}回です。`,

    `平均単価は${formatSummaryCurrency(
      homeData.averageSpend
    )}、30日以上来店のない顧客は${homeData.noVisitCount}名です。`,
  ];

  homeAiSummaryList.innerHTML =
    summaryItems
      .map((summaryItem) => {
        return `<li>${summaryItem}</li>`;
      })
      .join("");

    // やることカードへ最新人数を表示する
    homeTodoPhotoCount.textContent =
      String(
        homeData.photoUnregistered
      );

    homeTodoBirthdayCount.textContent =
      String(
        homeData.birthdayUnregistered
      );

    homeTodoMemoCount.textContent =
      String(
        homeData.memoUnregistered
      );

    homeTodoFeaturesCount.textContent =
      String(
        homeData.featuresUnregistered
      );

  // 対応が必要な項目から通知を作る
  const notifications = [
    {
      action: "birthday",
      count: homeData.birthdays,
      title:
        `${homeData.birthdayMonth}月がお誕生日のお客様が${homeData.birthdays}名います`,
      description:
        "お祝いの準備を確認しましょう。",
    },

    {
      action: "no-visit",
      count: homeData.noVisitCount,
      title:
        `30日以上来店のない顧客が${homeData.noVisitCount}名います`,
      description:
        "最終来店日を確認しましょう。",
    },

    {
      action: "photo",
      count:
        homeData.photoUnregistered,
      title:
        `写真未登録のお客様が${homeData.photoUnregistered}名います`,
      description:
        "顧客写真を登録しましょう。",
    },

    {
      action: "memo",
      count:
        homeData.memoUnregistered,
      title:
        `メモ未登録のお客様が${homeData.memoUnregistered}名います`,
      description:
        "接客メモを登録しましょう。",
    },

    {
      action: "features",
      count:
        homeData.featuresUnregistered,
      title:
        `特徴未登録のお客様が${homeData.featuresUnregistered}名います`,
      description:
        "お客様の特徴を登録しましょう。",
    },
  ].filter((notification) => {
    return notification.count > 0;
  });

  // 通知件数を表示する
  const notificationCount =
    notifications.length;

  notificationBadge.textContent =
    String(notificationCount);

  notificationPanelCount.textContent =
    `${notificationCount}件`;

  notificationButton.setAttribute(
    "aria-label",
    `お知らせ ${notificationCount}件`
  );

  // 通知が0件ならバッジを隠す
  notificationBadge.hidden =
    notificationCount === 0;

  // 通知一覧を表示する
  notificationList.innerHTML =
    notifications
      .map((notification) => {
        return `
          <button
            class="notification-item"
            type="button"
            data-notification-action="${notification.action}"
          >
            <span
              class="notification-item-dot"
              aria-hidden="true"
            ></span>

            <span class="notification-item-content">
              <span class="notification-item-title">
                ${notification.title}
              </span>

              <span class="notification-item-description">
                ${notification.description}
              </span>
            </span>
          </button>
        `;
      })
      .join("");
};

// 主要な数字を表示する
const renderSummaryKpis = () => {
  const periodData =
    getActiveSummaryPeriodData();

  summarySalesValue.textContent =
    formatSummaryCurrency(
      periodData.sales
    );

  summarySalesRate.textContent =
    periodData.salesRate;

  summarySalesDifference.textContent =
    periodData.salesDifference;

  summaryVisitValue.textContent =
    `${periodData.visits}回`;

  summaryVisitDifference.textContent =
    periodData.visitDifference;

  summaryVisitRate.textContent =
    periodData.visitRate;

  summaryNewValue.textContent =
    `${periodData.newCustomers}名`;

  summaryNewDifference.textContent =
    periodData.newDifference;

  summaryNewRate.textContent =
    periodData.newRate;

  summaryAverageValue.textContent =
    formatSummaryCurrency(
      periodData.averageSpend
    );

  summaryAverageDifference.textContent =
    periodData.averageDifference;

  summaryAverageRate.textContent =
    periodData.averageRate;
};

// 新規・常連の割合を表示する
const renderSummaryRatio = () => {
  const periodData =
    getActiveSummaryPeriodData();

  const totalVisits =
    periodData.regularVisits +
    periodData.newVisits;

  const regularPercent =
    totalVisits > 0
      ? Math.round(
          (
            periodData.regularVisits /
            totalVisits
          ) *
          100
        )
      : 0;

  const newPercent =
    100 -
    regularPercent;

  summaryRatioDonut.style.setProperty(
    "--regular-percent",
    `${regularPercent}%`
  );

  summaryRatioTotal.textContent =
    totalVisits;

  summaryRegularCount.textContent =
    `${periodData.regularVisits}回`;

  summaryRegularPercent.textContent =
    `${regularPercent}%`;

  summaryNewCount.textContent =
    `${periodData.newVisits}回`;

  summaryNewPercent.textContent =
    `${newPercent}%`;
};

// 売上推移グラフを表示する
const renderSummaryTrendChart = () => {
  const monthData =
    getActiveSummaryMonthData();

  const periodData =
    getActiveSummaryPeriodData();

  const sourceData =
    activeSummaryChartMode ===
    "monthly"
      ? monthData.charts.monthly
      : monthData.charts.daily;

  const salesData =
    sourceData.sales.map(
      (salesAmount) => {
        return Math.round(
          salesAmount *
          periodData.chartFactor
        );
      }
    );

  const visitData =
    sourceData.visits.map(
      (visitCount) => {
        return Math.max(
          1,
          Math.round(
            visitCount *
            Math.sqrt(
              periodData.chartFactor
            )
          )
        );
      }
    );

  const width = 780;
  const height = 300;
  const leftPadding = 58;
  const rightPadding = 48;
  const topPadding = 24;
  const bottomPadding = 42;

  const chartWidth =
    width -
    leftPadding -
    rightPadding;

  const chartHeight =
    height -
    topPadding -
    bottomPadding;

  const maximumSales =
    Math.max(
      ...salesData,
      1
    );

  const maximumVisits =
    Math.max(
      ...visitData,
      1
    );

  const getXPosition = (index) => {
    if (
      sourceData.labels.length ===
      1
    ) {
      return leftPadding;
    }

    return (
      leftPadding +
      (
        chartWidth /
        (
          sourceData.labels.length -
          1
        )
      ) *
      index
    );
  };

  const getSalesYPosition = (
    salesAmount
  ) => {
    return (
      topPadding +
      chartHeight -
      (
        salesAmount /
        maximumSales
      ) *
      chartHeight
    );
  };

  const getVisitYPosition = (
    visitCount
  ) => {
    return (
      topPadding +
      chartHeight -
      (
        visitCount /
        maximumVisits
      ) *
      chartHeight
    );
  };

  const salesPoints =
    salesData.map(
      (salesAmount, index) => {
        return (
          `${getXPosition(index)},` +
          `${getSalesYPosition(
            salesAmount
          )}`
        );
      }
    ).join(" ");

  const visitPoints =
    visitData.map(
      (visitCount, index) => {
        return (
          `${getXPosition(index)},` +
          `${getVisitYPosition(
            visitCount
          )}`
        );
      }
    ).join(" ");

  const gridLineCount = 4;

  const gridLines =
    Array.from(
      {
        length:
          gridLineCount + 1,
      },
      (_, index) => {
        const ratio =
          index /
          gridLineCount;

        const y =
          topPadding +
          chartHeight *
          ratio;

        const salesLabel =
          Math.round(
            maximumSales *
            (
              1 -
              ratio
            )
          );

        const visitLabel =
          Math.round(
            maximumVisits *
            (
              1 -
              ratio
            )
          );

        return `
          <line
            class="summary-chart-grid-line"
            x1="${leftPadding}"
            y1="${y}"
            x2="${width - rightPadding}"
            y2="${y}"
          ></line>

          <text
            class="summary-chart-axis-label"
            x="${leftPadding - 9}"
            y="${y + 4}"
            text-anchor="end"
          >
            ${salesLabel.toLocaleString("ja-JP")}
          </text>

          <text
            class="summary-chart-axis-label"
            x="${width - rightPadding + 9}"
            y="${y + 4}"
            text-anchor="start"
          >
            ${visitLabel}
          </text>
        `;
      }
    ).join("");

  const xLabels =
    sourceData.labels.map(
      (label, index) => {
        return `
          <text
            class="summary-chart-axis-label"
            x="${getXPosition(index)}"
            y="${height - 14}"
            text-anchor="middle"
          >
            ${label}
          </text>
        `;
      }
    ).join("");

  const salesCircles =
    salesData.map(
      (salesAmount, index) => {
        return `
          <circle
            class="summary-chart-sales-point"
            cx="${getXPosition(index)}"
            cy="${getSalesYPosition(
              salesAmount
            )}"
            r="4"
          >
            <title>
              ${sourceData.labels[index]} 売上 ${formatSummaryCurrency(salesAmount)}
            </title>
          </circle>
        `;
      }
    ).join("");

  const visitCircles =
    visitData.map(
      (visitCount, index) => {
        return `
          <circle
            class="summary-chart-visit-point"
            cx="${getXPosition(index)}"
            cy="${getVisitYPosition(
              visitCount
            )}"
            r="3.5"
          >
            <title>
              ${sourceData.labels[index]} 来店 ${visitCount}回
            </title>
          </circle>
        `;
      }
    ).join("");

  summaryTrendChart.innerHTML = `
    <svg
      class="summary-trend-svg"
      viewBox="0 0 ${width} ${height}"
      role="img"
      aria-label="売上と来店回数の推移"
    >
      ${gridLines}
      ${xLabels}

      <polyline
        class="summary-chart-sales-line"
        points="${salesPoints}"
      ></polyline>

      <polyline
        class="summary-chart-visit-line"
        points="${visitPoints}"
      ></polyline>

      ${salesCircles}
      ${visitCircles}
    </svg>
  `;
};

// 来店なし顧客を表示する
const renderSummaryNoVisitCustomers = () => {
  const monthData =
    getActiveSummaryMonthData();

  const matchingCustomers =
    monthData.noVisitCustomers
      .map((customer) => {
        return {
          ...customer,

          daysSinceVisit:
            getSummaryDaysSinceVisit(
              customer.lastVisit,
              monthData.referenceDate
            ),
        };
      })
      .filter((customer) => {
        return (
          customer.daysSinceVisit >=
          activeSummaryNoVisitDays
        );
      })
      .sort((customerA, customerB) => {
        return (
          customerB.daysSinceVisit -
          customerA.daysSinceVisit
        );
      });

  summaryNoVisitCount.textContent =
    `${matchingCustomers.length}名`;

  const visibleCustomers =
    isSummaryNoVisitShowingAll
      ? matchingCustomers
      : matchingCustomers.slice(
          0,
          5
        );

  if (
    visibleCustomers.length ===
    0
  ) {
    summaryNoVisitList.innerHTML = `
      <p class="summary-no-visit-empty">
        現在、該当する顧客はいません。
      </p>
    `;
  } else {
    summaryNoVisitList.innerHTML =
      visibleCustomers.map(
        (customer) => {
          return `
            <article class="summary-no-visit-item">
              <span
                class="summary-no-visit-avatar"
                aria-hidden="true"
              >
                ${customer.initial}
              </span>

              <div class="summary-no-visit-information">
                <strong>
                  ${customer.name}
                </strong>

                <span>
                  最終来店：${formatCustomerDetailDate(customer.lastVisit)}
                  ${customer.daysSinceVisit}日前
                </span>

                <span>
                  担当：${customer.staff}
                </span>
              </div>

              <button
                class="summary-no-visit-detail"
                type="button"
                data-summary-customer-id="${customer.id}"
              >
                顧客詳細を見る
              </button>
            </article>
          `;
        }
      ).join("");
  }

  const hasHiddenCustomers =
    matchingCustomers.length >
    5;

  summaryNoVisitShowAllButton.hidden =
    !hasHiddenCustomers;

  if (hasHiddenCustomers) {
    summaryNoVisitShowAllButton.querySelector(
      "span"
    ).textContent =
      isSummaryNoVisitShowingAll
        ? "5名表示に戻す"
        : "すべて表示";
  }

  const detailButtons =
    summaryNoVisitList.querySelectorAll(
      "[data-summary-customer-id]"
    );

  detailButtons.forEach(
    (detailButton) => {
      detailButton.addEventListener(
        "click",
        () => {
          const customerId =
            detailButton.dataset
              .summaryCustomerId ||
            "";

          renderCustomerDetail(
            customerId
          );

          showView(
            "customer-detail"
          );
        }
      );
    }
  );
};

// 曜日別の来店状況を表示する
const renderSummaryWeekdays = () => {
  const weekdayDataList =
    getActiveSummaryMonthData()
      .weekdays;
  
  const maximumCount =
    Math.max(
      ...weekdayDataList.map(
        (weekdayData) => {
          return weekdayData.count;
        }
      ),
      1
    );

  summaryWeekdayList.innerHTML =
    weekdayDataList.map(
      (weekdayData) => {
        const width =
          Math.round(
            (
              weekdayData.count /
              maximumCount
            ) *
            100
          );

        const isHighest =
          weekdayData.count ===
          maximumCount;

        return `
          <div
            class="summary-weekday-item${
              isHighest
                ? " summary-weekday-item--highest"
                : ""
            }"
          >
            <span>
              ${weekdayData.weekday}
            </span>

            <div class="summary-weekday-track">
              <div
                class="summary-weekday-bar"
                style="--weekday-width: ${width}%"
              ></div>
            </div>

            <strong>
              ${weekdayData.count}回
            </strong>
          </div>
        `;
      }
    ).join("");
};

// AI分析を表示する
const renderSummaryAiAnalysis = () => {
  const periodData =
    getActiveSummaryPeriodData();

  const analysisItems = [
    {
      title:
        `売上は前の期間より${periodData.salesRate}増加しています。`,
      description:
        "売上推移と平均単価の両方が上向いています。",
      warning: false,
    },

    {
      title:
        `新規顧客は${periodData.newCustomers}名です。`,
      description:
        "新規登録後の再来店状況もあわせて確認しましょう。",
      warning: false,
    },

    {
      title:
        `平均単価は${formatSummaryCurrency(periodData.averageSpend)}です。`,
      description:
        "高単価メニューの利用状況を確認できます。",
      warning: false,
    },

    {
      title:
        "長期間来店のない顧客がいます。",
      description:
        "来店なし顧客欄で、最終来店日と担当スタッフを確認できます。",
      warning: true,
    },
  ];

  summaryAiList.innerHTML =
    analysisItems.map(
      (analysisItem) => {
        return `
          <article
            class="summary-ai-item${
              analysisItem.warning
                ? " summary-ai-item--warning"
                : ""
            }"
          >
            <span class="summary-ai-item-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                ${
                  analysisItem.warning
                    ? `
                      <path d="M12 3 2.5 20h19z"></path>
                      <path d="M12 9v5"></path>
                      <path d="M12 17h.01"></path>
                    `
                    : `
                      <path d="M4 18l6-6 4 4 6-8"></path>
                      <path d="M15 8h5v5"></path>
                    `
                }
              </svg>
            </span>

            <div class="summary-ai-item-content">
              <strong>
                ${analysisItem.title}
              </strong>

              <span>
                ${analysisItem.description}
              </span>
            </div>
          </article>
        `;
      }
    ).join("");
};

// 選択中の月の誕生日人数を表示する
const renderSummaryBirthdays = () => {
  const birthdayData =
    getActiveSummaryMonthData()
      .birthdays;

  summaryBirthdayTotal.textContent =
    birthdayData.total;

  summaryBirthdayThisWeek.textContent =
    `${birthdayData.thisWeek}名`;

  summaryBirthdayNextWeek.textContent =
    `${birthdayData.nextWeek}名`;
};

// サマリー画面全体を表示する
const renderSummaryScreen = () => {
  const monthData =
    getActiveSummaryMonthData();

  const periodLabel =
    getActiveSummaryPeriodLabel();

  summarySalesTitle.textContent =
    `${periodLabel}売上`;

  summaryBirthdayTitle.textContent =
    `${monthData.monthNumber}月の誕生日`;

  renderSummaryKpis();
  renderSummaryRatio();
  renderSummaryTrendChart();
  renderSummaryNoVisitCustomers();
  renderSummaryWeekdays();
  renderSummaryAiAnalysis();
  renderSummaryBirthdays();
};

// 集計期間を変更する
summaryPeriodButtons.forEach(
  (periodButton) => {
    periodButton.addEventListener(
      "click",
      () => {
        activeSummaryPeriod =
          periodButton.dataset
            .summaryPeriod ||
          "month";

        summaryPeriodButtons.forEach(
          (button) => {
            const isActive =
              button ===
              periodButton;

            button.classList.toggle(
              "summary-period-button--active",
              isActive
            );

            button.setAttribute(
              "aria-pressed",
              String(isActive)
            );
          }
        );

        renderSummaryScreen();
      }
    );
  }
);

// 日別と月別を切り替える
summaryChartModeButtons.forEach(
  (chartModeButton) => {
    chartModeButton.addEventListener(
      "click",
      () => {
        activeSummaryChartMode =
          chartModeButton.dataset
            .summaryChartMode ||
          "daily";

        summaryChartModeButtons.forEach(
          (button) => {
            const isActive =
              button ===
              chartModeButton;

            button.classList.toggle(
              "summary-chart-mode-button--active",
              isActive
            );

            button.setAttribute(
              "aria-pressed",
              String(isActive)
            );
          }
        );

        renderSummaryTrendChart();
      }
    );
  }
);

// 来店なし期間を切り替える
summaryNoVisitFilters.forEach(
  (filterButton) => {
    filterButton.addEventListener(
      "click",
      () => {
        activeSummaryNoVisitDays =
          Number(
            filterButton.dataset
              .noVisitDays ||
            30
          );

        isSummaryNoVisitShowingAll =
          false;

        summaryNoVisitFilters.forEach(
          (button) => {
            const isActive =
              button ===
              filterButton;

            button.classList.toggle(
              "summary-no-visit-filter--active",
              isActive
            );

            button.setAttribute(
              "aria-pressed",
              String(isActive)
            );
          }
        );

        renderSummaryNoVisitCustomers();
      }
    );
  }
);

// 来店なし顧客をすべて表示する
summaryNoVisitShowAllButton.addEventListener(
  "click",
  () => {
    isSummaryNoVisitShowingAll =
      !isSummaryNoVisitShowingAll;

    renderSummaryNoVisitCustomers();
  }
);

// 選択中の月が誕生日の顧客を検索画面で確認する
summaryBirthdaySearchButton.addEventListener(
  "click",
  () => {
    const monthData =
      getActiveSummaryMonthData();

    // 以前の検索文字や詳細条件が混ざらないよう初期化する
    customerSearchInput.value = "";

    draftCustomerSearchConditions =
      createDefaultCustomerSearchConditions();

    activeCustomerSearchConditions =
      createDefaultCustomerSearchConditions();

    // 誕生日フィルターと対象月を設定する
    activeCustomerQuickFilter =
      "birthday";

    activeCustomerBirthdayFilterMonth =
      monthData.monthNumber;

    syncCustomerQuickFilterButtons();
    syncCustomerSearchConditionRows();
    updateCustomerSearchResults();

    showView(
      "customer-search",
      "auto"
    );
  }
);

// 選択中の月をプルダウン表示へ反映する
const syncSummaryMonthSelection = () => {
  summaryMonthOptionButtons.forEach(
    (monthOptionButton) => {
      const isActive =
        monthOptionButton.dataset
          .summaryMonth ===
        activeSummaryMonth;

      monthOptionButton.classList.toggle(
        "summary-month-option--active",
        isActive
      );

      monthOptionButton.setAttribute(
        "aria-selected",
        String(isActive)
      );

      if (isActive) {
        summaryMonthLabel.textContent =
          monthOptionButton.textContent.trim();
      }
    }
  );
};

// 月選択のプルダウンを閉じる
const closeSummaryMonthOptions = () => {
  summaryMonthOptions.hidden =
    true;

  summaryMonthButton.setAttribute(
    "aria-expanded",
    "false"
  );
};

// 月選択ボタンを押したときにプルダウンを開閉する
summaryMonthButton.addEventListener(
  "click",
  (event) => {
    event.stopPropagation();

    const willOpen =
      summaryMonthOptions.hidden;

    summaryMonthOptions.hidden =
      !willOpen;

    summaryMonthButton.setAttribute(
      "aria-expanded",
      String(willOpen)
    );
  }
);

// 選択した月を画面へ反映する
summaryMonthOptionButtons.forEach(
  (monthOptionButton) => {
    monthOptionButton.addEventListener(
      "click",
      () => {
        const selectedMonth =
          monthOptionButton.dataset
            .summaryMonth ||
          "2026-07";

        activeSummaryMonth =
          selectedMonth;

        // ブラウザを更新しても選択月を復元できるよう保存する
        localStorage.setItem(
          summaryMonthStorageKey,
          activeSummaryMonth
        );

        isSummaryNoVisitShowingAll =
          false;

        syncSummaryMonthSelection();

                closeSummaryMonthOptions();
                renderSummaryScreen();
              }
            );
          }
        );

// 月選択以外の場所を押したときに閉じる
document.addEventListener(
  "click",
  (event) => {
    if (
      !summaryMonthPicker.contains(
        event.target
      )
    ) {
      closeSummaryMonthOptions();
    }
  }
);

// Escapeキーでも月選択を閉じる
document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "Escape" &&
      !summaryMonthOptions.hidden
    ) {
      closeSummaryMonthOptions();
      summaryMonthButton.focus();
    }
  }
);

// ページを開いたときに前回選択した月を反映する
syncSummaryMonthSelection();

// 指定された画面だけを表示する共通処理
const showView = (viewName, scrollBehavior = "smooth") => {
  // data-viewの値に対応する画面を探す
  const nextView = document.querySelector(`#${viewName}-view`);

  // 対応する画面が見つからなければ処理を終了する
  if (!nextView) {
    return;
  }

  // 顧客詳細画面では共通ヘッダーと下部ナビを隠す
  document.body.classList.toggle(
    "customer-detail-mode",
    viewName === "customer-detail"
  );

  // 表示する画面に対応したヘッダー設定を取得する
  const headerSetting =
    viewHeaderSettings[viewName] ?? viewHeaderSettings.home;

  // 共通ヘッダーのタイトルと説明文を変更する
  brandTitle.textContent = headerSetting.title;
  brandDescription.textContent = headerSetting.description;

  // ホーム画面かどうかを判定する
  const isHomeView =
    viewName === "home";

  // ホーム画面を開くたびに最新データを表示する
  if (isHomeView) {
    renderHomeDashboard();
  }

  // サマリー画面かどうかを判定する
  const isSummaryView = viewName === "summary";

  // サマリー画面を開くたびに最新の表示へ整える
  if (isSummaryView) {
    renderSummaryScreen();
  }

  // すべての画面をいったん非表示にする
  appViews.forEach((view) => {
    view.classList.remove("app-view--active");
  });

  // 選択された画面だけを表示する
  nextView.classList.add("app-view--active");

  // 下部ナビの選択状態も現在の画面に合わせる
  updateBottomNavigation(viewName);

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

// 通知をクリックしたときに該当する画面を開く
notificationList.addEventListener(
  "click",
  (event) => {
    // クリックされた通知ボタンを取得する
    const notificationItem =
      event.target.closest(
        "[data-notification-action]"
      );

    if (!notificationItem) {
      return;
    }

    const notificationAction =
      notificationItem.dataset
        .notificationAction;

    // 通知パネルを閉じる
    closeNotificationPanel();

    // 来店なし通知はサマリー画面の該当欄を開く
    if (
      notificationAction ===
      "no-visit"
    ) {
      activeSummaryNoVisitDays = 30;
      isSummaryNoVisitShowingAll = false;

      // 1か月ボタンを選択状態にする
      summaryNoVisitFilters.forEach(
        (filterButton) => {
          const isActive =
            Number(
              filterButton.dataset
                .noVisitDays
            ) === 30;

          filterButton.classList.toggle(
            "summary-no-visit-filter--active",
            isActive
          );

          filterButton.setAttribute(
            "aria-pressed",
            String(isActive)
          );
        }
      );

      renderSummaryNoVisitCustomers();
      showView("summary", "auto");

      // 来店なし顧客カードまで移動する
      window.requestAnimationFrame(
        () => {
          document
            .querySelector(
              ".summary-no-visit-card"
            )
            ?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
        }
      );

      return;
    }

    // 通知の種類に対応する検索フィルター
    const quickFilterSettings = {
      birthday: "birthday",
      photo: "no-photo",
      memo: "no-memo",
      features: "no-features",
    };

    const quickFilter =
      quickFilterSettings[
        notificationAction
      ];

    if (!quickFilter) {
      return;
    }

    // 以前の検索条件を初期化する
    customerSearchInput.value = "";

    draftCustomerSearchConditions =
      createDefaultCustomerSearchConditions();

    activeCustomerSearchConditions =
      createDefaultCustomerSearchConditions();

    // 通知に対応するフィルターを設定する
    activeCustomerQuickFilter =
      quickFilter;

    // 誕生日通知から移動する場合は常に今月を使用する
    activeCustomerBirthdayFilterMonth =
      quickFilter === "birthday"
        ? new Date().getMonth() + 1
        : null;

    syncCustomerQuickFilterButtons();
    syncCustomerSearchConditionRows();
    updateCustomerSearchResults();

    // 顧客検索画面へ移動する
    showView(
      "customer-search",
      "auto"
    );
  }
);

// やることカードから対象顧客を検索する
homeTodoActionButtons.forEach(
  (actionButton) => {
    actionButton.addEventListener(
      "click",
      () => {
        const todoAction =
          actionButton.dataset
            .homeTodoAction;

        // ボタンに対応する検索フィルター
        const todoFilterSettings = {
          all: "needs-action",
          photo: "no-photo",
          birthday: "no-birthday",
          memo: "no-memo",
          features: "no-features",
        };

        const quickFilter =
          todoFilterSettings[
            todoAction
          ];

        if (!quickFilter) {
          return;
        }

        // 以前の検索条件を初期化する
        customerSearchInput.value = "";

        draftCustomerSearchConditions =
          createDefaultCustomerSearchConditions();

        activeCustomerSearchConditions =
          createDefaultCustomerSearchConditions();

        // 選択したカードの条件を設定する
        activeCustomerQuickFilter =
          quickFilter;

        activeCustomerBirthdayFilterMonth =
          null;

        syncCustomerQuickFilterButtons();
        syncCustomerSearchConditionRows();
        updateCustomerSearchResults();

        // 顧客検索画面へ移動する
        showView(
          "customer-search",
          "auto"
        );
      }
    );
  }
);

// ホーム画面のお客様一覧から顧客検索を開く
homeCustomerListButtons.forEach(
  (listButton) => {
    listButton.addEventListener(
      "click",
      () => {
        const listAction =
          listButton.dataset
            .homeCustomerListAction;

        // ボタンに対応する並び順
        const sortSettings = {
          "recently-added":
            "registration-date",

          "recently-viewed":
            "recently-viewed",
        };

        const sortValue =
          sortSettings[listAction];

        if (!sortValue) {
          return;
        }

        // 以前の検索条件を初期化する
        customerSearchInput.value = "";

        draftCustomerSearchConditions =
          createDefaultCustomerSearchConditions();

        activeCustomerSearchConditions =
          createDefaultCustomerSearchConditions();

        activeCustomerQuickFilter =
          "all";

        activeCustomerBirthdayFilterMonth =
          null;

        syncCustomerQuickFilterButtons();
        syncCustomerSearchConditionRows();

        // ボタンに対応する順番で並べる
        setCustomerSearchSort(
          sortValue
        );

        // 顧客検索画面へ移動する
        showView(
          "customer-search",
          "auto"
        );
      }
    );
  }
);

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

// 顧客詳細画面の場合は、最後に開いていた顧客も復元する
if (savedView === "customer-detail") {
  const savedCustomerDetailId =
    sessionStorage.getItem(
      "currentCustomerDetailId"
    ) ||
    "MU00001";

  renderCustomerDetail(
    savedCustomerDetailId
  );
}

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

// 常連顧客の来店日が未入力の場合、今日の日付を設定する
const setTodayToRegularVisitDate = () => {
  if (
    !regularVisitDateInput ||
    regularVisitDateInput.value
  ) {
    return;
  }

  const today = new Date();

  const year = today.getFullYear();
  const month = String(
    today.getMonth() + 1
  ).padStart(2, "0");
  const day = String(
    today.getDate()
  ).padStart(2, "0");

  regularVisitDateInput.value =
    `${year}-${month}-${day}`;
};

// ページ表示時に常連顧客の来店日も設定する
setTodayToRegularVisitDate();

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

// 常連顧客の誕生年を今年から1900年まで追加する
for (
  let year = currentYear;
  year >= 1900;
  year -= 1
) {
  const option =
    document.createElement("option");

  option.value = String(year);
  option.textContent = String(year);

  regularBirthYearSelect.appendChild(
    option
  );
}

// 常連顧客の誕生月と誕生日を追加する
addSelectOptions(
  regularBirthMonthSelect,
  1,
  12
);

addSelectOptions(
  regularBirthDaySelect,
  1,
  31
);

// 常連顧客の誕生日状態に合わせて入力欄を切り替える
const updateRegularBirthdayInputs = () => {
  const isUnknown =
    regularBirthdayUnknownInput.checked;

  regularBirthYearSelect.required =
    !isUnknown;

  regularBirthMonthSelect.required =
    !isUnknown;

  regularBirthDaySelect.required =
    !isUnknown;

  regularBirthYearSelect.disabled =
    isUnknown;

  regularBirthMonthSelect.disabled =
    isUnknown;

  regularBirthDaySelect.disabled =
    isUnknown;

  // 「不明」を選んだ場合は年月日を空にする
  if (isUnknown) {
    regularBirthYearSelect.value = "";
    regularBirthMonthSelect.value = "";
    regularBirthDaySelect.value = "";
  }
};

// ラジオボタンを変更したときに入力欄を更新する
regularBirthdayStatusInputs.forEach(
  (input) => {
    input.addEventListener(
      "change",
      updateRegularBirthdayInputs
    );
  }
);

// 最初の表示状態を反映する
updateRegularBirthdayInputs();

// 誕生日の選択状態に合わせて入力欄と必須設定を切り替える
const updateBirthdayInputs = () => {
  const selectedStatus = document.querySelector(
    'input[name="birthdayStatus"]:checked'
  );

  const isUnknown =
    selectedStatus?.value === "unknown";

  // 「誕生日を入力する」の場合だけ必須にする
  birthYearSelect.required = !isUnknown;
  birthMonthSelect.required = !isUnknown;
  birthDaySelect.required = !isUnknown;

  // 「不明」の場合は入力欄を操作できなくする
  birthYearSelect.disabled = isUnknown;
  birthMonthSelect.disabled = isUnknown;
  birthDaySelect.disabled = isUnknown;

  // 「不明」へ切り替えたら入力済みの誕生日を消す
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

// フォームカードのエラー表示を切り替える
const setFormCardError = (
  card,
  isInvalid
) => {
  card.classList.toggle(
    "form-card--invalid",
    isInvalid
  );

  const errorMessage =
    card.querySelector(
      ".form-error-message"
    );

  if (errorMessage) {
    errorMessage.hidden = !isInvalid;
  }

  card
    .querySelectorAll("[required]")
    .forEach((field) => {
      if (isInvalid) {
        field.setAttribute(
          "aria-invalid",
          "true"
        );
      } else {
        field.removeAttribute(
          "aria-invalid"
        );
      }
    });
};

// 通常の必須項目が未入力か確認する
const isRequiredFieldInvalid = (
  field
) => {
  // 空白だけの顧客名も未入力として扱う
  if (field === customerNameInput) {
    return field.value.trim() === "";
  }

  // 会計金額はカンマを除いた数値で確認する
  if (field === paymentAmountInput) {
    const paymentAmount =
      getPaymentAmountNumber();

    return (
      paymentAmount === null ||
      Number.isNaN(paymentAmount) ||
      paymentAmount < 0
    );
  }

  return !field.checkValidity();
};

// 常連顧客フォームの必須項目が未入力か確認する
const isRegularRequiredFieldInvalid = (field) => {
  if (field === regularPaymentAmountInput) {
    const paymentAmount = getRegularPaymentAmountNumber();

    return (
      paymentAmount === null ||
      Number.isNaN(paymentAmount) ||
      paymentAmount < 0
    );
  }

  if (field === regularStaffMemberInput) {
    return field.value.trim() === "";
  }

  return !field.checkValidity();
};

// 常連顧客フォームの入力内容を確認する
regularCustomerForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    let firstInvalidCard = null;
    let firstInvalidTarget = null;

    // 顧客が選択されているか確認する
    const isCustomerNotSelected =
      regularSelectedCustomerIdInput.value === "";

    setFormCardError(
      regularCustomerSearchCard,
      isCustomerNotSelected
    );

    if (isCustomerNotSelected) {
      firstInvalidCard = regularCustomerSearchCard;
      firstInvalidTarget = regularCustomerSearchInput;
    }

    // 誕生日が正しく選択されているか確認する
    const regularBirthdayCard =
      regularBirthYearSelect.closest(".form-card");

    const isBirthdayUnknown =
      regularBirthdayUnknownInput.checked;

    const isBirthdayInvalid =
      !isBirthdayUnknown &&
      (
        regularBirthYearSelect.value === "" ||
        regularBirthMonthSelect.value === "" ||
        regularBirthDaySelect.value === ""
      );

    setFormCardError(
      regularBirthdayCard,
      isBirthdayInvalid
    );

    if (
      isBirthdayInvalid &&
      !firstInvalidTarget
    ) {
      firstInvalidCard = regularBirthdayCard;
      firstInvalidTarget = regularBirthYearSelect;
    }

    // 来店情報の必須項目を確認する
    const regularRequiredFields = [
      regularVisitDateInput,
      regularPaymentAmountInput,
      regularStaffMemberInput,
    ];

    regularRequiredFields.forEach((field) => {
      const fieldCard =
        field.closest(".regular-visit-field");

      const isInvalid =
        isRegularRequiredFieldInvalid(field);

      setFormCardError(
        fieldCard,
        isInvalid
      );

      if (
        isInvalid &&
        !firstInvalidTarget
      ) {
        firstInvalidCard = fieldCard;
        firstInvalidTarget = field;
      }
    });

    // 最初に見つかったエラーまで移動する
    if (firstInvalidTarget) {
      firstInvalidCard.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      firstInvalidTarget.focus({
        preventScroll: true,
      });

      return;
    }

    // すべて入力済みなら更新確認画面を開く
    openRegularCustomerConfirmDialog();
  }
);

// 常連顧客の必須項目が入力されたらエラーを消す
[
  regularVisitDateInput,
  regularPaymentAmountInput,
  regularStaffMemberInput,
].forEach((field) => {
  const clearRegularFieldError = () => {
    const fieldCard =
      field.closest(".regular-visit-field");

    if (
      !isRegularRequiredFieldInvalid(field)
    ) {
      setFormCardError(
        fieldCard,
        false
      );
    }
  };

  field.addEventListener(
    "input",
    clearRegularFieldError
  );

  field.addEventListener(
    "change",
    clearRegularFieldError
  );
});

// 誕生日がすべて選択されたらエラーを消す
const clearRegularBirthdayError = () => {
  const regularBirthdayCard =
    regularBirthYearSelect.closest(".form-card");

  const isBirthdayUnknown =
    regularBirthdayUnknownInput.checked;

  const isComplete =
    regularBirthYearSelect.value !== "" &&
    regularBirthMonthSelect.value !== "" &&
    regularBirthDaySelect.value !== "";

  if (
    isBirthdayUnknown ||
    isComplete
  ) {
    setFormCardError(
      regularBirthdayCard,
      false
    );
  }
};

regularBirthdayStatusInputs.forEach((input) => {
  input.addEventListener(
    "change",
    clearRegularBirthdayError
  );
});

[
  regularBirthYearSelect,
  regularBirthMonthSelect,
  regularBirthDaySelect,
].forEach((select) => {
  select.addEventListener(
    "change",
    clearRegularBirthdayError
  );
});

// 特徴の必須エラーを非表示にする
const hideFeatureRequiredError = () => {
  setFormCardError(
    featureCard,
    false
  );

  featureList.removeAttribute(
    "aria-invalid"
  );
};

// 特徴が1つ以上選択されているか確認する
const validateFeatureSelection = () => {
  const selectedFeature =
    featureList.querySelector(
      ".feature-chip--selected"
    );

  const isValid =
    Boolean(selectedFeature);

  setFormCardError(
    featureCard,
    !isValid
  );

  featureList.setAttribute(
    "aria-invalid",
    String(!isValid)
  );

  return isValid;
};

// 顧客へ登録する特徴の選択状態を切り替える
const toggleFeatureButton = (button) => {
  const isSelected = button.classList.toggle(
    "feature-chip--selected"
  );

  // 支援技術にも選択状態を伝える
  button.setAttribute("aria-pressed", String(isSelected));

  // 1件でも選択されたら必須エラーを消す
  if (isSelected) {
    hideFeatureRequiredError();
  }
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

    photoRemoveButton.hidden = true;

    return;
  }

  // 写真がある場合は未選択表示を隠す
  photoPreviewPlaceholder.hidden = true;

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

// 常連顧客の更新内容を確認画面へ表示する
const renderRegularCustomerConfirmSummary = () => {
  const confirmList =
    document.createElement("dl");

  confirmList.className =
    "new-customer-confirm-list";

  // 誕生日の表示内容を作る
  const birthdayText =
    regularBirthdayUnknownInput.checked
      ? "不明"
      : (
          `${regularBirthYearSelect.value}年` +
          `${Number(regularBirthMonthSelect.value)}月` +
          `${Number(regularBirthDaySelect.value)}日`
        );

  // 会計金額を円記号とカンマ付きで表示する
  const paymentAmount =
    getRegularPaymentAmountNumber();

  const paymentText =
    `¥${paymentAmount.toLocaleString(
      "ja-JP"
    )}`;

  // メモが空欄の場合は「なし」と表示する
  const memoText =
    regularCustomerMemo.value.trim() ||
    "なし";

  confirmList.append(
    createCustomerConfirmItem(
      "お客様",
      `${regularSelectedName.textContent.trim()}（${regularSelectedId.textContent.trim()}）`
    ),
    createCustomerConfirmItem(
      "誕生日",
      birthdayText
    ),
    createCustomerConfirmItem(
      "来店日",
      formatCustomerDate(
        regularVisitDateInput.value
      )
    ),
    createCustomerConfirmItem(
      "会計金額",
      paymentText
    ),
    createCustomerConfirmItem(
      "担当スタッフ",
      regularStaffMemberInput.value.trim()
    ),
    createCustomerConfirmItem(
      "常連顧客メモ",
      memoText
    )
  );

  regularCustomerConfirmSummary.replaceChildren(
    confirmList
  );
};

// 常連顧客の更新確認画面を開く
const openRegularCustomerConfirmDialog = () => {
  regularCustomerConfirmMain.hidden = false;
  regularCustomerUpdateSuccess.hidden = true;

  // 現在の入力内容を確認画面へ反映する
  renderRegularCustomerConfirmSummary();

  regularCustomerConfirmDialog.hidden = false;

  document.body.classList.add(
    "confirm-dialog-open"
  );

  regularCustomerConfirmBack.focus();
};

// 常連顧客の更新確認画面を閉じる
const closeRegularCustomerConfirmDialog = () => {
  regularCustomerConfirmDialog.hidden = true;

  document.body.classList.remove(
    "confirm-dialog-open"
  );

  regularCustomerSubmitButton.focus();
};

// 「戻って修正」を押したとき
regularCustomerConfirmBack.addEventListener(
  "click",
  closeRegularCustomerConfirmDialog
);

// 常連顧客更新フォームを初期状態へ戻す
const resetRegularCustomerForm = () => {
  // 入力欄を初期化する
  regularCustomerForm.reset();

  // 選択中のお客様を解除する
  regularSelectedCustomer.hidden = true;
  regularSelectedCustomerIdInput.value = "";

  // 検索欄と検索結果を初期化する
  regularCustomerSearchInput.value = "";
  regularCustomerSearchResults.hidden = true;
  regularCustomerNoResults.hidden = true;

  regularCustomerResultItems.forEach(
    (resultItem) => {
      resultItem.hidden = false;
    }
  );

  // 誕生日を「入力する」の初期状態へ戻す
  regularBirthdayKnownInput.checked = true;
  regularBirthdayUnknownInput.checked = false;

  updateRegularBirthdayInputs();

  // 誕生日カードを初期状態では隠す
  regularBirthdayCard.hidden = true;

  // 来店日に今日の日付を設定する
  setTodayToRegularVisitDate();

  // 顧客選択エラーを解除する
  setFormCardError(
    regularCustomerSearchCard,
    false
  );

  // 誕生日エラーを解除する
  setFormCardError(
    regularBirthdayCard,
    false
  );

  // 来店情報のエラーをすべて解除する
  regularCustomerForm
    .querySelectorAll(
      ".regular-visit-field"
    )
    .forEach((fieldCard) => {
      setFormCardError(
        fieldCard,
        false
      );
    });
};

// 確認画面の「更新する」を押したとき
regularCustomerConfirmUpdate.addEventListener(
  "click",
  () => {
    // 更新処理中の表示へ切り替える
    regularCustomerConfirmUpdate.disabled =
      true;

    regularCustomerConfirmUpdate.textContent =
      "更新中...";

    // 現段階では通信を想定した仮処理
    setTimeout(() => {
      // 今回入力したスタッフ名を候補として保存する
      saveStaffMemberName(
        regularStaffMemberInput
      );

      // 確認内容を隠して更新完了画面を表示する
      regularCustomerConfirmMain.hidden =
        true;

      regularCustomerUpdateSuccess.hidden =
        false;

      // 更新ボタンを元の状態へ戻す
      regularCustomerConfirmUpdate.disabled =
        false;

      regularCustomerConfirmUpdate.textContent =
        "更新する";

      regularCustomerSuccessBack.focus();
    }, 900);
  }
);

// 「検索画面へ戻る」を押したとき
regularCustomerSuccessBack.addEventListener(
  "click",
  () => {
    resetRegularCustomerForm();
    closeRegularCustomerConfirmDialog();

    // 検索画面の上部へ戻る
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // 次の顧客を検索できるよう入力欄へ移動する
    regularCustomerSearchInput.focus({
      preventScroll: true,
    });
  }
);

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

  // 会計金額を円記号とカンマ付きで表示する
  const paymentAmount =
    getPaymentAmountNumber();

  const paymentText =
    paymentAmount === null
      ? "未入力"
      : `¥${paymentAmount.toLocaleString(
          "ja-JP"
        )}`;

  // 入力されたスタッフ名を取得する
  const staffText =
    staffMemberInput.value.trim() ||
    "未入力";

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

// 入力内容を確認してから登録確認画面を開く
newCustomerForm.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();

    // 最初に見つかったエラーを記録する
    let firstInvalidCard = null;
    let firstInvalidTarget = null;

    // フォーム内のカードを上から順番に確認する
    newCustomerForm
      .querySelectorAll(".form-card")
      .forEach((card) => {
        // 特徴カードはタグの選択状態を確認する
        if (
          card.classList.contains(
            "feature-card"
          )
        ) {
          const isFeatureValid =
            validateFeatureSelection();

          if (
            !isFeatureValid &&
            !firstInvalidTarget
          ) {
            firstInvalidCard = card;

            firstInvalidTarget =
              featureList.querySelector(
                ".feature-chip"
              );
          }

          return;
        }

        // カード内の必須入力欄を取得する
        const requiredFields =
          Array.from(
            card.querySelectorAll(
              "[required]"
            )
          );

        // 必須入力欄がないカードは確認しない
        if (
          requiredFields.length === 0
        ) {
          return;
        }

        // 未入力になっている欄を探す
        const invalidField =
          requiredFields.find(
            isRequiredFieldInvalid
          );

        // カードのエラー表示を切り替える
        setFormCardError(
          card,
          Boolean(invalidField)
        );

        // 最初のエラーだけ記録する
        if (
          invalidField &&
          !firstInvalidTarget
        ) {
          firstInvalidCard = card;
          firstInvalidTarget =
            invalidField;
        }
      });

    // エラーがある場合は確認画面を開かない
    if (firstInvalidTarget) {
      firstInvalidCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      firstInvalidTarget.focus({
        preventScroll: true
      });

      return;
    }

    // すべて入力済みなら確認画面を開く
    openNewCustomerConfirmDialog();
  }
);

// 入力内容が正しくなったらカードのエラーを自動で消す
newCustomerForm
  .querySelectorAll("[required]")
  .forEach((field) => {
    const clearCardError = () => {
      const card =
        field.closest(".form-card");

      // カードがない場合は何もしない
      if (!card) {
        return;
      }

      // カード内にある必須項目をすべて取得する
      const requiredFields =
        Array.from(
          card.querySelectorAll(
            "[required]"
          )
        );

      // まだ未入力の必須項目があるか確認する
      const hasInvalidField =
        requiredFields.some(
          isRequiredFieldInvalid
        );

      // すべて入力されたらエラーを消す
      if (!hasInvalidField) {
        setFormCardError(
          card,
          false
        );
      }
    };

    // 文字入力したとき
    field.addEventListener(
      "input",
      clearCardError
    );

    // 日付や選択肢を変更したとき
    field.addEventListener(
      "change",
      clearCardError
    );
  });

// 誕生日を「不明」に変更した場合もエラーを消す
birthdayStatusInputs.forEach(
  (input) => {
    input.addEventListener(
      "change",
      () => {
        const birthdayCard =
          birthYearSelect.closest(
            ".form-card"
          );

        const requiredFields =
          Array.from(
            birthdayCard.querySelectorAll(
              "[required]"
            )
          );

        const hasInvalidField =
          requiredFields.some(
            isRequiredFieldInvalid
          );

        if (!hasInvalidField) {
          setFormCardError(
            birthdayCard,
            false
          );
        }
      }
    );
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
      // 今回入力したスタッフ名を候補として保存する
      saveStaffMemberName();

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

  // 似ている顧客のお知らせを非表示へ戻す
  hideSimilarCustomerAlert();

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

  // 特徴の必須エラーも初期化する
  hideFeatureRequiredError();

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