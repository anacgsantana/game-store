import Slider from '../../components/Slider/Slider';
import Search from '../../components/Search/Search';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import './Home.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {

  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get('/game/findMany')
    .then(response => {
      if(mounted) {
        setGames(response.data)
      }
    })
  }

  useEffect(() => {
    setMounted(true)
    getData()
  }, [mounted])

  return (
    <div className='home'>
      <Slider 
        id='cd310662-5d46-4852-aace-2194ed21ada5'
        classificationNumber='L'
        classificationText='Livre para qualquer idade'
      />
      <Search />
      <Container title='Destaques'>
      {
        games.map(game => (
          <Card 
            id={game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
            key={game.id}
          />
        ))
      }
      </Container>
    </div>
  )
}