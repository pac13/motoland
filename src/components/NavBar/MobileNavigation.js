import NavLinks from "./NavLinks"
import {TfiMenu} from 'react-icons/tfi'
import { useState } from "react"
import {TfiClose} from 'react-icons/tfi'
const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    const hamburguerIcon = <TfiMenu 
                            className='nav__toggle'
                            onClick={() => setOpen(!open)}/>
    const closeIcon = <TfiClose 
                            className='nav__toggle'
                            onClick={() => setOpen(!open)}/>
    return ( 
        <div className="mobile">
            {open ? closeIcon : hamburguerIcon}
            {open && <NavLinks />}
        </div>
    )
}

export default MobileNavigation