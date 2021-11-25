import './Search.css';

import { FaSearchPlus } from 'react-icons/fa';

export default function Search() {
  return (
    <div className='search'>
      <span>Procurar:</span>
      <form className='search-input'>
        <FaSearchPlus />
        <input className='type' type='text' placeholder='Procurar jogos por título, personagens, editora, etc'></input>
        <input className='btn' type='submit' value='Encontre' />
      </form>
    </div>
  )
}