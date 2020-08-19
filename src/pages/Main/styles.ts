import styled from 'styled-components';

interface LinkProps {
  clicked: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100vh;
`;
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #a14bbe;
  width: 100%;
  min-height: 24.41%;

  h1 {
    color: #fff;
    font-weight: bold;
    font-size: 72px;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17.5%;
  background: #ffa8a9;
`;
export const Principal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82.5%;
  background: #ccf5ac;
  h1 {
    font-weight: bold;
    font-size: 48px;
    color: #312e2e;
  }

  > div {
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 5%;
    background: #30a7d7;
    border-radius: 20px;
    width: 73%;
    height: 55%;
  }

  h1 {
    margin-top: 5%;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  div {
    width: 20%;
    display: flex;
    flex-direction: column;

    strong {
      font-weight: bold;
      font-size: 20px;
      color: #eafaf9;
    }

    span {
      font-weight: bold;
      font-size: 30px;
      color: #312e2e;
    }
  }
`;

export const Link = styled.span<LinkProps>`
  &:first-child {
    margin-top: 15%;
  }
  color: #696564;
  font-size: 18px;
  font-weight: bold;
  line-height: 40px;
  width: 100%;
  text-align: center;
  background-color: ${props => (props.clicked ? '#ccf5ac' : '#ffa8a9')};
  text-decoration: ${props => (props.clicked ? 'underline' : 'none')};
  cursor: pointer;

  &:hover {
    background: #ccf5ac;
    font-size: 20px;

    transition: font-size 0.2s;
  }
`;
