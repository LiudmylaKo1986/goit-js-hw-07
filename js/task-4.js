const formElem = document.querySelector(".login-form");
formElem.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();

  // Обрізка значень тут
  const userEmail = formElem.elements.email.value.trim();
  const userPassword = formElem.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    // Тепер об'єкт містить обрізані значення
    const obj = {
      email: userEmail,
      password: userPassword,
    };
    console.log(obj); // Вивести об'єкт тільки якщо обидва поля не є порожніми
    formElem.reset(); // Метод скидання форми переміщено в середину блоку else
  }
}