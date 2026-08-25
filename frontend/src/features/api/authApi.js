import{ createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL 
    }),
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (body) => ({
                url: '/api/v1/auth',
                method: 'POST',
                body
            }),
        }),

    })
});

export const {useAddUserMutation } = authApi;