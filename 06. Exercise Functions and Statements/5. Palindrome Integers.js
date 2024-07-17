function palindrome(numberArr) {
    function determanaineIsNumberAPalindrome(number) {
    const reversedNumber = Number(number.toString().split("").reverse().join(""));
    return number == reversedNumber;
    }
    numberArr.forEach((number) => {
        console.log(determanaineIsNumberAPalindrome(number));
    });
}

palindrome([123, 323, 421, 121]);