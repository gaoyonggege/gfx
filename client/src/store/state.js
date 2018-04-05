/**
*  state对象
*		
*		menus 结构为:
*			[ { name: '模版管理', route: '/f' }, ... ]
*
*		user 结构为:
*			{ type: 100, email: '',  }
*
*
*/

export default {
	menus: [
		{
			name: '组管理',
			route: '/f/group'
		},
		{
			name: '项目管理',
			route: '/f/project'
		},
		{
			name: '模版管理',
			route: '/f/template/group-list'
		},
		{
			name: 'gfx文档',
			route: '/f/gfx'
		}	
	],	
	user: {
		type: 10000,
		email: 'gaoyonggege@gmail.com'
	}
}

