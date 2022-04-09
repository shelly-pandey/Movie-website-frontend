import { rootState } from '../redux/rootReducer';
import { addToCart, movieByGenre } from '../redux/actions';


import Header from './navigation';

import { useDispatch } from 'react-redux';

import { Button, Card, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Select from '@mui/material/Select';
import { InputLabel, MenuItem , FormControl} from '@mui/material';
import '../App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InfoIcon from '@mui/icons-material/Info';
import { ALL } from 'dns';
import FilterAltIcon from '@mui/icons-material/FilterAlt';



export default function MovieList() {
  

  const dispatch = useDispatch();
  const movies = useSelector((state: rootState) => state.moviesReducer.filteredMovies);
  let filteredMovies = movies;
  let { darktheme } = useSelector((state: rootState) => state.moviesReducer);

  
  const cartMovies = useSelector((state: rootState) => state.cartreducer.cartMovies);
  let total = cartMovies && cartMovies.length;
  const handleCategorySelect = (event: any) => {
    dispatch(movieByGenre(event.target.value));
  };
  return (
    <div >
      <Header />
      <div>
      <Navbar className='Nav'>
  <Container className="genres" >
  <FormControl sx={{ m: 1, minWidth: 120 }} error >
      <InputLabel id="demo-simple-select-error-label" ><FilterAltIcon/>

        <Select  labelId="demo-simple-select-error-label" name="genres" onChange={handleCategorySelect} defaultValue="All">
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Crime">Crime</MenuItem>
          <MenuItem value="Drama">Drama</MenuItem>
          <MenuItem value="Adventure">Adventure</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Mystery">Mystery</MenuItem>
          <MenuItem value="Comedy">Comedy</MenuItem>
          <MenuItem value="Western">Western</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Biography">Biography</MenuItem>
        </Select>
      </InputLabel>
      </FormControl>
      

      <Link to={'/cart'}>My Favourites<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
         </svg>{total}</Link> 

         </Container>
         </Navbar>
         </div>

      <div className='my-form'>
        {filteredMovies && filteredMovies.map((movie) => (
          <>

          <Card className="Card"key={movie.id} style={{ width: '18rem' }} bg={darktheme ? 'dark' : 'light'} text={darktheme ? 'white' : 'dark'}>
            <Card.Img src={movie.image} height='200px' width='200px' />
            <Card.Body>
            
      { <Card.Title><Link to={`/detail/${movie.id}`}><InfoIcon />
<br></br>{movie.title}</Link></Card.Title>}
              <Card.Subtitle className="title">{movie.genres }</Card.Subtitle>
              <br></br>
              <Card.Subtitle className="title">{movie.director}</Card.Subtitle>
              <br></br>
              <Card.Subtitle className="title">{movie.year}</Card.Subtitle>
              <br></br>
              <Card.Text >
              <Button onClick={() => { dispatch(addToCart(movie)); }} variant="" ><svg onClick={() => { dispatch(addToCart(movie)); }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
         </svg></Button>
              </Card.Text>
              
            </Card.Body>
          </Card>
          
          </>
          
        ))}
      </div>
    </div>
  )
}