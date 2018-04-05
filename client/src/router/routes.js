/**
* 路由页面导航
*/
const Global = r => require(['@/views/core/Global.vue'], r); 
const Index = r => require(['@/views/core/Index.vue'], r); 
const Login = r => require(['@/views/core/login.vue'], r);
const Page404 = r => require(['@/views/core/404.vue'], r);
const Outlet = r => require(['@/views/shared/outlet.vue'], r);

const Welcome = r => require(['@/views/core/welcome.vue'], r);
const Gfx = r => require(['@/views/core/gfx.vue'], r);

// 目录管理 
const GroupList = r => require(['@/views/group/groupList.vue'], r);
// 源码管理
const SourceGroupList = r => require(['@/views/source/sourceGroupList.vue'], r);
const SourceProjectList = r => require(['@/views/source/sourceProjectList.vue'], r);
const SourceDetail = r => require(['@/views/source/sourceDetail.vue'], r);
// 模版管理
const TemplateGroupList = r => require(['@/views/template/templateGroupList.vue'], r);
const TemplateProjectList = r => require(['@/views/template/templateProjectList.vue'], r);
const TemplateTplList = r => require(['@/views/template/templateTplList.vue'], r);


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
                    // 欢迎页
                    {
                        path: '',
                        name: 'home',
                        component: Welcome
                    },
                    // 404
                    {
                        path: '404',
                        name: '404',
                        component: Page404
                    },
                    // gfx页
                    {
                        path: 'gfx',
                        name: 'gfx',
                        component: Gfx
                    },
                    // 目录管理
                    {
                        path: 'group',
                        name: 'group',
                        component: GroupList
                    },
                    // 
                    {
                        path: 'source',
                        component: Outlet,
                        children: [
                            {
                                path: 'group-list',
                                component: Outlet,
                                meta: {
                                    name: '源码组列表',
                                    visible: true
                                },
                                children: [
                                    {
                                        path: '',
                                        name: 'source-group-list',
                                        component: SourceGroupList,
                                    },
                                    {
                                        path: 'project-list',
                                        component: Outlet,
                                        meta: {
                                            name: '源码项目列表',
                                            visible: true
                                        },
                                        children: [
                                            {
                                                path: '',
                                                name: 'source-project-list',
                                                component: SourceProjectList,
                                            },
                                            {
                                                path: 'source-detail',
                                                component: Outlet,
                                                meta: {
                                                    name: '源码详情',
                                                    visible: true
                                                },
                                                children: [
                                                    {
                                                        path: '',
                                                        name: 'source-detail',
                                                        component: SourceDetail,
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    // 模版管理
                    {
                        path: 'template',
                        component: Outlet,
                        children: [
                            {
                                path: 'group-list',
                                component: Outlet,
                                meta: {
                                    name: '模版组列表',
                                    visible: true
                                },
                                children: [
                                    {
                                        path: '',
                                        name: 'template-group-list',
                                        component: TemplateGroupList,
                                    },
                                    {
                                        path: 'project-list',
                                        component: Outlet,
                                        meta: {
                                            name: '模版项目列表',
                                            visible: true
                                        },
                                        children: [
                                            {
                                                path: '',
                                                name: 'template-project-list',
                                                component: TemplateProjectList,
                                            },
                                            {
                                                path: 'tpl-list',
                                                component: Outlet,
                                                meta: {
                                                    name: '模版tpl列表',
                                                    visible: true
                                                },
                                                children: [
                                                    {
                                                        path: '',
                                                        name: 'template-tpl-list',
                                                        component: TemplateTplList,
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
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
        redirect: '/f/404'
    }
];

export default routes