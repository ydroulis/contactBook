import { SetStateAction, useState } from 'react';
import * as S from './style';
import { HiSearch } from "react-icons/hi";
import { useAppSelector } from '../../hooks';

interface ISearch {
    handleChange: (e: { target: { value: SetStateAction<string>; }; }) => void;
}

function Search({ handleChange }: ISearch) {
    const contacts = useAppSelector((state) => state.contacts.list);

    return (
        <S.SearchContainer>
            <S.SearchInput type="search" placeholder='Pesquise contatos' list='history' onChange={(e) => handleChange(e)} />
            <datalist id='history'>
                {contacts.map(contact => {
                    return (
                        <option value={contact.name}></option>
                    )
                })}
            </datalist>
            <HiSearch className='searchIcon' />
        </S.SearchContainer>
    );
}

export default Search;