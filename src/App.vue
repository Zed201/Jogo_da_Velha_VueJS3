<script>
import Comp from './components/comp.vue';
export default {
  name: "App",
  components: {
    Comp
  },
  data() {
    return {
      divis: document.getElementsByClassName("divi")
    }
  },
  methods: {
    ExtTXT(lin, col) {
      return (document.querySelector(`.linha-${lin}.coluna-${col}`).innerHTML)
    },
    Vencer() {
      for (let lin = 1; lin < 4; lin++){
        let valor1 = ""
        let valor2 = ""
        let valor3 = ""
        for (let col = 1; col < 4; col++){// Verificação na horizontal
            let c = String(col).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            let l = String(lin).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
          if (col == 1) {
              
                valor1 = this.ExtTXT(l, c)
            }
            if (col == 2) {
                valor2 = this.ExtTXT(l, c)
            }
            if (col == 3) {
                valor3 = this.ExtTXT(l, c)
            }
        }
        if (valor1 == valor2 && valor2 == valor3) {
            if (valor1 != "") {
                console.log(`${valor1} venceu!`)
            }
        }
    }
    for (let lin = 1; lin < 4; lin++){
        let valor1 = ""
        let valor2 = ""
        let valor3 = ""
        for (let col = 1; col < 4; col++){//Verficação na Vertical
            let l = String(col).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            let c = String(lin).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            if (col == 1) {
                valor1 = this.ExtTXT(c, l)
            }
            if (col == 2) {
                valor2 = this.ExtTXT(c, l)
            }
            if (col == 3) {
                valor3 = this.ExtTXT(c, l)
            }
        }
        if (valor1 == valor2 && valor2 == valor3 ) {
            if (valor1 != "") {
              console.log(`${valor1} venceu!`)
            }
        }
    }// Vitória na digonal (class , id)1(um, um) = 5(dois, dois) = 9(tres, tres) /
    if (this.ExtTXT("um", "um") == this.ExtTXT("dois", "dois") && this.ExtTXT("dois", "dois") == this.ExtTXT("tres", "tres")){
        if (this.ExtTXT("um", "um") != "") {
          console.log(`${this.ExtTXT("um", "um")} venceu`)
        }
    }//Vitória na diagonal inversa  3(um, tres) = 5(dois, dois) = 7(tres, um) \
    if (this.ExtTXT("um", "tres") == this.ExtTXT("dois", "dois") && this.ExtTXT("dois", "dois") == this.ExtTXT("tres", "um")){
        if (this.ExtTXT("um", "tres") != "") {
          console.log(`${this.ExtTXT("um", "tres")} venceu`)
        }
    }
    },
    tet() {
      for (let lin = 1; lin < 4; lin++){
        for (let col = 1; col < 4; col++){
          let c = String(col).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            let l = String(lin).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
          console.log(this.ExtTXT(l, c))
        }
      }
    }
  }
}

</script>
<template>
  <main>
    <div v-for="line in ['um','dois','tres']" :key="line">
    <Comp v-for="col in ['um','dois','tres']" :key="col" :classes="[`linha-${line}`, `coluna-${col}`]"/> 
  </div>
</main>
</template>
<style>
div{
  margin: 35px;
}
main{
  border: 1px solid blue;
  padding: 2px;
  display: inline-block;
  
}
</style>