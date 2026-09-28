import React from 'react'

const App = () => {

  const getData = async()=>{
        //const response = await fetch('')
        const response = axios.get('https://picsum.photo/v2/list ')  
        console.log(response)
  }
  return (
    <div>
      <button onclick={getData}>Get Data</button>
    </div>
  )
}

export default App
