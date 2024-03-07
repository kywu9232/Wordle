function startCall() {
  let call = setTimeout(function startCall() {
    console.log("호출");
    call = setTimeout(startCall, 1000);
  }, 1000);
}

function appStart() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.style.display = "block";
    div.innerText = "게임이 종료됐습니다.";

    document.body.appendChild(div);
  };

  const gameover = () => {
    window.removeEventListener("keydown", handleKeyDown);
    displayGameover();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      gameover();
    }
  };
  window.addEventListener("keydown", handleKeyDown);
}

startCall();
appStart();
