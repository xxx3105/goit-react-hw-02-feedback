import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul{
    margin:0;
    padding:0;
    list-style: none;
}

img{
    display:block;
    max-width:100%;
    object-fit:cover;

}

h2{
margin: 0;
padding: 0;

}

`;

export const Container = styled.div`
  width: 270px;
  height: auto;
  background-color: #c4c4c4;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
  border-radius: 15px;
`;

export const TitleOfBlocks = styled.h2`
  text-align: center;
  padding: 10px 5px 0 5px;
`;

export const Message = styled.p`
  text-align: center;
  padding: 10px 5px 0 5px;
`;
