<template>
	<view>
		个人中心
		<button @click="goOut">退出登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}, 
		methods: {
			goOut:()=>{
				uni.navigateTo({
					url:"/pages/user/index"
				})
			}
		}
	}
</script>

<style>

</style>
