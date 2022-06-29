export const handleFormSubmit = () => {
  const forms = document.querySelectorAll(".form")
  forms.forEach(form => {
    form.addEventListener("submit", sendPhoneForm, false)
  })

  async function sendPhoneForm(e) {
    e.preventDefault();
    const modalTitle = document.querySelector(".modal__title");
    const forms = document.querySelectorAll(".form");
    const formMessages = document.querySelectorAll(".form-message");
    const inputs = e.currentTarget.getElementsByTagName("input")
    const phone = inputs["phone"].value
    const token = inputs["gorilla.csrf.Token"].value

    const resp = await fetch("/api/v1/crm/lead", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      },
      body: JSON.stringify({phone: phone})
    }).then(resp => resp).catch(resp => resp)

    if (resp.status === 201) {
      forms.forEach(form => {
        modalTitle.style.display = "none";
        form.style.display = "none";
      });
      formMessages.forEach(message => {
        message.style.marginTop = "20px";
        message.innerHTML += '<span>Дякуємо.<br>Ми радіємо, що маємо можливість проконсультувати вас</span> 🥳';
      })
    } else {
      formMessages.forEach(message => {
        message.style.marginTop = "20px";
        message.innerHTML = '<span>Сталася помилка. Перевірте правильність введення номеру телефону. Формат: +380677967323</span>';
      })
    }
  }
}