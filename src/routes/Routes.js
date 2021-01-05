import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchClients, fetchKpis } from '../redux/actions'

const mapStateToProps = state => {
	return {
		clients: state.clients,
		kpis: state.kpis
	}
}
const mapDispatchToProps = dispatch => ({	
	fetchClients: () => { dispatch(fetchClients()) },
	fetchKpis: () => { dispatch(fetchKpis()) },
});

class Routes extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchClients()
		this.props.fetchKpis()	
	}

	render() {
		return (
			<Fragment>
				<Header />				
				<Switch location={this.props.location}>
					<Route exact path='/home' component={() => <Home {...this.props} />} />
					<Redirect to="/home" />
				</Switch>					
				<Footer />
			</Fragment>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
