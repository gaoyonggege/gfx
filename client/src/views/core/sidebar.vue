<template>
	<el-menu mode="vertical" class="sidebar" :unique-opened="true"
      :router="true" default-active="activeIndex">
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
			return this.$store.state.menus;
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
