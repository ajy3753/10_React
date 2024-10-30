import React, { useEffect, useState, useRef, useReducer } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import { Todo } from './types';
import { TodoDispatchContext, TodoStateContext } from './TodoState';
import SearchBar from './components/SearchBar';
/*
  [React에 TS 설치하기]
  1. Create React App과 함께 설치하는 법
  : $npx create-react-app my-app --template typescript
  2. 기존의 CRA 환경에 TS 추가하기
  : $npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  -> 이후 기존의 파일 확장자를 ts 파일로 변경하고 시작 (ex. index.js => index.tsx)

  * 초기 설정을 init한 상태로 설치
  1. CRA를 하기 전에 $npm init 입력
  2. React 관련 모듈 설치
  : $npm install react react-dom react-refresh @types/react @types/react-dom
  3. TS 설치
  : $npm install typescript
  4. tsconifg
  : $npx tsc --init
*/

type Action = { // action의 type은 없으므로 지정
  type: "CREATE";
  data: {
    id: number,
    content: string,
  }
} | {
  type: "DELETE";
  id: number;
}

function reducer(prevstate : Todo[], action : Action) {
  switch(action.type) {
    case "CREATE" : {
      return [...prevstate, action.data]
    }
    case "DELETE" : {
      return prevstate.filter(todo => todo.id !== action.id)
    }
  }
}

function App() {
  // useState, useReducer는 둘 다 상태 관리를 위한 hook이다.
  // useState -> component에 종속되어 간단한 상태를 관리할 때 사용
  // useReducer : 전역에서 사용하는 경우처럼 복잡하거나 여러 개의 상태를 관리해야할 때 사용

  // const [todos, setTodos] = useState<Todo[]>([]); -> 전역 상태로 변경해서 사용
  const [todos, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0);

  const onClickAdd = (text : string) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: idRef.current++,  // type을 지정할 수 없으므로, interface로 지정 -> 상속
    //     content: text,
    //   }
    // ])

    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      }
    })
  }

  const onClickRemove = (id : number) : void => {
    // setTodos(todos.filter(todo => todo.id !== id));
    dispatch({
      type: "DELETE",
      id,
    })
  }

  useEffect(() => {
    console.log(todos);
  }, [todos])

  return (
    <div className="App">
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{
          onClickAdd,
          onClickRemove,
        }}>
          <SearchBar />
          <div>
            {todos.map(todo => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
