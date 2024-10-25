export const logIn = (data) => {
    // 서버에 전달해서 비동기로 처리
    return (dispatch, getState) => {
        try {
            dispatch(logInRequest(true));
            setTimeout(() => {
                const loginInfo = {
                    userId: 1,
                    nickname: "gildong",
                }

                dispatch(logInSuccess(loginInfo))
            }, 3000)
        } catch(e) {
            dispatch(logInFail(e))
        }
    }
}

const logInRequest = (data) => {
    return {
        type: "LOG_IN_REQUEST",
        data,
    }
}

const logInSuccess = (data) => {
    return {
        type: "LOG_IN_SUCCESS",
        data,
    }
}

const logInFail = (e) => {
    return {
        type: "LOG_IN_FAIL",
        error: e,
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT",
    }
}