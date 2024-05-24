const inputs = [
  {
    label: "First Name",
    type: "text",
    name: "firstname",
    placeholder: "Enter First Name",
    required: true,
    pattern: "^[A-Za-z0-9]{3,20}$",
    errorMessage:
      "firstname should be 3-20 characters and shouldn't include any special character!",
  },
  {
    label: "Last Name",
    type: "text",
    name: "lastname",
    placeholder: "Enter last Name",
    required: true,
    pattern: "^[A-Za-z0-9]{3,20}$",
    errorMessage:
      "lastname should be 3-20 characters and shouldn't include any special character!",
  },
  {
    label: "User Name",
    type: "text",
    name: "username",
    placeholder: "Enter User Name",
    required: true,
    pattern: "^[A-Za-z0-9]{3,16}$",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter email",
    required: true,
    errorMessage: "It should be a valid email address!",
  },

  {
    label: "PAN Number",
    type: "text",
    name: "panNumber",
    placeholder: "Enter PAN number",
    required: true,
    pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}",
    errorMessage:
      "It should be valid PAN number,alphabets should be in capital and shouldn't include any special character!",
  },
  {
    label: "Aadhar Number",
    type: "number",
    name: "aadharNumber",
    placeholder: "Enter Aadhar number",
    required: true,
    pattern: "/^{12}$/",
    errorMessage: "It should be valid 12 digit aadhar number",
  },
];

const countries = ["India", "USA", "UK"];
const cities = ["Delhi", "Kolkata", "Chennai"];
const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+91", country: "India" },
    { code: "+44", country: "UK" },
   
  ];

export { inputs,countries,cities ,countryCodes};
