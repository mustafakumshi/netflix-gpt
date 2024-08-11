export const validateSignUpFormData = (fullName, email, password) => {

    const fullNameRegex = /^[A-Za-zÀ-ÿ\u00C0-\u00FF]+(?: [A-Za-zÀ-ÿ\u00C0-\u00FF]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isFullNameValid = fullNameRegex.test(fullName);
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if(!isFullNameValid) return "Full Name is not Valid";
    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}

export const validateSignInFormData = (email, password) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);

    if(!isEmailValid) return "Email Id is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}

