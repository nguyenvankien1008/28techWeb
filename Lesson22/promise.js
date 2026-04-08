// Promise: xử lý callback hell(callback hell: các hàm bị lồng nhau gây ra khó chịu)
// Mục đích: viết mỗi hàm trên 1 dòng, dễ nhìn hơn
// Promise có 3 trạng thái: Pending, Rejected, Fullfilled
// Ví dụ: khi gửi API từ backend lên, promise sẽ ở trạng thái Pending. Nếu lỗi sẽ chuyển sang trạng thái Rejected, ngược lại thì Fullfilled


// Ví dụ 1:

// var a = 10 ;
// // var a;

// var promise = new Promise((resolve, reject) => {
//     if(a !== undefined && a !== null && a !== "") {
//         resolve(a); // Thành công
//     } else {
//         reject(a);
//     }
    
// });

// promise
//     .then((success) => {
//         console.log(success);
//         return success;
//     })
//     .then((success2) => {
//         const b = 20;
//         console.log(success2 + b);
//         return success2 + b;
//     })
//     .then((success3) => {
//         const c = 30;
//         console.log(success3 + c);
//     })
//     .catch((error) => {
//         console.log("Lỗi: ", error);
        
//     })
//     .finally(() => {
//         console.log("Luôn chạy vào đây!");
        
//     })


// Ví dụ 2:

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve();
//         reject();
//     }, 3000);
// });

// console.log(promise);

// setTimeout(() => {
//     console.log("Sau 1 giây: ", promise);
    
// }, 1000);

// setTimeout(() => {
//     console.log("Sau 2 giây: ", promise);
    
// }, 2000);

// setTimeout(() => {
//     console.log("Sau 3 giây: ", promise);
    
// }, 2000);



// Ví dụ 3: Promise All
// Promise.all: giúp cho các promise đc thực thi song song, tổng thời gian chạy = thời gian chạy promise lâu nhất

let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;

let sum1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a + b);
    }, 3000);
});

let sum2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(c + d);
    }, 4000);
});

let sum3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(e + f);
    }, 6000);
});

Promise.all([sum1, sum2, sum3])
    .then(([sum1, sum2, sum3]) => {
        let sum = sum1 + sum2 + sum3;
    })
    .catch((error) => {
        console.log(error);
        
    })
    .finally(() => {
        console.log("Luôn chạy vào đây!");
        
    })
