import { useState } from 'react';
import * as S from './style';
import { Formik, Form, Field, FormikProps } from 'formik';
import * as Yup from 'yup';
import { addContact, updateContact } from '../../features/Contacts';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';

const phoneRegExp = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
const cepRegExp = /^[0-9]{5}-[0-9]{3}$/;

const schema = Yup.object().shape({
    firstName: Yup.string().required('Digite seu primeiro nome'),
    secondName: Yup.string().required('Digite seu sobrenome'),
    phone: Yup.string().required('Digite seu telefone').matches(phoneRegExp, 'Telefone não é válido'),
    phone2: Yup.string().matches(phoneRegExp, 'Telefone não é válido'),
    email: Yup.string().email(),
    cep: Yup.string().matches(cepRegExp, 'Cep não é válido: xxxxx-xx'),
    cep2: Yup.string().matches(cepRegExp, 'Cep não é válido: xxxxx-xx'),
    adress: Yup.string(),
    adress2: Yup.string(),
})

interface IForm {
    setClose: () => void,
    type: string
}

interface MyFormValues {
    firstName: string;
    secondName: string;
    phone: string;
    phone2: string;
    email: string;
    cep: string;
    cep2: string;
    adress: string;
    adress2: string;
}


function ContactForm({ setClose, type }: IForm) {
    const [addedPhoneFields, setAddedPhoneFields] = useState(false);
    const [addedAdressFields, setAddedAdressFields] = useState(false);

    const dispatch = useAppDispatch();

    const { list: contactList, id } = useAppSelector((state) => state.contacts);

    const visitedContact = contactList.filter(item => item.id === id);
    const vistedContactId = visitedContact[0] && visitedContact[0].id;
    const firstNameSplited = visitedContact[0] && visitedContact[0].name.split(" ")[0];
    const secondNameSplited = visitedContact[0] && visitedContact[0].name.slice(visitedContact[0].name.indexOf(" ") + 1);
    const adressSplited = visitedContact[0] && visitedContact[0].adress.split(" - ")[0];
    const adress2Splited = visitedContact[0] && visitedContact[0].adress2 && visitedContact[0].adress2.split(" - ")[0];
    const cepSplited = visitedContact[0] && visitedContact[0].adress.slice(visitedContact[0].adress.lastIndexOf(" ") + 1);
    const cep2Splited = visitedContact[0] && visitedContact[0].adress2 && visitedContact[0].adress2.slice(visitedContact[0].adress2.lastIndexOf(" ") + 1);

    const initialValues: MyFormValues = {
        firstName: firstNameSplited || '',
        secondName: secondNameSplited || '',
        phone: visitedContact[0] && visitedContact[0].phone || '',
        phone2: visitedContact[0] && visitedContact[0].phone2 || '',
        cep: cepSplited || '',
        cep2: cep2Splited || '',
        adress: adressSplited || '',
        adress2: adress2Splited || '',
        email: visitedContact[0] && visitedContact[0].email || '',
    };


    const addPhoneField = () => {
        setAddedPhoneFields(true);
    }

    const addAdressField = () => {
        setAddedAdressFields(true);
    }

    const removePhoneField = () => {
        setAddedPhoneFields(false);
    }

    const removeAdressField = () => {
        setAddedAdressFields(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            validateOnBlur={true}
            validateOnChange={true}
            onSubmit={(values, actions) => {
                const fullName = values.firstName + ' ' + values.secondName;
                const fullAdress = values.adress + ' - ' + values.cep
                const fullAdress2 = values.adress2 + ' - ' + values.cep2
                if (type === 'updateContact') {
                    const contact = { name: fullName, phone: values.phone, phone2: values.phone2, email: values.email, adress: fullAdress, adress2: fullAdress2, id: vistedContactId }
                    dispatch(updateContact({ id: vistedContactId, newContact: contact }));
                } else {
                    const contact = { name: fullName, phone: values.phone, phone2: values.phone2, email: values.email, adress: fullAdress, adress2: fullAdress2, id: contactList[contactList.length - 1].id + 1 }
                    dispatch(addContact(contact));
                }
                actions.setSubmitting(false);
                setClose();
            }}>
            {(props: FormikProps<MyFormValues>) => {
                const {
                    errors,
                    touched,
                    values,
                    handleChange
                } = props

                return (
                    <Form>
                        <S.FieldContainer>
                            <label htmlFor='firstName'>Primeiro Nome</label>
                            <Field id='firstName' name="firstName" type="text" placeholder="Digite seu nome" onChange={handleChange} value={values.firstName} />
                            {touched.firstName && <div className='errors'>{errors.firstName}</div>}
                        </S.FieldContainer>

                        <S.FieldContainer>
                            <label htmlFor='secondName'>Segundo Nome</label>
                            <Field id='secondName' name="secondName" type="text" placeholder="Digite seu sobrnome" onChange={handleChange} value={values.secondName} />
                            {touched.secondName && <div className='errors'>{errors.secondName}</div>}
                        </S.FieldContainer>

                        <S.FieldContainer>
                            <label htmlFor='phone'>Telefone</label>
                            <Field id='phone' name="phone" type="tel" placeholder="Digite seu telefone" onChange={handleChange} value={values.phone} />
                            {touched.phone && <div className='errors'>{errors.phone}</div>}
                        </S.FieldContainer>

                        {addedPhoneFields && <S.FieldContainer>
                            <label htmlFor='phone2'>Telefone 2</label>
                            <Field id='phone2' name="phone2" type="tel" placeholder="Digite seu telefone" onChange={handleChange} value={values.phone2} />
                            {touched.phone2 && <div className='errors'>{errors.phone2}</div>}
                        </S.FieldContainer>}

                        {!addedPhoneFields && <S.InlcudeField onClick={addPhoneField}>+</S.InlcudeField>}
                        {addedPhoneFields && <S.RemoveField onClick={removePhoneField}>-</S.RemoveField>}

                        <S.FieldContainer>
                            <label htmlFor='email'>Email</label>
                            <Field id='email' name="email" type="email" placeholder="Digite seu email" onChange={handleChange} value={values.email} />
                            {touched.email && <div className='errors'>  {errors.email}</div>}
                        </S.FieldContainer>

                        <S.FieldContainer>
                            <label htmlFor='cep'>Cep</label>
                            <Field id='cep' name="cep" type="text" placeholder="Digite seu cep" onChange={handleChange} value={values.cep} />
                            {touched.cep && <div className='errors'>{errors.cep}</div>}
                            <label htmlFor='adress'>Endereço</label>
                            <Field id='adress' name="adress" type="text" placeholder="Digite seu endereço" onChange={handleChange} value={values.adress} />
                            {touched.adress && <div className='errors'>{errors.adress}</div>}
                        </S.FieldContainer>

                        {addedAdressFields && <S.FieldContainer>
                            <label htmlFor='cep2'>Cep 2</label>
                            <Field id='cep2' name="cep2" type="text" placeholder="Digite seu cep" onChange={handleChange} value={values.cep2} />
                            {touched.cep2 && <div className='errors'>{errors.cep2}</div>}
                            <label htmlFor='adress2'>Endereço 2</label>
                            <Field id='adress2' name="adress2" type="text" placeholder="Digite seu endereço" onChange={handleChange} value={values.adress2} />
                            {touched.adress2 && <div className='errors'>{errors.adress2}</div>}
                        </S.FieldContainer>}

                        {!addedAdressFields && <S.InlcudeField onClick={addAdressField}>+</S.InlcudeField>}
                        {addedAdressFields && <S.RemoveField onClick={removeAdressField}>-</S.RemoveField>}


                        {type === 'updateContact' ? (<S.ButtonSubimit type='submit'>Atualizar</S.ButtonSubimit>) : (<S.ButtonSubimit style={{ bottom: -20, right: 40 }} type='submit'>Salvar</S.ButtonSubimit>)}
                    </Form>
                )
            }

            }
        </Formik>
    );
}

export default ContactForm;