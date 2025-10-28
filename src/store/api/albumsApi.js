import { faker } from '@faker-js/faker';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '../thunks/fetchUsers';


export const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3005/albums',
        fetchFn:async(arg)=>{
            console.log(arg)
            await pause(2000);
            return fetch(arg);
        }
    }),
    endpoints(builder){
       return { fetchAlbums: builder.query({
            query:(user)=>{
                return {
                    url: '',
                    params: { userId: user.id},
                    method: 'GET'
                }
            },
            //it's all about the idea of some of the total.
            //the single user will have list of albums under their id
            //so all the albums will invalidate this specific user id used in the tag
            providesTags:(result, error, user) => [{type:'album',id:user.id}]
        }),
        addAlbum: builder.mutation(
            {
                query(user){
                    return {
                        url: '',
                        method: 'POST',
                        body:{
                            title:faker.commerce.productName(),
                            userId:user.id
                        }
                    }
                },
                invalidatesTags:(result, error, user) => [{type:'album', id:user.id}]
            }
        )
    }
    }
})


export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;


// new proxy: http://vf-grp-de-pac.internal.vodafone.com/proxy.pac
//old proxy: http://vis-internal-proxy.internal.vodafone.com:8080/proxy.pac