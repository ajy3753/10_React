import { useContext } from "react";
import { TodoDispatchContext } from "../TodoState"

export const useTodoDispatch = () => {
    const dsispatch = useContext(TodoDispatchContext);
    if(!dsispatch) throw new Error("todoDispatchContext 정보를 가져올 수 없습니다.");
    return dsispatch;
}