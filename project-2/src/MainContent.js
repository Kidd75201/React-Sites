import React from "react";
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./jokesData";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

function MainContent() {
  const firstName = "Joe";
  const lastName = "Beza";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const styles = {
    fontSize: 30,
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
    styles.backgroundColor = "lightgray";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#8914A3";
    styles.backgroundColor = "lightgray";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
    styles.backgroundColor = "lightgray";
  }

  const jokesComponents = jokesData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return (
    <main>
      <input type="checkbox" />
      <p>This is Main, where most of the content will go...</p>
      <p>Hello {`${firstName} ${lastName}`}</p>
      <p>It is currently about {date.getHours() % 12} o'clock!</p>
      <p style={styles}>Good {timeOfDay}</p>
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <div className="contactcard">
        <ContactCard
          // 'contact' has a value which is an Object,
          // Requires two set of braces{{}}, 1st set is to enter JS from JSX, 2nd set is for object
          contact={{
            name: "Mr. Whiskerson",
            imgUrl: "http://placekitten.com/300/200",
            phone: "(212) 555-1234",
            email: "mr.whiskaz@catnap.meow",
          }}
        />
        <ContactCard
          contact={{
            name: "Fluffykins",
            imgUrl: "http://placekitten.com/400/200",
            phone: "(212) 555-2345",
            email: "fluff@me.com",
          }}
        />

        <ContactCard
          contact={{
            name: "Destroyer",
            imgUrl: "http://placekitten.com/400/300",
            phone: "(212) 555-3456",
            email: "ofworlds@yahoo.com",
          }}
        />

        <ContactCard
          contact={{
            name: "Felix",
            imgUrl: "http://placekitten.com/200/100",
            phone: "(212) 555-4567",
            email: "thecat@hotmail.com",
          }}
        />
        <ContactCard
          contact={{
            name: "Luke",
            imgUrl: "http://placekitten.com/500/500",
            phone: "(212) 555-4567",
            email: "solocat@hotmail.com",
          }}
        />
      </div>
      {/* // add array of components {jokesComponents} in JSX */}
      <div className="jokes">{jokesComponents}</div>
    </main>
  );
}

export default MainContent;
