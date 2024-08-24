import React, { useCallback, useEffect, useState } from 'react';
import "./Form.css"
import { useTelegram } from '../../Hooks/useTelegram';

export default function Form() {
  const [city, setCity] = useState('')
  const [name, setName] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSubject] = useState('physical')

  const onSendData = useCallback(() => {
    const data = {
      name,
      city,
      street,
      subject
    }
    tg.sendData(JSON.stringify(data))
  }, [])

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData)
    return() => {
      tg.offEvent("mainButtonClicked", onSendData)
    }
  }, [])

  const onChangeCity = (e) => {
    setCity(e.target.value)
  }

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value)
  }

  const {tg} = useTelegram()

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Confirm"
    })
  }, [])

  useEffect(() => { 
    if (!name || !city || !street) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }, [name, city, street])

  return (
    <div className='form'>

      <h3>Input your credentials</h3>
      <p>To use our online store we need your address</p>
      <input
        className='input'
        type="text"
        placeholder='Name'
        value={name}
        onChange={onChangeName}
      />

      <input
        className='input'
        type="text"
        placeholder='City'
        value={city}
        onChange={onChangeCity}
      />

      <input
        className='input'
        type="text"
        placeholder='Street'
        value={street}
        onChange={onChangeStreet}
      />

      <select value={subject} onChange={onChangeSubject} className='select'>
        <option value="physical">Individual</option>
        <option value="legal">Legal entity</option>
      </select>
    </div>
  );
}

