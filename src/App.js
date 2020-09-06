import React, { Component } from "react";
import Info from "./Info";

export default class App extends Component {
  state = {
    infos: [],
  };

  async componentDidMount() {
    const res = await fetch("http://127.0.0.1:8000/api/");
    const infos = await res.json();

    this.setState({ infos });
  }

  render() {
    const { infos } = this.state;

    return (
      <div>
        <h1>react-django 연동</h1>
        <div>
          {infos.map((i) => {
            return (
              <div key={i.id}>
                <Info id={i.id} title={i.title} content={i.content} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
