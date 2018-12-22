import React, { Component } from "react";
import { RecursiveComponent } from "./RecursiveComponent";

const One = () => <p>One</p>;
const Two = () => <p>Two</p>;
const Three = () => <p>Three</p>;

const components = [One, Two, Three];

export default class Recursion extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <RecursiveComponent components={components} />
      </div>
    );
  }
}
