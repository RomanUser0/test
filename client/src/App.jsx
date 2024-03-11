import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='button_form'>
        <input type='text' placeholder='Name' {...register('Name')}/>
        <input type='password' placeholder='Password' {...register('Password')}/>
        <input type='email' placeholder='Email'{...register('Email')}/>
        <button>Отправить</button>
      </form>
      <div>
        
      </div>
    </>
  )
}

export default App
