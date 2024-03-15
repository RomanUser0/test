import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const usersApi = createApi({
    reducerPath: 'getUsers',
    baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
        }),
        createUser: build.mutation({
            query: () => ({
                url: 'create',
                method: 'POST',
                body
            })
        }) 
    })
})

export const { useGetUsersQuery, useCreateUserMutation } = usersApi