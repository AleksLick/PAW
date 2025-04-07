const { useEffect, useState } = React;
const { BrowserRouter, Routes, Route, Link, useParams } = ReactRouterDOM;

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Lista postów</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        fetch(`/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
                setComments(data.comments);
            });
    }, [id]);

    const handleAddComment = () => {
        if (newComment.trim() === "") return;

        fetch(`/posts/${id}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: newComment }),
        })
            .then((res) => res.json())
            .then((comment) => {
                setComments([...comments, comment]);
                setNewComment("");
            });
    };

    if (!post) return <p>Ładowanie...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>

            <h2>Komentarze</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.content}</li>
                ))}
            </ul>

            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Dodaj komentarz"
            />
            <button onClick={handleAddComment}>Dodaj</button>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<PostDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
