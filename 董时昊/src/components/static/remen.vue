<template>
    <div class="remen">
        <ul>
            <router-link :to="{path:'/remen/remenchild'}" tag='li'>音乐</router-link>
            <li>历史</li>
            <li>情感生活</li>
            <li>音乐</li>
        </ul>
        <ul>
            <li>音乐</li>
            <li>历史</li>
            <li>情感生活</li>
            <li>音乐</li>
        </ul>
        <ul>
            <li>音乐</li>
            <li>历史</li>
            <li>情感生活</li>
            <li>音乐</li>
        </ul>
        <ul>
            <li>音乐</li>
            <li>历史</li>
            <li>情感生活</li>
            <li>音乐</li>
        </ul>
             <router-view></router-view>
    </div>

</template>    
<script>

    export default{
        name:'remen'
    }
</script>
<style>
    .remen{
        margin-top: 50px;
    }
    ul{
        display: flex;
    }
    ul>li{
        flex:1;
    }
</style>