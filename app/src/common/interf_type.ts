/* eslint-disable */
export interface FormProps {
    isNameDirty: boolean;
    isEmailDirty: boolean;
    isPhoneDirty: boolean;
    isBirthDirty: boolean;
    isMessageDirty: boolean;
    isFormValid: boolean;
    nameError: string;
    fullName: string;
    emailError: string;
    email: string;
    phoneError: string;
    phone: string;
    birthError: string;
    birth: string;
    messageError: string;
    message: string;
    nameHandler: (e: any) => void;
    emailHandler: (e: any) => void;
    phoneHandler: (e: any) => void;
    birthHandler: (e: any) => void;
    messageHandler: (e: any) => void;
    blurHandler: (e: any) => void;
    setIsFormValid: (e: boolean) => void;
    setFullName: (e: string) => void;
    setEmail: (e: string) => void;
    setPhone: (e: string) => void;
    setBirth: (e: string) => void;
    setMessage: (e: string) => void;
    fetchMessage: string;
    setFetchMessage: (fetchMessage: string) => void;
}
/* eslint-enable */
