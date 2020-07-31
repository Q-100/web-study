"use strict";
// class는 fields와 methods로 묶여있음
// 속성, 행동으로 이루어짐
// class라는 틀을 만들어 놓고 만든 것을 이용해서 오브젝트를 만듬

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: Hello`);
  }
}
const ellie = new Person("q100", 25);
console.log(ellie.name);
ellie.speak();

// Getter and Setters
//
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age; // this.age -> get호출(값 불러들이기), = age -> set호출(값을 저장 할 때)
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value; // 위와 같이 =value에서 set을 호출하는데 그럼 무한루프에 빠짐(set과 get에선 변수이름을 다르게)
  }
}
const user1 = new User("Steve", "jobs", 15);
console.log(user1.age);

// Fields(public, private)
/* class안에서 #변수명 이런식으로 선언 시 private 되어서 값을 외부에서 확인 및 수정 불가 (class내에서만 가능)
 */
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // 외부에서 제어 불가능

// static property
// 클래스 자체에서만 사용 할 수 있는 것
// 오브젝트에서 static으로 선언 된 것을 사용 할려 해도 undefined로 나옴
// 사용 할려면 클래스.메소드 로 사용

class Article {
  static publisher = "hidden";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printpublisher() {
    console.log("hidden static");
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.articleNumber);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printpublisher();

//상속 및 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // Shpae 클래스를 Rectangle 클래스로 복사(상속)
class Triangle extends Rectangle4 {
  draw() {
    super.draw(); // super을 사용안하면 수정된 함수만 실행되는데 super사용 시엔 기존 클래스의 함수 실행가능
    console.log("★");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
} // 원하는 부분 오버라이딩해서 사용가능

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "black");
triangle.draw();
v;
console.log(triangle.getArea());

// 오브젝트는 클래스를 이용해서 만들어진 인스턴스
// instanceof는 상속되었는지 확인 할때 사용
console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Shape); // True
console.log(triangle instanceof Object); // True
