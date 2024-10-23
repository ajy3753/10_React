import './App.css';

/*
  [Run 방법]
  1. 기존에 존재하던 App.jsx 파일 삭제
  2. App.js 파일을 App.jsx 파일로 확장자 변경
  3. 터미널을 열어서 cd react-app/src 로 이동 (src 폴더에서 터미널 열기를 해도 OK)
  4. npm run 입력 -> 실행 확인
*/

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Products from './components/05_styledComponents/Products';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

/*
  [react-router-dom]
  react로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리

  [BrowserRouter]
  history 객체를 생성하여 사용한다.
  라우팅을 진행할 컴포넌트 상위에 BrowserRouter 컴포넌트를 생성하고 감싸주어야한다.

  [Routes]
  모든 Route의 상위 경로에 존재해야하며, location 변경 시 하위에 있는 모든 Route 중에 현재 location에 맞는 Route를 찾아준다.

  [Route]
  현재 브라우저의 location(window.href.location 정보를 가져온다)
  => 상태에 따라서 매칭되는 element를 랜더링한다.
*/


// function App() {
//   const [isComponent, setIsComponent] = useState(true)
//   return (
//     <div className="App"></div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/p1">Page1</Link></li>
            <li><Link to="/p2">Page2</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/p1" element={<Page1 />} />
          <Route path="/p2" element={<Page2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;