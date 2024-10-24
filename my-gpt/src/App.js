import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Title, DescriptText} from './components/CommonsStyles';
import SearchBar from './components/SearchBar';
import ChatDisplay from './components/ChatDisplay';
import {CallGpt, CallGptAxios} from './service/gptAPI';

function App() {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatDataList, setChatDataList] = useState(localStorage.getItem("chatList") ? JSON.parse(localStorage.getItem("chatList")) : []);

  const changeSearchText = (ev) => {
    setSearchText(ev.target.value);
  }

  const clickSearchIcon = async () => {
    if(searchText.trim() === "")
      return;

    const chatData = {
      date: new Date().getTime(),
      question: searchText
    }

    try{
      setIsLoading(true);
      setSearchText("");

      const message = await CallGptAxios({
        prompt: chatData.question
      })

      chatData.message = message;

      setChatDataList([
        ...chatDataList,
        chatData
      ])
    } catch(error){
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  // chatDataList의 값이 변경되면 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("chatList", JSON.stringify(chatDataList))
  }, [chatDataList])

  return (
    <AppContainer className="App">
      <Header>
        <Title>나만의 GPT</Title>
      </Header>

      <Contents>
        <ChatDisplay 
          chatDataList = {chatDataList}
          isLoading = {isLoading}
        />
      </Contents>

      <Footer>
        <SearchBar 
          searchText = {searchText}
          changeSearchText = {changeSearchText}
          clickSearchIcon = {clickSearchIcon}
        />

        <DescriptText>
          ChatGPT는 실수를 할 수 있습니다. 중요한 정보를 확인하세요.
        </DescriptText>
      </Footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100vh;  
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Header = styled.div`
  width: 100%;
  height: 56px;
  padding: 8px;
  background: white;
`

const Contents = styled.div`
  flex: 1;
  padding: 60px 0 0 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Footer = styled.div`
  height: 86px;
  display: flex;
  flex-direction: column;
`