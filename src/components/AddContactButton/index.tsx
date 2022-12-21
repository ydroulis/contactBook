import * as S from './style'

interface IAddContact {
    handleClick: () => void
}

function AddContactButton({ handleClick }: IAddContact) {
    return (
        <S.AddContactButtonContainer onClick={handleClick}>
            +
        </S.AddContactButtonContainer>
    );
}

export default AddContactButton;