import React from 'react';

/*class App은 extends React.Component 필수 임,
class React.Component 는 return을 가지지않음(function이 아니기 때문) ==> App_backUp(jsx&props) 2-2번째 참조
대신, render method를 가지고 있고, 사용자의 App component안에 있음 React.Component에서 확장 함
extends를 한 이유는 React.Component에 있는 render method를 사용 할것이기 때문임
react는 자동적으로 사용자의 class component의 render method를 실행함(자동으로*)
state는 object이고 component의 data를 넣을 공간이 있으며 state공간안의 데이터는 변함
state를 render에 넣기 위해선 state가 class이기 때문에 {this.state.값}을 해야함 
react에서는 자동으로 button에 onClick이 있어서 따로 선언을 안해도 됨
react에서는 state를 바꿀수 없음 즉 setState를 이용하여 변경 해야함, 새로고침하면 state를 다시 보여줌 
*/
class App extends React.Component {
    //state는 기본상태
    state = {
        count: 0 
    };

    /*add = () => {}  ===  add = function(){}
    사용자가 만든 업데이트 , add 와 minus는 자바스크립트 코드(react 코드 X) */
    add = () => {
        this.setState(current =>({ count: current.count + 1 }))
    };
    minus = () => {
        this.setState(current =>({ count: current.count -1 }))
    };

    /*conponent(render)가 화면에 호출될때 componentDidMount()가 호출 됨
    DOM 을 사용해야하는 외부 라이브러리 연동을 하거나, DOM 의 속성을 읽거나 직접 변경하는 작업을 진행함*/
    componentDidMount() {
        console.log("Component rendered");
    }

    /*업데이트가 완료되면 실행(여기서는 button클릭시), 버튼클릭시 view(페이지)가 refresh(리플레시) 되므로,
    render가 자동 호출(실행) 된 다음 componentDidUpdate()가 실행됨  */
    componentDidUpdate() {
        console.log("I just updated");
    }
    //component(render)가 호출되지 않을때 componentWillUnmount()가 대신 호출 됨
    componentWillUnmount() {
        console.log("Goodbye, cruel world");
    }

    render() {
        console.log("I'm Renderring");
        return (
        <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        );
    }
}

export default App;
