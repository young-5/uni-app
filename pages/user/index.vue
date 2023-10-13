<template>
	<view>
		<button @click="goToHome">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToHome:()=>{
				uni.switchTab({
					url:"/pages/index/index",
				})
			}
		}
	}
</script>

<style>

</style>
