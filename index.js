// bai 1:
// 1: 
// 2: let chi nam trong scope va chi ton tai trong scope, va co the nam ngoai goi ra ngoai scope, pham vi hoat dong cua var rong hon let
// 3: const la khai bao 1 hang so, khong thay doi duoc
// 4: Dung const trong khai bao hang so
//    Dung var trong khai bao bien toan cuc
//    Dung let trong khai bao bien cuc bo

// bai 2: 2. Boolean
// What is Boolean? => la phep so sanh
// What is Boolean? => true// false
// bai 3: 
// a. 7 numbers, starting from 0 (no user input)
// for(let x = 0; x < 7; x++){
//     console.log(x);
// }
// b. n numbers, starting from 0, n entered by user
// let x = prompt("Nhap x");
// for(let a = 0; a <= x; a++){
//     console.log(a);
// }
// c. A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = prompt("Nhap n: ");
// for(let a = 3; a <= n; a++){
//     console.log(a);
// }
//d. A sequence of numbers, starting from c, ending before n, c and n entered by user
// let c = prompt("Nhap c: ");
// let n = prompt("Nhap n: ");
// for(let a = c; a <= n; a++){
//     console.log(a);
// }
// e . A sequence of numbers, starting from c, ending before n, stepping by 3, c and
// n entered by user
// let c = prompt("Nhap c: ");
// let n = prompt("Nhap n: ");
// for(let a = c; a <= n; a += 3){
//     console.log(a);
// }
//f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n
// and s entered by user
// let c = prompt("Nhap c: ");
// let n = prompt("Nhap n: ");
// let s = prompt("Nhap s: ");
// for(let a = c; a <= n; a += s){
//     console.log(a);
// }

//bai 4:  Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = prompt("Nhap n: ");
// let tong = 1;
// for(let a = 1; a <= n; a++){
//     tong  = tong * a;
//     return tong;
// }
// console.log(tong);
// 5. Write a program asking users their age, and then decide if they are old enough to view a
// 14+ content
    // let c = prompt("How old are you? ");
    // if(c < 14){
    //     alert("You are not old enought to view the content");
    // }
    // else{
    //     alert("enjoy");
    // }
// 6. Write a program asking user to enter a number, x, then check if x is in the lower half or
// higher half of 0 - 9 range
// let x = prompt("Nhap vao x: ");
// if(x < 5)
// {
//     alert("lower half")
// }
// else{
//     alert("higher half");
// }

// bai 7: Write a program asking user to lower
// half or higher half of nenter two numbers, x and n, then check if x is in 
// let x = prompt("Nhap vao x: ");
// let n = prompt("Nhap vao x: ");
// if(x < n)
// {
//     if(x < n/2){
//         alert(x + "lower half" + n);
//     }
//     else{
//         alert(x + "higher half" + n);
//     }
// }
// else{
//     if(n < n/2){
//         alert(n + "lower half" + x);
//     }
//     else{
//         alert(n + "higher half" + x);
//     }
// }

// bai 8: Write a script to check if a number is even (divisible by 2) or odd number
// let x = prompt("Nhap vao x: ");
// if(x % 2 == 0)
// {
//     alert(" even ");
// }
// else{
//     alert("odd number")
// }

//10. Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as
// let mass = prompt('Can nang cua ban: ');
// let height = prompt('Chieu cao cua ban');
// let BMI = mass/height*height;
// if(BMI < 16){
//     alert('Severely underweight');
// }
// else if(16 < BMI < 18.5)
// {
//     alert('Underweight');
// }
// else if(16 < BMI < 18.5)
// {
//     alert('Underweight');
// }
// else if(18.5 < BMI < 25)
// {
//     alert('Normal');
// }
// else if(25 < BMI < 30)
// {
//     alert('Overweight');
// }
// else(BMI < 30)
// {
//     alert('Obese');
// }
// 11. Use JS Turtle, to draw the following shapes
// 1,
// function square() {
//     for (var i=1; i <= 4; i++) {
//       fd(50)
//       lt(90)
//     }
//   }
//   square()
// 2,
// function triangle() {
//     for (var i=1; i <= 3; i++) {
//       fd(50)
//       lt(45)
//     }
//   }
//   triangle()
// 3,
// function pentagon() {
//     for (var i=1; i <= 5; i++) {
//       fd(50)
//       lt(72)
//     }
//   }
//   pentagon()
// 4, hexagon
// function hexagon() {
//     for (var i=1; i <= 6; i++) {
//       fd(50)
//       lt(60)
//     }
//   }
//   hexagon()

// 12. Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
// let x = prompt('enter number of polygon ')
// function draw(){
//     for(var i = 1; i <=x; i++)
//     {
//         Fd(50);
//         lt(360/x);
//     }
// }
// draw();
// 13. (Optional) Use JS Turtle to draw n polygons, n entered by users


let n = prompt('Enter number of pictures to draw ')
// ve n hinh 
// ví dụ số hình là 3 thì số cạnh của hình cuối cùng là 5
let x = 3;
let y = 3;
// ve hinh co so canh
function draw(){
    for(var i = 1; i <= y; i++)
    {
        Fd(50);
        lt(360/x);
    }
}
function drowAll(){
    for(var itemp = 1; itemp <= n; itemp ++)
    {
        draw();
    }
}





