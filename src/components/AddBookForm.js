import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Colors from '../utils/colors';
import Book from './Book'; 

const Input = styled.input`
    display: inline-block;
    color: #000;
    border: 0;
    border-bottom: 1px solid #fff;

    transition: border-color 0.2s;

    &:focus {
        border-color: ${Colors.mainBlue};
    }

    &::placeholder {
        color: #a3a2a2;
    }
`;

const Form = styled.form`
    text-align: left;
    position: relative;
    z-index: 100;
`;

class AddBookForm extends React.Component {
    static propTypes = {
        onBookAdd: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired,
        onCancel: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        }
    }

    componentWillReceiveProps = ({ isOpen }) => {
        if (isOpen) {
            this.titleInput.focus();
        }
    }

    onKeyPress = (e, fieldName) => {
        if (e.keyCode == 13) {
            this.props.onBookAdd(this.state.title, this.state.author);
            this.setState({title: '', author: ''});
        }
    }

    onChange = (e, fieldName) => {
        this.setState({
            [fieldName]:e.target.value
        });
    }

    render = () => (
        <Form>
            <Book
                title={
                    <Input
                        type="text"
                        placeholder="Title"
                        innerRef={input => this.titleInput = input}
                        value={this.state.title}
                        onChange={e => this.onChange(e, 'title')}
                        onKeyDown={e => this.onKeyPress(e, 'title')}
                    />
                }
                author={
                    <Input
                        type="text"
                        placeholder="Author"
                        value={this.state.author}
                        onChange={e => this.onChange(e, 'author')}
                        onKeyDown={e => this.onKeyPress(e, 'author')}
                    />
                }
              onDeleteButtonClick={this.props.onCancel}  
            />
        </Form>
    );
}

export default AddBookForm;
