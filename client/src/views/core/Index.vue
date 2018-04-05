<template>
	<div class="index">
		<div class="left_wrap">
			<SideBar></SideBar>
		</div>
		<div class="right_wrap">
			<div class="wrap">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import SideBar from './sidebar'

export default {
	data () {
		return {
			
		}
	},
	components: {
		SideBar
	}
}
</script>

<style scoped lang="scss">
@import '../../style/common.scss';

.index {
	display: flex;
	height: 100%;
	background-color: #ccc;
	overflow: hidden;

	.left_wrap {
		position: relative;
		width: $sidebar-width;
		height: 100%;
		background-color: $sidebar-background-color;
	}

	.right_wrap {
		flex: 1;
		height: 100%;
		overflow: hidden;
		background-color: $mainview-background-color;

		.wrap {
			position: relative;
			height: 100%;
			overflow: auto;
		}
	}
}
</style>