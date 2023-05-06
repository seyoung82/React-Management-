/* eslint-disable */

import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "홍길동",
    birthday: "92000",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동2",
    birthday: "222222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "홍길동3",
    birthday: "922122",
    gender: "남자",
    job: "대학생",
  },
];

class App extends Component {
  render() {
    return (
      <>
        {customer.map((c) => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.gender}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </>
    );
  }
}

export default App;
