import React, { Component } from "react";

export default class App extends Component {
  state = {
    infos: [],
  };

  async componentDidMount() {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const infos = await res.json();
    console.log(infos);

    this.setState({ infos });
  }

  render() {
    const { infos } = this.state;
    console.log(infos);

    return (
      <div>
        <h1>react-django 연동</h1>
        <div>
          {infos.map((i) => {
            return (
              <div>
                <div>{i.key}</div>
                <div>{i.id}</div>
                <div>{i.title}</div>
                <div>{i.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
