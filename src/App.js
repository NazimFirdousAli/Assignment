import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import Home from "./pages/Home/Home";

import { store } from "./redux/store/index";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper className="App" data-testid="app">
        <Header />
        <Home />
        <GlobalStyles />
      </Wrapper>
    </Provider>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
