import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*리액트는 기본적으로  component(컴포넌트)와 함께 동작함, 모든것은 component 로 이루어져 있음
여기서는 render(<component /> << App이 컴포넌트), component는 HTML을 반환하는 함수
<>이런식으로 component는 JS와 HTML이 섞였다 하여, JSX 라고 부름 이것은 react(리액트)에서만 쓰임
react(리액트) application(어플리케이션)은 한번에 하나의 component만 redering(렌더링)할 수 있음
따라서 모든것은 App.js에 들어가야함*/
ReactDOM.render(<App />, document.getElementById('root'));
