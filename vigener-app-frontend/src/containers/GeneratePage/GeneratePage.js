import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Container from "@material-ui/core/Container";
import InputPassword from "../../components/InputPassword/InputPassword";
import {changeHandler, postMessageDecode, postMessageEncode} from "../../store/actions/vigenereActions";
import TextareaMessage from "../../components/TextareaMessage/TextareaMessage";

const GeneratePage = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state);

	const changeHandlerValue = (e) => {
		dispatch(changeHandler(e.target));
		console.log(state);
		console.log(e.target.name)
	};

	const postDecode = () => {
		if (!state.password) {
			return alert('Write your password');
		}

		const newMessage = {
			decode: state.decode,
			password: state.password
		}

		dispatch(postMessageDecode(newMessage));
	};

	const postEncode = () => {
		if (!state.password) {
			return alert('Write your password');
		}

		const newMessage = {
			encode: state.encode,
			password: state.password
		}

		dispatch(postMessageEncode(newMessage));
	};

	return (
		<Container maxWidth="xl">
				<TextareaMessage
					label="Decoded"
					changeHandlerText={(e) => changeHandlerValue(e)}
					name="decode"
					value={state.decode}
				/>
				<InputPassword
					value={state.password}
					changeHandlerInput={(e) => changeHandlerValue(e)}
					decoded={postEncode}
					encoded={postDecode}
				/>
				<TextareaMessage
					label="Encoded"
					changeHandlerText={(e) => changeHandlerValue(e)}
					name="encode"
					value={state.encode}
				/>
		</Container>
	);
};

export default GeneratePage;