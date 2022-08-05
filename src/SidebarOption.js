import React from 'react';
import './SidebarOption.css';

function SideOption({title, Icon}) {
    return ( 
        <div className='sidebarOption'>
            {Icon && <Icon className="sidebarOption__Option"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}      
        </div>
     );
}

export default SideOption;