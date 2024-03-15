import { useEffect } from "react"
import { useGetUsersQuery } from "../../store/query/usersApi"





function Profile() {



 const { data, isLoading } = useGetUsersQuery()


    return (
        <div>
            {
                data.map(({ id, name, email }) => {
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