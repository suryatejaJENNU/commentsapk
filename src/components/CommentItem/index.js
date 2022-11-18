const CommentItems = props => {
  const {items, key} = props
  const {name, comment} = items
  console.log(items)
  return (
    <li type="none" className="unorder">
      <div>
        <p>{name[0]}</p>
        <h1>{name}</h1>
        <p>{comment}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          alt="like"
        />
        <button type="button" className="button">
          Like
        </button>
        <p>less than a minute ago</p>{' '}
      </div>
      <div>
        <button type="button" className="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItems
