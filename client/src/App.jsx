import { useSelector } from 'react-redux'
import './App.css'
import Auth from './pages/auth/auth'
import Profile from './pages/profile/profile'

function App() {

  const isAuth = useSelector(state => state.authSlice.isAuth)



  return (
    <>
      {isAuth ?
        <Profile />
        :
        <Auth />}


    </>
  )
}

export default App
