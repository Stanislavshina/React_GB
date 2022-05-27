// @ts-nocheck
import React, { useState } from "react";
import { AnotherComponent } from "./childrenComp";

export function Foo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(30);
  const [film, setFilm] = useState("");
  const [filmList, setFilmList] = useState([
    { filmName: "Logan" },
    { filmName: "IronMan" },
  ]);

  function handleShowCount() {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  }

  function handleInputValue(event) {
    setFilm(event.target.value);
    console.log(film);
  }

  function handleDelete() {
    setFilmList(filmList.filter((f) => f.filmName !== film));
    // При Отправке state (как из примера про хуки) падает всё приложение, почему так? при это в консоли стейт отображает массив объектов с фильмами4
    // setFilmList((state) => {
    //   state.filter((f) => f.filmName !== film);
    // });
  }

  return (
    <div>
      <p>Look at this count: {count}</p>
      <button onClick={() => setCount(count + 1)}>++++</button>
      {/* зачем передаем state, если он описывает Event?  */}
      <button onClick={(state) => setCount(count - 1)}>----</button>
      <button onClick={handleShowCount}>handleShowCount</button>
      <hr />
      <hr />
      <p>age is {age}</p>
      <AnotherComponent setAge={setAge} />
      <hr />
      <hr />
      {filmList.map((film) => (
        <h1>{film.filmName}</h1>
      ))}
      <input value={film} onChange={handleInputValue} />
      <button onClick={handleDelete}>delete</button>
      <hr />
      <hr />
    </div>
  );
}
