<script src="https://smtpjs.com/v3/smtp.js">
</script>
function SendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "parmaraashu9@gmail.com",
    Password : "E2F7F429B376092F0844510E027B21429BBF7",
    To : 'parmaraashu9@gmail.com',
    From : document.getElementById("idname").value,
    Subject : "",
    Body : document.getElementById("message").value
  }).then(
  message => alert(message)
  );
}
