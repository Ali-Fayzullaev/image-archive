 // Инициализация тултипов
 document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });


  

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('needs-validation'); // Выбор формы по ID
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });



  //changeColorFontAndBtn
  const changeBgEl = document.getElementById("changeBg");
  const changeColorBtnEl = document.getElementById("changeColorBtn");


// primary
  const btnprimaryEl = document.querySelector(".btn-primary");

  btnprimaryEl.addEventListener("click", function() {
    changeBgEl.style.background = "#4a8ff8";
    changeColorBtnEl.style.background = "#4a8ff8";
});
// primary


//secondary
const btnSecondaryEl = document.querySelector(".btn-secondary");

  btnSecondaryEl.addEventListener("click", function() {
    changeBgEl.style.background = "#8d99a4"; //secondary
    changeColorBtnEl.style.background = "#8d99a4";
});

//secondary

// //success
const btnSuccessEl = document.querySelector(".costombgForNavbar");

if (btnSuccessEl) {
    btnSuccessEl.addEventListener("click", function() {
        changeBgEl.style.background = "#3ea374"; //success
        changeColorBtnEl.style.background = "#3ea374";
    });
}
// //success

//danger
const btnDangerEl = document.querySelector(".btn-danger");

  btnDangerEl.addEventListener("click", function() {
    changeBgEl.style.background = "#d65865"; //danger
    changeColorBtnEl.style.background = "#d65865";
});

//danger

//warning
const btnWarningEl = document.querySelector(".btn-warning");

  btnWarningEl.addEventListener("click", function() {
    changeBgEl.style.background = "#ebc34e"; //warning
    changeColorBtnEl.style.background = "#ebc34e";
});

//warning

//info
const btnInfoEl = document.querySelector(".btn-info");

  btnInfoEl.addEventListener("click", function() {
    changeBgEl.style.background = "#4cd0eb"; //info
    changeColorBtnEl.style.background = "#4cd0eb";
});
//info

//light
const btnLightEl = document.querySelector(".btn-light");

  btnLightEl.addEventListener("click", function() {
    changeBgEl.style.background = "#dfd5d5"; //light
    changeColorBtnEl.style.background = "#dfd5d5";
    changeColorBtnEl.style.color = "black";
});
//light















  