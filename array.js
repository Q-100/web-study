// 배열 선언

const arr = ["규백", "Q100"];
const arr1 = new Array();

// 배열은 인덱스 기준으로 저장됨
const fruit = ["사과", "바나나"];
console.log(fruit);
console.log(fruit[1]);
console.log(fruit[fruit.length - 1]); // 마지막 인덱스 찾는 법

// 배열 출력
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

for (let tmp of fruit) {
  console.log(tmp);
}

// 콜백함수로 배열 출력하기
fruit.forEach(function (fruit, index, array) {
  // 배열 요소, 인덱스, 배열자체를 반환함
  console.log(fruit, index, array);
});
