import React from 'react';
import "./Header.css"
import { useTelegram } from '../../Hooks/useTelegram';
import Button from "../Button/Button.jsx"

export default function Header() {

  const {user, handleOnClose} = useTelegram() 

  return (
    <div className={'header'}>
      <Button onClick={handleOnClose}>Close</Button>
      <span className={'username'}>
        {user}
      </span>
    </div>
  );
}
