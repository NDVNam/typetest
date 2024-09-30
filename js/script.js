"use strict";
const info = document.querySelector(".personal-info");
const email = document.getElementById("email");
const emailForm = document.querySelector(".submit-email");
emailForm.classList.remove("hidden");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error-email");

submit.addEventListener("click", function () {
  // điều kiện để validate email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // khai báo biến check
  const check = email.value.match(regex);

  // kiem tra email hop le ?
  if (check) {
    info.classList.remove("hidden");
    emailForm.classList.add("hidden");
  } else {
    error.textContent = `'${email.value}' is not a valid email !`;
  }
});

// Chức năng ẩn thông tin nghề nghiệp
const hoverContainers = document.querySelectorAll(".job-box-grid");

hoverContainers.forEach((hoverContainer) => {
  const view = hoverContainer.querySelector(".btn-view");
  const jobContent = hoverContainer.querySelector(".job-content");

  hoverContainer.addEventListener("mouseover", function () {
    view.classList.remove("hidden");
  });

  hoverContainer.addEventListener("mouseleave", function () {
    view.classList.add("hidden");
  });

  view.addEventListener("click", function () {
    let display = jobContent.classList.contains("hidden");
    if (display) {
      jobContent.classList.remove("hidden");
      view.textContent = "View less";
    } else {
      view.textContent = "View more";
      jobContent.classList.add("hidden");
    }
  });
});
