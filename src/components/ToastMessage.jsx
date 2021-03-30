import { toast } from 'react-toastify';

const ToastMessage = (type, message) => {
    toast.configure();
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'info':
            toast.info(message);
            break;
        case 'warn':
            toast.warn(message);
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            break;
    }
};

export default ToastMessage;
