import BaseService from "../BaseService";

const BASE_PATH = '/customers/agreements/'

const check = () => {
    return BaseService.get(`${BASE_PATH}check`, {
    });
};

const accept = (body) => {
    return BaseService.post(`${BASE_PATH}accept`, body);
};


export default {
    check,
    accept
}