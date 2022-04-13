import Post from "./Post"


const Posts = (props)=>{

    const posts=props.posts.map(post=>{
        return <Post 
        id = {post.id}
        title = {post.title}
        author = {post.author}
        />
    });
    return (<div className="posts">{posts}</div>);


}
export default Posts;