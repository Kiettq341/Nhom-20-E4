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

export const blogApi = {
	create: (data) => handleResponse(
		axios.post(`${API_BASE_URL}/blog`, data, { headers: getAuthHeader() })
	),
	update: (id, data) => handleResponse(
		axios.put(`${API_BASE_URL}/blog/${id}`, data, { headers: getAuthHeader() })
	),
	view: (id) => handleResponse(
		axios.get(`${API_BASE_URL}/blog/${id}`)
	),
	delete: (id) => handleResponse(
		axios.delete(`${API_BASE_URL}/blog/${id}`, { headers: getAuthHeader() })
	),
	upload: (formData) => handleResponse(
		axios.post(`${API_BASE_URL}/blog/upload`, formData, { headers: { ...getAuthHeader(), 'Content-Type': 'multipart/form-data' } })
	),
	search: (query) => handleResponse(
		axios.get(`${API_BASE_URL}/blog/search`, { params: query })
	),
	sort: (sortBy) => handleResponse(
		axios.get(`${API_BASE_URL}/blog`, { params: { sort: sortBy } })
	)
};
