import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const TextareaMessage = ({label, changeHandlerText, value}) => {
	return (
		<Grid item container>
			<Grid item xs={2}>
				<Typography>{label} message</Typography>
			</Grid>
			<Grid item xs={6}>
				<TextareaAutosize
					onChange={changeHandlerText}
					aria-label="minimum height"
					rowsMin={3}
					name={label}
					value={value}
				/>
			</Grid>
		</Grid>
	);
};

export default TextareaMessage;