/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
	// put your validation code here
	// it will be a series of if statements
	validate_flag = true;
	alert_string = ""
	if (formObj.firstName.value == "") {
		alert_string = alert_string + "You must enter a first name\n"
	  formObj.firstName.focus();
	  validate_flag = false;
	}
	if (formObj.lastName.value == "") {
	  alert_string = alert_string + "You must enter a last name\n"
	  formObj.lastName.focus();
	  validate_flag = false;
	}
	if (formObj.title.value == "") {
	  alert_string = alert_string + "You must enter a title\n"
	  formObj.title.focus();
	  validate_flag = false;
	}
	if (formObj.org.value == "") {
	  alert_string = alert_string + "You must enter an organization\n"
	  formObj.org.focus();
	  validate_flag = false;
	}
	if (formObj.pseudonym.value == "") {
	  alert_string = alert_string + "You must enter a nickname\n"
	  formObj.pseudonym.focus();
	  validate_flag = false;
	}
	if(!validate_flag) {
		alert_string = alert_string.substring(0, alert_string.length - 1);
		alert(alert_string);
	} else {
		alert("Form submitted!")
	}
	return validate_flag;
}

function clickComments(comments) {
	if (comments.innerHTML == "Please enter your comments") {
		comments.innerHTML = ""
	}
	return true;
}

function buttonPress(button){
  if (button.form.firstName.value != "" && button.form.lastName.value != "" && button.form.pseudonym.value != ""){
    alert(button.form.firstName.value + " " + button.form.lastName.value + " is " + button.form.pseudonym.value);
  } else {
    alert("Required fields for this alert are not filled in.");
  }
}