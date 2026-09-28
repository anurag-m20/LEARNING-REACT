import React from "react";
import card from './components/card'

const App = () => { 
  return (
    <div className="card">
      <h1>sarthak sharma</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio illo sed veritatis, esse blanditiis fugit unde voluptatem laudantium vero eligendi modi quo, rem officia. Perferendis aliquid quo harum exercitationem.</p>
    {card()}
    </div>
  )
}

export default App