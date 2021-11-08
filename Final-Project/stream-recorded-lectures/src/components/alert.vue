<template>
    <div class="alert alert-danger">{{message}}</div>
</template>
<script>
export default {
    props:['message']
}
</script>

<style scoped>
 .alert{
    border-radius: 0px;
}
.alert-danger{
    background-color:#e95454 ;
    color: white;
} 
</style>