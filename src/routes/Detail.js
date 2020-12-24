import React from "react";
import "./Detail.css";

/* Movie 링크(props가 담긴것) -> App -> Detail에 (Movie에 있던 props)가 전달
Movie가 보내준 state는 location 안에 있음
if(location.state === undefined) => state가 없으면 Home으로 돌려보냄
console.log(this.props);를 해보면
history안에는 url을 변경할수 있는 기능들이 있음 그중 history안에 push 기능이 있음
*/
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

/*render가 componentDidMount()보다 먼저 실행되기에,
state가 존재하는지 알아보고 존재하지 않으면 componentDidMount()를 통해 Home으로 강제이동
*/
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
            <div className="movieDetail__container">
                    <img src={location.state.poster} 
                    alt={location.state.title} 
                    title={location.state.title} />
                <div className="movieDetail__data">
                    <h3>{location.state.title}</h3>
                    <h5 className="movie__year">{location.state.year}</h5>
                <ul className="movie__genres">
                    {location.state.genres.map( (genre, index) => (
                        <li key={index} className="detail__genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary" >{location.state.summary}</p>
                </div>
            </div>
        );
        } else {
            return null;
        }
    }
}

export default Detail;