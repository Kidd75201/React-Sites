// named and default import/exports
// only one default export module
// think of module as a file
// stateless functional components
// class based components
// state, life cycle methods
// React Hooks
// Classes - Syntactical Sugar For Constructor Functions
// subclass of Component
// extends from Component Class
// inherits functionality
// Component class is used to transfer from basic E6 class.

import React, { Component } from "react";
import BookList from "./BookList";
const App = () => (
  <section>
    <h1>This is our Application</h1>
    <BookList />
  </section>
);

export default App;
