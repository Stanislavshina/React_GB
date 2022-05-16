import React from "react";

export class ClassComponent extends React.Component {
  /**
   * @param {any} props
   * @param {any} title
   */
  constructor(props, title) {
    super(props);
    this.title = title;
    this.state = {
      count: 0,
      films: ["Tor", "Marvel"],
      testObject: {
        id: 1,
      },
    };
  }

  render() {
    const { count, films, testObject } = this.state;
    return (
      <div>
        <h1>hellow {this.props.title}</h1>
        <hr />
        <h2>Count: {count}</h2>
        <button onClick={this.increment}>Прибавить</button>
        <button onClick={this.decrement}>Убавить</button>
        <hr />
        <ul>
          <h2>FILMS:</h2>
          {films.map((el) => {
            return (
              <li>
                <h3>{el}</h3>
              </li>
            );
          })}
          <button onClick={this.addFilms}>Добавить Фильм</button>
        </ul>
        <hr />
        <h4>{testObject.id}</h4>
      </div>
    );
  }

  increment = () => {
    this.setState(
      (state) => ({
        count: state.count + 1,
      }),
      () => {
        console.log("state", this.state);
      }
    );
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  addFilms = () => {
    const newFilm = "WARCRAFT";
    this.setState({
      films: [...this.state.films, newFilm],
    });
  };
}
