const $dq = (n) => {
  return document.querySelector(n);
};
const $dc = (n) => {
  return document.createElement(n);
};

let isEnabledSpace = true;

const setEnableSpace = (v) => {
  isEnabledSpace = v;
};

const text = (a, b) => `${a} ${b}`;
const titleType = (fn1) => (fn2) => (a) => (b) => text(fn1(a), fn2(b));

const createImage = (type) => {
  const { path, name } = type;
  const _modal = $dq("#modal");
  const _section = $dc("section");
  _section.classList.add("image-box", "bg-black");
  const imgElem = $dc("img");
  $(imgElem).attr("src", `images/${path}/${name}.jpg`);
  _section.append(imgElem);
  _modal.append(_section);
};

const makeList = (ul, className, text) => {
  const li = $dc("li");
  li.setAttribute("class", `title-${className}`);
  li.innerText = text;
  ul.append(li);
};

const showTitle = (type) => {
  removeSection();
  dislpayTitle({ type, sub: false });
};

const removeSection = () => {
  if ($dq("section")) $dq("section").remove();
};

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const hours = today.getHours().toString().padStart(2, "0"); // 시
  const minutes = today.getMinutes().toString().padStart(2, "0"); // 분
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export {
  $dq,
  $dc,
  createImage,
  titleType,
  makeList,
  setEnableSpace,
  isEnabledSpace,
  showTitle,
  removeSection,
  getDate,
};
