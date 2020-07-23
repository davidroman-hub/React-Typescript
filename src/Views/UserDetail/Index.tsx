import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; // to get all the params from the page
import useMyStore from '../../Zustand-Store/Index'

const [useStore] = useMyStore

export default function UserDetails(){
    const { userId } = useParams(); // coming from the hook
    const getUserDetail = useStore(state => state.getUserDetail);
    const getUserPosts =  useStore( state => state.getUserPosts)
    const userDetail = useStore(state => state.userDetail);
    const userPosts = useStore( state => state.userPosts)
    
    //console.log(userId)
    //console.log(userDetail)
    console.log(userPosts)

    useEffect(() => {
        (async function() {
            await getUserDetail(userId);
            await getUserPosts(userId)
        })()
    }, [])

    
    return (
        <div>
            <h2>{userDetail?.name}</h2>
            <h3>{userDetail?.email}</h3>
        </div>
    )
}