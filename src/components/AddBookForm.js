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
        if (e.target.keyCode == 13) {
            this.props.onBookAdd(this.state.title, this.state.author);
        } else {
            this.setState({ ...state, [fieldName]: e.target.value });
        }
    }

    render () {
        const {onFormKeyPress, onAddBtnClick} = this.props;
        //     {/* onKeyPress={onFormKeyPress} onSubmit={onAddBtnClick} */}
        return (

            <form className="newBook__add-form" >
                <div className="book">
                    <div className="book_inner">
                        <div className="book__title">
                            <input type="text" value={this.state.title} onKeyDown={e => this.onKeyPress(e, 'title')} />
                        </div>
                        <div className="book__author">
                            <input type="text" value={this.state.author} onKeyDown={e => this.onKeyPress(e, 'author')} />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default AddBookForm;
