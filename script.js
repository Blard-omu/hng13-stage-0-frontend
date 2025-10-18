const timeElement = document.getElementById('current-time');
if (timeElement) {
  const updateTime = () => {
    timeElement.textContent = Date.now().toString();
  };
  updateTime();
  setInterval(updateTime, 1000);
}