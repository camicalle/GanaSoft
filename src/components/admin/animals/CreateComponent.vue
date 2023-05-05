<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div>
    <div class="flex justify-center pt-4">
      <div class="container p-2">
        <!-- Modal toggle -->
        <button
          data-modal-target="animalsCreateModal"
          data-modal-toggle="animalsCreateModal"
          class="block font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Agregar Animal
        </button>

        <!-- Main modal -->
        <div
          id="animalsCreateModal"
          data-modal-backdrop="static"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <form
              @submit.prevent="insertAnimal"
              class="relative bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <!-- Modal header -->
              <div
                class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
              >
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Agregar Animal</h3>
                <button
                  @click.prevent="close"
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="animalsCreateModal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-6">
                    <label
                      for="dueño"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Seleccione la Finca</label
                    >
                    <select
                      v-model="animal.farm"
                      id="dueño"
                      required
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled selected>Seleccion la finca</option>
                      <template v-for="farm in farms" :key="farm.id">
                        <option :value="farm.id">{{ farm.id }} - {{ farm.nombre }}</option>
                      </template>
                    </select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="address"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Identificacion</label
                    >
                    <input
                      v-model="animal.identificacion_animal"
                      type="text"
                      name="address"
                      id="address"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Nombre</label
                    >
                    <input
                      v-model="animal.nombre"
                      type="text"
                      name="name"
                      id="name"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="hectareas"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Descripcion</label
                    >
                    <input
                      v-model="animal.descripcion"
                      type="text"
                      name="hectareas"
                      id="hectareas"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="dimensiones"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Fecha Naci.</label
                    >
                    <input
                      v-model="animal.fecha_nacimiento"
                      type="text"
                      name="dimensiones"
                      id="dimensiones"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="dimensiones"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Raza</label
                    >
                    <input
                      v-model="animal.raza"
                      type="text"
                      name="dimensiones"
                      id="dimensiones"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    
                    <select
                    v-model="animal.sexo"
                    id="dueño"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>Seleccione el sexo</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="dimensiones"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Fecha Ingr.</label
                    >
                    <input
                      v-model="animal.fecha_ingreso"
                      type="text"
                      name="dimensiones"
                      id="dimensiones"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                  <select
                    v-model="animal.estado"
                    id=""
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled selected>Seleccione el estado</option>
                    <option value="0">Comprado</option>
                    <option value="1">Vendido</option>
                    <option value="2">Propio</option>
                  </select>
                </div>
                </div>
              </div>
              <!-- Modal footer -->
              <div
                class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
              >
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Guardar
                </button>
                <button
                  @click="close"
                  type="button"
                  data-modal-hide="animalsCreateModal"
                  class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
  data() {
    return {
      animal: {
        identificacion_animal: '',
        nombre: '',
        descripcion: '',
        fecha_nacimiento: '',
        raza: '',
        sexo: '',
        fecha_ingreso: '',
        estado:null,
        farm: null
      },
      farms: []
    }
  },
  mounted() {
    const url = import.meta.env.VITE_BASE_URL
    const urlFarms = url + 'ryDMil1F/farms'

    axios.get(urlFarms).then((response) => {
      this.farms = response.data
    })
  },
  methods: {
    insertAnimal() {
      const url = import.meta.env.VITE_BASE_URL
      const urlAnimals = url + 'wAG4EG_q/animals'

      axios.post(urlAnimals, {
          identificacion_animal: this.animal.identificacion_animal,
          nombre: this.animal.nombre,
          descripcion: this.animal.descripcion,
          fecha_nacimiento: this.animal.fecha_nacimiento,
          raza: this.animal.raza,
          sexo: this.animal.sexo,
          fecha_ingreso: this.animal.fecha_ingreso,
          estado: this.animal.estado,
          id_finca: this.animal.farm
        })
        .then((response) => {
          if (response.status == 201) {
            swal('En hora buena!', 'Animal registrado con exito!', 'success').then(() => {
              location.reload()
            })
          } else {
            swal('Error!', 'Algo salio mal!', 'error').then(() => {
              location.reload()
            })
          }
        })
    },
    close() {
        (this.animal.identificacion_animal = ''),
        (this.animal.nombre = ''),
        (this.animal.descripcion = ''),
        (this.animal.fecha_nacimiento = ''),
        (this.animal.raza = ''),
        (this.animal.sexo = ''),
        (this.animal.estado = null),
        (this.animal.farm = null)
    }
  }
}
</script>