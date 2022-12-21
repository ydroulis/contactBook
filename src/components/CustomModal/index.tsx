import * as S from './style';
import Modal from 'react-modal';
import { MdOutlineClose } from 'react-icons/md'
import ContactForm from '../ContactForm';
import ContactDetails from '../ContactDetails';

interface IModal {
    isOpen: boolean;
    setClose: () => void;
    overlayClassName: string;
    type: string;
}

Modal.setAppElement("#root");

function CustomModal({ isOpen, setClose, overlayClassName, type }: IModal) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={setClose}
            overlayClassName={overlayClassName}
        >
            <S.CloseButton onClick={setClose}><MdOutlineClose className='closeIcon' /></S.CloseButton>

            {type === "contactDetails" ? (
                <ContactDetails setClose={setClose} />
            ) : (
                <ContactForm setClose={setClose} type={type} />
            )}
        </Modal>
    );
}

export default CustomModal;