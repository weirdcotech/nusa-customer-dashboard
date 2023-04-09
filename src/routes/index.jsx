import { useRoutes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// project import
import AgreementRoutes from './AgreementRoutes';
import LoginRoutes from './LoginRoutes';
import LogoutRoutes from './LogoutRoutes';
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const { isLoggedIn, isEligible } = useSelector((state) => state.auth);

    const checkLogIn = () => {
        var user = localStorage.getItem("user");
        return user && isLoggedIn;
    }

    const checkEligible = () => {
        return isEligible;
    }

    return useRoutes([MainRoutes(checkLogIn(), checkEligible()), AgreementRoutes(), LoginRoutes(checkLogIn(), checkEligible()), LogoutRoutes()]);
}
