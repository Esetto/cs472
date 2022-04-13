import { useState } from 'react';
import Posts from '../components/Posts';

import './Dashboard.css';

export default function Dashboard() {
    const [title, setTitle] = useState("");

    const [postsState, setPostsState] = useState(
        [
            { id: 111, title: "Happiness", author: "John" },
            { id: 112, title: "MIU", author: "Dean" },
            { id: 113, title: "Enjoy Life", author: "Jasmine" }
        ]
    );

    const onChange = (title) => {

        postsState[0].title = title;
        setPostsState([...postsState]);
    }


    return (
        <div>
            <Posts posts={postsState} />

            <div>
                <fieldset className="field">
                    <input type="text"
                        label={'title'}
                        name={'title'}
                        value={title}
                        onChange={(eve) => { setTitle(eve.target.value) }}>

                    </input>

                    <br /><br />

                    <button onClick={() => onChange(title)}> Change Name</button>
                </fieldset>
            </div>

        </div>
    )
}
