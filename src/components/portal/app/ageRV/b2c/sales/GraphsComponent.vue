<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "GraphsComponent"
})
</script>

<template>

    <div class="graphs">
      <div class="list-options">
        <ul>
          <li>Comissão</li>
          <li>Vendas</li>
          <li>Bônus</li>
          <li>Estrelas</li>
        </ul>
      </div>

    </div>
</template>

<style scoped lang="scss">

.graphs {
  background-color: #fff;
  border-radius: 1vw;
  border: 1px solid #5F687A30;
  padding: 2vh 1vw;
  height: 100%;

  .list-options {
    ul {
      @include flex(row, flex-start, center, 1vw);
      border-bottom: 1px solid #00000015;

      li {
        padding: 1.5vh 0;
        font-size: 1.5rem;
        font-weight: 500;

      }

      li:nth-child(1) {
        color: #026FEE;
        border-bottom: 1px solid #026FEE;
      }
    }
  }
}

</style>