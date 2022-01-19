import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const buttonStyle = {
    marginRight: '10px'
}

class NavBar extends React.Component{
render() {
    return (
        <div >
            <Link to='/'>
             <Button style ={buttonStyle} variant="contained" color="primary">
                Customer
             </Button>
            </Link>
        
           <Link to='/admin/storemanager'>
               <Button style ={buttonStyle} variant="contained" color="primary">
                Store Manager
            </Button></Link>

          <Link to='/admin/gamingmanager'>
              <Button style ={buttonStyle} variant="contained" color="primary">
                Gaming Manager
              </Button></Link> 


        </div>
    )

}


}


export default NavBar