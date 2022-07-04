import singIn from '../components/Singin';
import dashboard from '../components/Dashboard/Dashboard';
import singUp from '../components/Singup';
import Departamento from '../components/Departamento';
import Empleados from '../components/Empleados';
import Tramite from '../components/Tramite';
import Casos from '../components/CasosAbiertos';
import EmpleadosXDep from '../components/EmpleadosXDep';
import TramiteXDep from '../components/TramiteXDep';
import CasosXTramite from '../components/CasosXTramite';

const routesAdmin = [

    {
        path: "/",
        component: singIn,
    },
    {
        path: "/Dashboard/:id",
        component: dashboard,
    },
    {
        path: "/Singup",
        component: singUp,
    },
    {
        path: "/Departamento/:id",
        component: Departamento,
    },
    {
        path: "/Empleados/:id",
        component: Empleados,
    },

    {
        path: "/Tramite/:id",
        component: Tramite,
    },
    {
        path: "/CasosAbiertos/:id",
        component: Casos,
    },
    {
        path: "/EmpleadosXDep/:id",
        component: EmpleadosXDep,
    },
    {
        path: "/TramiteXDep/:id",
        component: TramiteXDep,
    },
    {
        path: "/CasosXTra/:id",
        component: CasosXTramite,
    },
    // {
    //     path: "/Documentos/:id",
    //     component: Documentos,
    // }
];

const routes = [...routesAdmin];

export default routes;