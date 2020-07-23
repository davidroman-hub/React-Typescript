
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
    //userDetail:object | null;
    userDetail:User | undefined
    getUsers: () => void; //vacio
    getUserDetail:(userId: string | number) => void;
    isLoading: boolean;
}
