import {
	CHANGE_HANDLER,
	POST_MESSAGE_FAILURE,
	POST_MESSAGE_REQUEST,
	POST_MESSAGE_SUCCESS
} from "../actions/vigenereActions";

const initialState = {
	encoded: '',
	decoded: '',
	password: '',
	error: ''
}

const vigenereReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_MESSAGE_REQUEST:
			return {...state}
		case POST_MESSAGE_SUCCESS:
			return {...state}
		case POST_MESSAGE_FAILURE:
			return {...state, error: state.error}
		case CHANGE_HANDLER:
			return {...state, [action.event.name]: action.event.value}
		default:
			return state;
	}
}

export default vigenereReducer;