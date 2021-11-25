import "./Navbar.css";
import { FaHeart, FaCartArrowDown, FaGrinWink } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="items_logo" href="http://localhost:3000/">Game Store</a>

      <div className="navbar__links">
        <ul className="navbar__links__list">
          <li>
            <a className="items" href="#">
              <FaCartArrowDown />
              <span className="text">CheckOut</span>
            </a>
          </li>
          <li>
            <a className="items" href='/wishlist'>
              <FaHeart />
              <a className="text">Lista de Desejos</a>
            </a>
          </li>
          <li>
            <a className="items" href="#!">
              <FaGrinWink />
              <a className="text" href='/login'>
                Fazer Login/Criar conta
              </a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
