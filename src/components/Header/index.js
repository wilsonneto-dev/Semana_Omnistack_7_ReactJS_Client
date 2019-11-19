import React from 'react';

import './style.scss';

import imgLogo from '../../assets/logo.png';
import imgCamera from '../../assets/camera.png';

export default function Header() {
  return (
    <>
      <header id="main-header">
        <div>
          <img src={imgLogo} class="logo" alt="InstaClone" />
          <img src={imgCamera} class="camera" alt="Enviar Publicação" />
        </div>
      </header>
    </>
  );
}
