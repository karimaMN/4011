import React, {useEffect, useState} from 'react'
import superagent from 'superagent'
const Reddit = () => {
    const [subreddit, setSubreddit] = useState('birdswitharms')

    const [posts, setPosts] = useState([])

    const getReddit = async () => {
        const response = await superagent.get(`https://api.reddit.com/r/${subreddit}/`)

         const resObject = JSON.parse(response.text)
          setPosts(resObject.data.children)
    }
    useEffect(() => {
        //setNumCalls(numCalls + 1)
        getReddit()
    }, [])

    return (
        <div>
            <input type='textfield' value ={subreddit} onChange={event => setSubreddit(event.target.value)}></input>
            <input type='button' onClick={getReddit}></input>
           <table border = '1' >
               <tbody>
                   {posts.map(post => {
                       return (
                           <tr>
                               <td> {post.data.author_fullname}</td>
                               <td> {post.data.title}</td>
                           </tr>
                       )
                   })}
               </tbody>
           </table>
        </div>
    )
}

export default Reddit