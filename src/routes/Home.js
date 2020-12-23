import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//state로 데이터 기본설정을 함, class Home == component class
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };
    /* getMovies = async () => {}; === getMovies = async function(){}; 
    async,await는 axios.get은 완료되기까지 시간이 필요하기에 async,await를 넣음(비동기방식),
    async와await는 같이 쓰임, axios.get(API url)
    console.log(movies);로 확인해서 찾고자하는 값 위치를 알아옴
    movies에 있는 data에 있는 movies 배열만 꺼내올것 즉,
    const data 배열안에 또다른 data 배열안에 movies배열값을 가져옴
    setState로 movies에 대한 값을 바꿀수있게 함, isLoading은 false로 바꿈
    list_movies.json.sort_by=rating, sort_by=rating은 rating(레이팅)별로 정렬함*/
    getMovies = async () => {
        const {
            data: { 
                data: { movies }
            }
        } = await axios.get(
            "https://yts-proxy.nomadcoders1.now.sh/list_movies.json.sort_by=rating"
            );
        this.setState({ movies, isLoading: false });
    }

    /* render() === component 가 실행(mount)되면 getMovies();를 호출함  */
    componentDidMount() {
       this.getMovies();
    }   

    /*isLoading이 true가 아니라면 movies를 보여줌
    {movies.map(movie => (~~ ))} == {movies.map(function(map) {(~~)} } 
    {movies.map -> 배열(object list)을 map에 넣음
    <Movie ~~~ /> ==> Movie에 있는 props를 불러온것 변수명={data안에movie.실제값 위치},
    key는 기본키 이므로 꼭 넣어주어야 함
    react에서는 class대신 className을 써야함 왜냐하면 component class와 헷갈리기 때문임
    */
    render() {
        const { isLoading, movies } = this.state;
        return (
        <section className="container">
            {isLoading ? (
            <div className="loader">
                <div className="loading"></div>
                <span className="loader__text">Loading..</span>
            </div>
            ) : ( 
            <div className="movies">
                {movies.map(movie => (
                <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres} 
                /> 
                ))}
            </div>
            )}
        </section>
        );
    }
}

export default Home;
