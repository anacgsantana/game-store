import './Profile.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile(props) {

  const [user, setUser] = useState({});
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLogged] = useState(true);

  useEffect(() => {
    setMounted(true)

    if(localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      axios.get('/auth/me', config)
      .then(response => {
        setNotLogged(false)
        setUser(response.data)
      })
    }

  }, [mounted])

  return (
    <div className='profile'>
      <div className='profile-img'>
        <img src='https://yt3.ggpht.com/ytc/AKedOLTNDWSxPjRimdb7dmPRXSDnciDL3J1Z2CqkqCSU=s900-c-k-c0x00ffffff-no-rj' alt='Mario' />
      </div>
      {
        !notLogged ? (
          <>
            <h2>{user.name}</h2>
            <span>Email: {user.email}</span>
            <span>Membro desde: {user.createdAt}</span>
          </>
        ) : (
          <h2>Sem dados do perfil, faça login</h2>
        )
      }
    </div>
  )
}