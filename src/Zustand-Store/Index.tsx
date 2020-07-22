
import create, {GetState, SetState} from 'zustand';

interface MyState { 
    users: object;
}

export  default create((setState: SetState<MyState>, getState:GetState<MyState> ) : MyState => {
    return {
        users:[]
    }
})