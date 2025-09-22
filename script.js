function loveCalc() {
  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();
  let resultDiv = document.getElementById("result");

  if (name1 === "" || name2 === "") {
    resultDiv.innerHTML = "Please enter both names!";
    resultDiv.style.color = "#ff0000"; // red for error
    return;
  }

  // Normal result
  resultDiv.style.color = "#22ad24"; // green
  let lovePercent = Math.floor(Math.random() * 101);

  if (lovePercent > 80) {
    resultDiv.innerHTML = `${name1} ❤️ ${name2} = ${lovePercent}% Love! Hurrey! It's a Perfect Match 😍`;
  } else if (lovePercent <= 30) {
    resultDiv.innerHTML = `${name1} ❤️ ${name2} = ${lovePercent}% Love! Sorry! Better Luck Next Time 😅`;
  } else {
    resultDiv.innerHTML = `${name1} ❤️ ${name2} = ${lovePercent}% Love!`;
  }

  // Clear inputs
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";
}

// =============================================
// function loveCalc() {
//   let name1 = document.getElementById("name1").value;
//   let name2 = document.getElementById("name2").value;

//   if (name1 === "" || name2 === "") {
//     alert("Please write both names");
//     return;
//   }

//   let finalPercent = Math.floor(Math.random() * 51) + 50;

//   let resultDiv = document.getElementById("result");
//   resultDiv.classList.remove("show");
//   resultDiv.innerHTML = "";

//   let progressContainer = document.getElementById("progress-container");
//   let progressBar = document.getElementById("progress-bar");
//   let progressText = document.getElementById("progress-text");

//   progressContainer.style.display = "block";
//   progressBar.style.width = "0%";
//   progressText.innerHTML = "0%";

//   let percent = 0;
//   let interval = setInterval(() => {
//     if (percent < finalPercent) {
//       percent++;
//       progressBar.style.width = percent + "%";
//       progressText.innerHTML = percent + "%";
//     } else {
//       clearInterval(interval);

//       // Show result
//       resultDiv.innerHTML = `${name1} ❤️ ${name2} = ${finalPercent}% Love!`;
//       resultDiv.classList.add("show");
//     }
//   }, 30);

//   document.getElementById("name1").value = "";
//   document.getElementById("name2").value = "";
// }
