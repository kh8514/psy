import { $dq, createImage } from "../common.js";
import { dislpayTitle } from "../explain/question.js";
import { dislpayRehearsalTest } from "./rehearsalStep2.js";
import { replay } from "../explain/createExplain.js";

const steps = [
  { type: "title", text: { main: "trnsv", sub: "rehearsal" }, subStep: true },
  { type: "image", image: { path: "rehearsal1", name: 1 } },
  { type: "image", image: { path: "rehearsal1", name: 2 } },
  { type: "title", text: { main: "attnDi", sub: "rehearsal" }, subStep: true },
  { type: "image", image: { path: "rehearsal1", name: 3 } },
  { type: "image", image: { path: "rehearsal1", name: 4 } },
];

let currentStep = 0;

function rehersalStep() {
  if (currentStep < steps.length) {
    const step = steps[currentStep];
    const box = $dq("section");
    if (box) box.remove();
    if (step.type === "title") {
      dislpayTitle({
        type: step.text,
        sub: step.subStep,
      });
    } else if (step.type === "image") {
      createImage(step.image);
    }
    currentStep++;
  } else {
    callNextRehersal();
  }
}

const callNextRehersal = () => {
  const box = $dq("section");
  if (box) box.remove();
  dislpayRehearsalTest();
};

const reStart = () => {
  replay();
  currentStep = 0;
  $("#modal-container").addClass("out");
  $("container").removeClass("modal-active");
};

const displayRehersal = () => {
  const ul = $dq("ul");
  if (ul) ul.remove();
  rehersalStep();
};
export { displayRehersal };
