
import './App.css'
import Certificates from './components/Certificates'
import Companies from './components/Companies'
import DataScience from './components/DataScience'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import Timeline from './components/Timeline'

function App() {
  return (
    <>
     <Navbar/> 
     <MainPage/>
     <DataScience/>
     <Timeline/>
     <Companies/>
     <Certificates/>
     <Offer/>
    </>
  )
}

export default App
