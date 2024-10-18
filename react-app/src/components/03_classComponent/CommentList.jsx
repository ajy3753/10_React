import React, {Component} from 'react';
import Comment from './Comment';

const serverComments = [
  {
    id: 1,
    message: "홍길동입니다. 도적입니다."
  },
  {
    id: 2,
    message: "콩쥐입니다. 두꺼비가 가출했습니다. 두꺼비야 돌아와."
  },
  {
    id: 3,
    message: "둘리입니다. 엄마 찾아 삼만리."
  }
]

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentList: [],
    }
  }

  componentDidMout() {
    // const commentList = this.state.commentList;
    // const data1 = this.state.data1;
    // const data2 = this.state.data2;
    // const {commnetList, data1, data2} = this.state; // 비구조할당

    const {commentList} = this.state;

    // setInterval : 일정 시간마다 특정 함수를 반복해서 실행
    setInterval(() => {
      if(commentList.length < serverComments.length) { // 더미데이터의 길이만큼 state 내의 데이터가 추가되면 그만하기위한 조건
        const index = commentList.length; // 0 1 2
        commentList.push(serverComments[index]);
        this.setState({
          commentList : commentList
        })
      }
      else {
        this.setState({
          commentList : []
        })
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        {
          this.state.commentList.map(c => {
            return (
              <Comment key={c.id} id={c.id} message={c.message} />
            )
          })
        }
      </div>
    )
  }
}

export default CommentList