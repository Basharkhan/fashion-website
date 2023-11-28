import './App.css'
import Banner from './components/layouts/Banner'
import BestFashion from './components/layouts/BestFashion'
import BestSeller from './components/layouts/BestSeller'
import Navbar from './components/layouts/Navbar'
import NewCollection from './components/layouts/NewCollection'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <NewCollection/>
      <BestFashion/>
      <BestSeller/>
    </>
  )
}

export default App
