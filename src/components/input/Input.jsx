import './style.css';
import { ErrorMessage, FastField } from "formik";

const Input = ({type, name, id, placeholder, label}) => {
    return (
        <div id="input-box">
            <label htmlFor={id}>{label}</label>
            <FastField type={type} id={id} name={name} placeholder={placeholder} />
            <ErrorMessage name={name} component={'small'} />
        </div>
    )
}

export default Input;