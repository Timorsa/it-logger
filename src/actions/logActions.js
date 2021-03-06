import {
	GET_LOGS,
	SET_LOADING,
	ADD_LOG,
	DELETE_LOG,
	LOGS_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG
} from './types';

// get logs from server
export const getLogs = () => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();
		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// add new log
export const addLog = log => async dispatch => {
	try {
		setLoading();
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// delete logs from server
export const deleteLog = id => async dispatch => {
	try {
		setLoading();
		await fetch(`/logs/${id}`, {
			method: 'DELETE'
		});

		dispatch({
			type: DELETE_LOG,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// update log on server
export const updateLog = log => async dispatch => {
	try {
		setLoading();
		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			header: {
				'Content-Type': 'application/json'
			}
		});

		const data = await res.json();
		dispatch({
			type: UPDATE_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		});
	}
};

// Set Curr log
export const setCurrent = log => {
	return {
		type: SET_CURRENT,
		payload: log
	};
};

// clear Curr log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
