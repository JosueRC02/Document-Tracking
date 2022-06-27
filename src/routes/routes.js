import singIn from '../components/Singin';
import dashboard from '../components/Dashboard/Dashboard';
import singUp from '../components/Singup';
import Departamento from '../components/Departamento';
import Empleados from '../components/Empleados';
import Tramite from '../components/Tramite';

const routesAdmin = [

    {
        path: "/",
        component: singIn,
    },
    {
        path: "/Dashboard",
        component: dashboard,
    },
    {
        path: "/Singup",
        component: singUp,
    },
    {
        path: "/Departamento",
        component: Departamento,
    },
    {
        path: "/Empleados",
        component: Empleados,
    },

    {
        path: "/Tramite",
        component: Tramite,
    },
    /*{
        path: "/admin/consulta",
        component: ConsultaTracking,
    },
    {
        path: "/admin/parametros",
        component: Parametros,
    },
    {
        path: "/admin/tramites",
        component: Tramites,
    },
    {
        path: "/admin/casos",
        component: Casos,
    }*/
];

const routes = [...routesAdmin];

export default routes;