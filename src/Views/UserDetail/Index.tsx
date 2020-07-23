import React,{ useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'; // to get all the params from the page
import useMyStore from '../../Zustand-Store/Index'

const [useStore] = useMyStore

export default function UserDetails(){
    const { userId } = useParams() // coming from the hook
    const getUserDetail = useStore(state => state.getUserDetail)
    const userDetail = useStore(state => state.userDetail)

    //console.log(userId)
    console.log(userDetail)
    

    useEffect(() => {
        (async function() {
            await getUserDetail(userId)
        })()
    }, [])

    
    return (
        <div>
            <h2>{userDetail?.name}</h2>
            <h3>{userDetail?.email}</h3>
        </div>
    )
}