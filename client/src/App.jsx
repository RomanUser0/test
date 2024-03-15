import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Auth from './pages/auth/auth'
import Profile from './pages/profile/profile'
import { useGetMeQuery } from './store/query/usersApi'
import { getProfile } from './store/slices/authSlice'
import { useEffect } from 'react'

function App() {

  const isAuth = useSelector(state => state.authSlice.isAuth)
  const dispatch = useDispatch()

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    console.log(token)
    if(token) {
      const { data } = useGetMeQuery()
      dispatch(getProfile(data))
    }
  }

  useEffect(() => {
    checkAuth()
  },[])



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
