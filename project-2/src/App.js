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

import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Joke from "./Joke";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
