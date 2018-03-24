/**
* 路由页面导航
*/
const Global = r => require(['@/views/core/Global.vue'], r); 
const Index = r => require(['@/views/core/Index.vue'], r); 
const Login = r => require(['@/views/core/login.vue'], r);
const Page404 = r => require(['@/views/core/404.vue'], r);
const Outlet = r => require(['@/views/shared/outlet.vue'], r);

const Welcome = r => require(['@/views/core/welcome.vue'], r);

// 



const routes = [
    {
        path: '/f/login',
        name: 'login',
    	component: Login
    },
    {
        path: '/f',
        name: 'Global',
        component: Global,
        children: [
            {
                path: '',
                component: Index,
                children: [
                    {
                        path: '',
                        component: Welcome,
                        name: 'home'
                    },
                    
                ]      
            },
        ]
    },
    {
        path: '/',
        redirect: '/f'
    },
    {
        path: '**',
        component: Page404
    }
];

export default routes