let progress = 0;

const bar = document.getElementById("progress");
const percent = document.getElementById("percent");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

const interval = setInterval(() => {
  progress += 1; // smoother

  bar.style.width = progress + "%";
  percent.innerText = progress + "%";

  if (progress >= 30) step1.classList.add("active");
  if (progress >= 60) step2.classList.add("active");
  if (progress >= 90) step3.classList.add("active");

  if (progress >= 100) {
    clearInterval(interval);

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("mainPage").style.display = "block";
    }, 400);
  }

}, 10); // faster + smooth
