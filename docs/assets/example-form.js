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

const messageBox = new CharacterCountdown(document.getElementById('message'), {maxLength: 240});
const password = new PasswordRevealer(document.getElementById('password'))
