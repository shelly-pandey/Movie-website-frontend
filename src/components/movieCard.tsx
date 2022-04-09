import { rootState } from '../redux/rootReducer';
import { Button, Card } from 'react-bootstrap';

import { addToCart } from '../redux/actions';
import Header from './navigation';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function MovieCard() {

  type MovieParams = {
    id: string;
  };

  const {id} = useParams<MovieParams>();   //  Type 'Readonly<Params<string>>' is not assignable to type 'string'
  
  
  //let id:string = useParams() as unknown as string;
  const dispatch = useDispatch();
  const filteredMovies = useSelector((state: rootState) => state.moviesReducer.filteredMovies);
 
      // @ts-ignore
  // eslint-disable-next-line eqeqeq
  let movie = filteredMovies.filter((movie) => movie.id == (id))[0];
  
  return (
    <div>
      <Header />
      
      <Link to={'/movielist'} className="btn btn-danger"><ArrowCircleLeftIcon/>Back to Movies!</Link>
      <div className='my-form3'>
      
      
        <Card className="Card2"key={movie.id} style={{ width: '30rem' }}>
          <Card.Img src={movie.image} height='200px' width='200px' />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="title">{movie.genres}</Card.Subtitle>
            <br></br>
            <Card.Subtitle className="title">Rating: {movie.stars.rate} out of {movie.stars.count} reviews</Card.Subtitle>
            <br></br>
            <Card.Subtitle className="title"> {movie.director}</Card.Subtitle>
            <br></br>
            <Card.Subtitle >
              {movie.description}
            </Card.Subtitle>
            <Button onClick={() => { dispatch(addToCart(movie)); }} value={movie.title} variant="secondary" >Add to Favorites</Button>
          </Card.Body>
        </Card>
        <div className="Card4">
      
      
      <Popup trigger={<button className="Card4"> FunFacts!</button>} 
       position ="right center">
        <div className="Card3">{movie.funfacts} </div>
        
      </Popup>
      
    </div>
    <br></br>
<div className="Card4">
    </div>
    
      </div>
      
    </div>
  )
}


