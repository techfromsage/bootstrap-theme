function FormValidator(t, e) {
  this.form = t,
  this.errors = [],
  this.validators = [],
  $(this.form).on("submit", $.proxy(this, "onSubmit")),
  this.summary = e && e.summary ? $(e.summary) : $(".errorSummary"),
  this.summary.on("click", "a", $.proxy(this, "onErrorClick")),
  this.originalTitle = document.title
}
FormValidator.entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
},
FormValidator.escapeHtml = function(t) {
  return String(t).replace(/[&<>"'`=\/]/g, function(t) {
      return FormValidator.entityMap[t]
  })
}
,
FormValidator.prototype.onErrorClick = function(t) {
  t.preventDefault();
  var e = t.target.href
    , o = e.substring(e.indexOf("#"), e.length);
  $(o).focus()
}
,
FormValidator.prototype.resetTitle = function() {
  document.title = this.originalTitle
}
,
FormValidator.prototype.updateTitle = function() {
  document.title = "(" + this.errors.length + " errors) - " + document.title
}
,
FormValidator.prototype.showSummary = function() {
  this.summary.html(this.getSummaryHtml()),
  this.summary.removeClass("d-none"),
  this.summary.attr("aria-labelledby", "errorSummary-heading"),
  this.summary.focus()
}
,
FormValidator.prototype.getSummaryHtml = function() {
  var t = `<span>We have found <b>${this.errors.length}</b> issues. Please correct them to continue.</span>`;
  // t += "<ul>";
  // for (var e = 0, o = this.errors.length; e < o; e++) {
  //     var i = this.errors[e];
  //     t += "<li>",
  //     t += '<a class="alert-link" href="#' + FormValidator.escapeHtml(i.fieldName) + '">',
  //     t += FormValidator.escapeHtml(i.message),
  //     t += "</a>",
  //     t += "</li>"
  // }
  return t;
}
,
FormValidator.prototype.hideSummary = function() {
  this.summary.addClass("d-none"),
  this.summary.removeAttr("aria-labelledby")
}
,
FormValidator.prototype.onSubmit = function(t) {
  this.removeInlineErrors();
  this.hideSummary();
  this.resetTitle();

  if (!this.validate()) {
    t.preventDefault();
    this.updateTitle();
    this.showSummary();
    this.showInlineErrors();
  }
}
,
FormValidator.prototype.showInlineErrors = function() {
  for (var t = 0, e = this.errors.length; t < e; t++)
      this.showInlineError(this.errors[t])
}
,

FormValidator.prototype.showInlineError = function(t) {
  var e = '<span class="field-error--new">' + FormValidator.escapeHtml(t.message) + "</span>"
    , o = $("#" + t.fieldName)
    , i = o.parents(".field")
    , n = i.find("label")
    , s = i.find("legend");
  i.find(".field-error").remove(),
  s.length ? (s.append(e),
  i.attr("aria-invalid", "true")) : (i.append(e),
  o.attr("aria-invalid", "true"))
}
,
FormValidator.prototype.removeInlineErrors = function() {
  $(this.form).find(".field-error").remove(),
  $(this.form).find("[aria-invalid]").attr("aria-invalid", "false")
}
,
FormValidator.prototype.addValidator = function(t, e) {
  this.validators.push({
      fieldName: t,
      rules: e,
      field: this.form.elements[t]
  })
}
,
FormValidator.prototype.validate = function() {
  this.errors = [];
  var t, e, o = null;
  for (t = 0; t < this.validators.length; t++)
      for (o = this.validators[t],
      e = 0; e < o.rules.length; e++)
          if (!o.rules[e].method(o.field, o.rules[e].params)) {
              this.errors.push({
                  fieldName: o.fieldName,
                  message: o.rules[e].message
              });
              break
          }
  return 0 === this.errors.length
}
function CharacterCountdown(t, e) {
  this.field = $(t),
  this.status = $('<div class="indicator help-block" role="status" aria-live="polite" />'),
  this.setOptions(e),
  this.updateStatus(this.options.maxLength),
  this.field.parent().append(this.status),
  this.field.on("input", $.proxy(this, "onChange"))
}
CharacterCountdown.prototype.setOptions = function(t) {
  this.options = $.extend({
      maxLength: 100,
      message: "You have %count% characters remaining."
  }, t)
}
,
CharacterCountdown.prototype.onChange = function(t) {
  this.updateStatus(this.options.maxLength - this.field.val().length)
}
,
CharacterCountdown.prototype.updateStatus = function(t) {
  var e = this.options.message.replace(/%count%/, t);
  this.status.html(e)
}
;

function PasswordRevealer(t) {
  this.el = t,
  $(this.el).wrap('<div class="input-group"></div>'),
  this.container = $(this.el).parent(),
  this.createButton()
}
PasswordRevealer.prototype.createButton = function() {
  this.button = $('<button class="btn btn-default" type="button">Show</button>'),
  this.container.append(this.button),
  this.button.on("click", $.proxy(this, "onButtonClick"))
}
,
PasswordRevealer.prototype.onButtonClick = function() {
  "password" === this.el.type ? (this.el.type = "text",
  this.button.text("Hide")) : (this.el.type = "password",
  this.button.text("Show"))
}
;
