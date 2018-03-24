/**
*   mutation
*/
import types from './types'

export default {
    [ types.get_common_info ] ( state, payload ) {
        if ( !payload ) {
            return false;
        }

        state.user = payload['user'];

        state.menus = payload['menus'];
    },
	[ types.logout ] ( state, payload ) {
        state.user = null;
        state.menus = null;
    }
}
