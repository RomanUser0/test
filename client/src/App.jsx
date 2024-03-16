import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Auth from './pages/auth/auth'
import Profile from './pages/profile/profile'
import { useGetMeMutation } from './store/query/usersApi'
import { getProfile } from './store/slices/authSlice'
import { useEffect } from 'react'

function App() {


 
  const isAuth = useSelector(state => state.authSlice.isAuth)
  const dispatch = useDispatch()
  const [getMe] = useGetMeMutation()
  const checkAuth = async () => {
    const data = localStorage.getItem('token')
    const token = JSON.parse(data)
    console.log(token)

    if (token) {
      const checkMe = await getMe()
      dispatch(getProfile(checkMe))
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])



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
