import './App.css'
import Counter from './components/Counter'
import HomPage from './components/Homepage'

function App() {
let data="my name is Abhisek"

  return (
    <div >
       {/* <h2>This is my third react class</h2>
       <div >
         <HomPage value={data} secondname="Arjun"/>
        </div> */}
        <Counter/>
    </div>
  )
}

export default App
