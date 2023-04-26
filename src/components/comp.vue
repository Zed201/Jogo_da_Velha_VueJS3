<script>
export default {
    name: "Comp",
    props: {
        classes: {
            type: Array
        }
    },
    methods: {
        Trocar() {
      let vez = this.$store.state.vez
      if (vez == "O") {
        this.$store.commit("vezSet", "X")
      } else if (vez == "X") {
        this.$store.commit("vezSet", "O")
      }
        },
        Clicar(e) {
            e.srcElement.innerHTML = this.$store.state.vez
            this.Trocar()
        }
    }   
}
</script>
<template>
    <div :class="[classes, 'divi']" @click="Clicar" id="dvi"></div>
</template>
<style scoped>
div{
    border: 1px black solid;
    width: 110px;
    height: 110px;
    display: inline-block;
    background-color: whitesmoke;
    text-align: center;
    cursor: pointer;
    line-height: 105px;
    font-size: 115px;
    border-radius: 2px;
    font-family: cursive;
    color: rgba(34, 34, 34, 0.856);
}
</style>