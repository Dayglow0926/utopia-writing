const clockList = document.querySelectorAll(".common-clock");

function nowClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const seconds = String(date.getSeconds()).padStart(2, 0);

  clockList.forEach((item) => {
    item.children[0].innerHTML = `${hours}:${minutes}`;
    if (item.children.length > 1) {
      item.children[1].innerHTML = `${seconds}`;
    }
  });
}

nowClock();
setInterval(nowClock, 1000);
