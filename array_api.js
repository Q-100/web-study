// 배열 안의 요소를 문자열로 모두 표현하는 법
const fruit = ["사과", "바나나", "오렌지"];
const result = fruit.join(""); // join(구분자) -> 없으면 쉼표
console.log(result);

//문자열을 배열로 바꾸는 법
const fruit1 = "사과, 키위, 바나나, 체리";
const result1 = fruit1.split(",");
console.log(result1);

//주어진 배열의 순서를 거꾸로 만들기
const array = [1, 2, 3, 4, 5];
const result2 = array.reverse(); // reverse는 대상배열 자체도 바꿈
console.log(result2);
console.log(array);

//주어진 배열에서 원하는 요소로 이루어진 새로운 배열 생성
const array1 = [1, 2, 3, 4, 5];
const result3 = array1.splice(2); // 삭제된 요소 반환함
console.log(result3);
console.log(array1); // ->splice는 기존의 배열도 건드림

// 기존 배열을 건드리지 않고 새로운 배열 생성
const array2 = [1, 2, 3, 4, 5];
const result4 = array2.slice(2); // slice는 특정 부분을 반환함(시작은 시작포함, 끝은 끝을포함하지않음)
console.log(result4);
console.log(array2);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 가진 특성 찾기
// find는 배열의 모든 요소를 방문함, 방문 시에 트루이면 멈춤
const result5 = students.find(function (students, index) {
  return students.score === 90;
});

// const result5 = students.find((students, index) => students.score === 90);
// 위와 같은 의미 (Arrow func)
console.log(result5);

// 오브젝트의 특정 요소를 가진 오브젝트로만 배열 새로 만들기
const result6 = students.filter((students) => students.enrolled === true);
console.log(result6);

// 오브젝트의 특정 요소만을 뽑아 새로운 배열로 만들기
// 맵은 배열안의 모든 요소들을 콜백함수에서 리턴된 값으로 대체함
const result7 = students.map((students) => students.score); // 각 요소에 방문 할때마다 요소의 특성을 반환함
console.log(result7);

// 오브젝트의 특정 요소가 주어진 조건에 맞는 것이 있는지 확인
const result8 = students.some((students) => students.score <= 50); // some : 요소가 한개라도 조건에 충족하면 true
console.log(result8);

const result9 = students.every((students) => students.score <= 50); // every : 모든 요소가 조건에 만족해야 true
console.log(result9);

// 오브젝트 특정 요소 누적하기
// 방문 할때마다 콜백함수의 값을 누적해서 반환함
// reduceRight는 배열의 뒤에서 부터 시작함
// prev는 이전의 리턴된 값을 전달 받음, curr는 요소를 방문함
const result10 = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(result10 / students.length);

let sum = 0;
for (tmp of students) {
  sum += tmp.score;
}
console.log(sum);

//오브젝트의 특정 요소를 문자열로 변환하기
const result11 = students
  .map((students) => students.score) // 점수만 배열로 반환
  .filter((score) => score > 50) // 점수가 50점 이상인 요소만 반환
  .join(); // 반환된 요소들을 문자열로 반환
console.log(result11);

//정렬 -> 리턴 값이 마이너스 : prev가 curr보다 작다고 가정해서 정렬이됨(작은것부터)
// 리턴 값이 플러스 : prev가 curr보다 크다고 가정해서 정렬(큰것부터)
const result12 = students
  .map((students) => students.score)
  .sort((prev, curr) => prev - curr)
  .join();
console.log(result12);
