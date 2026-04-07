import { sum } from "./sum.js";
import { a, b } from "./constant.js";
// import { tong, hieu, tich, thuong } from "./calculate.js";
// import { to, hi, ti, th } from "./calculate.js";

import thongBao, { tong as to, hieu as hi, tich as ti, thuong as th } from "./calculate.js"; // đổi tên trong file import

// console.log("OK");

let a = 10;
let b = 20;

let c = sum(a, b);

console.log(c);

// console.log(tong(a, b));
// console.log(hieu(a, b));
// console.log(tich(a, b));
// console.log(thuong(a, b));

console.log(to(a, b));
console.log(hi(a, b));
console.log(ti(a, b));
console.log(th(a, b));

console.log(thongBao());



