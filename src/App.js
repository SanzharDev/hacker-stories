import React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: "Redux",
    url: "https://reduct.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>

    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />

    <hr />

    <List />
  </div>
);

const List = () =>
  list.map((item) => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));

export default App;
