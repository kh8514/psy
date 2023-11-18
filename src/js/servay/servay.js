import {
  $dq,
  createImage,
  setEnableSpace,
  removeSection,
  makeList,
  isEnabledSpace,
} from "../common.js";
import { dislpayTitle } from "../explain/question.js";
import { scorePage, assessPage } from "../score/scorePage.js";
import { numbers } from "./content.js";
import { saveLocalStorageData } from "../score/score.js";

const INTRO = 1500;
const PHOTO1 = 500;
const READY = 2000;
const PHOTO2 = 5000;
let STEP = "explain";

let currentStep = 0;
let stepList = [];
let isEnabledArrow = false;
let isAddTime = false;

let interval;
let seconds = 0;
let centiseconds = 0;

let data = {
  rehersal: [],
  servay: [],
  assess: 0,
};

let timeId;
const sleep = (delay) =>
  new Promise((resolve) => {
    timeId = setTimeout(resolve, delay);
  });

const showTitle = (type) => {
  removeSection();
  dislpayTitle({ type, sub: false });
};

const randomIndex = numbers;
const showImage = (addData) => {
  const { image } =
    STEP === "servay"
      ? stepList[randomIndex[currentStep]]
      : stepList[currentStep];
  removeSection();
  createImage(image);

  if (addData) {
    const value = {
      type: "",
      image: image.name,
      score: 0,
      rehersalTime: 0,
      servayTime: 0,
    };
    data[STEP].push(value);
  }
};

const cycle1 = async () => {
  setEnableSpace(false);
  showTitle({ main: "+", sub: false });
  await sleep(INTRO);
  showImage(true);
  await sleep(PHOTO1);
  // 과제시간
  interval = setInterval(startTimer, 10);
  makeButton();
};

const cycle2 = async () => {
  stopTimer();
  // 타임1
  data[STEP][currentStep]["rehersalTime"] = seconds;
  resetTimer();
  // 버튼
  isEnabledArrow = false;
  setEnableSpace(false);
  // 준비
  showTitle({ main: "준비하세요", sub: false });
  await sleep(READY);
  // 이미지
  showImage();
  await sleep(PHOTO2);
  // 점수
  makeScore({ html: scorePage, className: "score" });
  currentStep++;
};

const makeButton = () => {
  isEnabledArrow = true;
  isAddTime = true;
  removeSection();
  const element = $dq("#modal");
  element.innerHTML = `<section>
      <div class='prompt-area'>
        <div class="msg">
          <h1>선택하세요</h1>
        </div>
        <div class='buttons'><div class='button'>재평가</div><div class='button'>주의분산</div></div>
      </div>
    </section>`;
  $("section").addClass("prompt");
  $(".button").map((t) => {
    $(".button")[t].onclick = (e) => {
      const value = e.target.innerText;
      data[STEP][currentStep]["type"] = value;
      cycle2();
    };
  });
};

const makeScore = (type) => {
  const { html, className } = type;
  removeSection();
  const element = $dq("#modal");
  element.innerHTML = html;
  $("section").addClass(className);
  isEnabledArrow = false;
  setEnableSpace(false);
  isAddTime = false;
  // 점수 선택 시간측정 시작
  interval = setInterval(startTimer, 10);
  const radios = document.querySelectorAll("input[name='score']");
  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      isAddTime = true;
      const current = e.target;
      if (current.checked) {
        setEnableSpace(true);
        if (className == "assess") data[className] = current.value;
        else data[STEP][currentStep - 1][className] = current.value;
      }
    });
  });
};

const rehersalStep = (step) => {
  if (stepList.length === 0) stepList = step;
  if (currentStep < step.length) {
    cycle1();
  } else {
    stepList = [];
    currentStep = 0;
    STEP = "servay";
    showTitle({ main: "이제부터는 실제 과제가 시작됩니다", sub: false });
  }
};

const servayStep = (step) => {
  if (stepList.length === 0) stepList = step;
  if (currentStep < step.length) {
    cycle1();
  } else {
    currentStep = 0;
    STEP = "assess";
    removeSection();
    assessStep();
  }
};

const setServayStep = (step) => {
  STEP = step;
};

const assessStep = () => {
  //만족도
  stopTimer();
  makeScore({ html: assessPage, className: "assess" });
  setEnableSpace(false);
  STEP = "end";
};

const endStep = () => {
  resetTimer();
  removeSection();
  const _modal = document.querySelector("#modal");
  const _section = document.createElement("section");
  _section.setAttribute("class", "title-box");
  const ul = document.createElement("ul");
  makeList(ul, "main", "- 종료 -");
  makeList(ul, "main", "감사합니다.");
  _section.append(ul);
  _modal.append(_section);
  saveLocalStorageData(data);
  STEP = "reset";
};

const getButtonSelect = (type) => {
  return {
    ArrowLeft: "재평가",
    ArrowRight: "주의분산",
  }[type];
};

const startTimer = () => {
  centiseconds++; // 1증가
  if (centiseconds > 99) {
    seconds++; // 1초 상승
    centiseconds = 0;
  }
};

const stopTimer = () => {
  clearInterval(interval);
  centiseconds = 0;
};

const resetTimer = () => {
  clearInterval(interval);
  interval = null;
  centiseconds = 0;
  seconds = 0;
};

function handleKeyPress(event) {
  if (isEnabledArrow) {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      event.preventDefault();
      setEnableSpace(true);
      data[STEP][currentStep]["type"] = getButtonSelect(event.code);
      stopTimer();
      cycle2();
    }
  }
  if (isEnabledSpace) {
    if (event.code == "Enter" || event.code == "Space") {
      if (!interval) return;
      if (isAddTime) {
        //시간측정 시간 입력
        if (STEP === "rehersal" || STEP === "servay") {
          // 타임2
          stopTimer();
          data[STEP][currentStep - 1]["servayTime"] = seconds;
          resetTimer();
        }
      }
    }
  }
}
window.addEventListener("keyup", handleKeyPress, true);

export { STEP, servayStep, rehersalStep, assessStep, setServayStep, endStep };
