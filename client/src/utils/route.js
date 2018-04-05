/**
 * 路由工具集合
 *   @author: gaoyonggege@gmail.com
 */


export function newTplProjiectListRoute ( group ) {
    if ( !group ) {
        throw new Error(`newTplProjiectListRoute fn param group empty!`);
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