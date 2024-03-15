import './App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useEffect } from 'react'
import { useGetUsersQuery } from './store/query/usersApi'

function App() {

  useEffect(() => {

  }, [])

  const { data } = useGetUsersQuery()
  console.log(data)

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,  
  } = useForm()

  const onSubmit = async (data) => {
    await axios.get('api/create', data).then((result) => {
      console.log(result.data)
    })
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
