const fn = document.querySelector("#i101");   
const un = document.querySelector("#i102");   
const pas = document.querySelector("#i104");  
const eml = document.querySelector("#i103");  
const cpas = document.querySelector("#i105"); 
const bt = document.querySelector("#i108");   
const ck = document.querySelector("#i106");   
const bd = document.querySelector("body");    

bt.addEventListener("click", () => {
    // Minimum password length requirement
    const minPasswordLength = 8;

    // Check if any field is empty or if the checkbox is not checked
    if (!fn.value || !un.value || !pas.value || !eml.value || !cpas.value || !ck.checked) {
        alert("Please fill in all fields and agree to the terms and conditions");
    } else if (pas.value.length < minPasswordLength) {
        alert(`Password must be at least ${minPasswordLength} characters long`);
    } else if (pas.value !== cpas.value) {
        alert("Passwords do not match");
    } else if (!validateEmail(eml.value)) {
        alert("Please enter a valid email address");
    } else {
        bd.innerText = "Registration Successful";
        bd.style.color = "red"; 
        bd.style.fontSize="50px";
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


