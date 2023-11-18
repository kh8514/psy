import { typeName, questionList } from "./list.js";

import { titleType, makeList } from "../common.js";

/**
 *
 * @param {type{}, sub:bloon}
 */

const addTitle = ({ type, sub }) => {
  const _modal = document.querySelector("#modal");
  const _section = document.createElement("section");
  _section.setAttribute("class", "title-box");
  const ul = document.createElement("ul");
  let text = type.main;
  if (type.sub) {
    text = titleType(typeName)(questionList)(type.main)(type.sub);
  }

  if (sub) {
    makeList(ul, "main", text);
    makeList(ul, "sub", "어떤 생각을 하는지 구두로 말씀해주세요");
  } else {
    makeList(ul, "main", text);
  }
  _section.append(ul);
  _modal.append(_section);
};

const dislpayTitle = (param) => {
  addTitle(param);
};

export { dislpayTitle };
