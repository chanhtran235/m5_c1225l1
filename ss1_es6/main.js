console.log("hello");
import tinhTong,{sum1 as tinhTong1,sum2} from "./calculator.js";


//
// console.log(sum1(10,20)) // hoisting
// console.log(sum3(10,20)) // no hoisting
// // ES6
// // Arrow function:
// // Function:
// // + declare function: m1
function sum1 (a,b){
    return a+b;
}
console.log(tinhTong1(1,23))
console.log(sum2(1,25))
console.log(tinhTong(1,26))
// // express function:
// const sum2 = function (a,b){
//     return a+b;
// }
// // Arrow function
// const sum3 =(a,b)=>a+b;
// const sum4 =a=>a+100;
// const sum5 =()=>100;
// => foreach, map, filter, find

let array = [13,5,10,12,5,8];
// duyet mang hien thi theo : i : e;
// for (let i = 0; i <array.length ; i++) {
//     console.log(`${i}: ${array[i]}`);
// }

function myDisplay (e,i){
    console.log(`${i}: ${e}`);
}

// dùng foreach:  ham của mảng => duyệt mang đê làm gì đó (hiển htij
// callback function: là hoàm đươc truyền vào đối số của một hàm khác
array.forEach((e,i)=>{
    console.log(`${i}: ${e}`);
})

// map: duyetn mảng => tạo 1 mảng mới có length = length mảng cux
// tao mảng có các pt mà mỗi pt là bình phương pt mảng cũ

let newArray = array.map((e)=>e*e);
console.log( newArray);
// filter: lọc => mảng mới độ dài <= độ dài mảng cũ
// lấy ra mọt mảng có các pt là chăc

let evenArray = array.filter((e)=>e%2===0);
console.log(evenArray);
// find: tìm ra pt đầu tien tìm thấy
let e = array.find(e=>e%3===0)

console.log(e)

// Spread Operator: rải các phần tử mảng : copy giá trị các pt của mảng/ nối mảng

let array2 = array; // cùng 1 mảng (cùng ô nớ)
// copy
// let array3 = []
// for (let i = 0; i <array.length ; i++) {
//     array3.push(array[i]);
// }
// cách gọn hơn
let array3 = [...array,11,13];

// đối tượng object literal
let student1 = {
    id:1,
    name:"chánh",
    class: "C12"
}

let student2= {
    ...student1,
    name : "hải"
};
console.log(student2)
// destructuring : phân rã mảng /đối tượng

// lấy ra 2 pt đầu tien
// let e1 = array[0];
// let e2 = array[1];

// nhanh hơn => destructuring
// lấy một mảng mới ma không lấy 2 pt đầu => rest
// let [e1,e2, ...finalArray] =array;
// console.log(e1)
// console.log(e2)
// console.log(finalArray)
// rest param

// function tinhTong(...rest){
//     let tong =0;
//     for (let i = 0; i <rest.length ; i++) {
//         // tính tổng
//         tong +=rest[i];
//     }
//     return tong;
// }
//
// console.log(tinhTong(1,4,5,12,3,7,8))

let {id,name} = student1;
console.log(id);
console.log(name);

// import
