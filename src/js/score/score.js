import { getDate } from "../common.js";

const localStorageId = "psyDatas";

const saveLocalStorageData = (obj) => {
  const datas = getLocalStorageData("localStorageId") ?? [];
  const formet = { date: getDate(), history: obj };
  datas.push(formet);
  window.localStorage.setItem(localStorageId, JSON.stringify(datas));
  return;
};

const getLocalStorageData = (name) => {
  let localData = JSON.parse(window.localStorage.getItem("psyDatas"));
  return localData;
};

export { saveLocalStorageData, getLocalStorageData };
