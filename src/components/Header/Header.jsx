import React from 'react';
import Button from '../Button/Button';

export default function Header() {

  const tg = window.Telegram.WebApp

  const handleOnClose = () => {
    tg.close()
  }

  return (
    <div className='header'>
      <Button onClick={handleOnClose}>Close</Button>
      <span className='username'>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
}