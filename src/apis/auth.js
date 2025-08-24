import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000/api';

function handleResponse(promise) {
	return promise
		.then(res => ({ status: res.status, data: res.data, message: res.data.message || 'Success' }))
		.catch(err => {
			const res = err.response || {};
			return Promise.reject({
				status: res.status || 500,
				message: res.data?.message || err.message || 'Error',
				data: res.data || null
			});
		});
}

function getAuthHeader() {
	const token = localStorage.getItem('token');
	return token ? { Authorization: `Bearer ${token}` } : {};
}

// API Public
export const login = (credentials) => handleResponse(
	axios.post(`${API_BASE_URL}/auth/login`, credentials)
);

// API Private
export const logout = () => handleResponse(
	axios.post(`${API_BASE_URL}/auth/logout`, {}, { headers: getAuthHeader() })
);
