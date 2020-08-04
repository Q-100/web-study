// 웹사이트와 서버 통신은 HTTP로 함
// XML === 마크업언어
// 요즘엔 XML을 안쓰고 JSON(JavaScript Object Notation)을 사용

// 1. 오브젝트 -> 제이슨 (stringify(obj))

let json = JSON.stringify(true); //
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "q100",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => console.log(`${this.name} can jump!`),
};
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 특성만 JSON으로 변환
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
// 콜백으로 원하는 특성만 JSON으로 변환
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "json" : value; // 만약 키가 name이면 json으로 하고 그외의 것이면 기존 value 사용
});
console.log(json);

// 2. 제이슨 -> 오브젝트 (parse(json))
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

// rabbit 오브젝트에는 점프가 있지만 obj 오브젝트에는 점프가 없음
// JSON으로 변환 될때 함수는 변환되지 않음(데이터만 변환됨)
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); JSON으로 변환 할때 스트링으로 변환되어서 안됨
// 스트링으로 변환된 날짜 같은 것을 사용 할려면
console.clear();
const obj1 = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj1);
console.log(obj1.birthDate.getDate());
