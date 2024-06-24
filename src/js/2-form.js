const formData = {
  email: "",
  message: "",
};


const form = document.querySelector('.feedback-form');
form.addEventListener('submit', handlerForm);

function handlerForm(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;

  formData.email = email.value;
  formData.message = message.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));

  if (!formData.email || !formData.message) {
    alert("Fill please all fields")
  } else {
    console.log(formData)
  }
}

const saveData = localStorage.getItem("feedback-form-state");
if (saveData) {
  const parsedData = JSON.parse(saveData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;


  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}


localStorage.removeItem("feedback-form-state");
formData.email = "";
formData.message = "";
form.reset();






