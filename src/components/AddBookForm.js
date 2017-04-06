import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display: inline-block;
    color: #000;
`;

const Form = styled.form`
    text-align: left;
    position: relative;
    z-index: 100;
`;

class AddBookForm extends React.Component {
    static propTypes = {
        onBookAdd: PropTypes.func.isRequired,
        isOpen: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        }
    }

    componentWillReceiveProps = (props) => {
        if (props.isOpen) {
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

    render () {
        return (
            <Form className="newBook__add-form" >
                <div className="book">
                    <div className="book_inner">
                        <div className="book__title">
                            <Input
                                type="text"
                                placeholder="Title"
                                innerRef={input => this.titleInput = input}
                                value={this.state.title}
                                onChange={e => this.onChange(e, 'title')}
                                onKeyDown={e => this.onKeyPress(e, 'title')}
                            />
                        </div>
                        <div className="book__author">
                            <Input
                                type="text"
                                placeholder="Author"
                                value={this.state.author}
                                onChange={e => this.onChange(e, 'author')}
                                onKeyDown={e => this.onKeyPress(e, 'author')}
                            />
                        </div>
                    </div>
                </div>
            </Form>
        );
    }
}

export default AddBookForm;
