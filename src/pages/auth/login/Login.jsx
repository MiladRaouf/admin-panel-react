import { Form, Formik } from "formik";
import InputController from "../../../components/input/InputController";

const Login = () => {
    return (
        <section id="login-form">
            <Formik>
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
                </Form>
            </Formik>
        </section>
    );
};

export default Login;