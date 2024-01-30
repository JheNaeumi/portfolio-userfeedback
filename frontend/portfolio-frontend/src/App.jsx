import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import DefaultComponent from './components/DefaultComponents'
import UserFeedbackComponent from './components/UserfeedbackComponent'
import MainPage from './components/MainPageComponent'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
 
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <MainPage/>
      <DefaultComponent/>
      <UserFeedbackComponent/>
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
