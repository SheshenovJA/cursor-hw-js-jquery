var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var ipPattern = /^\d+\.\d+\.\d+\.\d+$/;
var datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;// DD/MM/YYYY or DD-MM-YYYY
var $ip = $("input[name='ip']");
var $date = $("input[name='date']");



$('#submit').on('click', function() {
    var valid = true,
        errorMessage = "",
        $email = $('#email');

    if ($('#name').val() == '') {
        errorMessage  = "please enter your name \n";
        valid = false;
    }
    var nameLength = $("#name").val().length;
    //console.log(nameLength)
      if (nameLength < 5 ||nameLength > 10 ) {
        errorMessage += "Name length not valid\n";
        valid = false;
 }

    if ($('#date').val() == '') {
        errorMessage += "Please enter your date\n";
         valid = false;
    }
    if ($('#ip').val() == '') {
        errorMessage += "Please enter IP adress\n";
         valid = false;
    }

    if ($email.val() == '') {
        errorMessage += "Please enter your email\n";
        valid = false;
    }

    if($email.val() !== ""){
            if(!emailPattern.test($email.val())){
                errorMessage += "Please enter email in correct format\n";
                valid  = false;
            }
        }
    if($ip.val() !== ""){
      if(!ipPattern.test($ip.val())){
        errorMessage += "Please enter IP adress in correct format\n"
        valid = false;
      }
    }
    if($date.val() !== ""){
      if (!datePattern.test($date.val())){
        errorMessage += "Please enter a correct date in DD/MM/YYYY or DD-MM-YYYY formats";
        valid = false;
      }
    }

    if(!valid && errorMessage.length > 0){
        alert(errorMessage);
    }
    if (valid && errorMessage.length == 0){
        alert('no errors! gz')
    }

});
