const Excel = require("exceljs");

const getLocalStorageData = () => {
  let localData = JSON.parse(window.localStorage.getItem("psyDatas"));
  return localData;
};

const makeData = () => {
  const datas = getLocalStorageData();
  const format = {
    date: "",
    type1: "",
    type2: "",
    image: "",
    score: "",
    rehersalTime: "",
    servayTime: "",
    assess: "",
  };
  const excelData = [];
  datas.map((data) => {
    const { date, history } = data;
    const { rehersal, servay, assess } = history;
    rehersal.map((d) => {
      const { type, image, score, rehersalTime, servayTime } = d;
      const row = {
        date,
        gb: "연습과제",
        type,
        image,
        score,
        rehersalTime: rehersalTime || 1,
        servayTime: servayTime || 1,
        assess,
      };
      excelData.push(row);
    });
    servay.map((d) => {
      const { type, image, score, rehersalTime, servayTime } = d;
      const row = {
        date,
        gb: "실전과제",
        type,
        image,
        score,
        rehersalTime: rehersalTime || 1,
        servayTime: servayTime || 1,
        assess,
      };
      excelData.push(row);
    });
  });
  return excelData;
};

const Exclude = () => {
  try {
    // 엑셀 생성
    const workbook = new Excel.Workbook();

    // 생성자
    workbook.creator = "작성자";

    // 최종 수정자
    workbook.lastModifiedBy = "최종 수정자";

    // 생성일(현재 일자로 처리)
    workbook.created = new Date();

    // 수정일(현재 일자로 처리)
    workbook.modified = new Date();

    // addWorksheet() 함수를 사용하여 엑셀 시트를 추가한다.
    // 엑셀 시트는 순차적으로 생성된다.
    workbook.addWorksheet("Sheet One");
    workbook.addWorksheet("Sheet Two");
    workbook.addWorksheet("Sheet Three");

    // 엑셀 시트를 접근하는 방법은 세 가지 방법이 존재한다.
    // 1. getWorksheet() 함수에서 시트 명칭 전달
    const sheetOne = workbook.getWorksheet("Sheet One");

    // 2. getWorksheet() 함수에서 시트 인덱스 전달
    //const sheetTwo = workbook.getWorksheet(1);

    // 3. 대괄호 표기법
    //const sheetThree = workbook.worksheets[2];

    // removeWorksheet() 함수를 사용하여 엑셀 시트를 제거한다.
    //workbook.removeWorksheet(sheetThree.id);

    // 컬럼 설정
    // header: 엑셀에 표기되는 이름
    // key: 컬럼을 접근하기 위한 key
    // hidden: 숨김 여부
    // width: 컬럼 넓이
    sheetOne.columns = [
      { header: "date", key: "date", width: 20 },
      { header: "과제", key: "gb", width: 15 },
      { header: "전략", key: "type", width: 15 },
      { header: "선택시간", key: "rehersalTime", width: 15 },
      { header: "이미지명", key: "image", width: 60 },
      { header: "점수", key: "score", width: 15 },
      { header: "선택시간", key: "servayTime", width: 15 },
      { header: "평가", key: "assess", width: 15 },
    ];

    const data = makeData();
    const borderStyle = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };

    data.map((item, index) => {
      sheetOne.addRow(item);

      // 추가된 행의 컬럼 설정(헤더와 style이 다를 경우)
      for (let loop = 1; loop <= 8; loop++) {
        const col = sheetOne.getRow(index + 1).getCell(loop);
        col.border = borderStyle;
        //col.font = { name: "Arial Black", size: 12 };
      }
    });

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${getDate()}.xlsx`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  } catch (error) {
    console.error(error);
  }
};

const exceldown = document.querySelector("#excelButton");
exceldown.addEventListener("click", () => {
  Exclude();
});

const getDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const hours = today.getHours().toString().padStart(2, "0"); // 시
  const minutes = today.getMinutes().toString().padStart(2, "0"); // 분
  return `${year}${month}${day}${hours}${minutes}`;
};
