// const c = 10; // biến toàn cục

const calculate = () => {
    // const c = 20; // biến cục bộ của hàm cha, closure ưu tiên hơn biến toàn cục
    const sum = (a, b) => {
        // const c = 30; // biến cục bộ của hàm con, ưu tiên nhất
        // return a + b + c;
        return a + b;
    }

    const diff = (a, b) => {
        return a - b;
    }

    const prod = (a, b) => {
        return a * b;
    }

    const quot = (a, b) => {
        return a / b;
    }

    return {
        sum: sum,
        difference: diff,
        product: prod,
        quotient: quot,
    };
};

// const ccl = calculate();
// console.log(ccl);
// console.log(ccl(20, 30));

// console.log(ccl.sum(20, 30));
// console.log(ccl.diff(20, 30));
// console.log(ccl.prod(20, 30));
// console.log(ccl.quot(20, 30));






const info = () => {
    let fullName = "Nguyễn Văn Kiên";

    const getFullName = () => {
        return fullName;
    }

    const setFullName = (string) => {
        fullName = string;
    }

    return {
        get: getFullName,
        set: setFullName
    };
}

// const infoUser = info();

// console.log(infoUser);
// console.log(infoUser.get());
// console.log(infoUser.set("Kiên Nguyễn"));
// console.log(infoUser.get());








// Template String

const a = 10;
const b = 20;
const c = a + b;

// const string = "Kết quả của " + a + " + " + b + " = " + c + ".";
const string = `Kết quả của ${a} + ${b} = ${c}`;

console.log(string);





