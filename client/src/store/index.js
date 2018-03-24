/**
*   状态管理
*/
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import plugin from './plugin'

let _Vue,store;
function init ( Vue ) {
	if ( _Vue || !Vue ) {
		return null;
	}
	Vue.use( Vuex );

	store = new Vuex.Store({
	    state,
	    mutations,
		actions,
		getters,
		plugins: [plugin]
	});

	return store;
}
	

export default init