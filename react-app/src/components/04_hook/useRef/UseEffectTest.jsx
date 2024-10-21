
/*
   [useEffect]
   컴포넌트가 랜더링 될 때 특정 작업을 실행할 수 있도록 하는 react hook
   클래스형 컴포넌트의 생명주기 메서드의 역할을 대체한다.

   -> 컴포넌트가 마운트됐을 때(처음 나타났을 때), 언마운트 됐을 때(사라질 때), 업데이트 되었을 때(특정 state, props가 바뀌었을 때)

   [사용법]
   useEffect(effect, [])

   첫번째 인자(effect) : 함수 -> 특정 상황이 왔을 때 실행되는 함수
   두번째 인자 : 배열 -> 의존성 배열
*/

const UseEffectTest = () => {
   const [name, setName] = useState("홍길동");
   const [num, setNum] = useState(0);

   const handleKeyUpName = (ev) => {
      setName(ev.target.value);
   }

   const handleClickNum = () => {
      setNum(num + 1);
   }

   // 랜더링이 되었을 때, 그리고 state가 변경될 때마다 console.log가 실행되었다.
   // componentDidMount & componentDidUpdate의 역할을 대체할 수 있다.
   useEffect(() => {
      console.log("의존성 배열이 없는 useEffect 호출");
   })

   // 랜더링이 되었을 때 한 번만 실행이 된다. (최초 마운트)
   // componentDidMount의 역할을 대체하고 있다.
   useEffect(() => {
      console.log("빈 배열을 의존성 배열로 가진 useEffect 호출");
   })

   // 랜더링이 되었을 때 그리고 name state가 변경되었을 때 호출된다.
   // 의존성 배열 안에 있는 state가 변하면 해당 effect 함수를 호출해 준다.
   // componentDidMount & componentDidUpdate의 역할을 대체할 수 있다.
   useEffect(() => {
      console.log("${name} [name] 의존성 배열로 가진 useEffect 호출");
   }, [name])

   // 함수를 return하면 해당 함수는 컴포넌트가 제거되기 직전에 호출된다.
   // componentWillUnmount
   useEffect(() => {
      
      return () => {
         console.log("${name} 함수를 리턴하는 useEffect 호출");
      }
   }, [name])

   return (
      <div>
         <p>안녕하세요. {name}입니다.</p>
         <inmput type="text" onChange={handlekeyUpName} value={name} />
         <p>{num}번 클릭</p>
         <button onClick={handleClickNum}>+</button>
      </div>
   )
}

export default UseEffectTest