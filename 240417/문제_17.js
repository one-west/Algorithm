/* 다음 다섯 개의 값을 앞에서 배운 내용을 활용해 각각 복사해 보세요. 복사는 복사본을 수정해도 원본이 바뀌지 않습니다. 객체라면 복사한 객체 내부의 값을 바꿔도 원본 객체의 값이 바뀌지 않아야 합니다. */

const a = 'b';
const c = ['d', true, 1];
const e = { g: 'h' };
const i = [{ j: 'k' }, { l: 'm' }];
const n = { o: { p: 'q' } };

const copy_a = a;
const copy_c = c.slice()
const copy_e = {...e}
const copy_i = i.concat()
const copy_n = JSON.parse(JSON.stringify(n))