import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import InputController from "../../../components/input/InputController";
import { LOGIN_PATH } from "../../../api/authApi";
import { login } from "../../../services/login";

const initialValues = {
    phone: '',
    password: '',
    remember: ''
}

const submitHandle = (values, navigate) => {
    console.log(values);

    if(login(LOGIN_PATH, values)) navigate('/');
}

const Register = () => {
    const navigate = useNavigate();

    return (
        <section id="register-form">
            <Formik
                initialValues={initialValues}
                validationSchema={''}
                onSubmit={(values)=>{submitHandle(values, navigate)}}
            >
                <Form>
                    <InputController
                        controll={'input'}
                        type={'text'}
                        name={'phone'}
                        id={'phone'}
                        placeholder={'09110000000'}
                        label={'موبایل'}
                    />
                    <InputController
                        controll={'input'}
                        type={'password'}
                        name={'password'}
                        id={'password'}
                        placeholder={'123456'}
                        label={'رمز عبور'}
                    />
                    <InputController
                        controll={'input'}
                        type={'password'}
                        name={'remember'}
                        id={'remember'}
                        placeholder={'0 | 1'}
                        label={'remember 0 | 1'}
                    />

                    <button type="submit">ورود</button>
                </Form>
            </Formik>
        </section>
    );
};

export default Register;