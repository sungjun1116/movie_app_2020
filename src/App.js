import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


class App extends React.Component {
  // 미래에 쓰고자 하는 state를 선언하는 것이 필수는 아님
  state = {
    isLoading: true,
    movies: []
  };
  // async-awit를 사용하지 않으면 javascript가 axios.get을 기다려주지 않음
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
