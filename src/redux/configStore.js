import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Clients } from '../redux/clients';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Kpis } from './kpis';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            clients: Clients,
            kpis: Kpis
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}