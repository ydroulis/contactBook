import Person from '../Person';
import * as S from './style';
import { useAppSelector } from '../../hooks';
import Search from '../Search';
import { SetStateAction, useState } from 'react';

interface Contacts {
    [x: string]: any;
}

function List() {
    const [search, setSearch] = useState('');

    const contacts = useAppSelector((state) => state.contacts.list);

    const alphabeticList = contacts.slice().sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

    const groupedArray = alphabeticList.reduce<Contacts>((acc, item) => {
        const l = item.name[0];
        const isLetterSetted = (acc.filter((e: { letter: string; }) => e.letter === l)[0] === undefined);

        if (isLetterSetted) acc.push({ 'letter': l, people: [] });
        acc.filter((e: { letter: string; }) => e.letter === l)[0].people.push({ ...item });
        return acc;
    }, [])

    const filteredList = groupedArray.map((item: { people: any; }) => {
        const result = item.people.filter((person: { name: string; }) => person.name.toLowerCase().startsWith(search))
        return { ...item, people: result }
    })

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <Search handleChange={handleChange} />
            <S.ListContainer>
                {filteredList.map((contact: Contacts, i: number) => {
                    return (
                        <S.LetterGroups key={i}>
                            {contact.people.length > 0 && <p>{contact.letter}</p>}
                            <S.People>
                                {contact.people.map((person: Contacts, i: number) => {
                                    return (
                                        <Person key={i} name={person.name} id={person.id} />
                                    )
                                })}
                            </S.People>
                        </S.LetterGroups>
                    )
                })}
            </S.ListContainer>
        </>
    );
}

export default List;