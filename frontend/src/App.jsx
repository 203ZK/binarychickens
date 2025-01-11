import { useState } from 'react'
import axios from "axios"

function App() {
  axios.get("http://localhost:3000")
    .then((response) => console.log(response.data.users));

  return (
    <>
      <nav>
        <span>MUHAMMADIYAH WELFARE HOME</span>
      </nav>

      <div>well Done!</div>
    </>
  );
}

export default App
