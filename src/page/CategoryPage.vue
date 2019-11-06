<template>
    <div>
        <div>{{name}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {name: "分类"}
        },
        created() {
            console.log("created");
        },
        destroyed() {
            console.log("destroyed");
        }
    }
</script>

<style scoped>

</style>