import { FC } from 'react';
import axios from 'axios';
import { FormProps } from '../common/interf_type';
import styles from '../App.module.scss';

const FormPresent: FC<FormProps> = (props: FormProps) => {
  const {
    isNameDirty, isEmailDirty, emailError, nameError, nameHandler, fullName, blurHandler,
    emailHandler, email, isPhoneDirty, phoneError, phoneHandler, phone, isBirthDirty, birthError,
    birth, isMessageDirty, messageError, message, isFormValid, birthHandler, messageHandler,
    setIsFormValid, setFullName, setEmail, setPhone, setBirth, setMessage, setFetchMessage,
    fetchMessage,
  } = props;

  const handleSubmit = (e: any) => {
    setIsFormValid(false);
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      fullName, email, phone, birth, message,
    })
      .then(() => {
        setFetchMessage(String('Form submitted successfully!'));
        setFullName('');
        setEmail('');
        setPhone('');
        setBirth('');
        setMessage('');
        setIsFormValid(true);
      })
      .catch((error) => {
        setIsFormValid(true);
        setFetchMessage(error.message);
      });
  };

  return (
    <div>
      <h1 className={styles.title}>Feedback</h1>
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
          className={styles.fullName}
          required
        />
        {(isNameDirty && nameError) && <div className={styles.error}>{nameError}</div>}

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
        {(isEmailDirty && emailError) && <div className={styles.error}>{emailError}</div>}

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
        {(isPhoneDirty && phoneError) && <div className={styles.error}>{phoneError}</div>}

        <label htmlFor="customerBirth">
          BIRTHDAY
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
        {(isBirthDirty && birthError) && <div className={styles.error}>{birthError}</div>}

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
        {(isMessageDirty && messageError) && <div className={styles.error}>{messageError}</div>}

        <h3>{fetchMessage}</h3>
        <button disabled={!isFormValid} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPresent;
