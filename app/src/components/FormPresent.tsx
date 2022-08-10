import { FC } from 'react';
import { FormProps } from '../common/interf_type';

const FormPresent: FC<FormProps> = (props: FormProps) => {
  const {
    isNameDirty, isEmailDirty, emailError, nameError, nameHandler, fullName, blurHandler,
    emailHandler, email, isPhoneDirty, phoneError, phoneHandler, phone, isBirthDirty, birthError,
    birth, isMessageDirty, messageError, message, isFormValid,
  } = props;
  return (
    <div>
      <h1>Feedback</h1>
      <form>
        {(isNameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
        <input
          onChange={(e) => nameHandler(e)}
          value={fullName}
          onBlur={(e) => blurHandler(e)}
          name="fullName"
          type="text"
          placeholder="Имя Фамилия"
        />

        {(isEmailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="email"
          placeholder="E-mail"
        />

        {(isPhoneDirty && phoneError) && <div style={{ color: 'red' }}>{phoneError}</div>}
        <input
          onChange={(e) => phoneHandler(e)}
          value={phone}
          onBlur={(e) => blurHandler(e)}
          name="phone"
          type="text"
          placeholder="+7(___)___-__-__"
        />

        {(isBirthDirty && birthError) && <div style={{ color: 'red' }}>{birthError}</div>}
        <input value={birth} onBlur={(e) => blurHandler(e)} name="birth" type="date" placeholder="Дата рождения" />

        {(isMessageDirty && messageError) && <div style={{ color: 'red' }}>{messageError}</div>}
        <input value={message} onBlur={(e) => blurHandler(e)} name="message" type="text" placeholder="Сообщение" />

        <button disabled={!isFormValid} type="submit">Send</button>
      </form>
    </div>
  );
};

export default FormPresent;
