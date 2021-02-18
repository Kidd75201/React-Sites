import React, { Component } from "react";
import ReactDOM from "react-dom";

import JSON from "./db.json";

// COMPONENTS
import Header from "./components/header";
import NewsList from "./components/news_list";

class App extends Component {
  // store JSON data in state.news
  state = {
    news: JSON,
  };

  // class must have a render()
  render() {
    return (
      <div>
        <Header />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
