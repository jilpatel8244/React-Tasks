const preferedOfficeLocationsData = [
    "Ahemdabad",
    "Surat",
    "Silicon Velly",
    "London",
];

const genderData = ["male", "female"];

const selectedCountryOptions = [
    "United States",
    "Canada",
    "France",
    "Germany",
];

const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    gender: "",
    selectedCountry: "United States",
    preferedOfficeLocations: [],
    rememberMe: false,
    profilePicture: "",
}

const initialFormErrorData = {
    name: {
        errorStatus: false,
        title: "",
        description: "",
    },
    email: {
        errorStatus: false,
        title: "",
        description: "",
    },
    phoneNumber: {
        errorStatus: false,
        title: "",
        description: "",
    },
    address: {
        errorStatus: false,
        title: "",
        description: "",
    },
    password: {
        errorStatus: false,
        title: "",
        description: "",
    },
    confirmPassword: {
        errorStatus: false,
        title: "",
        description: "",
    },
    gender: {
        errorStatus: false,
        title: "",
        description: "",
    },
    selectedCountry: {
        errorStatus: false,
        title: "",
        description: "",
    },
    preferedOfficeLocations: {
        errorStatus: false,
        title: "",
        description: "",
    },
    profilePicture: {
        errorStatus: false,
        title: "",
        description: "",
    },
}

export { preferedOfficeLocationsData, genderData, selectedCountryOptions, initialFormData, initialFormErrorData };