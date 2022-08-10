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
    blurHandler: (e: any) => void;
    emailHandler: (e: any) => void;
    phoneHandler: (e: any) => void;
}
