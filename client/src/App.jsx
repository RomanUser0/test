import './App.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function App() {

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
   await axios.post('api/login', {...data}).then((res, req) => {
      console.log(res)
    })
  }



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='button_form'>
        <input type='text' placeholder='Name' {...register('name')}/>
        <input type='password' placeholder='Password' {...register('password')}/>
        <input type='email' placeholder='Email'{...register('email')}/>
        <button>Отправить</button>
      </form>
      <div>
        
      </div>
    </>
  )
}

export default App
