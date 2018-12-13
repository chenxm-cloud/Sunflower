<template>
    <article>
        页面一
        <ui-example></ui-example>
    </article>
</template>
<script>
import clay from '../clay';
export default {
    mounted:function(){
        clay.post()('index.json',{},function(data){
            console.log(data);
        });
    }
}
</script>


