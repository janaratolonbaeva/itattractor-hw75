import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Container from "@material-ui/core/Container";
import InputPassword from "../../components/InputPassword/InputPassword";
import {changeHandler} from "../../store/actions/vigenereActions";
import TextareaMessage from "../../components/TextareaMessage/TextareaMessage";

const GeneratePage = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	const changeHandlerValue = (e) => {
		dispatch(changeHandler(e.target));
	};

	const postDecode = () => {
		const newMessage = {
			decoded: state.decoded,
			password: state.password
		}

		dispatch(postMessage('/decode', newMessage));
	};

	const postEncode = () => {
		const newMessage = {
			decoded: state.encoded,
			password: state.password
		}

		dispatch(postMessage('/encode', newMessage));
	};

	return (
		<Container maxWidth="xl">
				<TextareaMessage
					label="Decoded"
					changeHandlerText={(e) => changeHandlerValue(e)}
					name="decoded"
					value={state.decoded}
				/>
				<InputPassword
					value={state.password}
					changeHandlerInput={(e) => changeHandlerValue(e)}
					decoded={postDecode}
					encoded={postEncode}
				/>
				<TextareaMessage
					label="Encoded"
					changeHandlerText={(e) => changeHandlerValue(e)}
					name="encoded"
					value={state.encoded}
				/>
		</Container>
	);
};

export default GeneratePage;