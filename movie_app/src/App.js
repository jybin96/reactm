import React, { Component } from 'react';
import './App.css';
import Movie from './movie';


const movie = [
  {
    title:"metrix",
    image:"https://upload.wikimedia.org/wikipedia/ko/thumb/2/26/%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EB%A7%A4%ED%8A%B8%EB%A6%AD%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
  },
  {
    title:"full metal jacket",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRASzEJUevz7r6o5ab2JXuPQv5INKAgGr4ktOy_HqaYS4Iu23Y5"
  },
  {
    title:"oldboy",
    image:"https://image.aladin.co.kr/product/48/11/cover500/9032222597_2.jpg"
  },
  {
    title:"starwars",
    image:"https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/220px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg"
  }
]


class App extends Component{
  render(){
    return (
      <div className="App">
        {movie.map((movie,index) =>{
          return <Movie title={movie.title} poster={movie.image} key={index}/>
        })}
      </div>
    );
  }
  
}

export default App;
