import { deleteAllFromCart, deleteFromCart, updatePrice } from '../redux/actions';
import { rootState } from '../redux/rootReducer';
import Header from './navigation';

import { InputLabel } from '@mui/material';
import { Button, Card, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Cart() {
  
 
  type MovieParams = {
    id: string;
  };

  const {id} = useParams<MovieParams>();   //  Type 'Readonly<Params<string>>' is not assignable to type 'string'
  
  
  //let id:string = useParams() as unknown as string;
  const dispatch = useDispatch();
  const cartMovies = useSelector((state: rootState) => state.cartreducer.cartMovies);

      
  // @ts-ignore
  // eslint-disable-next-line eqeqeq
  //let movie = filteredMovies.filter((movie) => movie.id == (id))[0];
  
  return (
    <div>
      <Header />
      
      
      <Link to={'/movielist'} className="btn btn-danger"><ArrowCircleLeftIcon/>Back to Movies!</Link>
      <Button onClick={() => dispatch(deleteAllFromCart())} variant="danger">Delete All<DeleteIcon /></Button>
      <div className='my-form'>
        

      {cartMovies && cartMovies.map((movie) => (
      
        <Card key={movie.id} style={{ width: '18rem' }}>
          <Card.Img src={movie.image} height='200px' width='200px' />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="title">{movie.genres}</Card.Subtitle>
            <br></br>
            <Card.Subtitle className="title">Rating: {movie.stars.rate} out of {movie.stars.count} reviews</Card.Subtitle>
            <br></br>
            <Card.Subtitle className="title"> {movie.director}</Card.Subtitle>
            <Card.Text>
              {movie.description}
            </Card.Text>
            <td><Button onClick={() => dispatch(deleteFromCart(movie))} value={movie.title} variant="danger">
        <DeleteIcon /></Button></td>
          </Card.Body>
        </Card>
      ))
}
      </div>
    
    </div>
  )
}


