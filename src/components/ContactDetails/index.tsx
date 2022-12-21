import { useState } from 'react';
import * as S from './style';
import { MdOutlineEdit, MdOutlineMailOutline, MdOutlineLocationOn } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { deleteContact, setContactId } from '../../features/Contacts';
import CustomModal from '../CustomModal';

interface IContactDetails {
    setClose: () => void;
}

function ContactDetails({ setClose }: IContactDetails) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { list: contacts, id } = useAppSelector((state) => state.contacts);

    const randomHex = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');

    const visitedContact = contacts.filter(item => item.id === id);

    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteContact({ id: visitedContact[0].id }));
        dispatch(setContactId(0));
        setClose();
    }

    const handleUpdate = () => {
        openModalUpdate()
    }

    const openModalUpdate = () => setIsModalOpen(true);

    const closeModalUpdate = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <S.ContactDetailsContainer>
                <MdOutlineEdit onClick={handleUpdate} className='iconEdit' />
                <RiDeleteBin6Line onClick={handleDelete} className='iconDelete' />
                <S.NameInfo>
                    <S.IconName background={randomHex}>
                        {visitedContact[0] && visitedContact[0].name.substring(0, 1)}
                    </S.IconName>
                    <h1>{visitedContact[0] && visitedContact[0].name}</h1>
                </S.NameInfo>
                <S.ContactInfo>
                    <p>Dados de contato</p>

                    <S.Info>
                        <FiPhone className='icon' />
                        <p>{visitedContact[0] && visitedContact[0].phone}</p>
                    </S.Info>

                    {visitedContact[0] && visitedContact[0].phone2 &&
                        <S.Info>
                            <FiPhone className='icon' />
                            <p>{visitedContact[0].phone2}</p>
                        </S.Info>}

                    {visitedContact[0] && visitedContact[0].email &&
                        <S.Info>
                            <MdOutlineMailOutline className='icon' />
                            <p>{visitedContact[0].email}</p>
                        </S.Info>}

                    {visitedContact[0] && visitedContact[0].adress &&
                        <S.Info>
                            <MdOutlineLocationOn className='icon' />
                            <p>{visitedContact[0].adress}</p>
                        </S.Info>}

                    {visitedContact[0] && visitedContact[0].adress2 &&
                        <S.Info>
                            <MdOutlineLocationOn className='icon' />
                            <p>{visitedContact[0].adress2}</p>
                        </S.Info>}
                </S.ContactInfo>
            </S.ContactDetailsContainer>
            <CustomModal isOpen={isModalOpen}
                setClose={closeModalUpdate}
                overlayClassName={'overlay-modal'}
                type='updateContact'
            />
        </>
    );
}

export default ContactDetails;