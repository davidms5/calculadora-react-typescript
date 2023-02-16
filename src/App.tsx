import { useState } from 'react';
import GlobalStyle1 from './styles/tema1'
import GlobalStyle2 from './styles/tema2'
import GlobalStyle3 from './styles/tema3'

import {Container, Header, Wrapper, Switch, SwitchContainer, Teclado} from './App.style'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    {<GlobalStyle1/>}
    <Container>
      <Header>
        <h1>hola mundo</h1>
        <Wrapper>
        tema
        <Switch>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>

          </div>

        

        <SwitchContainer>
          <Teclado/>
        </SwitchContainer>
        </Switch>

      </Wrapper>
      </Header>
    </Container>
    </>
  )
}

export default App
