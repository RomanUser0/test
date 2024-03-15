import { useForm } from 'react-hook-form'
import { useCreateUserMutation, useGetUsersQuery, useGetProfileMutation } from '../../store/query/usersApi'
import { useDispatch } from 'react-redux'
import { getProfile } from '../../store/slices/authSlice'
import { useState } from 'react'



function Auth() {

    const dispatch = useDispatch()
    const { data = [] } = useGetUsersQuery()
    const [createUser, { isLoading }] = useCreateUserMutation()
    const [getProfileUser] = useGetProfileMutation()
    const [isAuth, setIsAuth] = useState(false)
    console.log(isAuth)


    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = async (user) => {
        if (isAuth) {
            const profile = await getProfileUser(user).unwrap()
            dispatch(getProfile(profile))
        }

        const data = await createUser(user).unwrap()
        dispatch(getProfile(data))
    }
 


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='button_form'>
                <input type='text' placeholder='Name' {...register('name')} />
                <input type='password' placeholder='Password' {...register('password')} />
                <input type='email' placeholder='Email'{...register('email')} />
                <button>Отправить</button>
            </form>
            {isAuth ?
                <div onClick={() => setIsAuth(!isAuth)}>Вы хотите зарегестрироваться?</div>
                :
                <div onClick={() => setIsAuth(!isAuth)}>У вас есть аккаунт?</div>
            }


        </div>
    )
}

export default Auth