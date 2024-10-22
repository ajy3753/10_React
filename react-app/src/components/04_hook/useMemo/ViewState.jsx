import React, {useMemo} from 'react';

const getNumber = (num) => {
    console.log("숫자가 변경되었습니다.");
    return num;
}

const getText = (text) => {
    console.log("문자가 변경되었습니다.");
    return text;
}

const ViewState = ({num, text}) => {
    // const viewNum = getNumber(num);
    const viewNum = useMemo(() => getNumber(num), [num]);

    // const viewText = getText(text);
    const viewText = useMemo(() => getText(text), [text]);
    
    return (
        <div>
            {viewNum} <br />
            {viewText}
        </div>
    )
}

export default ViewState