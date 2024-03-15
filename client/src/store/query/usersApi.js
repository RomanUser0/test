import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const usersApi = createApi({
    reducerPath: 'getUsers',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery({ baseUrl: 'api' }),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => 'users',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Users', id })),
                    { type: 'Users', id: 'USER' },
                ]
                : [{ type: 'Users', id: 'USER' }]
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: 'create',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Users', id: 'USER' }]
        }),
        getProfile: build.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: 'Users', id: 'USER' }]
        }),
        getMe: build.query({
            query: () => 'auth/profile'
        })
    })
})

export const { useGetUsersQuery, useCreateUserMutation, useGetProfileMutation, useGetMeQuery } = usersApi