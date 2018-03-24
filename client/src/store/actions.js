/**
*   action
*/
import types from './types'

export default {
    [ types.get_common_info ] ( { commit } ) {
        return new Promise( ( resolve, reject ) => {
            window.$arf.common.getCommonInfo()
                .then( ( response ) => {
                    if ( 0 === response.data.err_code ) {
                        commit(types.get_common_info, response.data.data);
                    }

                    resolve(response.data.data);  // 把结果折射出去
                } );
        } );
    }
}
