/*  다음 객체에서 a,c,e 속성을 구조분해 할당 문법으로 변수에 할당해 보세요. */

const obj = {
  a: 'hello',
  b: {
    c: 'hi',
    d: {e: 'wow'},
  },
}

const {a} = obj
const {c} = obj.b
const {e} = obj.b.d
