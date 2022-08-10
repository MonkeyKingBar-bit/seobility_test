import { FC, useState } from 'react';
import axios from 'axios';
import { FormProps } from '../common/interf_type';
import styles from '../App.module.scss';

const FormPresent: FC<FormProps> = (props: FormProps) => {
  const {
    isNameDirty, isEmailDirty, emailError, nameError, nameHandler, fullName, blurHandler,
    emailHandler, email, isPhoneDirty, phoneError, phoneHandler, phone, isBirthDirty, birthError,
    birth, isMessageDirty, messageError, message, isFormValid, birthHandler, messageHandler,
    setIsFormValid, setFullName, setEmail, setPhone, setBirth, setMessage,
  } = props;

  const [fetchMessage, setFetchMessage] = useState<string>('');

  const handleSubmit = (e: any) => {
    setIsFormValid(false);
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', {
      fullName, email, phone, birth, message,
    })
      .then((res) => {
        setFullName('');
        setEmail('');
        setPhone('');
        setBirth('');
        setMessage('');
        setIsFormValid(true);
        console.log(res);
        setFetchMessage(res.statusText);
      })
      .catch((error) => {
        setIsFormValid(true);
        console.log(error.message);

        setFetchMessage(error.message);
      });
    console.log(fullName, email, phone, birth, message);
  };

  return (
    <div>
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit} className={styles.contactUs}>
        <label htmlFor="customerName">
          NAME
          <em>&#x2a;</em>
        </label>
        <input
          id="customerName"
          onChange={(e) => nameHandler(e)}
          value={fullName}
          onBlur={(e) => blurHandler(e)}
          name="fullName"
          type="text"
          placeholder="first and last name"
          required
        />
        {(isNameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}

        <label htmlFor="customerEmail">
          EMAIL
          <em>&#x2a;</em>
        </label>
        <input
          id="customerEmail"
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="email"
          placeholder="E-mail"
          required
        />
        {(isEmailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}

        <label htmlFor="customerPhone">
          PHONE
          <em>&#x2a;</em>
        </label>
        <input
          id="customerPhone"
          onChange={(e) => phoneHandler(e)}
          value={phone}
          onBlur={(e) => blurHandler(e)}
          name="phone"
          type="text"
          placeholder="+7(___)___-__-__"
        />
        {(isPhoneDirty && phoneError) && <div style={{ color: 'red' }}>{phoneError}</div>}

        <label htmlFor="customerBirth">
          Birthday
          <em>&#x2a;</em>
        </label>
        <input
          id="customerBirth"
          onChange={(e) => birthHandler(e)}
          value={birth}
          onBlur={(e) => blurHandler(e)}
          name="birth"
          type="date"
          placeholder="Birthday"
        />
        {(isBirthDirty && birthError) && <div style={{ color: 'red' }}>{birthError}</div>}

        <label htmlFor="customerMessage">
          YOUR MESSAGE
          <em>&#x2a;</em>
        </label>
        <textarea
          id="customerMessage"
          onChange={(e) => messageHandler(e)}
          value={message}
          onBlur={(e) => blurHandler(e)}
          name="message"
          placeholder="Write here"
        />
        {(isMessageDirty && messageError) && <div style={{ color: 'red' }}>{messageError}</div>}

        <label htmlFor="customerLAbel" className={styles.fetchMessage}>{fetchMessage}</label>

        <button disabled={!isFormValid} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPresent;
