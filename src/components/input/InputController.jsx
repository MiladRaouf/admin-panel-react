import Input from "./Input";

const InputController = (props) => {
    switch (props.controll) {
        case 'input':
            return <Input {...props} />;
        default:
            return null;
    }
}

export default InputController;