const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result")
function calculateAge() {
    let birthdayValue = birthdayEl.value;

    if (birthdayValue === "") {
        alert("Please Enter Valid Date")
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerHTML = `
        Your age is ${age} years old
        `;
        
        
    }
}

function getAge(birthdayValue) {
        const currentDate = new Date();
        const birthDayDate = new Date(birthdayValue);
        let age = currentDate.getFullYear() - birthDayDate.getFullYear();
        const month = currentDate.getMonth() - birthDayDate.getMonth();
        if (month < 0 || (month === 0 && currentDate.getDate() < birthDayDate.getDate())) {
            age --
        } 

        return age;
    
}

btnEl.addEventListener("click", calculateAge);