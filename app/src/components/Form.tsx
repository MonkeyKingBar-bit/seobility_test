import { FC, useEffect, useState } from 'react';
import FormPresent from './FormPresent';

export const Form: FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<string>('Name can\'t be empty');
  const [emailError, setEmailError] = useState<string>('Email can\'t be empty');
  const [phoneError, setPhoneError] = useState<string>('Phone can\'t be empty');
  const [birthError, setBirthError] = useState<string>('Дата не может быть пустой');
  const [messageError, setMessageError] = useState<string>('Сообщение не может быть пустым');

  const [isNameDirty, setIsNameDirty] = useState<boolean>(false);
  const [isEmailDirty, setIsEmailDirty] = useState<boolean>(false);
  const [isPhoneDirty, setIsPhoneDirty] = useState<boolean>(false);
  const [isBirthDirty, setIsBirthDirty] = useState<boolean>(false);
  const [isMessageDirty, setIsMessageDirty] = useState<boolean>(false);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (nameError || emailError || phoneError || birthError || messageError) {
      setIsFormValid(false);
    } else setIsFormValid(true);
  }, [nameError, emailError, phoneError, birthError, messageError]);

  const nameHandler = (e: any) => {
    setFullName(e.target.value);
    const re = /^[A-Za-z]* [A-Za-z]*$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Name is incorrect');
      if (e.target.value.length < 3 || e.target.value.length > 30) {
        setNameError('Name must be more 3 and less 30');
        if (!e.target.value) setNameError('Name can\'t be empty');
      }
    } else setNameError('');
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('E-mail is incorrect');
      if (!e.target.value) setEmailError('E-mail can\'t be empty');
    } else setEmailError('');
  };

  const phoneHandler = (e: any) => {
    setPhone(e.target.value);
    const re = /(?:\+?)[78]+[0-9() -]{16,17}/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setPhoneError('Phone must be in this format +7(xxx) xxx-xx-xx');
      if (!e.target.value) setPhoneError('Phone can\'t be empty');
    } else setPhoneError('');
  };

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'fullName':
        setIsNameDirty(true);
        break;
      case 'email':
        setIsEmailDirty(true);
        break;
      case 'phone':
        setIsPhoneDirty(true);
        break;
      case 'birth':
        setIsBirthDirty(true);
        break;
      case 'message':
        setIsMessageDirty(true);
        break;
    }
  };

  return (
    <FormPresent
      isNameDirty={isNameDirty}
      isEmailDirty={isEmailDirty}
      nameError={nameError}
      emailError={emailError}
      nameHandler={nameHandler}
      blurHandler={blurHandler}
      emailHandler={emailHandler}
      fullName={fullName}
      email={email}
      isPhoneDirty={isPhoneDirty}
      phoneError={phoneError}
      phoneHandler={phoneHandler}
      phone={phone}
      isBirthDirty={isBirthDirty}
      birthError={birthError}
      birth={birth}
      isMessageDirty={isMessageDirty}
      messageError={messageError}
      message={message}
      isFormValid={isFormValid}
    />
  );
};
