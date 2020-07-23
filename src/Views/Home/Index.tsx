import React,{useState, useEffect} from 'react';
//import { useStore } from '../../Zustand-Store/Index';
import useMyStore from '../../Zustand-Store/Index'
import { stat } from 'fs';

const fakeUsers: object = ({ id:1 , name:"juan", lastName:'Ortiz', age:25})
const [useStore] = useMyStore;

type HomeProps = {
    id?:number | string,
    loginStatus?:string | undefined;
}

 const Home : React.FC <{}> = ({ }) => {

   // const [userInfo, setUsers] = useState<object | undefined >(fakeUsers);
    //const [isLoading, setIsLoading] = useState<boolean | undefined>(true);
    const users = useStore(state => state.users)
    const getUsers = useStore(state => state.getUsers)
    const isLoading = useStore( state => state.isLoading)
  //  console.log(usersTwo)

    useEffect(() => {
        // setTimeout(() => {
        //     setIsLoading(false)
        // },3000)
    ( async function() {
        await getUsers();
      })()
    },[])

    return (
        <div>
            {isLoading ? "Cargando " : ""}
            hello im home
        </div>
    )
}

export default Home