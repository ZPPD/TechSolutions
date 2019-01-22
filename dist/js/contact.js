/*=============
  Contact Page Form
=============*/

const first = document.querySelector("#firstName");
const last = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");

// make alert pop up
function submitForm(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const contactForm = document.querySelector(".contact-form");
  const form = document.querySelector(".form");
  contactForm.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 4000);
}

// clear fields after submit
function clearFields() {
  first.value = "";
  last.value = "";
  email.value = "";
  phone.value = "";
  company.value = "";
  subject.value = "";
  message.value = "";
  checkbox.checked = false;
}

// submit function
const submit = document.querySelector(".submit-btn");
submit.addEventListener("click", function(e) {
  // validate
  if (
    first.value === "" ||
    last.value === "" ||
    email.value === "" ||
    subject.value === "" ||
    message.value === "" ||
    checkbox.checked === false
  ) {
    submitForm("Please fill in all the required fields", "alert-wrong");
  } else {
    submitForm("Your request has been sent!", "alert-sent");
    clearFields();
  }
  e.preventDefault();
});

// modal button
const closeBtn = document.querySelector(".closeBtn");
const closeModal = document.querySelector(".closeModal");
const modal = document.querySelector("#modal");
const modalbtn = document.querySelector(".view-modal");

// listen for open view btn
modalbtn.addEventListener("click", function(e) {
  modal.style.display = "block";
  e.preventDefault();
});

// listen for close on close btn
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

closeModal.addEventListener("click", function(e) {
  modal.style.display = "none";
  e.preventDefault();
});

// close by clicking outside the box,
// modal is the grey area outside the box
window.addEventListener("click", function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
