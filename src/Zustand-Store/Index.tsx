
import create, {GetState, SetState} from 'zustand';
import {MyState} from './Types'


export default create((setState: SetState<MyState>, getState:GetState<MyState> ) : MyState => {
    return {
        users:[],
        getUsers: async () => {
            setState({ isLoading : true })
            const  result = await fetch("https://jsonplaceholder.typicode.com/users")
            const users = await result.json()
            setState ({users, isLoading:false})
            //console.log(result);
            //console.log(users)
            setState({ users })
        },
        isLoading: false,
    }
})