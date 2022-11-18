import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItems from '../CommentItem'

import './index.css'

const you = [
  {
    id: uuidv4(),
    name: 'suryateja',
    comments: 'full stack developer',
  },
]

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {name: '', comment: '', commentslist: you, count: 0}

  addingcomment = e => {
    e.preventDefault()
    const {name, comment, commentslist} = this.state
    console.log('surya')
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }

    this.setState(prevState => ({
      commentslist: [...prevState.commentslist, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  nameValue = e => {
    this.setState({name: e.target.value})
  }

  commentsValue = e => {
    this.setState({comment: e.target.value})
  }

  render() {
    const {name, comment, commentslist, count} = this.state
    console.log(commentslist)
    return (
      <div className="bg-container">
        <div className="unorder">
          <form className="form" onSubmit={this.addingcomment}>
            <h1 className="main-heading">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="text"
              onChange={this.nameValue}
              value={name}
            />
            <textarea
              cols="40"
              rows="18"
              placeholder="Your Comment"
              className="area"
              onChange={this.commentsValue}
              value={comment}
            />
            <div>
              <button type="submit" className="button">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <p className="ccount">
          <span className="button">{count}</span> Comments
        </p>
        <ul>
          {commentslist.map(each => (
            <CommentItems items={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
