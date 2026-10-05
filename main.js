const rawValue = prompt("Введіть натуральне число x:");
const x = Number(rawValue);

if (rawValue === null) {
    console.log("Введення скасовано");
} else if (!Number.isInteger(x)) {
    alert("Необхідно ввести ціле число");
} else if (x === 0) {
    alert("Ділити на нуль не можна");
} else {
    console.log(1 / x);
}

let myList;

while (true) {
    const rawCommand = prompt(
        "Меню:\n1: створити список\n2: переглянути список\n3: додати елемент\n4: видалити елемент\n5: пропустити\n6: вихід"
    );

    if (rawCommand === null) {
        break;
    }

    const command = Number(rawCommand);
    if (!Number.isInteger(command) || command < 1 || command > 6) {
        alert("Введіть номер команди від 1 до 6");
        continue;
    }

    if (command === 1) {
        myList = [];
        alert("Список створено");
    } else if (command === 2) {
        if (!myList) {
            alert("Спочатку створіть список");
        } else {
            alert(JSON.stringify(myList));
            console.log(myList);
        }
    } else if (command === 3) {
        if (!myList) {
            alert("Спочатку створіть список");
        } else {
            const element = prompt("Введіть елемент:");
            if (element !== null) {
                myList.push(element);
            }
        }
    } else if (command === 4) {
        if (!myList) {
            alert("Спочатку створіть список");
        } else {
            const rawIndex = prompt("Введіть індекс елемента для видалення:");
            const index = Number(rawIndex);
            if (
                rawIndex === null ||
                !Number.isInteger(index) ||
                index < 0 ||
                index >= myList.length
            ) {
                alert("Елемента з таким індексом немає");
            } else {
                myList.splice(index, 1);
            }
        }
    } else if (command === 5) {
        continue;
    } else if (command === 6) {
        break;
    }
}