import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const usersApi = createApi({
    reducerPath: 'getUsers',
    baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
        })
    })
})

export const { useGetUsersQuery } = usersApi