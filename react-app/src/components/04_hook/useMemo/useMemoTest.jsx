import React, { useState } from 'react';
import ViewState from './ViewState';

/*
    [useMemo]
    - useMemo는 Memoization 기법을 사용한 react hook이다.
    - 한 번 연산해 본 결과를 기억해두고, 컴포넌트가 리랜더링 될 때 의존성 배열에 있는 값이 변경되지 않으면 이전의 계산된 값을 반환한다.
    - 주로 복잡한 연산에 사용한다.

    [사용법]
    useMemo(() => {}, [])

    - 첫 번째 인자는 메모이제이션 해줄 함수
    - 두 번째 인자는 의존성 배열
*/

const useMemoTest = () => {
    const [num, setNum] = useState(0);
    const [text, setText] = useState("");

    const increaseNum = () => {
        setNum(num + 1);
    }

    const decreaseNum = () => {
        setNum(num - 1);
    }

    const onChangeText = (ev) => {
        setText(ev.target.value);
    }

    return (
        <div>
            <div>
                <button onClick={increaseNum}>+</button>
                <button onClick={decreaseNum}>-</button>

                <input
                    type="text"
                    placeholder="글자를 입력하세요."
                    onChange={onChangeText}
                />
            </div>
            
            <ViewState
                num = {num}
            />
        </div>
    )
}

export default useMemoTest