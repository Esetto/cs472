import { useEffect, useState } from 'react';
import axios from 'axios';
import './Posts.css';
import {Link} from 'react-router-dom'

import Post from '../post/Post';
import PostDetails from '../components/PostDetails/PostDetails';

const Posts = (props) => {

    const [posts, setPosts] = useState([]);
    // [
    //     // { id: 111, title: 'Happiness', author: 'John' },
    //     // { id: 112, title: 'MIU', author: 'Dean' },
    //     // { id: 113, title: 'EnjoyLife', author: 'Jasmine' }
    // ]);

    const fetchPosts = () => {
        axios.get('http://localhost:8080/posts')
            .then(response => {
                
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    useEffect(() => {
        fetchPosts();
    },
        [props.fetchFlag]);


    const postsList = posts.map(post => 
        <Link to={`${post.id}`} key={post.id}>
         <Post
            id={post.id}
            title={post.title}
            author={post.author}
            
            // setSelected={() => { props.setSelected(post.id) }}

        />
        </Link>
    )
    return (<>
        {postsList}
        <PostDetails/>
    </>);
}

export default Posts;