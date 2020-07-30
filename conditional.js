console.log("my" + "cat");
console.log("1" + 3);
console.log(` 1 + 3 = ${1 + 3}`);
// ``사이에는 `를 인식못함 -> 인식할려면 \(백슬래쉬) 사용
console.log(` 1 + 3 \``);
// 줄바꿈 : \n, 탭 : \t
console.log(`안녕 \n 바보야 \t ㅎㅎ`);

//count++ -> test = count -> count + 1
//++count -> count + 1 -> test = count;
let count = 3;
const test = ++count;
console.log(test);

// or : ||, and : &&, not : !
// or은 연산 중에 트루가 나오면 뒤에 계산을 하지 않음(어짜피 트루이니까) -> 무조건 or연산시에 간단한 연산을 앞에
// 둬서 무거운 연산을 최대한 안하도록 하는 것이 좋음
// and연산도 하나만 false가 나오면 뒤에 계산 안함 -> 가벼운 연산 똑같이 앞에

// ==, === 차이
const stringtmp = "5";
const numtmp = 5;
console.log(stringtmp == numtmp); // 내용이 같은지 (숫자형태이든 문자열 형태이든 내용이 같으면 참)
console.log(stringtmp === numtmp); // 완벽하게 같은 것인지 (숫자 형태인지 문자형태인지도 판별)

// 오브젝트 (딕셔너리같은거)는 내용이 같더라도 다름(내용을 가르키는 포인터가 다르기때문에)
const test1 = { name: "q100" };
const test2 = { name: "q100" };
console.log(test1 == test2);

// equlity puzzle
console.log(`0 == false -> ${0 == false}`); // True
console.log(`0 === false -> ${0 === false}`); // False(0은 boolean타입이 아니기 때문에)
console.log(`'' == false -> ${"" == false}`); // True
console.log(`'' === false -> ${"" === false}`); //False
console.log(`null == undefined -> ${null == undefined}`); //True
console.log(`null === undefined -> ${null === undefined}`); // False

const name = "q100";
if (name === "q100") console.log("안녕 q100");
else if (name === "corder") console.log("안녕 corder");
else console.log("누구세요");

console.log(name === "q100" ? "yes" : "no"); // name이 q100이면 yes 아니면 no

const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome": // 내용이 같을 경우 이렇게 같이 묶으면 됨
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

for (let a = 0; a < 11; a++) {
  if (a % 2 == 0) console.log(a);
  else continue;
}

for (let a = 0; a < 11; a++) {
  if (a == 8) break;
  console.log(a);
}
