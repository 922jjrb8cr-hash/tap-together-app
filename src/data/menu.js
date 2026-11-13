export const CATEGORIES = [“burger”, “side”, “dessert”, “drink”];

// ============================================================
// 버거킹 키오스크 메뉴판
//  - 메뉴 하나가 { } 한 덩어리예요.
//  - 메뉴 이름, 가격, 이모지, 사진, 옵션을 수정할 수 있어요.
//  - 사진 파일은 public/menu-images 폴더에 넣어주세요.
//  - 카테고리: burger(버거) side(사이드) dessert(디저트) drink(음료)
// ============================================================

export const MENU = [
{
id: “junior-whopper”,
category: “burger”,
price: 4900,
icon: “🍔”,
photo: “junior-whopper.jpg”,
names: { ko: “주니어 와퍼”, en: “Junior Whopper”, zh: “小皇堡”, ja: “ジュニアワッパー”, vi: “Junior Whopper” },
whip: false,
iceOnly: false,
},
{
id: “french-fries”,
category: “side”,
price: 2000,
icon: “🍟”,
photo: “french-fries.jpg”,
names: { ko: “감자튀김”, en: “French Fries”, zh: “薯条”, ja: “フライドポテト”, vi: “Khoai Tây Chiên” },
whip: false,
iceOnly: false,
},
{
id: “cheese-sticks”,
category: “side”,
price: 2500,
icon: “🧀”,
photo: “cheese-sticks.jpg”,
names: { ko: “치즈스틱”, en: “Cheese Sticks”, zh: “芝士条”, ja: “チーズスティック”, vi: “Phô Mai Que” },
whip: false,
iceOnly: false,
},
{
id: “chicken-nuggets”,
category: “side”,
price: 2500,
icon: “🍗”,
photo: “chicken-nuggets.jpg”,
names: { ko: “너겟”, en: “Chicken Nuggets”, zh: “鸡块”, ja: “チキンナゲット”, vi: “Gà Nuggets” },
whip: false,
iceOnly: false,
},
{
id: “coleslaw”,
category: “side”,
price: 2000,
icon: “🥗”,
photo: “coleslaw.jpg”,
names: { ko: “코올슬로”, en: “Coleslaw”, zh: “凉拌卷心菜”, ja: “コールスロー”, vi: “Salad Bắp Cải” },
whip: false,
iceOnly: false,
},
{
id: “ice-cream”,
category: “dessert”,
price: 1500,
icon: “🍦”,
photo: “ice-cream.jpg”,
names: { ko: “아이스크림”, en: “Ice Cream”, zh: “冰淇淋”, ja: “アイスクリーム”, vi: “Kem” },
whip: false,
iceOnly: true,
},
{
id: “shake”,
category: “dessert”,
price: 2500,
icon: “🥤”,
photo: “shake.jpg”,
names: { ko: “쉐이크”, en: “Shake”, zh: “奶昔”, ja: “シェイク”, vi: “Sữa Lắc” },
whip: true,
iceOnly: true,
},
{
id: “cola”,
category: “drink”,
price: 2000,
icon: “🥤”,
photo: “cola.jpg”,
names: { ko: “콜라”, en: “Coca-Cola”, zh: “可乐”, ja: “コーラ”, vi: “Coca-Cola” },
whip: false,
iceOnly: true,
},
{
id: “zero-cider”,
category: “drink”,
price: 2000,
icon: “🥤”,
photo: “zero-cider.jpg”,
names: { ko: “제로사이다”, en: “Zero Cider”, zh: “零糖汽水”, ja: “ゼロサイダー”, vi: “Nước Ngọt Không Đường” },
whip: false,
iceOnly: true,
},
{
id: “mineral-water”,
category: “drink”,
price: 1500,
icon: “💧”,
photo: “mineral-water.jpg”,
names: { ko: “생수”, en: “Bottled Water”, zh: “矿泉水”, ja: “ミネラルウォーター”, vi: “Nước Suối” },
whip: false,
iceOnly: true,
},
{
id: “ice-cup”,
category: “drink”,
price: 1000,
icon: “🧊”,
photo: “ice-cup.jpg”,
names: { ko: “얼음”, en: “Ice Cup”, zh: “冰块”, ja: “氷”, vi: “Ly Đá” },
whip: false,
iceOnly: true,
},
];

// ============================================================
// 아래부터는 메뉴판에서 자동으로 만들어지는 데이터입니다.
// ============================================================

export const MENU_NAMES = Object.fromEntries(
MENU.map((item) => [item.id, item.names])
);

export const WHIP_AVAILABLE_IDS = MENU
.filter((item) => item.whip)
.map((item) => item.id);

export const FIXED_ICE_IDS = MENU
.filter((item) => item.iceOnly)
.map((item) => item.id);

// ============================================================
// 다국어 메뉴 이름 적용
// ============================================================

export const applyMenuNames = (translations) => {
if (!translations) return translations;

const result = {};

Object.keys(translations).forEach((lang) => {
const menu = { …(translations[lang].menu || {}) };

Object.keys(MENU_NAMES).forEach((id) => {
  const name = MENU_NAMES[id][lang] || MENU_NAMES[id].ko;
  if (name) menu[id] = name;
});
result[lang] = { ...translations[lang], menu };

});

return result;
};

// ============================================================
// 추가 옵션 가격
// ============================================================

export const ADDON_PRICE = {
sizeLarge: 500,
whip: 500,
toppingPearl: 500,
};

// ============================================================
// 기본 선택 옵션
// ============================================================

export const DEFAULT_OPTIONS = {
size: “regular”,
whip: “none”,
topping: “none”,
hotIce: “ice”,
};

// ============================================================
// QR 코드 이미지 생성
// ============================================================

export const getQrImageUrl = (value) =>
https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(value)};

// ============================================================
// 메뉴 사진 주소 생성
// ============================================================

export const getMenuImageUrl = (item) =>
${process.env.PUBLIC_URL || ""}/menu-images/${item.photo || ${item.id}.jpg};

// ============================================================
// 메뉴 최종 가격 계산
// ============================================================

export const computeUnitPrice = (item, options) =>
item.price +
(options.size === “large” ? ADDON_PRICE.sizeLarge : 0) +
(options.whip === “add” ? ADDON_PRICE.whip : 0) +
(options.topping === “pearl” ? ADDON_PRICE.toppingPearl : 0);

// ============================================================
// 선택 옵션 요약
// ============================================================

export const buildOptionSummary = (t, options, item) => {
const parts = [];

if (!FIXED_ICE_IDS.includes(item.id)) {
parts.push(options.hotIce === “hot” ? t.hotOption : t.iceOption);
}

if (options.size === “large”) {
parts.push(t.sizeLarge.replace(/\s*(.*)/, “”));
}

if (options.whip === “add”) {
parts.push(t.whipAdd.replace(/\s*(.*)/, “”));
}

if (options.topping === “pearl”) {
parts.push(t.toppingPearl.replace(/\s*(.*)/, “”));
}

return parts.join(” · “);
};

// ============================================================
// 텍스트 변수 치환
// ============================================================

export const format = (template, vars) =>
(template || “”).replace(/{(\w+)}/g, (_, k) =>
vars[k] !== undefined ? vars[k] : “”
);
