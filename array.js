"use strict";
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

fruit.forEach((fruit, index) => console.log(fruit, index));

// 배열 추가, 삭제, 복사
fruit.push("딸기", "복숭아"); // 뒤에 부터
console.log(fruit);
fruit.pop();
console.log(fruit);
fruit.pop(1);
console.log(fruit);

//앞에서 부터
fruit.unshift("딸기", "레몬"); // 추가
console.log(fruit);
fruit.shift(); // 삭제
console.log(fruit);

//unshift와shift는 push와 pop에 비해 매우 느림
// 앞에서 데이터를 넣는 순서 : 데이터를 한칸씩 이동해 맨앞칸을 비우고 삽입
// 앞에서 데이터를 삭제 하는 순서 : 앞칸을 비우고 한칸씩 앞으로 이동해 빈곳을 채움

fruit.push("수박", "포도");
console.log(fruit);

//지정된 위치에서 요소 제어
fruit.splice(2, 1); // (시작위치,원하는 갯수) -> 원하는 갯수를 안넘길 시 시작위치로부터 모두 삭제
console.log(fruit);

fruit.splice(2, 1, "배", "메론"); // 뒤에 원하는 위치에 삽입가능
console.log(fruit);

// 배열 묶기
const fruit2 = ["코코넛", "망고"];
console.log(fruit.concat(fruit2));

//검색
console.log(fruit.indexOf("사과")); // 인덱스가 존재하면 인덱스반환, 없을시 -1반환(발견하면 반환 후 종료->뒤에 있어도 반환X)
console.log(fruit.includes("레몬")); // 배열안에 존재 시 true 없을시 false
console.log(fruit.lastIndexOf("레몬")); // 가장 마지막 으로 찾은 요소를 반환
