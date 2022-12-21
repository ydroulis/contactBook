import { useMemo, useState } from 'react';
import CustomModal from '../CustomModal';
import * as S from './style';
import { useAppDispatch } from '../../hooks';
import { setContactId } from '../../features/Contacts';


interface IPerson {
    name: string,
    id: string
}

function Person({ name, id }: IPerson) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const randomHex = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    const memoizedPersonIcon = useMemo(() => <S.PersonIcon background={randomHex} >{name.substring(0, 1)}</S.PersonIcon>, [])

    const dispatch = useAppDispatch();

    const handleOpenModal = () => {
        dispatch(setContactId(id))
        openModal();
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        dispatch(setContactId(0))
        setModalIsOpen(false)
    }

    return (
        <>
            <S.PersonContainer onClick={handleOpenModal}>
                {memoizedPersonIcon}
                {name}
            </S.PersonContainer>
            <CustomModal isOpen={modalIsOpen}
                setClose={closeModal}
                overlayClassName={'overlay-modal'}
                type='contactDetails'
            />
        </>
    );
}

export default Person;