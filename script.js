const storedData = localStorage.getItem("userInformation");

if(storedData){
    const userInfo = JSON.parse(storedData);
     document.getElementById("first-name").textContent = userInfo.firstName;
     document.getElementById("last-name").textContent = userInfo.lastName;
     document.getElementById("country").textContent = userInfo.country;
     document.getElementById("phone-number").textContent = userInfo.phoneNumber;
     document.getElementById("state").textContent = userInfo.state;
     document.getElementById("city").textContent = userInfo.city;
     document.getElementById("village").textContent = userInfo.village;
 }
 else{
     storeinfo()
 }
 
function storeinfo(){
    const firstName = prompt('Enter Your first Name');
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");
   const userInfo = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
};


// Store the user information in local storage as a JSON string
localStorage.setItem("userInformation", JSON.stringify(userInfo));

// Display user information in the card
document.getElementById("first-name").textContent = userInfo.firstName;
document.getElementById("last-name").textContent = userInfo.lastName;
document.getElementById("country").textContent = userInfo.country;
document.getElementById("phone-number").textContent = userInfo.phoneNumber;
document.getElementById("state").textContent = userInfo.state;
document.getElementById("city").textContent = userInfo.city;
document.getElementById("village").textContent = userInfo.village;
}
   
const removeButton = document.getElementById("removeButton");

// Add an event listener to the button
removeButton.addEventListener("click", function() {
  // Clear local storage
  localStorage.clear();

  // Optionally, display a confirmation message
  alert("Local storage has been cleared!");
});