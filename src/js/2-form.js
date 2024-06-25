const formData = {
  email: "",
  message: "",
};


const form = document.querySelector('.feedback-form');
form.addEventListener('input', handlerForm);

function handlerForm(evt) {
  const { email, message } = evt.currentTarget.elements;

  formData.email = email.value;
  formData.message = message.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

const saveData = localStorage.getItem("feedback-form-state");
if (saveData) {
  const parsedData = JSON.parse(saveData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;


  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

form.addEventListener('submit', handlerFormSubmit)

function handlerFormSubmit(e) {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields")
  } else {
    console.log(formData)
    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
}



