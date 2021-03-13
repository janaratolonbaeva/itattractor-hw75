import {
	CHANGE_HANDLER,
	POST_MESSAGE_FAILURE_DECODE,
	POST_MESSAGE_FAILURE_ENCODE,
	POST_MESSAGE_REQUEST_DECODE,
	POST_MESSAGE_REQUEST_ENCODE,
	POST_MESSAGE_SUCCESS_DECODE,
	POST_MESSAGE_SUCCESS_ENCODE
} from "../actions/vigenereActions";

const initialState = {
	encode: '',
	decode: '',
	password: '',
	error: ''
}

const vigenereReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_MESSAGE_REQUEST_DECODE:
			return {...state}
		case POST_MESSAGE_SUCCESS_DECODE:
			return {...state, encode: action.answer}
		case POST_MESSAGE_FAILURE_DECODE:
			return {...state, error: state.error}
		case POST_MESSAGE_REQUEST_ENCODE:
			return {...state}
		case POST_MESSAGE_SUCCESS_ENCODE:
			return {...state, decode: action.answer}
		case POST_MESSAGE_FAILURE_ENCODE:
			return {...state, error: state.error}
		case CHANGE_HANDLER:
			return {...state, [action.event.name]: action.event.value}
		default:
			return state;
	}
}

export default vigenereReducer;