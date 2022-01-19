import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const stylePaper ={
    margin: '10px 75px 20px 75px',
   
}

const AboutMe = () => {
    return (
    <Paper style = {stylePaper}>
        <Typography variant="h5" style={{color:'black', textAlign: 'center'}}>
                 About Me
        </Typography>
        <div style ={{margin: 'auto', padding: '25px'}}>
             My name is Karima and I am from Morocco. I moved to the United States in 2019.
             I earned a master's degree in applied mathematics.
             I have been always interested in mathematics and computer science, 
             so I decide to go through another master degree in computer science.
             I believe that computer science plays a critical role in nearly all industries and fields of study 
             and this encouraged me more to choose this field.<br></br>
             I enjoy developing web site so I want to have a solid knowledge to feel more comfortable doing this.
             I like singing and going for long walks.
        </div>
    </Paper>
        
    )
}

export default AboutMe