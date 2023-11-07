import { useNavigate, Link  } from "react-router-dom";

export default function Employee({id, title, body, postToDelete}) {
    const navigate = useNavigate();
    const deletePost = () => {
        postToDelete(id)
    }
    return (<li className="list-group-item d-flex justify-content-between align-items-center">
        <button onClick={deletePost}>delete</button>
        <h2 onClick={() => {navigate(`/employees/${id}`)
        }}>{title}</h2>
        <h5>{body}</h5>
        <br/>
    </li>)
}