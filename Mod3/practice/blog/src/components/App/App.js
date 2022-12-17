import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'

function App() {
  const title = "Welcome to the new blog"
  const likes = 50
  const link = "https://www.google.com"
 
  return (
    <div className="App">
      <NavBar />
     <div className="content">
        <Home />
     </div>
    </div>
  );
}

export default App;

// Video Series Progress:
// Vid 11
// https://www.youtube.com/watch?v=4pO-HcG2igk
