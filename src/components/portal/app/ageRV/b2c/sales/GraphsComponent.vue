<script lang="ts">
import {defineComponent} from 'vue'
import {Chart} from "chart.js/auto";


export default defineComponent({
  name: "GraphsComponent",
  data: () => {
    return {
      graph: {
        screen: 'commission'
      }
    }
  },
  methods: {
    graphSalesWeek: function () {

      let ctxx = document.getElementById('graphSalesWeek') as HTMLCanvasElement;
      const ctx = ctxx.getContext('2d')


      const dayName: any = []
      const values: any = []

      // this.data.sales.salesLast7Days.forEach((item) => {
      //   dayName.push(item.dayName)
      //   values.push(item.sales)
      // })

      const barCollors = [
        '#6C6EF6',
        '#F0F0FC',
        '#6C6EF6',
        '#F0F0FC',
        '#6C6EF6',
        '#F0F0FC',
        '#6C6EF6'
      ]

      const dataConfig = {
        labels: dayName,
        datasets: [{
          data: values,
          label: 'Vendas',
          borderWidth: 0,
          pointRadius: 0,
          borderRadius: 30,
          backgroundColor: barCollors,
          borderSkipped: false,
          maxBarThickness: 20,
          categoryPercentage: .8,
          type: 'bar',
        }],
      }


      const graphSalesWeek = new Chart(ctxx, {
        data: dataConfig,
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: true,
              grid: {
                display: false
              },
              border: {
                display: false
              },
              ticks: {
                color: 'rgba(89, 91, 106, 0.48)'
              },

            }
          },
          plugins: {
            legend: {
              display: false
            }
          },
          elements: {}
        }
      });

      return graphSalesWeek
    },

  }
})
</script>

<template>

    <div class="graphs">
      <div class="list-options">
        <ul>
          <li :class="{'select' : graph.screen === 'commission'}" @click="graph.screen = 'commission'">Comissão</li>
          <li :class="{'select' : graph.screen === 'sales'}" @click="graph.screen = 'sales'">Vendas</li>
          <li :class="{'select' : graph.screen === 'bonus'}" @click="graph.screen = 'bonus'">Bônus</li>
          <li :class="{'select' : graph.screen === 'stars'}" @click="graph.screen = 'stars'">Estrelas</li>
        </ul>
      </div>
      <div class="graph">
        <template v-if="graph.screen === 'commission'">
          <canvas id="graphSalesWeek"></canvas>
        </template>
        <template v-else-if="graph.screen === 'sales'">
          <p>Vendas</p>
        </template>
        <template v-else-if="graph.screen === 'bonus'">
          <p>Bônus</p>
        </template>
        <template v-else-if="graph.screen === 'stars'">
          <p>Estrelas</p>
        </template>
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
        cursor: pointer;
        transition: all ease-in-out .2s;

        &:hover {
          color: #026FEE;
          border-bottom: 1px solid #026FEE;
        }

      }


      .select {
        color: #026FEE;
        border-bottom: 1px solid #026FEE;
      }
    }
  }


  .graph {
    width: 100%;
    height: 90%;
    padding: 2vh 0;
  }
}

</style>