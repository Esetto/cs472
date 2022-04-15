import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import './PostDetail.css'

const PostDetails = (props) => {

    console.log("POSTDETAILS UPDATE");
    const params = useParams();
    const [postDetail, setPostDetail] = useState({});

    useEffect(
        () => {
            if (params.id) {
                axios.get('http://localhost:8080/posts/' + params.id)
                    .then(response => {
                        setPostDetail(response.data)
                        console.log("RESPONSE:", response.data)
                    })
                    .catch(err => console.log(err.message))
            }
        },
        [params.id]
    )
    const deleteButtonClicked = () => {
        axios.delete('http://localhost:8080/posts/' + props.id)
            .then(response => {
                props.changeFetchFlag();
            })
            .catch(err => {
                console.error(err);
            })
    }

    let postDetailsDisplay = null;
    if (params.id) {
        postDetailsDisplay = (
            <div className="PostDetail">
                <div> Post Details</div>
                <h1> {postDetail.id}</h1>
                <div >
                    {postDetail.title}
                    {postDetail.author}

                </div>
                <button onClick={deleteButtonClicked}> Delete</button>
            </div>
        );
    }
    return postDetailsDisplay
}
export default PostDetails;