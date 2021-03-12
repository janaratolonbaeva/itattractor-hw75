import axiosApi from "../../axiosApi";

export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST';
export const POST_MESSAGE_SUCCESS =  'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';
export const CHANGE_HANDLER = 'CHANGE_HANDLER';

export const postMessageRequest = () => ({type: POST_MESSAGE_REQUEST});
export const postMessageSuccess = () => ({type: POST_MESSAGE_SUCCESS});
export const postMessageFailure = error => ({type: POST_MESSAGE_FAILURE, error});
export const changeHandler = (event) => ({type: CHANGE_HANDLER, event});

export const postMessage = (message, path) => {
	return async dispatch => {
		try {
			dispatch(postMessageRequest());
			await axiosApi.post(path, message);
			dispatch(postMessageSuccess());
		} catch (e) {
			dispatch(postMessageFailure())
		}
	}
};
