import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

/*component가 state를 필요없을때 class component를 쓸필요는 없음 고로
movies component는 state를 필요로 하지 않으므로 function component를 씀 
genres.map( (genre, index)에서 map은 key값(사용자 맘대로 변수명 부여(index) )을 따로 제공함
summary.length를 이용해 값을 알아온다음, {summary.slice(0,140)}에서 slice(시작점,끝점) 만 보여줌
summary는 영화 소개글
Link(링크,라우터) => `/movie/${id}`페이지에 object를 전달 -> state: {props}
${id}는 j쿼리를 이용하여 id값을 알아서 찾아오는것
*/
function Movie({ id, year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title, 
                summary, 
                poster, 
                genres
            }
        }}>
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map( (genre, index) => (
                        <li key={index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0,180)}...</p>
            </div>
            </Link>
        </div>
    );
}

//id, title 등 값이 number, String 등 맞는지 확인하고 아닐시 호출 않함
Movie.protoTyes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;