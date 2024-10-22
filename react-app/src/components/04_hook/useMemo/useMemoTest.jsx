import React, {useState} from 'react';
import ViewState from './ViewState';

/*
    [useMemo]
    useMemo는 Memori

    [사용법]
    useMemo(() => {}, [])

    첫 번째 인자는 메모라이제이션 해줄 함수
    두번 째 인자는 의존성 배열
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