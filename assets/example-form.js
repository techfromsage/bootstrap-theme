const validator = new FormValidator(document.getElementById('registration'));

validator.addValidator("email", [
  {
    method: function (field) {
      return field.value.length > 0;
    },
    message: "Enter your email address",
  },
  {
    method: function (field) {
      return field.value.indexOf("@") > -1;
    },
    message: "You need to enter the ‘at’ symbol in the email address",
  },
]);
validator.addValidator("password", [
  {
    method: function (field) {
      return field.value.length > 0;
    },
    message: "Enter your password",
  },
  {
    method: function (field) {
      return field.value.length > 8;
    },
    message: "Your password must contain at least 8 characters",
  },
]);
validator.addValidator("message", [
  {
    method: function (field) {
      return field.value.length > 0;
    },
    message: "Enter your message",
  },
  {
    method: function (field) {
      return field.value.length > 240;
    },
    message: "Your message cannot exceed 240 characters.",
  },
]);
validator.addValidator("date--start", [
  {
    method: function (field) {
      return field.value.length > 0;
    },
    message: "A rather lengthy string as if this text has been translated into a very verbose language. There is lots going on here.",
  }
]);
validator.addValidator("date--end", [
  {
    method: function (field) {
      return field.value.length > 0;
    },
    message: "End date cannot be empty.",
  }
]);

const messageBox = new CharacterCountdown(document.getElementById('message'), {maxLength: 240});
const password = new PasswordRevealer(document.getElementById('password'))

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
