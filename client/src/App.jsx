import './App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from './store/slices/authSlice'
import { useEffect } from 'react'

function App() {

  useEffect( async() => {
    await axios.get('api/users').then((result) => {
      console.log(result.data)
    })
  }, [])


  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  const onSubmit = async () => { }




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
