import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
        }).then( () => {
            setIsPending(false)
            history.push('/');
        })
    }

    return(
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required value={title}
                onChange={(input) => setTitle(input.target.value)}/>
                <label>Blog body:</label>
                <textarea required
                value={body} onChange={(bodyInput) => setBody(bodyInput.target.value)}></textarea>
                <label>Blog author:</label>
                <input type="text" 
                required value={author}
                onChange={(authorInput) => {setAuthor(authorInput.target.value)}}/>
                {!isPending && <button>Add blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default Create;
