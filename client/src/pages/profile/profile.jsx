import { useDispatch, useSelector } from "react-redux"
import { useGetUsersQuery } from "../../store/query/usersApi"
import { logout } from "../../store/slices/authSlice"





function Profile() {


        const dispatch = useDispatch()
        const { data = [], isLoading } = useGetUsersQuery()
        console.log(data)
        const isAuth = useSelector(state => state.authSlice.isAuth)
        console.log(isAuth)


    return (
        <div>
            <div>
                <button onClick={() => dispatch(logout)}>Выход</button>
            </div>
            {
                data.map(item => (
                    <div>
                        <span>{item.id}</span>
                        <span>{item.name}</span>
                        <span>{item.email}</span>
                    </div>
                ))
            }
        </div>
    )
}


export default Profile    