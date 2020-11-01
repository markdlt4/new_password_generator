// DOM Elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};
// Generate Event Listen

generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEL.innerText = newPassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});
// Copy to Clipboard Function
clipboardEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = resultEL.innerText;

    if(!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select()
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");

});

//Generate Password Function 
    let newPassword = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lenght)
        //1 Init PW Var
        //2 Filter out unchecked types
        //3 Loop over length call generator function for each type
        //4 Add final pw to the pw var and return

        let generatePassword = "";

        const typesCount = lower + upper + number + symbol;

        //console.log("typesCounts: ", typesCount);

        const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
            (item => Object.values(item)[0]);

        //console.log("typesArr: ", typesArr);
        

        for (let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];

                //console.log("funcName: ", funcName);

                generatedPassword += randomFunc[funcName]();
            });
        }

        const finalPassword = generatedPassword.slice(0, length);

        
//Generate Functions

function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }

function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }

function getRandomSymbol() {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
