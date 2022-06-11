import singIn from '../components/Singin';
import dashboard from '../components/Dashboard';
import singUp from '../components/Singup';

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
    /*{
        path: "/admin/departamentos/editar",
        component: EditarDepartamentos,
    },
    {
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