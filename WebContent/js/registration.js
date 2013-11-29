$(document).ready(function(){
 
 $('#vali-form').validate(
 {
  rules: {
    fname: {
      minlength: 2,
      required: true
    },
    lname: {
        minlength: 2,
        required: true
    },
    dob: {
        required: true
    },
    mno: {
    	minlength: 10,
        required: true
    },
    address: {
    	minlength: 2,
        required: true
    },
    lmark: {
    	minlength: 2,
        required: true
    },
    pin: {
    	minlength: 2,
        required: true
    },
    email: {
      required: true,
      email: true
    },
    state: {
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