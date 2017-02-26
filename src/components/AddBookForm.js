import React, { PropTypes } from 'react'

class AddBookForm extends React.Component {
    static propTypes = {
        onBookAdd: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: ''
        }
    }

    onKeyPress = (e, fieldName) => {
        if (e.keyCode == 13) {
            this.props.onBookAdd(this.state.title, this.state.author);
            this.setState({title: '', author: ''});
        }
    }

    onChange = (e, fieldName) => {
        this.setState({...this.state, [fieldName]:e.target.value});
    }

    render () {
        return (
            <form className="newBook__add-form" >
                <div className="book">
                    <div className="book_inner">
                        <div className="book__title">
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={e => this.onChange(e, 'title')}
                                onKeyDown={e => this.onKeyPress(e, 'title')}
                            />
                        </div>
                        <div className="book__author">
                            <input
                                type="text"
                                value={this.state.author}
                                onChange={e => this.onChange(e, 'author')}
                                onKeyDown={e => this.onKeyPress(e, 'author')}
                            />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddBookForm;
