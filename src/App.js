
function App(){
    // using variables dynamically 
    let title = "My App";
    let body ="This is my blog Post!"

    // creating a list dynamically
    let comments = [
        {id: 1, text: "Comment one"},
        {id: 2, text: "Comment two"},
        {id: 3, text: "Comment three"},
        {id: 4, text: "Comment four"}
    ]
    return(
        <div className="container">
            <h1>{title}!</h1>
            <p>{body}</p>
            <h3>Number of Comments: {comments.length}</h3>
            <div className="comment">
                <ul>
                    {comments.map((comment, index)=>(
                        <li key={index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;