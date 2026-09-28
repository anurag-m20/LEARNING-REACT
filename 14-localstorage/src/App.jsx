import React from 'react'

const App = () => {

  // const user=localStorage.getItem('user')
  // const age=localStorage.getItem('age')
  // console.log(age,user);
  // localStorage.setItem('age','18')
  // localStorage.removeItem('user')
  // another way
  const user = {
    username:'Sarthak',
    age:18,
    city:'Bhopal'
  }
  localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>
      APP
    </div>
  )
}

export default App
