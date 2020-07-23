import React,{useEffect} from 'react';
//import { useStore } from '../../Zustand-Store/Index';
import useMyStore from '../../Zustand-Store/Index'
import UserItem from '../../Components/UserItem/Index'

//import { stat } from 'fs';

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

const renderUsers = ():undefined | JSX.Element[] | string  => {
    if(users && users.length) {
      return users.map((user, index) => <UserItem key={index}{...user}/>);
    } else if (isLoading){
        return "Cargando";
    }
}

    return (
        <div>
            {isLoading ? "Cargando " : ""}
            {renderUsers()}
        </div>
    )
}

export default Home