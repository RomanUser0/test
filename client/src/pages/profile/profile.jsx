import { useEffect } from "react"
import { useGetUsersQuery } from "../../store/query/usersApi"





function Profile() {

    useEffect(async () => {
        const { users, isLoading } = await useGetUsersQuery()
    }, [])





    return (
        <div>
            {
                users.data.map(({ id, name, email }) => {
                    <div>
                        <span>{id}</span>
                        <span>{name}</span>
                        <span>{email}</span>
                    </div>
                })
            }
        </div>
    )
}


export default Profile