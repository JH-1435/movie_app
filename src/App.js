import React from 'react';

/*라우터는 url을 가지고 확인하고 사용자가 원하는 컴포넌트를 불러옴
즉, 리액트에서 쓰이는 페이지 경로설정*/
import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';
import "./App.css";


/*함수형 컴포넌트
<Route path="/about" component={About} />에서 /about로 가면 About 컴포넌트를 보여줌
exact={true}를 해주면 url이 / 일때만 .home을 렌더링(호출) 해줌(안하면 About이랑 Home이 동시에 렌더링됨)
<Navigation />은 Router 밖에서 쓸수 없음(Link를 쓰기 때문) 
모든 Router(HashRouter,Route포함)들은 component={props}를 가짐
"/movie/:id" Movie.js에 있는 id변수를 url에 넣음
*/
function App() {
    return (
    <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;