import React from 'react';
import Comment from './Comment';

const comments = [
    {
        id: 1,
        name: "홍길동",
        comment: "안녕하세요 홍길동입니다. 아버지를 아버지라 부르지도 못하고.",
        path: "https://cdn.pixabay.com/photo/2021/10/18/08/39/pumpkin-6720424_1280.jpg",
    },
    {
        id: 2,
        name: "콩쥐",
        comment: "팥쥐야 가서 물 좀 떠오렴",
        path: "https://cdn.pixabay.com/photo/2016/10/27/05/31/halloween-1773447_1280.jpg",
    },
    {
        id: 3,
        name: "심청",
        comment: "집에 갈래",
        path: "https://cdn.pixabay.com/photo/2022/10/14/17/31/halloween-7521772_1280.jpg",
    },
]

/*
    js에서
    (배열, 리스트).map(반복 시 실행할 함수)

    map() => 배열의 요소를 전부 사용하여 동일한 길이의 새로운 배열을 리턴
*/

const CommentList = () => {
    <div>
        {
            comments.map(c => {
                return <Comment key={c.id}
                                name={c.name}
                                comment={c.comment}
                                path={c.path}
                        />
            })
        }
    </div>
}

export default CommentList