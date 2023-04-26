<script>
import Comp from './components/comp.vue';
export default {
  name: "App",
  components: {
    Comp
  },
  methods: {
    ExtTXT(lin, col) {
      return (document.querySelector(`.linha-${lin}.coluna-${col}`).innerHTML)// Extração do "estado" das div's, basicamente extarir qual símbolo está em determinado espaço
    },
    Vencer() {
      let place = document.getElementById("msg")
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
                place.innerHTML = `${valor1} venceu!`
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
                valor1 = this.ExtTXT(l, c)
            }
            if (col == 2) {
                valor2 = this.ExtTXT(l, c)
            }
            if (col == 3) {
                valor3 = this.ExtTXT(l, c)
            }
        }
        if (valor1 == valor2 && valor2 == valor3 ) {
            if (valor1 != "") {
              place.innerHTML = `${valor1} venceu!`
            }
        }
    }// Vitória na digonal 1(um, um) = 5(dois, dois) = 9(tres, tres) /
    if (this.ExtTXT("um", "um") == this.ExtTXT("dois", "dois") && this.ExtTXT("dois", "dois") == this.ExtTXT("tres", "tres")){
        if (this.ExtTXT("um", "um") != "") {
          place.innerHTML = `${this.ExtTXT("um", "um")} venceu!`
        }
    }//Vitória na diagonal inversa  3(um, tres) = 5(dois, dois) = 7(tres, um) \
    if (this.ExtTXT("um", "tres") == this.ExtTXT("dois", "dois") && this.ExtTXT("dois", "dois") == this.ExtTXT("tres", "um")){
        if (this.ExtTXT("um", "tres") != "") {
          place.innerHTML = `${this.ExtTXT("um", "tres")} venceu!`
        }
    }
    }, 
    Trocar() {
      let vez = this.$store.state.vez
      if (vez == "O") {
        this.$store.commit("vezSet", "X")
      } else if (vez == "X") {
        this.$store.commit("vezSet", "O")
      }
    },
    Reiniciar() {//Limpar espaço por espaço
      let x = Array.from(document.getElementsByClassName("divi"))
      x.map((item) => { item.innerHTML = "" })
      document.getElementById("msg").innerHTML = ""
    }
  }
}
</script>
<template>
  <main>
    <div id="jogo"><!--Espaços do Jogo-->
      <Comp :classes="['linha-um', 'coluna-um']" @click="Vencer"/>
      <Comp :classes="['linha-um', 'coluna-dois']" @click="Vencer"/>
      <Comp :classes="['linha-um', 'coluna-tres']" @click="Vencer"/>
      <Comp :classes="['linha-dois', 'coluna-um']" @click="Vencer"/>
      <Comp :classes="['linha-dois', 'coluna-dois']" @click="Vencer"/>
      <Comp :classes="['linha-dois', 'coluna-tres']" @click="Vencer"/>
      <Comp :classes="['linha-tres', 'coluna-um']" @click="Vencer"/>
      <Comp :classes="['linha-tres', 'coluna-dois']" @click="Vencer"/>
      <Comp :classes="['linha-tres', 'coluna-tres']" @click="Vencer"/>
    <!--
      Infelizmente não consegui colocar de forma mais simples o Comp, para evitar repetir ele 9x, mas isso iria dificultar a organização e o visual planejado(no caso fica tudo mais fácil colocar 9x e usar o diplay grid), mas poderia ficar assim:
      <div v-for="line in ['um','dois','tres']" :key="line" id="linha">
        <Comp v-for="col in ['um','dois','tres']" :key="col" :classes="[`linha-${line}`, `coluna-${col}`]" @click="Vencer"/> 
      </div>
      Basicamente um código usando o v-for que repete o comp 3 vezes e dentro de uma div que funcionaria como linha e mais 2 divs dessa são criadas tudo certinho com as classes funcionando
    -->
    </div><!--Mensagens e Butões-->
      <p id="msg"></p>
      <p>É a vez do {{ $store.state.vez }} jogar</p>
    <p>
        <button @click="Trocar()">Mudar Vez</button>
        <button @click="Reiniciar()">Reiniciar</button>
    </p>
  </main>
</template>
<style>
body{
  background-color: rgba(46, 45, 45, 0.581);
}
main{
  background-color: rgba(88, 169, 239, 0.658);
  width: max-content;
  display: inline-block;
  margin: auto;
  position: absolute;
  left: 50vw;
  top: 8vh;
  transform: translate(-50%);
  border-radius: 8px;
}
#jogo{
  padding: 25px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}
p{
  text-align: center;
  font-family: monospace;
  color: rgb(37, 37, 37);
  font-size: x-large;
}
button{
  border: unset;
  margin: 5px;
  width: 90px;
  height: 25px;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(39, 123, 197, 0.658);
  box-shadow: 2px 3px 5px black;
  font-family: monospace;
}
button:hover{
  background-color: rgba(88, 168, 239, 0.538);
}
</style>