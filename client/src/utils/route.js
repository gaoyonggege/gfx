/**
* 路由工具集合
*   @author: gaoyonggege@gmail.com
*/

/**
 *  新建源码项目列表路由
 *    @param {*} group : 组
 */
export function createSourceProjectListRoute ( group ) {
    if ( !group ) {
        throw new Error(`createSourceProjectListRoute fn param group empty!`);
    }

    const route = {
        name: 'source-project-list',
        query: { 
            group
        }
    };
    return route;
}


/**
 *  新建源码项目详情页路由
 *    @param {*} group : 组
 *    @param {*} project : 项目
 */
export function createSourceDetailRoute ( group, project ) {
    if ( !group || !project ) {
        throw new Error(`createSourceDetailRoute fn param group of project empty!`);
    }

    const route = {
        name: 'source-detail',
        query: { 
            group,
            project
        }
    };
    return route;
}


/**
 *  新建模版项目列表路由
 *    @param {*} group : 组
 */
export function createTplProjectListRoute ( group ) {
    if ( !group ) {
        throw new Error(`createTplProjectListRoute fn param group empty!`);
    }

    const groupName = group.name;
    const route = {
        name: 'template-project-list',
        query: { 
            group: groupName
        }
    };
    return route;
}

/**
 *  新建模版项目Tpl列表路由
 *    @param {*} group : 组
 *    @param {*} project : 项目
 */
export function createTplsListRoute ( group, project ) {
    if ( !group || !project ) {
        throw new Error(`createTplsListRoute fn param group of project empty!`);
    }

    const route = {
        name: 'template-tpl-list',
        query: { 
            group,
            project
        }
    };
    return route;
}
