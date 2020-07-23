import React,{MouseEvent} from 'react'
import { User } from '../../Zustand-Store/Types'
import {useHistory} from 'react-router-dom'

const UserItem = ({
    // address,
    // company,
    email,
     id,
    name,
    phone,
    // username,
    // website,
        }:User) => {

const history = useHistory()            
const handleClick = (event:MouseEvent) => {
    console.log(history);
    history.push(`/user-detail/${id}`)
    //alert(event.currentTarget)
    // CAMBIO DE RUTA TO DO

}
//https://stackoverflow.com/questions/54433183/typescript-interface-signature-for-the-onclick-event-in-reactjs

return(
    <div onClick={handleClick} style={{ margin:"10px",display:"flex" ,flexDirection:"column", border:'1px solid black', padding:10 }}> 
        <label>
            {name}
        </label>
        <label>
            {phone}
        </label>
        <label>
            {email}
        </label>
        <button style={{ width:"200px", marginTop:'10px'}}>Ver detalle</button>
    </div>
    )
}

export default React.memo (UserItem)