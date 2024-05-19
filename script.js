
function showSidebar() {
    const sideBar = document.querySelector("#navbar");
    sideBar.style.display = "flex";

  }
  
  function hideSidebar() {
    const sideBar = document.querySelector("#navbar");
    sideBar.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#burger").onclick = showSidebar;
  });
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#cross").onclick = hideSidebar;
  });
 