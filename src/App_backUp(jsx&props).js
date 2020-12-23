// 0번째 import
import React from 'react';
import PropTypes from "prop-types";

/* 2-1번째 (배열)
배열을 만들어서 object의 list를 가져올것(JS의 object들만)
object list => kimchi(object 1), 쭈꾸미(object 3) 같은것
react의 모든 element(object 같은것들)들은 유일한 key값(id) == 기본키 을 가져야함
*/
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://m.jnmall.kr/web/product/big/201910/4b83072de272a51edffa420ab3b2fa98.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    rating: 4.9
  },
  {
    id: 3,
    name: "쭈꾸미",
    rating: 4.8
  },
  {
    id: 4,
    name: "비빔밥",
    rating: 4.7
  }
];

/* 2-2번째 function({props(프롭스)}),rendering(렌더링)할 것들
동적 데이터가 있는 component가 있고, jsx+props의 힘으로 모두 재사용 가능
function Food({props}) { return <h1>I lov {props.fav}</h1> } 이런식으로도 사용 가능
*/
function Food({ fav }) {
  return <h1>Food == {fav}</h1>
}
function Food2({ name, picture, rating }) {
  return (
  <div>
    <h2>Food2 == {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

/*propTypes == prop들이 제대로 알맞게 들어갔는지 확인해줌 {props의 type(string,number..등등), type과 required(존재 여부)를 체크}
  isRequired == 값이 반드시 존재, isRequired를 안넣으면 값이 있거나 없음 으로 판단 함
  그외 propTypes는 여러 확인 방법이 있음*/
Food2.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number.isRequired
};

// Food2 의 또다른 방식 => function App(){ return {foodILike.map(renderFood)} }
/*
function renderFood(dish) {
  return (
    <div>
    <h1>Food2의 다른 방법</h1>
    <Food2 key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
  </div>
  );
}
*/

// 1번째
/*function을 HTML로 반환할것,
application 안에서 많은 component를 넣을수 있음, 이러한 component안에 더 많은
component를 import할 수 있음, 그리고 이러한 것은 동적인 application이 됨,
react는 재사용 가능한 component를 만들수 있음 즉 component를 계속 반복해서 사용할수 있음
<Food fav="값(value)"> 여기서 fav(변수명으로 아무거나 지정가능)는 class와 같은 역할을함,
{foodILike.map(dish => ~~ )} == {foodILike.map(function(map) {~~} } 
{foodILike.map -> 배열(object list)을 map에 넣음 -> dish라는 object에 배열을 다시 저장 
  -> Food2 라는 임의의 함수(div 같은것)에 {dish.name} 즉 dish안에 있는 name(object들)을 하나하나 호출
  key = {dish.id}는 기본적으로 react 내부에서 사용하기 위한 것 그래서 function에 안들어감*/
function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Food fav="fav 입니다."/>

    {foodILike.map(dish => (
    <Food2 key = {dish.id} name = {dish.name} picture={dish.image} rating={dish.rating} /> 
    ))}

  </div>
  );
}
// 0번째(index.js에 import할수 있게 해줌)
export default App;
