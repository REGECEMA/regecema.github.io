// Variables 
var fname, lname, email, orgname, orgtype, country, subject;

// Variable that contains error messages
var error_msg = [];

// Function that determines if a field is empty
const isEmpty = value => value === '' ? true : false;

// Function that checks Email address
const checkEmail = () => {
    let valid = false;

    if (isEmpty(email)) {
        error_msg.push('Email cannot be blank.');
    } else if (!ValidateEmail(email)) {
        error_msg.push('Email is not valid.')
    } else {
        valid = true;
    }

    return valid;
};

// Function that validates Email address
const ValidateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


// Take control over SUBMIT botton
eform.addEventListener('submit', function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Clears error messages
    error_msg = [];

    // Loads each field data into variables...
    fname = document.querySelector('#fname').value.trim();
    lname = document.querySelector('#lname').value.trim();
    email = document.querySelector('#email').value.trim();
    orgname = document.querySelector('#orgname').value.trim();
    orgtype = document.querySelector('input[name="orgtype"]:checked').value;
    country = document.querySelector('#country').value;
    subject = document.querySelector('#subject').value;

    // Set isFormValid to false
    let isFormValid = false;

    // Validate fields
    let isFnameValid = !isEmpty(fname);
    if (!isFnameValid) { error_msg.push('First name cannot be blank.') };

    let isLnameValid = !isEmpty(lname);
    if (!isLnameValid) { error_msg.push('Last name cannot be blank.') };

    let isEmailValid = checkEmail(email);

    let isOrgnameValid = !isEmpty(orgname);
    if (!isOrgnameValid) { error_msg.push('Organization name cannot be blank.') };

    let isSubjectValid = !isEmpty(subject);
    if (!isSubjectValid) { error_msg.push('Subject cannot be blank.') };

    // Is Form data VALID?
    if (isFnameValid && isLnameValid && isEmailValid && isOrgnameValid && isSubjectValid) {
        isFormValid = true;
    }

    // Submit to the server if the form is valid
    if (isFormValid) {

        alert(" FORM data is VALID \n" +
            "----------------------------------------------- \n" +
            "First name: " + fname + "\n" +
            "Last name: " + lname + "\n" +
            "Email: " + email + "\n" +
            "Organization: " + orgname + "\n" +
            "Organization type: " + orgtype + "\n" +
            "Country: " + country + "\n" +
            "Subjet: " + subject + "\n" +
            "----------------------------------------------- \n" +
            " !!! WARNING !!! \n" +
            " This FORM has not been submitted as it is under development!");

    } else {
        alert(" ERROR  --- FORM data is NOT VALID --- \n" +
            "----------------------------------------------- \n" +
            error_msg.join("\n"));
    }

});
