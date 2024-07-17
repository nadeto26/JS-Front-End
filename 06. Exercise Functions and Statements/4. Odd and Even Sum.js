function evenOddSum(number) {

    const getEvenAndOddDigits = (x) => {
        const evenDigits = [];
        const oddDigits = [];

        let currenNumber = x;

        while (currenNumber > 0) {
            const lastDigit = currenNumber % 10;

            if (lastDigit % 2 === 0) {
                evenDigits.push(lastDigit);
            } else {
                oddDigits.push(lastDigit);
            }

            currenNumber = Math.floor(currenNumber / 10);
        }

        return [evenDigits, oddDigits];
    }

    const getSumOfDigits = (array) => array.reduce((a, b) => a + b, 0);

    const [evenDigits, oddDigits] = getEvenAndOddDigits(number);

    const evenSum = getSumOfDigits(evenDigits);
    const oddSum = getSumOfDigits(oddDigits);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

evenOddSum(1000435);  // Output: 4 13
