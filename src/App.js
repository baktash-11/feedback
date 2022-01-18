
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

    // using condition 
    let loading= false;
    if(loading)return <h1>Loading...</h1>

    let commentBlock = (
        <div className="comment">
            
        <ul>
            {comments.map((comment, index)=>(
                <li key={index}>{comment.text}</li>
            ))}
        </ul>
    </div>
    )
    let showComments = false;
    let commentMessage = "You have four Comments: "
    return(
        <div className="container">
            <h1>{title.toUpperCase()}!</h1>
            <p>{body}</p>
            <h3>Number of Comments: {comments.length}</h3>
            {showComments ? commentBlock : commentMessage+ comments.length}

           
        </div>
    )
}

export default App;