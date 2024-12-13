import './App.css'

function App() {
  async function getData(userName) {
    const response = await fetch(`https://my-json-server.typicode.com/hadi-b-js/Easy-Todo/users/${userName}`)
    const data = await response.json()
    console.log(data)
  }

  getData("hadi.b.js")

  return (
    <>
      
    </>
  )
}

export default App
