<template>
	<el-menu mode="vertical" class="sidebar" :unique-opened="true"
      :router="true">
		<el-menu-item :index="menu.route" v-for="(menu, index) in menus" :key="index">
			{{ menu.name }}
		</el-menu-item>
	</el-menu>
</template>

<script>

export default {
    data () {
        return {
		  	
	  	}
	},
	computed: {
		menus () {
			return [
				{
					name: '目录管理',
					route: '/f/dir'
				},
				{
					name: '项目管理',
					route: '/f/project'
				},
				{
					name: '模版管理',
					route: '/f/template'
				},
				{
					name: 'gfx文档',
					route: '/f/gfx'
				}
			];
		},
		activeIndex () {
			// 如果遇见动态路由，会用路由参数替换匹配的key，实现菜单高亮
			let tempPath = this.$route.matched[2].path;
		}
	},
	methods: {
				
	}
}
</script>
