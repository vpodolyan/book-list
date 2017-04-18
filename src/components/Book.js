import React from 'react';
import styled from 'styled-components';

import Colors from '../utils/colors';
import DeleteButton from './buttons/DeleteButton';

const BookBody = styled.div`
    background: #fff;
    margin-top: 1rem;
`;

const BookInner = styled.div`
    padding: 1.25rem 2rem;
`;

export const BookTitle = styled.div`
    display: inline-block;
    border-right: 0.25rem solid #f0f0f0;
    width: 40%;
`;

export const BookAuthor = styled.div`
    display: inline-block;
    padding-left: 2rem;
`;

const BookActions = styled.div`
    position: relative;
    display: inline-block;
    float:right;
`;

const Book = ({id, title, author, onDeleteButtonClick, onDoubleClick}) => (
        <BookBody onDoubleClick={onDoubleClick}>
            <BookInner>
                <BookTitle>{title}</BookTitle>
                <BookAuthor>{author}</BookAuthor>
                <BookActions>
                    <DeleteButton onClick={onDeleteButtonClick} />
                </BookActions>
            </BookInner>
        </BookBody>
)

export default Book
