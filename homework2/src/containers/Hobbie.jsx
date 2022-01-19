import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const stylePaper ={
    textAlign:'center',
    margin: '10px 75px 20px 75px'

   
   }

const imageStyle ={
    width:'240px',
    height:'120px',
    display: 'block',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto'
}
const imageStyle2 ={
    width:'240px',
    height:'120px',
    display: 'block',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '20px'
}

const Hobbie = () => {
    return (
        <Paper style ={stylePaper}> 
        <Typography variant="h5" >
                 Hobbies
            </Typography>
        <img style ={imageStyle} src="https://images.unsplash.com/photo-1538471726790-0f6b031f1982?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""></img>
        <img  style ={imageStyle} src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt=""></img>
        <img style ={imageStyle2} src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""></img>
        </Paper>
    )
}

export default Hobbie