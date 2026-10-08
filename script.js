// ПРАКТИЧЕСКИЕ ЗАДАНИЯ ПО JAVASCRIPT №27–45

// ============================================================
// Уровень A — Условные операторы
// ============================================================

// 27. Проверка положительного числа
function checkNumber(number) {
    if (number > 0) {
        return "Число положительное";
    } else if (number < 0) {
        return "Число отрицательное";
    } else {
        return "Число равно нулю";
    }
}

let number27 = -8;
console.log("=== Задание 27 ===");
console.log("-8:", checkNumber(number27));
console.log("0:", checkNumber(0));
console.log("15:", checkNumber(15));

// 28. Проверка делимости
function checkDivision(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Делится";
    } else {
        return "Не делится";
    }
}

let number28 = 30;
console.log("\n=== Задание 28 ===");
console.log("30:", checkDivision(number28));
console.log("20:", checkDivision(20));

// 29. Определение времени суток
function getTimeOfDay(hour) {
    if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
        return "Ошибка: час должен быть целым числом от 0 до 23";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else if (hour >= 18 && hour <= 21) {
        return "Вечер";
    } else {
        return "Ночь";
    }
}

let hour = 14;
console.log("\n=== Задание 29 ===");
console.log("14:00:", getTimeOfDay(hour));
console.log("5:00:", getTimeOfDay(5));
console.log("23:00:", getTimeOfDay(23));
console.log("24:00:", getTimeOfDay(24));

// 30. Проверка результатов экзамена
function checkExams(math, programming) {
    if (math >= 50 && programming >= 50) {
        return "Экзамены сданы";
    } else {
        return "Необходимо пересдать";
    }
}

let math = 75;
let programming = 48;
console.log("\n=== Задание 30 ===");
console.log("75 и 48:", checkExams(math, programming));
console.log("80 и 90:", checkExams(80, 90));

// 31. Определение високосного года
function checkLeapYear(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return "Год високосный";
    } else {
        return "Год не високосный";
    }
}

let year = 2028;
console.log("\n=== Задание 31 ===");
console.log("2028:", checkLeapYear(year));
console.log("2027:", checkLeapYear(2027));

// ============================================================
// Уровень B — Циклы, строки и массивы
// ============================================================

// 32. Сумма нечётных чисел
let sum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log("\n=== Задание 32 ===");
console.log("Сумма нечётных чисел от 1 до 50:", sum);

// 33. Подсчёт цифр числа
let number33 = 45678;
let numberString = String(number33);

console.log("\n=== Задание 33 ===");
console.log("Число:", number33);
console.log("Количество цифр:", numberString.length);

// 34. Переворот строки
let word = "JavaScript";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log("\n=== Задание 34 ===");
console.log("Исходное слово:", word);
console.log("В обратном порядке:", reversed);

// 35. Количество положительных чисел
let numbers35 = [-5, 10, 0, 23, -8, 15, -2];
let count = 0;

for (let i = 0; i < numbers35.length; i++) {
    if (numbers35[i] > 0) {
        count++;
    }
}

console.log("\n=== Задание 35 ===");
console.log("Массив:", numbers35);
console.log("Количество положительных чисел:", count);

// 36. Удаление повторяющихся элементов
let numbers36 = [2, 3, 2, 5, 3, 7, 5, 9];
let uniqueNumbers = [];

for (let i = 0; i < numbers36.length; i++) {
    if (!uniqueNumbers.includes(numbers36[i])) {
        uniqueNumbers.push(numbers36[i]);
    }
}

console.log("\n=== Задание 36 ===");
console.log("Исходный массив:", numbers36);
console.log("Уникальные элементы:", uniqueNumbers);

// ============================================================
// Уровень C — Функции
// ============================================================

// 37. Конвертер температуры
function convertTemperature(celsius) {
    return celsius * 1.8 + 32;
}

console.log("\n=== Задание 37 ===");
console.log("0°C =", convertTemperature(0), "°F");
console.log("20°C =", convertTemperature(20), "°F");
console.log("100°C =", convertTemperature(100), "°F");

