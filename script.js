const contactForm = document.getElementById("contactForm");
const submit = document.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("phoneError").textContent = "";
  document.getElementById("emailError").textContent = "";

  const name = document.getElementById("name").value;
  if (!name) {
    document.getElementById("nameError").textContent =
      "Необхідно вказати ім'я.";
    isValid = false;
  }

  const message = document.getElementById("message").value;
  if (message.length < 5) {
    document.getElementById("messageError").textContent =
      "Текстове поле не меньше 5 символів.";
    isValid = false;
  }

  const phone = document.getElementById("phone").value;
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Номер телефону має починатися з +380 і містити 9 цифр.";
    isValid = false;
  }

  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Недійсний формат електронної пошти.";
    isValid = false;
  }

  if (isValid) {
    console.log({
      name: name,
      message: message,
      phone: phone,
      email: email,
    });
    alert("Форма успішно надіслана!");

    document.getElementById("contactForm").reset();
  }
});
