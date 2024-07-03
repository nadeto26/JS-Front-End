function solve(typeFruid, grams, price){
    let kg = grams/1000;
    let money = price * kg;

    console.log(`I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${typeFruid}.`);
}

solve('apple', 1563, 2.35);