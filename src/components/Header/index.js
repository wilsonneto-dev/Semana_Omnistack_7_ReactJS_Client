import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import imgLogo from '../../assets/logo.png';
import imgCamera from '../../assets/camera.png';

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div>
          <Link to="/">
            <img src={imgLogo} class="logo" alt="InstaClone" />
          </Link>
          <Link to="/new">
            <img src={imgCamera} class="camera" alt="Enviar Publicação" />
          </Link>
        </div>
      </header>
    </>
  );
}
