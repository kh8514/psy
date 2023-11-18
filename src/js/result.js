import { $dq } from "./common.js";
const getLocalStorageData = () => {
  let localData = JSON.parse(window.localStorage.getItem("psyDatas"));
  localData.sort((a, b) => {
    if (a.date > b.date) return -1;
  });
  return localData;
};

const datas = getLocalStorageData() ?? [];

const makeResultArea = () => {
  const resultContainer = document.querySelector(".result-container");
  createList(resultContainer);
};

const createList = (container) => {
  if ($dq(".box")) $dq(".box").remove();
  if (datas === null || datas.length === 0) {
    const none = document.createElement("div");
    none.innerText = "데이터가 없습니다.";
    none.setAttribute("class", "result-box");
    container.append(none);
  } else {
    const box = document.createElement("div");
    box.classList.add("box");
    datas.map((d, index) => {
      const { date, history } = d;
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const div = document.createElement("div");
      div.classList.add("content");

      summary.innerText = date;
      const { rehersal, servay, assess } = history;
      let table = `
      <table>
        <thead>
          <tr>
            <td>no</td>
            <td>과제</td>
            <td>전략</td>
            <td>선택시간</td>
            <td>이미지명</td>
            <td>점수</td>
            <td>선택시간</td>
          </tr>
        </thead>
        <tbody>`;

      let sum = 0;

      rehersal.map((d, rehersalIndex) => {
        const { type, image, score, rehersalTime, servayTime } = d;
        sum += Number(score);
        if (rehersalIndex === 0) {
          table += `<tr>
            <td rowspan="${rehersal.length + servay.length + 3}">${
            index + 1
          }</td>
            <td rowspan="${rehersal.length}">연습과제</td>
            <td>${type} </td>
            <td>${rehersalTime || 1}</td>
            <td class="tl">${image}</td>
            <td >${score}</td>
            <td >${servayTime || 1}</td>
          </tr>`;
        } else {
          table += `<tr>
              <td>${type} </td>
              <td>${rehersalTime || 1}</td>
              <td class="tl">${image}</td>
              <td >${score}</td>
              <td >${servayTime || 1}</td>
            </tr>`;
        }
      });
      table += `<tr class="score-line"><td colspan="4"></td><td>${sum}</td><td></td></tr>`;
      sum = 0;
      servay.map((servayData, servayIndex) => {
        const { type, image, score, rehersalTime, servayTime } = servayData;
        sum += Number(score);
        if (servayIndex === 0) {
          table += `<tr>
              <td rowspan="${servay.length}">실전과제</td>
              <td>${type} </td>
              <td>${rehersalTime || 1}</td>
              <td class="tl">${image}</td>
              <td>${score}</td>
              <td >${servayTime || 1}</td>
            </tr>`;
        } else {
          table += `<tr>
              <td>${type} </td>
              <td>${rehersalTime || 1}</td>
              <td class="tl">${image}</td>
              <td >${score}</td>
              <td >${servayTime || 1}</td>
            </tr>`;
        }
      });
      table += `<tr class="score-line"><td colspan="4"></td><td>${sum}</td><td></td></tr>`;
      table += `<tr><td colspan="4">평가</td><td>${assess}</td><td></td></tr>`;
      table += `</tbody></table>`;
      div.innerHTML = table;
      summary.append(div);
      details.append(summary);
      box.append(details);
    });
    container.append(box);
  }
};

makeResultArea();
