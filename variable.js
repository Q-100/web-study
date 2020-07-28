"use strict";

// 변수 : let (ES6에 추가됨)
// var hoisting : 어디에서 선언했는지 상관없이 항상 제일 위로 선언을 끌어올리는 것.
let name = "부수수수";
console.log(name);
name = "안녕";
console.log(name);
dd;

// const : 한번 값을 할당하면 수정 불가능(보안,스레드 안정성, 실수 방지)

const hi = 8;

// js는 변수타입을 안해줘도 파이썬처럼 자동으로됨
// 문자열 안에 변수 넣을꺼면 1옆에 `이걸로 묶음
const count = 18;
const size = 18.1;
console.log(`value : ${count}, type : ${typeof count}`);
//숫자 값이 크면 뒤에 n붙이기

const first = "안녕하세요";
const second = "저는 규백이에요";
const third = first + second;
console.log(`value : ${third}, type : ${typeof third}`);

// boolean
//false : 0, null, undefined, NaN, ''
//true : 다른 값 모두 트루

//null : 값이 비어있다 , undefined : 선언은 되었지만 값이 있는지 모름 --> let x (이것도 undefined)

//같은 심볼을 주어도 다른 식별자로 인식함
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
// 위의 심볼1과 심볼2는 서로 다른 값임
console.log(symbol1 == symbol2);

// Symbol.for 사용하면 같은 식별자로됨
const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");
console.log(symbol3 == symbol4);
//심볼은 ${symbol}이렇게 하면 안되고 symbol.description 으로 스트링으로 변환 하고 출력해야됨

//object : 파이썬 딕셔너리 같은 거(안에 요소만 수정 가능)
const elli = { name: "ellie", age: 20 };
console.log(elli.age + 30);

//변수명.charAt(index) -> 문자열의 인덱스에 해당하는 요소를 출력
//test
