
function reverseString() {
    let forwardsWord = document.getElementById("probOne").innerHTML;
    let reverseWord = "";
    for (let i = forwardsWord.length - 1; i >= 0; i--) {
        reverseWord += forwardsWord[i];
    }
    document.getElementById("probOne").innerHTML = reverseWord;
}

//Changes a hard coded string in the HTML to be capitlazed
function capitalizeLetters() {
    let lowerCaseWords = document.getElementById("probTwo").innerHTML;
    let capitalizedWords = "";
    capitalizedWords += lowerCaseWords.charAt(0).toUpperCase();

    for (let i = 1; i < lowerCaseWords.length; i++) {
        if (lowerCaseWords[i] === ' ') {
            capitalizedWords += lowerCaseWords[i];
            capitalizedWords += lowerCaseWords.charAt(i + 1).toUpperCase();
            i++;
        } else if (lowerCaseWords[i] !== ' ') {
            capitalizedWords += lowerCaseWords[i];
        }
    }
    document.getElementById("probTwo").innerHTML = capitalizedWords;
}

//Compress a string thats hard coded to the HTML
function compressString() {
    let uncompressedWord = document.getElementById("probThree").innerHTML;
    let compressedWord = "";
    let counter = 1;

    for (let i = 0; i < uncompressedWord.length; i++) {
        if (i !== uncompressedWord.length - 1) {
            if (uncompressedWord[i] === uncompressedWord[i + 1]) {
                counter++;
            } else {
                compressedWord = compressedWord + counter + uncompressedWord[i];
                counter = 1;
            }
        } else {
            compressedWord = compressedWord + counter + uncompressedWord[i];
        }
    }
    document.getElementById("probThree").innerHTML = compressedWord;
}

//Checks if a hard coded to the HTML word is a palandrome
function isPalindrome() {
    let mightBePalindrome = document.getElementById("probFour").innerHTML;

    let j = mightBePalindrome.length - 1;
    let notPalindrome = true;

    for (i = 0; i < mightBePalindrome.length; i++) {
        if (mightBePalindrome[i] === mightBePalindrome[j]) {
            j--;
        }
        else {
            document.getElementById("probFour").innerHTML = document.getElementById("probFour").innerHTML + " is not a palindrome.";
            notPalindrome = false;
            break;
        }
    }

    if (notPalindrome) {
        document.getElementById("probFour").innerHTML = document.getElementById("probFour").innerHTML + " is a palindrome."
    }
}

//Checks if a passed string is a palindrome
function isInputPalindrome(mightBePalindrome) {
    let j = mightBePalindrome.length - 1;
    let notPalindrome = true;

    for (i = 0; i < mightBePalindrome.length; i++) {
        if (mightBePalindrome[i] === mightBePalindrome[j]) {
            j--;
        }
        else {
            document.getElementById("probFourC").innerHTML = "Not a palindrome.";
            notPalindrome = false;
            break;
        }
    }

    if (notPalindrome) {
        document.getElementById("probFourC").innerHTML = "Palindrome!"
    }
}

//Displays if a passed number is happy
var sumArray = [];
function isHappyNumber(isHappy) {
    isHappy = isHappy.toString().split('');
    var sum = 0;

    for (i = 0; i < isHappy.length; i++) {
        sum += +isHappy[i] * +isHappy[i];
    }
    if (sum == 1) {
        document.getElementById("probFive").innerHTML = "Happy Number";
    } else {
        if (sumArray.indexOf(sum) === -1) {
            sumArray.push(sum);
            return isHappyNumber(sum);
        } else {
            document.getElementById("probFive").innerHTML = "Not Happy Number";
        }
    }
}


//Runs through 1-100 and posting results
function firstPrimes() {
    let primes = "1";
    for (i = 0; i < 100; i++) {
        if (isPrime(i)) {
            primes = primes + " " + i;
        }
    }
    document.getElementById("probSix").innerHTML = primes;
}

//Checks if passed number is prime
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

//Displays the first 10 Fibonicci numbers starting with 1
function getFiboNums() {
    let startingNum = 1; let temp = 0;
    let nextNum = startingNum;
    let fiboNumbers = startingNum;
    for (let i = 0; i < 9; i++) {
        temp = startingNum;
        startingNum = startingNum + nextNum;
        nextNum = temp;
        fiboNumbers += " " + nextNum;
    }
    document.getElementById("probSevenA").innerHTML = fiboNumbers;
}

//Displays the first 10 Fibonicci numbers starting with a passed number
function getAnyFiboNums(startingNumb) {
    let startingNum = parseFloat(startingNumb); let temp = 0;
    let nextNum = startingNum;
    let fiboNumbers = startingNum;
    for (let i = 0; i < 9; i++) {
        temp = startingNum;
        startingNum = startingNum + nextNum;
        nextNum = temp;
        fiboNumbers += " " + nextNum;
    }
    document.getElementById("probSevenB").innerHTML = fiboNumbers;
}
