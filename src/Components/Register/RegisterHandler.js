export const allFieldsRequired = (
    RegisterValue,
    error
  ) => {
    for (const inputValue in RegisterValue) {
      if (
        RegisterValue.hasOwnProperty(inputValue) &&
        RegisterValue[inputValue] === ""
      )
        error[inputValue] = `All are required`;
    }
  
    if (Object.keys(error).length !== 0) {
      return error;
    }
  };
  
  export const validateEmail = (
    RegisterValue,
    error
  ) => {
    //TODO: Change this according to college/school.
    const collegeEmail = "texascollege.edu.np";
    const email = RegisterValue.email;
  
    const emailAddress = email.toLowerCase().trim();
    const validateCollegeEmail = emailAddress.split("@")[1];
    if (!emailAddress || validateCollegeEmail !== collegeEmail)
      return (error.email = "Please enter valid email");
  };
  
  export const validatePasswordOnChange = (
    RegisterValue,
    error
  ) => {
    const password = RegisterValue.password;
    const passkey = password.trim();
  
    //Regular Expression
    const lowerCase = new RegExp("(?=.*[a-z])");
    const upperCase = new RegExp("(?=.*[A-Z])");
    const digit = new RegExp("(?=.*\\d)");
    const special = new RegExp("(?=.*[!@#$%^&*])");
  
    if (!lowerCase.test(passkey))
      return (error.password = "Must contain a lowercase character.");
    if (!upperCase.test(passkey))
      return (error.password = "Must contain an uppercase character.");
    if (!digit.test(passkey)) error.password = "Must contain a digit.";
    if (!special.test(passkey))
      return (error.password =
        "Must contain a special character [! @ # $ % ^ & *].");
    if (password.length < 8) {
      return (error.password = "Password atleast contains 8 characters");
    }
    if (RegisterValue.password !== RegisterValue.confirmpassword) {
      return (error.password = "password does not match");
    }
  };
  
  export const checkValidNumber = (
    registervalue,
    error
  ) => {
    if (registervalue.phoneNumber.length < 10) {
      return (error.number = "Invalid Number");
    }
  };
  