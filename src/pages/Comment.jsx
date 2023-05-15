const Comment = () => {
  return (
    <>
      <div className="comment-box">
        <div className="user-info">
          <img src="" alt="Profile Picture" />
          <div className="user-details">
            <h3>Username</h3>
            <span className="handle">@handle</span>
            <span className="timestamp">10m</span>
          </div>
        </div>
        <textarea placeholder="Comment" ></textarea>
        <button>Post</button>
      </div>
    </>
  );
};
export default Comment;
