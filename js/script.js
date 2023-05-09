const scriptURL =
  "https://script.google.com/macros/s/AKfycbz8W7JtsChWQmZRVWiQdLph20kqWoGAO_oF1Pin31RCTbzK4ADYeiY9_vKbyIwpiDyXQQ/exec";
const form = document.forms["ieee-form"],
  btnKirim = document.querySelector(".btn-kirim"),
  btnLoading = document.querySelector(".btn-loading"),
  myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      form.reset();
      myAlert.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      document.location.href = "#form";
    })
    .catch((error) => console.error("Error!", error.message));
});
