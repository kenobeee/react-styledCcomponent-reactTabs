import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    font-size: 14px;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    
    width: fit-content;
    
    transition: .3s;
    
    &:hover { color: deeppink; }
  }
`

export const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`
export const MainWindow = styled.div`
  width: 80%;
  min-height: 50%;

  background-color: #fff;
  border: 1px solid #aaaaaa;

  border-radius: 15px;

  padding: 40px 0;
`
export const MainWrapper = styled.div`
  padding-top: 20px;
`
export const PersonList = styled.ul`
  ${(props => {
  switch (props.view) {
    case "list":
      return `
          flex-direction: column;
          align-items: center;
        `;
    case "tiles":
      return `
          justify-content: space-between;
          flex-wrap: wrap;
          row-gap: 10px;
        `;
  }
})}

  display: flex;
  width: 90%;
  margin: 0 auto;
`
export const PersonItem = styled.li`
  ${(props => {
  switch (props.view) {
    case "list":
      return `
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-top: 10px;
          &:first-child { margin-top: 0 }
        `;
    case "tiles":
      return `
          flex-direction: column;
          width: 32%;
          min-height: 200px;
          & > *:nth-child(2) { margin-top: auto; }
          & > *:nth-child(3) { margin-top: 5px; }
        `;
  }
})}
  
  display: flex;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #aaaaaa;
  border-radius: 10px;
`