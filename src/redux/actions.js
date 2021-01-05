import { baseUrl } from '../shared/baseURL'

export const CLIENTS_LOADING = 'CLIENTS_LOADING'
export const CLIENTS_FAILED = 'CLIENTS_FAILED'
export const CLIENTS_ADD = 'CLIENTS_ADD'

export const KPIS_LOADING = 'KPIS_LOADING'
export const KPIS_FAILED = 'KPIS_FAILED'
export const KPIS_ADD = 'KPIS_ADD'

export const fetchClients = () => (dispatch) => {
    dispatch(clientsLoading(true));
    return fetch(baseUrl + 'clients/list')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(clients => dispatch(addClients(clients)))
        .catch(error => dispatch(clientsFailed(error.message)));
}

export const clientsLoading = () => ({ type: CLIENTS_LOADING })
export const clientsFailed = (errmess) => ({ type: CLIENTS_FAILED, payload: errmess })
export const addClients = (clients) => ({ type: CLIENTS_ADD, payload: clients })


export const fetchKpis = () => (dispatch) => {
    dispatch(kpisLoading(true));
    return fetch(baseUrl + 'clients/kpis')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(kpis => dispatch(addKpis(kpis)))
        .catch(error => dispatch(kpisFailed(error.message)));
}

export const kpisLoading = () => ({ type: KPIS_LOADING })
export const kpisFailed = (errmess) => ({ type: KPIS_FAILED, payload: errmess })
export const addKpis = (kpis) => ({ type: KPIS_ADD, payload: kpis })