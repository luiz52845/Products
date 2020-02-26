import React from 'react';
import { IoMdHome, IoMdSearch, IoMdQrScanner, IoMdList } from 'react-icons/io';
import { Link } from 'react-router-dom';
import pesquisar from '../../Pages/pesquisar/';



import "./styles.css"

const Menu = () =>
  <header id="menu" className="menu">

    <button className="menu">
      Produtos <IoMdHome />
    </button>

    <button className="menu">
      Pesquisar<IoMdSearch />
    </button>


    <button className="menu">
      Historico <IoMdList />
    </button>


    <button className="menu">
      Comprar <IoMdQrScanner />
    </button>

  </header>


export default Menu;