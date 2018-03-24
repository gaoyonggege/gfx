/**
*  路由
*/
import VueRouter from 'vue-router';
import routes from './routes.js';
import config from '../config/config';

/**
*  路由全局钩子
*/

function beforeEach ( to, from, next ) {
	// const loginUri = config.uri.login;
	
	// let user = window.$store.state.user,
	// 		fromPath = from.path,toPath = to.path;
	// if ( !user ) {
	// 	if ( toPath == loginUri ) {
	// 		next();
	// 	} else {
	// 		next( loginUri );
	// 	}
	// } else {
	// 	if ( toPath == loginUri ) {
	// 		next('/');
	// 	} else {
	// 		next();
	// 	}
	// }
	next();
}

function afterEach ( to, from ) {
	
}

let _Vue,router;
function init ( Vue ) {
	if ( _Vue || !Vue ) {
		return null;
	}

	_Vue = Vue;

	Vue.use(VueRouter);

	// 将router顺带绑定到widnow上,方便有些情况下需要在一些js环境中控制路由
	router = new VueRouter({
	  mode: 'history',
	  routes
	});

	// add global beforeEach
	router.beforeEach( beforeEach );
	router.afterEach( afterEach );

	return router;
}


export default init
