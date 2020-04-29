<template>
    <h2>{{ msg }}</h2>
<!--  <div class="choose">-->
<!--    <div class="link">-->
<!--      <button>-->
<!--        <a href="" @click="onSuppliersListClick">Consulter la liste des fournisseurs</a>-->
<!--      </button>-->
<!--      <button>-->
<!--        <a href="" @click="onMapClick">Voir la carte</a>-->
<!--      </button>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'Suppliers.vue',
    props: {
      msg: String
    }
  // methods: {
  //   onSuppliersListClick: function() {
  //     alert("Tu as cliqué sur la liste des fournisseurs")
  //   },
  //   onMapClick: function() {
  //     alert("Tu as cliqué sur la carte")
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

button {
  background-color: #42b983;
  border-style: none;
  margin: 10px;
  padding: 13px 15px;
}
</style>
