import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const TextareaMessage = (props) => {
	return (
		<Grid item container>
			<Grid item xs={2}>
				<Typography>{props.label} message</Typography>
			</Grid>
			<Grid item xs={6}>
				<TextareaAutosize
					onChange={props.changeHandlerText}
					aria-label="minimum height"
					rowsMin={3}
					value={props.value}
					name={props.name}
				/>
			</Grid>
		</Grid>
	);
};

export default TextareaMessage;