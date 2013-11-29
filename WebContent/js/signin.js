$(document).ready(function(){
 
 $('#vali-form').validate(
 {
  rules: {
	username: {
      minlength: 2,
      required: true
    },
    pwd: {
        minlength: 2,
        required: true
    }
  },
  highlight: function(element) {
    $(element).closest('.control-group').removeClass('success').addClass('error');
  },
  success: function(element) {
    element
    .text('OK!').addClass('valid')
    .closest('.control-group').removeClass('error').addClass('success');
  }
 });
});