/* 
사람(Human) 클래스를 만드세요. 생성자 메서드에서는 이름과 나이를 속성으로 입력받아 주세요.
그리고 자신의 이름과 나이를 콘솔에 출력하는 메서드를 2개 만드세요.
*/

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(this.name);
  }
  printAge() {
    console.log(this.age);
  }
}