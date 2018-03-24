/**
*  校验
*/

/**
 * 校验邮箱
 * @param {*} email
 */
export function validateEmail ( email ) {
	return /.+@.+/.test(email);
}

/**
 * 校验密码
 * @param {*} pwd 
 */
export function validatePwd ( pwd ) {
	return /^[a-zA-Z0-9]{6,15}$/.test(pwd);
}


