import './App.css'

function App() {
  async function getData() {
    const response = await fetch(`https://my-json-server.typicode.com/hadi-b-js/Easy-Todo/todos`)
    const data = await response.json()
    console.log(data)
  }

  getData()

  return (
    <>
      
    </>
  )
}

export default App