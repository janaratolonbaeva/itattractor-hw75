import axiosApi from "../../axiosApi";

export const POST_MESSAGE_REQUEST_DECODE = 'POST_MESSAGE_REQUEST_DECODE';
export const POST_MESSAGE_SUCCESS_DECODE =  'POST_MESSAGE_SUCCESS_DECODE';
export const POST_MESSAGE_FAILURE_DECODE = 'POST_MESSAGE_FAILURE_DECODE';
export const POST_MESSAGE_REQUEST_ENCODE = 'POST_MESSAGE_REQUEST_ENCODE';
export const POST_MESSAGE_SUCCESS_ENCODE =  'POST_MESSAGE_SUCCESS_ENCODE';
export const POST_MESSAGE_FAILURE_ENCODE = 'POST_MESSAGE_FAILURE_ENCODE';
export const CHANGE_HANDLER = 'CHANGE_HANDLER';

export const postMessageRequestDecode = () => ({type: POST_MESSAGE_REQUEST_DECODE});
export const postMessageSuccessDecode = (answer) => ({type: POST_MESSAGE_SUCCESS_DECODE, answer});
export const postMessageFailureDecode = error => ({type: POST_MESSAGE_FAILURE_DECODE, error});
export const postMessageRequestEncode = () => ({type: POST_MESSAGE_REQUEST_ENCODE});
export const postMessageSuccessEncode = (answer) => ({type: POST_MESSAGE_SUCCESS_ENCODE, answer});
export const postMessageFailureEncode = error => ({type: POST_MESSAGE_FAILURE_ENCODE, error});
export const changeHandler = (event) => ({type: CHANGE_HANDLER, event});

export const postMessageDecode = message => {
	return async dispatch => {
		try {
			dispatch(postMessageRequestDecode());
			const response = await axiosApi.post('/decode', message);
			dispatch(postMessageSuccessDecode(response.data));
			console.log(response.data);
		} catch (e) {
			dispatch(postMessageFailureDecode())
		}
	}
};

export const postMessageEncode = message => {
	return async dispatch => {
		try {
			dispatch(postMessageRequestEncode());
			const response = await axiosApi.post('/encode', message);
			dispatch(postMessageSuccessEncode(response.data));
			console.log(response.data);
		} catch (e) {
			dispatch(postMessageFailureEncode())
		}
	}
};
