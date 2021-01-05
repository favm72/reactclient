import * as ActionTypes from './actions';

export const Kpis = (state = { isLoading: true, errMess: null, kpis: [] }, action) => {
	switch (action.type) {
		case ActionTypes.KPIS_ADD:
			return { ...state, isLoading: false, errMess: null, kpis: action.payload };

		case ActionTypes.KPIS_LOADING:
			return { ...state, isLoading: true, errMess: null, kpis: [] }

		case ActionTypes.KPIS_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		default:
			return state;
	}
};