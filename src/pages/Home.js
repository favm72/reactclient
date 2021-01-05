import React, { Fragment } from 'react'
import { Grid } from '@material-ui/core'
import { Loading } from '../components/Loading'
import MyCard from '../components/MyCard';
import { makeStyles } from '@material-ui/core/styles';
import ClientTable from '../components/ClientTable';

const ClientsTable = (props) => {
	if (props.clients.isLoading) {
		return (
			<Loading />			
		);
	}
	else if (props.clients.errMess || !props.clients.clients.status) {
		return (
			<div className="container">
				<h4>Error al cargar lista de Clientes</h4>					
			</div>
		);
	}
	else {		
		return (<ClientTable clients={props.clients.clients.data} />)
	}
}

const useStyles = makeStyles(() => ({
    rootcard: {
        textAlign: 'center',
		padding: 5,
		margin: 8
	},
	cards: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center"
	}
}));

const LoadMeanCard = props => {
	console.log(props)
	if (props.kpis.isLoading) {
		return (<Loading />)
	}
	else if (props.kpis.errMess || !props.kpis.kpis.status) {
		return (
			<div className="container">
				<h4>Error al cargar Promedio</h4>					
			</div>
		);
	}
	else {
		return (
			<MyCard title={"Promedio de Edad"} text={props.kpis.kpis.data.mean.toFixed(2)} bgcolor={"#AA11AA"} forecolor={"white"} />
		)
	}
}

const LoadSTDCard = props => {	
	if (props.kpis.isLoading) {
		return (<Loading />)
	}
	else if (props.kpis.errMess || !props.kpis.kpis.status) {
		return (
			<div className="container">
				<h4>Error al cargar Desviación Estándar</h4>					
			</div>
		);
	}
	else {
		return (
			<MyCard title={"Desviación Estándar"} text={props.kpis.kpis.data.std.toFixed(2)} bgcolor={"#AA11AA"} forecolor={"white"} />
		)
	}
}

const Home = (props) => {	
	const classes = useStyles()
	return (		
		<Fragment>
			<div className={classes.cards}>
				<Grid item xs={6} className={classes.rootcard}>
					<LoadMeanCard {...props} />
				</Grid>
				<Grid item xs={6} className={classes.rootcard}>
					<LoadSTDCard {...props} />
				</Grid>
			</div>
			<Grid container>
				<Grid item xs={12} className={classes.rootcard}>
					<MyCard title={"Listado de Clientes"} text={<ClientsTable {...props} />} bgcolor={"white"} />
				</Grid>				
			</Grid>			
		</Fragment>
	)
}

export default Home;