import * as types from '../actions/types'

export default function books(state = [{ id:1, title: "tt", author: "test"}], action) {
    switch (action.type) {
        case types.ADD_BOOK:
            const lastBookId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
            return [
                ...state,
                {
                    id: lastBookId,
                    title: action.title,
                    author: action.author
                }
            ]
        case types.REMOVE_BOOK:
            return state.filter((book) => book.id !== book.id);
        case types.EDIT_BOOK:
            return state.map((book) => {
                if (book.id == action.id) {
                    book.title = action.title;
                    book.author = action.author;
                }
            });
        default:
            return state;

    }
}
