/* 다음과 같이 객체 안에 있을 때, '정'을 '김'으로 수정하는 방법은 무엇일까요? */

const hanseo = {
  name: {
    first: '한서',
    last: '정',
  },
  gender: 'm',
};
hanseo.name.last = '김';
hanseo['name']['last'] = '김';
