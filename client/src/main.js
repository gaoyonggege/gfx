import './style/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './style/common.scss';

import Vue from 'vue'
import types from './store/types';
import init from './init'
import App from './App'

init( Vue ).then( data => {
	let { router,store } = data;
	
	// 新建并保存实例
	window.$app = new Vue( {
	  router,
	  store,
	  render: r => r(App),
	  methods: {
	        ajaxError ( responseList ) {
	            if ( !responseList ) {
	                return false;
	            }

	            if ( !Array.isArray( responseList ) ) {
	                responseList = [ responseList ];	
	            }

	            for ( let response of responseList ) {
	                if ( response.data.err_code != 0 ) {
	                    this.$message.error( response.data.err_msg );
	                    return true;	
	                }		
	            }	

	            return false;	
			},
			logout () {   // 退出
				this.$store.commit( types.logout );
				this.$router.push( { name: 'login' } );
			}	
	  }
  }).$mount('#app');
  
  const welcome = [];
  welcome.push(`   gfx: 一个前端持续构建平台`);
  welcome.push(`   @author: gaoyonggege@gmail.com `);

  console.log( welcome.join('/n') );
} ).catch( err => {
	console.log(`init err : ${err}`);
} );
