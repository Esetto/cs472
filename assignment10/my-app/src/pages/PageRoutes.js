import {Routes ,Route , Navigate } from 'react-router-dom'
import NewPost from '../components/newpost/NewPost';
import PostDetails from '../components/PostDetails/PostDetails';
import Posts from '../posts/Posts'

const PageRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="posts"/>}/>
            <Route path="posts" element={<Posts/>}>
                <Route path=":id" element={<PostDetails/>}/>    
            </Route>
            <Route path="create-post" element={<NewPost/>}/>
        </Routes>
    );
}
export default PageRoutes;