import axios from '../axios';
// eslint-disable-next-line no-unused-vars
import * as queryString from 'query-string';

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(loginBody) {
        return axios.post(`/admin/login`, loginBody)
    },
    handlerGetAllProduct() {
        return axios.get('/api/get-all-category')
    }

};

export default adminService;