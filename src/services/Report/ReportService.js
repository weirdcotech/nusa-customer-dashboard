import BaseService from "../BaseService";

const BASE_PATH = '/report/customer';

const getAll = (body) => {
    return BaseService.get(`${BASE_PATH}`, {
        params: {
            offset: 0,
            limit: 20,
            ...body
        }
    });
};

const create = (body) => {
    return BaseService.post(`${BASE_PATH}`, body);
}

export default {
    getAll,
    create
}