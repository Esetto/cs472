import {Link} from 'react-router-dom';


const Header = ()=>{

    return(
        <header className='header'>
            <nav>
                <ul>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/create-post">New post</Link></li>
                    </ul>
            </nav>
        </header>
    )
}
export default Header;