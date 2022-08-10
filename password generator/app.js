const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");
const copiedTextEl = document.getElementById("copied");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;

    if(!password) return;

    navigator.clipboard.writeText(password);
    copiedTextEl.style.display = "block";
    
    setTimeout(() => {
        copiedTextEl.style.display = "none";
    }, 2000)

    // textarea.value = password;
    // document.body.appendChild(textarea);
    // textarea.select()
    // document.execCommand("copy");
    // textarea.remove();
    // alert("Password Copied to Clipboard");
})

generateBtn.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length);
})

function generatePassword(lower, number, symbol, upper, length){
    let generatedPassword = "";
    const typesCount = lower + number + symbol + upper;
    const typesArr = [{lower}, {number}, {symbol}, {upper}].filter(item => Object.values(item)[0]);
    
    if(typesCount === 0){
        return "";
    }

    for(let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

function getRandomLower(){
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getRandomUpper(){
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function getRandomNumber(){
    return String.fromCharCode(47 + Math.floor(Math.random() * 10));
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*()[]{}=<>/,."
    return symbols[Math.floor(Math.random() * symbols.length)]
}

