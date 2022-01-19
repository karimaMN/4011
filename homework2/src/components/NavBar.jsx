import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const buttonStyle = {
    marginLeft: '10px',
    marginBottom: '20px',
    marginTop: '20px',
}

const stylePaper ={
    margin: '10px 75px 20px 75px' 
}

class NavBar extends React.Component{
  render() {
    return (
      <Paper style ={stylePaper}>
        <div style ={{textAlign:'center'}}>
            <Link to='/' style ={{textDecoration:'none'}} >
              <Button style ={{buttonStyle}} variant="contained" color="primary">
                  About Me 
              </Button>
            </Link>
        
            <Link to='/hobbie' style ={{textDecoration:'none'}}  >
               <Button style ={buttonStyle} variant="contained" color="primary">
                   Hobbies
               </Button>
            </Link>
            
        </div>
      </Paper>
    )

  }
}


export default NavBar