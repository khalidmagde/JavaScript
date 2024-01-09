function emailSend() {
  var userName = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var messageBody =
    "Name: " +
    userName +
    "<br/> Email: " +
    email +
    "<br> Message: " +
    document.getElementById("messages").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "klood322@gmail.com",
    Password: "CF3A32879AFD49EC6E3C8AC308CD83779E38",
    To: "khaled.ragab322@gmail.com",
    From: "klood322@gmail.com",
    Subject: "This is the subject",
    Body: messageBody,
  });
}
