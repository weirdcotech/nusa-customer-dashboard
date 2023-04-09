import BaseService from "../BaseService";

const BASE_PATH = '/invoice/customer';

const getAll = (body) => {
    return BaseService.get(`${BASE_PATH}`, {
        params: {
            offset: 0,
            limit: 20,
            ...body
        }
    });
};

const get = (id) => {
    return BaseService.get(`${BASE_PATH}/${id}`);
}

const paymentHistory = (id) => {
    return BaseService.get(`${BASE_PATH}/${id}/payment/history`)
}

export default {
    getAll,
    get,
    paymentHistory
}