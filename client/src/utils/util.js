/**
* 各类工具集
*   @author: gaoyonggege@gmail.com
*/

/**
 * 下载
 *  @param {*} group : url
 */
export function download ( url ) {
    if ( !url ) {
        return false;
    }
    // 下载
    location.href = url;
}