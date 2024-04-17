/* 
문제_26를 사용해서 Human 클래스를 상속해 HTML, CSS, JS를 할 줄 아는 개발자 클래스를 만들어보세요.
속성으로 availableLanguages(코딩 가능한 언어)를 추가하고, 
availableLanguages를 콘솔에 표시하는 showAvailableLanguages() 메서드를 추가하세요.
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

class developer extends Human {
  constructor(name, age, availableLanguages) {
    super(name, age);
    this.availableLanguages = availableLanguages;
  }
  showAvailableLanguages() {
    console.log(this.availableLanguages);
  }
}

const dev01 = new developer('정한서', 25, ['html', 'css', 'js'])
dev01.showAvailableLanguages()