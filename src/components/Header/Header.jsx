import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../Hooks/useTelegram';

export default function Header() {

  const {user, handleOnClose} = useTelegram() 

  return (
    <div className='header'>
      <Button onClick={handleOnClose}>Close</Button>
      <span className='username'>
        {user}
      </span>
    </div>
  );
}