import { tong } from "./helpers/tong.js";
import { kiemTraSoDuong } from "./helpers/kiemTraSoDuong.js";
import { kiemTraChanLe } from "./helpers/kiemTraChanLe.js";

// Hàm callback(gọi lại) là hàm được truyền dưới dạng đối số của 1 hàm khác


// Ví dụ 1: Dạng thường

// function ham1() {
//     console.log("Hàm 1");
    
// }

// function ham2() {
//     console.log("Hàm 2");
    
// }

// ham1();
// ham2();

// Ví dụ 2: Dạng callback

// function ham1(callback) {
//     console.log("Hàm 1");
//     callback();
    
// }

// function ham2() {
//     console.log("Hàm 2");
    
// }

// ham1(ham2);

// Ví dụ 3:




tong(10, 20, kiemTraSoDuong);

tong(10, 15, kiemTraChanLe);

