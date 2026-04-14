// Default param: tham số mặc định

// const sum = (a = 0, b = 0) => {
//     return a + b;
// }


// const sum = (a, b) => {
//     a = a || 0;
//     b = b || 0;
//     return a + b;
// }

// console.log(sum(10)); // ưu tiên đối số này hơn


// Spread syntax: dùng trong array, object

// const array1 = [1, 2, 3];
// const array2 = [4, 5, "6"];
// const array3 = [
//     {
//         id: 1,
//         name: "Lê Văn A"
//     },
//     {
//         id: 2,
//         name: "Lê Văn B"
//     }
// ];
// const array4 = [...array1, ...array2, ...array3];

// console.log(...array1);
// console.log(...array2);
// console.log(array3);
// console.log(array4);


// let infoUser = {
//     fullName: "Nguyễn Văn Kiên",
//     email: "kientest@gmail.com"
// };

// let infoUpdate = {
//     phone: "123456789",
//     age: 22
// };

// let infoFinal = {
//     ...infoUser,
//     ...infoUpdate
// };

// console.log(...infoUser);
// console.log(...infoUpdate);
// console.log(infoFinal);


// Rest param: những tham số k đc khai báo, dùng trong function

// const sum = (...numbers) => {
//     console.log(numbers);
//     const result = numbers.reduce((total, item) => {
//         return total + item;
//     }, 0);
//     return 0;
    
// }

// console.log(sum(10, 20, 30, 40, 50, 60));


// Destructuring: phá vỡ cấu trúc, dễ dàng sd các giá trị phần tử của array hoặc object( mỗi lần lấy giá trị sẽ ngắn hơn)

let infoUser = {
    fullName: "Nguyễn Văn Kiên",
    email: "kientest@gmail.com"
};

// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);
// console.log(infoUser.fullName);

const { fullName, email } = infoUser;
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(fullName);
console.log(email);


