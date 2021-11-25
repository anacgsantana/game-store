import './Card.css';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Card(props) {

  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate('/game', { state: props.id })
  }

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }
    const id = props.id;

    axios.get(`/game/wish/${id}`, config)
  }

  return (
    <div className='card'>

      <div className='card-item' onClick={goToGamePage}>
        <div className='card-image'>
          <img src={props.image} alt={props.title}></img>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <span className='card-preco'>{'R$ ' + props.preco}</span>
      </div>

      <button className='wishlist' onClick={wishGame}>
        <FaRegHeart />
      </button>
    </div>
  )
}