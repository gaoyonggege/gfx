/**
*   ajax管理
*/
import axios from 'axios'
import { Message } from 'element-ui'
import loading from '../views/components/loading.js'
import types from '../store/types';


let _Vue;
function ajaxInit ( Vue ) {
	if ( _Vue || !Vue ) {
		return null;
	}

	axios.defaults.timeout = 3*60*1000; // 超时时间5分钟
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
	axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
	
	axios.interceptors.request.use( (config) => {
			loading.openFullscreen();

			return config;
		}, (error) => {
				Message({  // 饿了么的消息弹窗组件,类似toast
					showClose: true,
					message: error,
					type: 'error'
				});
				return Promise.reject(error);
		});

	// 返回状态判断(添加响应拦截器)
	axios.interceptors.response.use( (response) => {
			loading.closeFullscreen();

			// 用户没有登录
			if ( response.data.err_code == 401 ) {
				// 清空vuex
				window.$store.commit( types.log_out );
				// 跳转到登录页面(注意是用了刷新页面的方式)
				//window.location.href = location.origin + '/fe/login';
				window.$app.logout();
				return null;
			}

			return response;
		}, function (error) {
			loading.closeFullscreen();

			return Promise.reject(error);
		});

	return axios;
}

export default ajaxInit
