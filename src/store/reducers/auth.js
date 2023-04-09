import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, AGREEMENT_ACCEPTED } from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));
const eligible = localStorage.getItem('eligible');

const initialState = user ? { isLoggedIn: true, user, isEligible: eligible } : { isLoggedIn: false, user: null, isEligible: false };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            console.log("in reducer login success is eligible:" + payload.isEligible)
            return {
                ...state,
                isLoggedIn: true,
                isEligible: payload.isEligible,
                user: payload.user
            };
        case LOGIN_FAILED:
            return {
                ...state,
                isEligible: false,
                isLoggedIn: false,
                user: null
            };
        case LOGOUT:
            return {
                ...state,
                isEligible: false,
                isLoggedIn: false,
                user: null
            };
        case AGREEMENT_ACCEPTED:
            console.log("in reducer ag accepted is eligible:" + payload.accept)
            return {
                ...state, 
                isEligible: true
            }
        default:
            return state;
    }
}
