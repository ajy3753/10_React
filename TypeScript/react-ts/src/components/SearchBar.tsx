import React, { useState } from 'react';
import { useTodoDispatch } from '../hooks/useTodoDispatch';

interface Props {}

const SearchBar = (props : Props) => {
    const dispatch = useTodoDispatch();
    const [text, setText] = useState("");

    const onChangeInput = (e : React.ChangeEvent<HTMLInputElement>) => { // e의 타입을 지정해줘야한다.
        setText(e.target.value);
    }

    const onClickButton = () => {
        dispatch.onClickAdd(text);
    }

    return (
    <div>
        <input
            type="text"
            value={text}
            onChange={onChangeInput}
        />
        <button onClick={onClickButton}>추가</button>
    </div>
    )
}

export default SearchBar