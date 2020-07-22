import React,{useState, useEffect} from 'react';
//import { useStore } from '../../Zustand-Store/Index';
import useMyStore from '../../Zustand-Store/Index'
const fakeUsers: object = ({ id:1 , name:"juan", lastName:'Ortiz', age:25})

type HomeProps = {
    id?:number | string,
    loginStatus?:string | undefined;
}

 const Home : React.FC <HomeProps> = ({id, loginStatus }) => {

    const [userInfo, setUsers] = useState<object | undefined >(fakeUsers);
    const [isLoading, setIsLoading] = useState<boolean | undefined>(true);
    const [useStore] = useMyStore;
    const usersTwo = useStore(state => state.users)

    console.log(usersTwo)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        },3000)
    },[])

    return (
        <div>
            {isLoading ? "Cargando " : ""}
            hello im home
        </div>
    )
}

export default Home