// 38. Проверка простого числа
function isPrime(number) {
    if (number <= 1 || !Number.isInteger(number)) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("\n=== Задание 38 ===");
console.log("7:", isPrime(7));
console.log("12:", isPrime(12));
console.log("17:", isPrime(17));
console.log("21:", isPrime(21));

// 39. Подсчёт гласных букв
function countVowels(text) {
    let vowels = "aeiou";
    let lowerText = text.toLowerCase();
    let vowelCount = 0;

    for (let i = 0; i < lowerText.length; i++) {
        if (vowels.includes(lowerText[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log("\n=== Задание 39 ===");
console.log('Слово "education":', countVowels("education"));

// 40. Расчёт стоимости доставки
function calculateDelivery(amount) {
    if (amount < 5000) {
        return 1500;
    } else if (amount < 15000) {
        return 800;
    } else {
        return 0;
    }
}

function calculateOrderTotal(amount) {
    return amount + calculateDelivery(amount);
}

console.log("\n=== Задание 40 ===");
for (let amount of [3000, 10000, 20000]) {
    let delivery = calculateDelivery(amount);
    let total = calculateOrderTotal(amount);

    console.log(
        "Сумма заказа:", amount + " ₸",
        "| Доставка:", delivery + " ₸",
        "| Итого:", total + " ₸"
    );
}

// ============================================================
// Уровень D — Реальные мини-проекты
// ============================================================

// 41. Электронный журнал колледжа
let students = [
    {name: "Алия", score: 95},
    {name: "Арман", score: 67},
    {name: "Данияр", score: 82},
    {name: "Мадина", score: 45}
];

let studentsPassed = [];
let highestStudent = students[0];
let totalScore = 0;
let failedCount = 0;

console.log("\n=== Задание 41 ===");

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + ":", students[i].score);

    if (students[i].score >= 50) {
        studentsPassed.push(students[i]);
    } else {
        failedCount++;
    }

    totalScore += students[i].score;

    if (students[i].score > highestStudent.score) {
        highestStudent = students[i];
    }
}

let groupAverage = totalScore / students.length;

console.log("Сдали:", studentsPassed.map(student => student.name));
console.log("Студент с наивысшим баллом:", highestStudent.name, "-", highestStudent.score);
console.log("Средний балл группы:", groupAverage);
console.log("Не сдали экзамен:", failedCount);

// 42. Система бронирования мест
let seats = [false, true, false, false, true];
let selectedSeat = 3;

console.log("\n=== Задание 42 ===");

if (!Number.isInteger(selectedSeat) || selectedSeat < 1 || selectedSeat > seats.length) {
    console.log("Ошибка: неверный номер места");
} else if (seats[selectedSeat - 1] === false) {
    seats[selectedSeat - 1] = true;
    console.log("Место №" + selectedSeat + " успешно забронировано");
} else {
    console.log("Место №" + selectedSeat + " уже занято");
}

console.log("Обновлённый список мест:", seats);

// Проверка занятого места
let occupiedSeat = 2;
if (occupiedSeat >= 1 && occupiedSeat <= seats.length) {
    if (seats[occupiedSeat - 1] === false) {
        seats[occupiedSeat - 1] = true;
        console.log("Место №" + occupiedSeat + " успешно забронировано");
    } else {
        console.log("Проверка: место №" + occupiedSeat + " уже занято");
    }
}

// 43. Учёт товаров на складе
let products = [
    {name: "Ноутбук", quantity: 5},
    {name: "Мышь", quantity: 15},
    {name: "Клавиатура", quantity: 3},
    {name: "Монитор", quantity: 8}
];

console.log("\n=== Задание 43 ===");

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + ":", products[i].quantity, "шт.");
}

console.log("Товары с количеством меньше 5:");
for (let i = 0; i < products.length; i++) {
    if (products[i].quantity < 5) {
        console.log(products[i].name + ":", products[i].quantity, "шт.");
    }
}

let totalQuantity = 0;
let maxProduct = products[0];

for (let i = 0; i < products.length; i++) {
    totalQuantity += products[i].quantity;

    if (products[i].quantity > maxProduct.quantity) {
        maxProduct = products[i];
    }
}

console.log("Общее количество единиц:", totalQuantity);
console.log("Товар с максимальным количеством:", maxProduct.name, "-", maxProduct.quantity, "шт.");

products.push({name: "Наушники", quantity: 10});
console.log("После добавления нового товара:", products);

// 44. Учёт расходов
let expenses = [2500, 1800, 4200, 1500, 3100, 2600, 5000];

let totalExpenses = 0;
let maxExpense = expenses[0];
let minExpense = expenses[0];
let daysOver3000 = 0;

for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i];

    if (expenses[i] > maxExpense) {
        maxExpense = expenses[i];
    }

    if (expenses[i] < minExpense) {
        minExpense = expenses[i];
    }

    if (expenses[i] > 3000) {
        daysOver3000++;
    }
}

let averageExpense = totalExpenses / expenses.length;

console.log("\n=== Задание 44 ===");
console.log("Общая сумма расходов:", totalExpenses + " ₸");
console.log("Максимальный расход:", maxExpense + " ₸");
console.log("Минимальный расход:", minExpense + " ₸");
console.log("Средний расход за день:", averageExpense + " ₸");
console.log("Дней с расходами больше 3000 ₸:", daysOver3000);

// 45. Система регистрации участников
let participants = [
    {name: "Али", age: 17, registered: true},
    {name: "Аружан", age: 16, registered: false},
    {name: "Руслан", age: 19, registered: true}
];

let admittedParticipants = [];

for (let i = 0; i < participants.length; i++) {
    if (
        participants[i].registered === true &&
        participants[i].age >= 16 &&
        participants[i].age <= 25
    ) {
        admittedParticipants.push(participants[i].name);
    }
}

console.log("\n=== Задание 45 ===");
console.log("Допущенные участники:", admittedParticipants);
console.log("Количество допущенных участников:", admittedParticipants.length);
