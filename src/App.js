import React, { Component } from 'react'
import Routes from './routes/Routes'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configStore';
import './App.css';

const store = ConfigureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>					
					<Routes />					
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
