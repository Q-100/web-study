function printhello() {
  console.log("안녕");
}
printhello();

function printhello2(message) {
  console.log(message);
}
printhello2("안녕하세요");

//TypeScript 예시
// function test(인자: 인자형식): 리턴형식{
// return 0;
// }

function changename(name) {
  ellie.name = "규백";
}
const ellie = { name: "q100" };
changename(ellie);
console.log(ellie);

// default parameters (매개변수로 주어지지 않을 경우 기본적으로 인자로 줄 것을 설정 할 수 있음)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("배고팡", "규백");

//rest parameters (배열로 인자 넘기기)
function printAll(...arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  //배열 출력하기
  for (const tmp of arr) {
    console.log(tmp);
  }
  arr.forEach((tmp) => console.log(tmp));
}
printAll("불고기", "규동", "파스타", "볶음밥");

// function안에서 조건이 맞을 때 행동하지말고 조건이 맞지 않을 때 리턴하고 아닐경우 행동하는 것이 좋음
// function upgrade(user)
// if (user.point <= 10)
//      return;
// 이게 좋은거임 ㅎㅎ

//function은 변수에 할당 가능
const test = function () {
  // funtion() -> anonymous function, funtion 함수이름() -> named function
  console.log("되는건가");
};
test();
let test1 = test; // 변수에 저장가능
test1();

// Callback function -> 함수를 전달해서 상황에맞춰 함수를 실행시키는 것.
function quiz(ans, printYes, printNo) {
  if (ans === "thanks") {
    printYes();
  } else printNo();
}
const printYes = function () {
  console.log("정답");
};
const printNo = function () {
  console.log("오답");
};
quiz("thanksaa", printYes, printNo);

//Arrow function
const simple = () => console.log("심플");
simple();
const add = (a, b) => console.log(a + b);
add(3, 5);
// arrow function을 사용 할 때 여러줄 할꺼면 블록으로 묶고 리턴을 해줘야됨

// IIFE : Immediately Invoked Function Expression (함수 바로 실행시키기)
(function iife() {
  console.log("실행");
})();

//Quiz

function calculate(command, a, b) {
  if (command === "add") {
    return a + b;
  } else if (command === "mul") {
    return a * b;
  } else {
    console.log("not exist command");
  }
}
const tmp1 = calculate("add", 3, 5);
console.log(tmp1);
const tmp2 = calculate("mul", 3, 5);
console.log(tmp2);
const tmp3 = calculate("sub", 3, 5);
console.log(tmp3);
