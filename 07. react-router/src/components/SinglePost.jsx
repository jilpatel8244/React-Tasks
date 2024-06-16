import { Link, useNavigate, useParams } from "react-router-dom";

function SinglePost () {
    let { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <div>
                    <Link to='../'>Back using link</Link>
                </div>
                <button onClick={() => {
                    navigate(-1)
                }}>Back using useNavigate()</button>
            </div>
            <div className="py-20">
                Post id is {id}
            </div>
        </div>
    );
}

export default SinglePost;