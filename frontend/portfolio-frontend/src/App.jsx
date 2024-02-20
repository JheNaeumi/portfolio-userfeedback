import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import StatsComponent from './components/StatsComponent'
import UserFeedbackComponent from './components/UserfeedbackComponent'
import MainPageComponent from './components/MainPageComponent'
import ProjectComponent from './components/ProjectComponent'
import BackToTopButton from './components/BackTotopbutton'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
 
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
      <Route path="/"element={
        <>
          <MainPageComponent />
          <ProjectComponent/>
          <StatsComponent />
          <UserFeedbackComponent />
        </>}>
      </Route>
      </Routes>
      
      <FooterComponent/>
      <BackToTopButton/>
    </BrowserRouter>
    </>
  )
}

export default App
