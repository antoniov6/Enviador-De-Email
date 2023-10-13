emailjs.init("eP7pPB0Zje3qvtACZ");

const sendBtn = document.querySelector(".send-btn");
const result = document.querySelector(".result");

sendBtn.addEventListener("click", sendEmail);

function sendEmail() {
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_ynpbf1b", "template_6dzk3ff", {
      to_email: to,
      subject: subject,
      message: message,
    })
    .then(
      function () {
        result.innerHTML = "Email enviado com sucesso!";
        result.style.opacity = 1;
      },
      function (error) {
        result.innerHTML = "Falha ao enviar o email!";
        result.style.opacity = 1;
        console.log(error);
      }
    );
}
