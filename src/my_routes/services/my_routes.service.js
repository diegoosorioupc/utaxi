import http from '@/core/http-common'

class My_routesService {
    endPoint = '/my_routes';

    getAll() {
        return http.get(this.endPoint);
    }

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }

    create(createMy_routeDto) {
        return http.post(this.endPoint, createMy_routeDto);
    }

    update(id, updateMy_routeDto) {
        return http.put(`${this.endPoint}/${id}`, updateMy_routeDto);
    }

    delete(id) {
        return http.delete(`${this.endPoint}/${id}`);
    }

    findByTitle(title) {
        return http.get(`${this.endPoint}?title=${title}`);
    }
}

export default new My_routesService();