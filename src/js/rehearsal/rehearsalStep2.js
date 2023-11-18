import { $dq, $dc, makeList, removeSection } from "../common.js";
import { ruleList, title } from "./content.js";

import { dislpayTitle } from "../explain/question.js";
import { setServayStep } from "../servay/servay.js";

let currentStep = 0;

const showTitle = (type) => {
  removeSection();
  dislpayTitle({ type, sub: false });
};

const displayTitle = () => {
  showTitle({ main: title, sub: false });
};

const showExplain = () => {
  removeSection();
  const _modal = $dq("#modal");
  const _section = $dc("section");
  _section.setAttribute("class", "sub-title-box");
  const _ul = $dc("ul");
  ruleList.map((d) => {
    makeList(_ul, "sub-explain", d);
  });
  _section.append(_ul);
  _modal.append(_section);
};

const action = [displayTitle, showExplain];
const dislpayRehearsalTest = () => {
  if (currentStep < action.length) {
    action[currentStep]();
    currentStep++;
  } else {
    callNextRehersal();
  }
};

const callNextRehersal = () => {
  showTitle({ main: "trnsv", sub: "practice" });
  setServayStep("rehersal");
};

export { dislpayRehearsalTest };
