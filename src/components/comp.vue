<script>
export default {
    name: "Comp",
    data() {
        return {
            sig: "X"
        }  
    },
    props: {
        classes: {
            type: Array
        }
    },
    methods: {
        alter() {
            if (this.sig == "X") {
                this.sig = "O"
            } else if (this.sig == "O") {
                this.sig = "X"
            }
        }
    },
    
}
</script>
<template>
    <div @click="alter" :class="[classes, 'divi']">{{ sig }}</div>
</template>
<style scoped>
div{
    cursor: pointer;
    display: inline;
    width: 60px;
    height: 60px;
    margin: 10px;
    line-height: 60px;
    font-size: 58px;
    border: 2px solid black;
    padding: 8px;
}
</style>