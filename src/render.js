const { ipcRenderer } = require("electron");
// 모달에서 'Close Modal' 버튼 클릭 시 부모 창에 'closeModal' 이벤트 전송
document.getElementById("closeModalButton").addEventListener("click", () => {
  ipcRenderer.send("closeModal");
});
