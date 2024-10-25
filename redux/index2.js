// import { createStore } from 'redux'; // ES 모듈
const { createStore } = require('redux');   // CommonJS 모듈

// 리듀서의 정의
// 액션이 발생했을 때 새로운 상태로 기존 상태를 업데이트 해주는 역할
const reducer = (prevState, action) => {
    switch(action.type) {
        case 'LOG_IN' :
            return {
                ...prevState,
                isLoading: false,
                loginUser: action.data,
            };
        case 'LOG_OUT' :
            return {
                ...prevState,
                loginUser: null,
            };
        case 'LOG_IN_REQUEST' :
            return {
                ...prevState,
                isLoading: true,
            }
        case 'ADD_BOARD' :
            return {
                ...prevState,
                boardList: [...prevState.boardList, action.data],
            };
        case 'DELETE_BOARD' :
            return {
                ...prevState,
                boardList: prevState.boardList.filter((board) => board.id != action.data),
            };
        
        default:
            return prevState;
    }
}

// 전역 state
const initialState = {
    loginUser: null,
    isLoading: false,
    boardList: [],
}

// 스토어 생성
// 전역 state가 저장된 저장소
const store = createStore(reducer, initialState);

// 액션 생성 함수
const logIn = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

const logOut = (data) => {
    return {
        type: 'LOG_OUT',
    }
}

const addBoard = (data) => {
    return {
        type: 'ADD_BOARD',
        data,
    }
}

const deleteBoard = (data) => {
    return {
        type: 'DELETE_BOARD',
        data,
    }
}

// 액션 디스패치
store.dispatch({
    type: 'LOG_IN_REQUEST',
})

console.log("로그인 요청 중...");
console.log(store.getState);

store.dispatch(logIn({
    userId: 'admin',
    id: 1,
    name: '관리자',
}))

console.log("로그인 완료...");
console.log(store.getState);

store.dispatch(addBoard({
    id: 1,
    title: '졸려',
    content: '당장 나를 집에 보내',
}))

console.log("게시글 작성 완료...");
console.log(store.getState);

store.dispatch(addBoard({
    id: 2,
    title: '집에 보내줘',
    content: '아바드 아파트 아빧트',
}))

console.log("게시글 작성 완료...");
console.log(store.getState);

store.dispatch(deleteBoard(1));

console.log("게시글 삭제...");
console.log(store.getState());

store.dispatch(logOut());

console.log("로그아웃...");
console.log(store.getState);