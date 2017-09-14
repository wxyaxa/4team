<template>
	<main>
		<ul>
        	<router-link tag='li' :to="{path:'/home/hot'}">热门</router-link>
        	<router-link tag='li' :to="{path:'/home/fen'}">分类</router-link>
        	<router-link tag='li' :to="{path:'/home/jing'}">精品</router-link>
        	<router-link tag='li' :to="{path:'/home/bord'}">直播</router-link>
        	<router-link tag='li' :to="{path:'/home/guang'}">广播</router-link>
        </ul>
		<router-view></router-view>
	</main>
</template>
<script>
	export default{
		name:'home',
        data(){
            return {
                name:'wxy'
            }
        },
        components:{

        }
	}
</script>
<style scoped>
	ul{
		display: flex;
		background: #f3f4f6;
	}
	li{
		flex:1;
		text-align: center;
		margin: 10px;
	}
</style>