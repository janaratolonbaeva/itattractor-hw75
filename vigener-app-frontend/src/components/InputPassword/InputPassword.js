import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const InputPassword = (props) => {
	return (
		<Grid item container>
			<Grid item xs={2}>
				<Typography>Password</Typography>
			</Grid>
			<Grid item xs={6}>
				<TextField
					label="Outlined"
					variant="outlined"
					name="password"
					value={props.value}
					onChange={props.changeHandlerInput}
				/>
				<IconButton onClick={props.encoded}>
					<ArrowDownwardIcon/>
				</IconButton>
				<IconButton onClick={props.decoded}>
					<ArrowUpwardIcon/>
				</IconButton>
			</Grid>
		</Grid>
	);
};

export default InputPassword;