// function validateForm(formData) {
//     const formFields = [
//         { name: 'name', rules: ['required'] },
//         { name: 'email', rules: ['required', 'email'] },
//         { name: 'phoneNumber', rules: ['required', 'phone'] },
//         { name: 'address', rules: [] },
//         { name: 'password', rules: ['required', 'password'] },
//         { name: 'confirmPassword', rules: ['required', 'confirmPassword'] },
//         { name: 'gender', rules: ['required'] },
//         { name: 'selectedCountry', rules: ['required'] },
//         { name: 'preferedOfficeLocations', rules: ['required'] },
//         { name: 'profilePicture', rules: [] }
//     ];

//     let validate = true;

//     formFields.forEach((field) => {
//         let value = formData[field.name];

//         field.rules.forEach((rule) => {
//             if (rule === 'required' && ((typeof value) === 'object' ? (!value?.length) : (!value?.trim().length))) {
//                 validate = false;
//                 displayError(field.name, `Required !`, `Please fill ${field.name}`);
//             }

//             if (rule === 'email' && value && !validateEmail(value)) {
//                 validate = false;
//                 displayError(field.name, `Wrong !`, `Please enter valid email`);
//             }

//             if (rule === 'phone' && value && !validatePhone(value)) {
//                 validate = false;
//                 displayError(field.name, `Wrong !`, `Please enter valid number`);
//             }

//             if (rule === 'password' && value && !validatePassword(value)) {
//                 validate = false;
//                 displayError(field.name, `Wrong !`, `Please enter valid password, must contains atleast 8 charecters, 1 uppercase, 1 lowwercase, 1 specialcharacter, 1 number`);
//             }

//             if (rule === 'confirmPassword' && value && value !== formData.password) {
//                 validate = false;
//                 displayError(field.name, `Wrong !`, `Password not match`);
//             }
//         })
//     })

//     return validate;
// }

// function displayError(key, errorTitleSpanText, errorDescriptionSpanText) {
//     let errorDiv = document.getElementById(`error_${key}`);
//     let errorTitleSpan = document.getElementById(`error_title_${key}`);
//     let errorDescriptionSpan = document.getElementById(`error_description_${key}`);

//     errorTitleSpan.innerHTML = errorTitleSpanText;
//     errorDescriptionSpan.innerHTML = errorDescriptionSpanText;
//     errorDiv?.classList.remove('hidden');
//     errorDiv?.classList.add('flex');
// }

const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
};

const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return re.test(String(password));
};

export { validateEmail, validatePhone, validatePassword };