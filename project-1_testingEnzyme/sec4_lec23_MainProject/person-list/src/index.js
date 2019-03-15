import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <article className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="John" job="developer" />
      <Person img="20" name="Lisa" job="designer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia,temporibus.
        </p>
      </Person>
      <Person img="57" name="Mike" job="stripper" />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById("root"));
