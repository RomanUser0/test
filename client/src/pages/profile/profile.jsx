import { useGetUsersQuery } from "../../store/query/usersApi"





function Profile() {

    const { users, isLoading}  = useGetUsersQuery()



    return(
        <div>
            {
                users.map(({id, name, email}) => {
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