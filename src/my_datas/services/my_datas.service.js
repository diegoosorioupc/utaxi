import http from '@/core/http-common'

class My_datasService {
    endPoint = '/my_datas';

    getAll() {
        return http.get(this.endPoint);
    }

    getById(id) {
        return http.get(`${this.endPoint}/${id}`);
    }

    create(createMy_dataDto) {
        return http.post(this.endPoint, createMy_dataDto);
    }

    update(id, updateMy_dataDto) {
        return http.put(`${this.endPoint}/${id}`, updateMy_dataDto);
    }

    delete(id) {
        return http.delete(`${this.endPoint}/${id}`);
    }

    findByTitle(title) {
        return http.get(`${this.endPoint}?title=${title}`);
    }
}

export default new My_datasService();