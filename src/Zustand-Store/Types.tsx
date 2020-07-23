
export interface User {
    address:object;
    company: object;
    email:string;
    id:number;
    name:string;
    phone:string;
    username:string;
    website:string
}


export interface MyState { 
    users: User[];
    getUsers: () => void; //vacio
    isLoading: boolean;
}
