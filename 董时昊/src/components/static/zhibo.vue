<template>
    <div class="remen">
        <ul>
            <li>音乐</li>
            <li>历史</li>
            <li>情感生活</li>
            <li>音乐</li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"zhibo",
        data(){
            return {
                data:"adds"
            }
        }
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