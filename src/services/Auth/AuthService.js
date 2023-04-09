import BaseService from "../BaseService";

const BASE_PATH = '/customer/auth/'

const login = (body) => {
    return BaseService.post(`${BASE_PATH}login`, body);
};

const refresh = (body) => {
    return BaseService.post(`${BASE_PATH}refresh`, body);
};

const logout = (body) => {
    return BaseService.delete(`${BASE_PATH}logout`, body);
};

const me = () => {
    return BaseService.get(`/customers/me`);
}

const changePassword = (body) => {
    return BaseService.patch(`/customers/password`, body);
}

export default {
    login,
    refresh,
    logout,
    me,
    changePassword
}