import { Navbar, Container, Nav } from 'react-bootstrap';
import { changeTheme, getFilteredMovies } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from "react";
import Search from './search';
import { rootState } from '../redux/rootReducer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './switcher.scss';
import HomeIcon from '@mui/icons-material/Home';
import SvgIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';


export default function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { keyword } = useSelector((state: rootState) => state.moviesReducer);
  let { darktheme } = useSelector((state: rootState) => state.moviesReducer);


  

  const handleChange = useCallback(
    (event) => {
      let newKeyword = event.target.value;
      dispatch(getFilteredMovies(newKeyword));
    },
    [dispatch]
  );


  return (

    <Navbar className="Nav" bg={darktheme ? 'dark' : 'light'} variant={darktheme ? "dark" : "light"} expand="lg" id="top-navbar">
      <Container fluid>

        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link href="" onClick={() => navigate("/")}><HomeIcon fontSize="large" sx={{ color: pink[500] }}/></Nav.Link>
            <Nav.Link href="#action2" onClick={() => dispatch(changeTheme(darktheme))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-nintendo-switch" viewBox="0 0 16 16">
              <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.136 4.136 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979Zm4.675.269a1.621 1.621 0 0 0-1.113-1.034 1.609 1.609 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.632 1.632 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053ZM3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256Z" />
              <path d="M3.425.053a4.136 4.136 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.845 2.845 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z" />
            </svg></Nav.Link>
          </Nav>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg><Search value={keyword} handleChange={handleChange} />
          <br></br>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}