import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: '16px'
	},
	title: {
		flexGrow: 1
	},
	imagen: {
		borderRadius: '50%'
	}
}));

function Header() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Lista de Clientes
                    </Typography>
					<IconButton color="inherit">
						<img src="logo192.png" width="60"></img>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
