import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import StatsComponent from './components/StatsComponent'
import UserFeedbackComponent from './components/UserfeedbackComponent'
import MainPageComponent from './components/MainPageComponent'
import ProjectComponent from './components/ProjectComponent'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
 
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <MainPageComponent/>
      <ProjectComponent/>
      <StatsComponent/>
      <UserFeedbackComponent/>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
