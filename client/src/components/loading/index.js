/**
* element 全页面loading
* @author: gaoyong@weiyankeji.cn
* @date: 2017.11.30
*/
import { Loading } from 'element-ui';


// 全页面loading实例
let fullscreenLoading;
let fullscreenTimer,
        fullscreenCloseTimer;
const fullscreenWait = 500, //loading 等待 单位(毫秒)
        fullscreenCloseWait = 30000; // 超时关闭  单位(毫秒)

const targetMap = new Map();

const loading = {
    /**
     *  开始全页面loading
     */
    openFullscreen () {
        if ( fullscreenTimer ) {
            clearTimeout(fullscreenTimer);
            fullscreenTimer = null;
        }

        fullscreenTimer = setTimeout( () => {
            fullscreenLoading = Loading.service({ fullscreen: true });

            fullscreenCloseTimer = setTimeout( () => {
                loading.closeFullscreen();
            }, fullscreenCloseWait);
        }, fullscreenWait);
    },
    /**
     *   关闭全页面loading
     */
    closeFullscreen () {
        if ( fullscreenTimer ) {
            clearTimeout(fullscreenTimer);
            fullscreenTimer = null;
        }

        if ( fullscreenCloseTimer ) {
            clearTimeout(fullscreenCloseTimer);
            fullscreenCloseTimer = null;
        }

        if ( fullscreenLoading ) {
            fullscreenLoading.close();
            fullscreenLoading = null;
        }
    }
};

export default loading;
