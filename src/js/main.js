import { displayExplain } from "./explain/createExplain.js";
import { displayRehersal } from "./rehearsal/rehearsalStep1.js";
import {
  STEP,
  rehersalStep,
  servayStep,
  assessStep,
  endStep,
} from "./servay/servay.js";
import { rehersalList, servayList } from "./servay/content.js";
import { isEnabledSpace } from "./common.js";

$(".btn-start").on("click", function () {
  $("#modal-container").removeAttr("class").addClass("slide-up");
  $(".container").addClass("modal-active");
  setTimeout(displayExplain, 1000);
});

function handleKeyPress(event) {
  if (!isEnabledSpace) return;
  if (event.code == "Enter" || event.code == "Space") {
    event.preventDefault();

    switch (STEP) {
      case "explain":
        displayExplain(displayRehersal);
        break;
      case "rehersal":
        rehersalStep(rehersalList);
        break;
      case "servay":
        servayStep(servayList);
        break;
      case "assess":
        assessStep();
        break;
      case "end": {
        endStep();
      }
    }
  }
}

window.addEventListener("keyup", handleKeyPress, true);
