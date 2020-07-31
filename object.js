// object -> key와 value의 집합체
// object = {key : value}
// 오브젝트 만드는 법 2가지
const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "q100", age: 25 };
print(ellie);

ellie.job = "corder"; // 오브젝트 선언 후 나중에 추가 할 수 있음
console.log(ellie.job);

delete ellie.job; // 오브젝트 선언 후 나중에 삭제 할 수 있음
console.log(ellie.job);

// 오브젝트 접근 법 (둘다 같은 의미)
console.log(ellie.name);
console.log(ellie["name"]);

// 대괄호로 오브젝트 접근 하는 경우(동적)
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");

// Constructer function
const person1 = new Person("규백", 25);
console.log(person1);
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// in operator (오브젝트 안에 key가 존재하는지 확인)
console.log("name" in ellie);

//for in -> 오브젝트 내용
console.clear(); // 콘솔 내용 지우기
for (key in ellie) {
  console.log(ellie[key]);
}

//for of -> 배열같은거 내용 모두 출력
const array = [1, 2, 4, 5];
for (tmp of array) {
  console.log(tmp);
}

/*
 user2 = user일 시에 
 user -> ref -> 내용 
 user2 -> ref
 서로 같은 ref를 가짐(가르키는거아니고 새로운 데이터가 생기는데 같은 데이터임)
 그 ref는 같은 내용을 가르킴(새로운데이터생성 x)
*/
const user = new Person("김규백", 25);
const user2 = user;
user2.name = "변함";
console.log(user); // 같은 내용을 가르키기 때문에 user2를 바꿔도 user도 바뀜

// 위처럼 새로운 데이터를 만들어서 복사 할 경우(옛날방법)
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
user3.name = "바뀜";
console.log(user);

//좋은 방법
const user4 = {};
Object.assign(user4, user); // === const user4 = Object.assign({},user);
user4.name = "해결?";
user4.age = 44;
console.log(user);

// 여러개 할당하기
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 같은 속성이 있으면 뒤로 갈수록 뒤에 오브젝트의 속성값을 덮어씌움
console.log(mixed.color);
console.log(mixed.size);
