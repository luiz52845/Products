import React from 'react';
import { IoMdHome, IoMdSearch, IoMdQrScanner, IoMdList } from 'react-icons/io';
import { Link } from 'react-router-dom';
import pesquisar from '../../Pages/pesquisar/';

import "./styles.css"

const Menu = () =>


  <header id="menu" className="menu">

    <button className="menu">
      <Link to="/" className="menu">
        Produtos <IoMdHome />
      </Link>
    </button>

    <button className="menu">
      <Link to="/pesquisar" className="menu">
        Pesquisar<IoMdSearch />
      </Link>
    </button>

    <button className="menu">
      <Link to="/historico" className="menu">
        Historico <IoMdList />
      </Link>
    </button>

    <button className="menu">
      <Link to="/comprar" className="menu">
        Comprar <IoMdQrScanner />
      </Link>
    </button>

  </header >


export default Menu;