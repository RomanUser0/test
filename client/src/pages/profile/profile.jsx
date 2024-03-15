
import { useEffect } from "react"
import { useGetUsersQuery } from "../../store/query/usersApi"





function Profile() {


        const { data = [], isLoading } = useGetUsersQuery()
        console.log(data)


    return (
        <div>
            {
                data.map((item) => (
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