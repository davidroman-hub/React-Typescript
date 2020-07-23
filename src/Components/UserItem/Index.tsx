import React from 'react'
import { User } from '../../Zustand-Store/Types'

const UserItem = ({
    // address,
    // company,
    email,
    // id,
    name,
    phone,
    // username,
    // website,
        }:User) => {

return(
    <div style={{ margin:"10px",display:"flex" ,flexDirection:"column", border:'1px solid black', padding:10 }}> 
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