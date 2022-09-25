<template>
	<div class="common-layout">
		<router-view />
	</div>
</template>

<style>
	.el-header {
		--el-header-height: 100%
	}

	.solar-system {
		background: url(@/assets/sky.png);
	}

	.many-objects {
		display: none;
	}
</style>


<script>
	export default {
		name: 'App',
		mounted() {},
	}
</script>
