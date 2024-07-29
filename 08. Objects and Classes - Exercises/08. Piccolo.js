function solve(carMoves) {
    const parkingLot = carMoves.reduce((acc, curr) => {
        const [operation, plateNumber] = curr.split(", ");

        switch (operation) {
            case "IN":
                acc[plateNumber] = true; // Добавяне на кола в паркинга
                break;
            case "OUT":
                delete acc[plateNumber]; // Премахване на кола от паркинга
                break;
        }
        return acc;
    }, {});

    const parkedCars = Object.keys(parkingLot);

    if (parkedCars.length === 0) {
        console.log("Parking Lot is Empty");
        return;
    }

    parkedCars
        .sort((a, b) => a.localeCompare(b))
        .forEach(plateNumber => console.log(plateNumber));
}

 
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    );