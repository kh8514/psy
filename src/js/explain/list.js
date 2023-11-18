const explainList = [
  {
    id: 1,
    content: [{ type: "title", text: "정서조절선택 유연성 측정과제" }],
  },
  {
    id: 2,
    content: [
      {
        type: "explain",
        text: "본 과제에서는 부정적인 정서가 유발되는 상황에서 참가자가 어떠한 정서조절전략을 사용하는지를 파악하고자 합니다.",
      },
      {
        type: "explain",
        text: "그에 따라, 과제에 등장할 사진들이 다소 자극적일 수 있음을 미리 알려드립니다.",
      },
    ],
  },
  {
    id: 3,
    content: [
      { type: "title", text: '"재평가" 란,' },
      {
        type: "explain",
        text: "부정적 의미에 대해 다시 생각하여, 부정적인 감정을 줄이기 위한 방향으로 다르게 해석하는 것.",
      },
      {
        type: "explain",
        text: "제시되는 이미지에서 최대한 긍정적인 측면을 찾아, 그것에 초점을 맞춘다.",
      },
    ],
  },
  {
    id: 4,
    content: [
      { type: "title", text: '"주의분산" 이란' },
      {
        type: "explain",
        text: "현재의 상황에서, 주의를 완전히 돌려버리는 것.",
      },
      {
        type: "explain",
        text: "이미지와 전혀 관련이 없는 무언가를 생각하여 주의를 분산시킨다.",
      },
    ],
  },
];

const typeName = (type) => {
  return {
    attnDi: "“주의분산”",
    trnsv: '"재평가"',
  }[type];
};

const questionList = (type) => {
  return {
    rehearsal: " 연습",
    practice: " 전략을 사용하시오",
  }[type];
};

export { explainList, typeName, questionList };
