import styled from 'styled-components/macro';

export const Container = styled.div``;

export const TwoColumnGrid = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: 50px auto auto;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const Side = styled.div`
  display: grid;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    align-content: baseline;
  }
`;

export const Main = styled.main``;

export const MainHeader = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  padding: 0 15px;
`;
export const TopHeader = styled.div`
  background-color: #bf75e9;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  font-weight: 800px;
  font-size: 22px;
`;
export const Menu = styled.ul`
  padding-right: 60px;
  font-size: 1rem;
  list-style-type: none;
`;
export const MenuItem = styled.li`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: white;
  }
`;
export const Title = styled.p`
  flex-grow: 1;
  text-align: center;
  margin-right: -140px;
  & > a {
    text-decoration: none;
    color: white;
  }
`;
export const AboutUsContainer = styled.div`
  text-align: center;
  padding: 20px 0px;
`;

export const AboutUsContent = styled.p`
  text-align: center;
  padding: 0px 350px;
  line-height: 2rem;
`;
