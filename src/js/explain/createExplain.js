import { explainList } from "./list.js";

let index = 0;

const addText = ({ id, content }) => {
  const _modal = document.querySelector("#modal");
  const _div = document.createElement("div");
  _div.setAttribute("class", "explain-box");
  const ul = document.createElement("ul");
  content.map((c) => {
    const li = document.createElement("li");
    li.setAttribute(
      "class",
      `explain-${c.type}${id == 1 ? "" : c.type == "explain" ? "" : "-100"}`
    );
    li.innerText = c.text;
    ul.append(li);
  });
  _div.append(ul);
  _modal.append(_div);
};

const displayExplain = (fn, param) => {
  const ul = document.querySelector(".explain-box");
  if (ul) ul.remove();
  if (index < explainList.length) {
    addText(explainList[index]);
    index++;
  } else {
    if (fn) fn(param);
  }
};

const replay = () => (index = 0);

export { displayExplain, replay };
