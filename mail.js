
<script src="https://smtpjs.com/v3/smtp.js">
</script>
function SendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "parmaraashu9@gmail.com",
    Password : "E2F7F429B376092F0844510E027B21429BBF7",
    To : document.getElementById("Email").value,
    From : 'parmaraashu9@gmail.com',
    Subject : "",
    Body : document.getElementById("Message").value
  }).then(
  message => alert(message)
  );
}

=======
<script src="https://smtpjs.com/v3/smtp.js">
</script>
function SendEmail() {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "parmaraashu9@gmail.com",
    Password : "E2F7F429B376092F0844510E027B21429BBF7",
    To : document.getElementById("Email").value,
    From : 'parmaraashu9@gmail.com',
    Subject : "",
    Body : document.getElementById("Message").value
  }).then(
  message => alert(message)
  );
}
>>>>>>> 746bc5982353c5b78df8bbecc00e2619477ffc30
