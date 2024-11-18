// 1.Merge two array
// level: \*
// desc: รวม array 2 ตัวเข้าด้วยกัน
// input: [1,2,3] , [4,5,6]
// output: [1,2,3,4,5,6]

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// function MyFunction(arr1, arr2){
    
//     return arr1.concat(arr2);
// }

// console.log(MyFunction(arr1, arr2));

// 2.Filter less than 30
// level: \*
// desc: เอาตัวที่น้อยกว่า 30 ออก
// input: [10,20,30,40,50]
// output: [30,40,50]

// const arr = [10,20,30,40,50];

// function MyFunction(arr){
//     return arr.filter((value) => value >= 30);
// }

// console.log(MyFunction(arr));

// 3.Remove element from array
// level: \* \*
// desc: เอา element ใน array ออกจาก array by index (ไม่จำเป็นต้องเรียงเหมือนเดิม)
// array = [5,6,7,2,4]
// input: 2
// output: [5,6,2,4] (ไม่ตายตัว)

// const arr = [5,6,7,2,4];
// const input = 2;

// function MyFunction(input, arr){
//     arr.splice(input, 1);
//     return arr;
// }

// console.log(MyFunction(input, arr))

// 4. Roman to number
//    level: \* \* \*
//    input: "XIV"
//    output: 14

// const roman = "XIV";

// function MyFunction(roman){
//     let total = 0;
//     for (let i = 0; i < roman.length; i++) {
//         switch (roman[i]) {
//           case "I":
//               if(roman[i+1] == "V" || roman[i+1] == "X"){
//                   total -= 1;
//               }
//               else{
//                   total += 1;
//               }
//               break;
//           case "V":
//               total += 5;
//               break;
//           case "X":
//               if(roman[i+1] == "L" || roman[i+1] == "C"){
//                   total -= 10;
//               }
//               else{
//                   total += 10;
//               }
//               break;
//           case "L":
//               total += 50;
//               break;
//           case "C":
//               total += 100;
//               break;
//         }

//     }
//     return total;
// }
// console.log(MyFunction(roman));

// 5. Remove duplicate from array and sort array
//    desc: เอา
//    level: โหดนิดหน่อย
//    input: [1,2,1,4,5,2,3,4,1,4]
//    output: [1,2,3,4,5]

// let arr = [1, 2, 1, 4, 5, 2, 3, 4, 1, 4];

// function MyFunction(arr){
//     arr = arr.filter((item, index) => arr.indexOf(item) === index);
//     return arr.sort(function (a, b) {return a - b;});
// }

// console.log(MyFunction(arr));

// 6. Rotate Array
//    desc: ขยับ array ไปทางขวา n ครั้ง
//    array: [1,2,3,4,5]
//    level: สุดโหด 💀
//    input: 3
//    output: [3,4,5,1,2]

// let arr = [1,2,3,4,5];
// const input = 3;

// function MyFunction(input, arr){
//     for(let i = 0; i < input; i++){
//         arr.unshift(arr[arr.length-1]);
//         arr.pop();
//     }
//     return arr;
// }

// console.log(MyFunction(input, arr))