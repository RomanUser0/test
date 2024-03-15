import { useForm } from 'react-hook-form'
import { useCreateUserMutation, useGetUsersQuery } from '../../store/query/usersApi'
import { useDispatch } from 'react-redux'
import { getProfile } from '../../store/slices/authSlice'
import { useState } from 'react'



function Auth() {

    const dispatch = useDispatch()
    const { data = [] } = useGetUsersQuery()
    const [createUser, { isLoading }] = useCreateUserMutation()
    const [isAuth, setIsAuth] = useState(false)


    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = async (user) => {
        if (isAuth) {
            const data = await createUser(user).unwrap()
            dispatch(getProfile(data))
        }else {
            const data = await createUser(user).unwrap()
            dispatch(getProfile(data))
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='button_form'>
                <input type='text' placeholder='Name' {...register('name')} />
                <input type='password' placeholder='Password' {...register('password')} />
                <input type='email' placeholder='Email'{...register('email')} />
                <button>Отправить</button>
            </form>
        </div>
    )
}

export default Auth