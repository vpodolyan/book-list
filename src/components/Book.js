import React from 'react';
import styled from 'styled-components';

import Colors from '../utils/colors';

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

const DeleteButton = styled.a`
    position: absolute;
    top: -5px;
    right: 0px;
    width: 32px;
    height: 32px;

    &:hover {
        cursor: pointer;

        &:before, &:after {
            background-color: ${Colors.mainBlue};
        }
    }

    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #c0c0c0;

        transition: background-color 0.2s;
    }

    &:before {       
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`;

const Book = ({id, title, author, onDeleteButtonClick}) => (
        <BookBody>
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
