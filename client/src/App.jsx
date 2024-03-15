import './App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react'
import { useCreateUserMutation, useGetUsersQuery } from './store/query/usersApi'
import { useDispatch } from 'react-redux'
import { getProfile } from './store/slices/authSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {

  }, [])

  const { data = [] } = useGetUsersQuery()
  console.log(data)

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,  
  } = useForm()

  const onSubmit =  (user) => {
    const { data } = useCreateUserMutation(user)
    dispatch(getProfile(data))
  }




  return (
    <>   
      <form onSubmit={handleSubmit(onSubmit)} className='button_form'>   
        <input type='text' placeholder='Name' {...register('name')} />
        <input type='password' placeholder='Password' {...register('password')} />
        <input type='email' placeholder='Email'{...register('email')} />
        <button>Отправить</button>
      </form>
      <div>

      </div>
    </>
  )
}

export default App
