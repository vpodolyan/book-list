import React from 'react';
import styled from 'styled-components';

import AddBookForm from './AddBookForm';
import AddBookButton from './AddBookButton';

const NewBookBlock = styled.div`
    border-radius: 5px;
    height: 50px;
    width: ${props => props.active ? '100%' : '0'};
    position: ${props => props.active ? 'static' : ''};

    transition: width 0.5s;
`;

const NewBookBody = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
`;

const NewBook = ({ onBookAdd, onPlusBtnClick, isActive, onCancel }) => {
    let titleInput
    let authorInput

    const onClick = (e) => {
         if (isActive == false) {
             onPlusBtnClick(!isActive)
         }
    }

    return (
        <div>
            <NewBookBlock active={isActive} onClick={onClick}>
                <NewBookBody active={isActive}>
                    <AddBookForm onBookAdd={onBookAdd} isOpen={isActive} onCancel={onCancel} />
                </NewBookBody>
            </NewBookBlock>
            <AddBookButton onClick={onClick} />
        </div>
    )
}

export default NewBook
