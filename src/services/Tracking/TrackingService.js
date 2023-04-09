import BaseService from "../BaseService";

const BASE_PATH = '/tracking/';

const getAll = (body, offset, limit) => {
    return BaseService.get(`${BASE_PATH}customer`, {
        params: {
            offset: offset,
            limit: limit,
            ...body
        }
    });
};

const history = (receiptNumber) => {
    return BaseService.get(`${BASE_PATH}${receiptNumber}/history`);
}

export default {
    getAll,
    history
}