import { TProduct } from '../types'

const content = `
  Atoms는 상태의 단위이며, 업데이트와 구독이 가능하다.
  <br />
  atom이 업데이트되면 각각의 구독된 컴포넌트는 새로운 값을 반영하여 다시 렌더링 된다.
  <br />
  atoms는 런타임에서 생성될 수도 있다.
  <br />
  Atoms는 React의 로컬 컴포넌트의 상태 대신 사용할 수 있다.
  <br />
  동일한 atom이 여러 컴포넌트에서 사용되는 경우 모든 컴포넌트는 상태를 공유한다.
  <br />
  <br />
  Atoms는 atom함수를 사용해 생성한다.
  <br />
  <br />
  Atoms는 디버깅, 지속성 및 모든 atoms의 map을 볼 수 있는 특정 고급 API에 사용되는 고유한 키가 필요하다. 두개의 atom이 같은 키를 갖는 것은 오류이기 때문에 키값은 전역적으로 고유하도록 해야한다. React 컴포넌트의 상태처럼 기본값도 가진다.
  <br />
  <br />
  컴포넌트에서 atom을 읽고 쓰려면 useRecoilState라는 훅을 사용한다. React의 useState와 비슷하지만 상태가 컴포넌트 간에 공유될 수 있다는 차이가 있다.
`

export const products: TProduct[] = [
  {
    id: 'P12081',
    img: '/product-1.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665438745200,
    stock: 5,
  },
  {
    id: 'P12082',
    img: '/product-2.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665538745200,
    stock: 81,
  },
  {
    id: 'P12083',
    img: '/product-3.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665738745200,
    stock: 23,
  },
  {
    id: 'P12084',
    img: '/product-4.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665238745200,
    stock: 41,
  },
  {
    id: 'P12085',
    img: '/product-5.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665438745200,
    stock: 12,
  },
  {
    id: 'P12086',
    img: '/product-6.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665938745200,
    stock: 25,
  },
  {
    id: 'P12087',
    img: '/product-7.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665838745200,
    stock: 31,
  },
  {
    id: 'P12088',
    img: '/product-8.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1665138745200,
    stock: 35,
  },
  {
    id: 'P12089',
    img: '/product-9.png',
    name: 'Apple watch',
    price: 599000,
    content,
    shipping: 1666238745200,
    stock: 22,
  },
]
