import http from './http-common'

class ClientsService {
    getAll() {
        return http.get('/clients');
    }

    getById(id) {
        return http.get(`/clients/${ id }`);
    }

    getByEmailAndPassword(email, password) {
        return http.get(`/clients?email=${ email }&password=${ password }`);
    }

    getByEmail(email) {
        return http.get(`/clients?email=${ email }`);
    }

    getAppliances(id) {
        return http.get(`/clients/${ id }/appliances`);
    }

    create(data) {
        return http.post('/clients', data);
    }

    update(id, data) {
        return http.put(`/clients/${ id }`, data);
    }

    delete(id) {
        return http.delete(`/clients/${ id }`);
    }
}
export default new ClientsService