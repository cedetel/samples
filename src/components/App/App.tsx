// import { GithubCorner, GithubStarButton } from 'components/Github';
import Cart from 'components/Cart';
import * as S from './style';
import { Router, Outlet, ReactLocation, Link } from '@tanstack/react-location';
import Home from 'components/Home/Home';
import AboutUs from 'components/AboutUs/AboutUs';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about-us', element: <AboutUs /> },
];
const location = new ReactLocation();

function App() {
  return (
    <Router location={location} routes={routes}>
      <S.Container>
        {/* <GithubCorner /> */}
        <S.TopHeader>
          <img src="./iu-header-logo.webp" alt="logo" />
          <S.Title>
            <Link to="/">IURMXAN</Link>
          </S.Title>
          <S.Menu>
            <S.MenuItem>
              <Link to="about-us">About Us</Link>
            </S.MenuItem>
          </S.Menu>
        </S.TopHeader>
        <Cart />
        <Outlet />
      </S.Container>
    </Router>
  );
}

export default App;
