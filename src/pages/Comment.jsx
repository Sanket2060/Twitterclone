const Comment = () => {
  return (
    <>
      <div class="comment-box">
        <div class="user-info">
          <img src="profile-picture.png" alt="Profile Picture" />
          <div class="user-details">
            <h3>Username</h3>
            <span class="handle">@handle</span>
            <span class="timestamp">10m</span>
          </div>
        </div>
        <textarea placeholder="Comment"></textarea>
        <button>Post</button>
      </div>
    </>
  );
};
export default Comment;
