<template>
  <div>
    <div class="flex justify-center pt-4">
      <div class="container p-2">
        <div class="relative overflow-x-auto shadow p-4 sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">ID</th>
                <th scope="col" class="px-6 py-3">Identificacion</th>
                <th scope="col" class="px-6 py-3">Raza</th>
                <th scope="col" class="px-6 py-3">Sexo</th>
                <th scope="col" class="px-6 py-3">Estado</th>
                <th scope="col" class="px-6 py-3">Id Finca</th>
                <th scope="col" class="px-6 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="animal in paginatedAnimals" :key="animal.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ animal.id }}
                </th>
                <td class="px-6 py-4">
                  {{ animal.identificacion_animal }}
                </td>
                <td class="px-6 py-4">
                  {{ animal.raza }}
                </td>
                <td class="px-6 py-4">
                  {{ animal.sexo }}
                </td>
                <td class="px-6 py-4">
                  <!-- {{ animal.estado }} -->

                  <template v-if="animal.estado == 0"> Comprado </template>
                  <template v-else-if="animal.estado == 1"> Vendido </template>
                  <template v-else-if="animal.estado == 2"> Propio </template>
                  <template v-else> ¡Estado no encontrado! </template>
                </td>
                <td class="px-6 py-4">
                  {{ animal.id_finca }}
                </td>
                <td class="px-6 py-4 flex gap-2">
                  <button v-on:click="getId(animal.id)" @click="showEditModal = true" type="button"
                    class="px-2 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path
                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                  </button>
                  <button @click="deleteAnimal(animal.id)" type="button"
                    class="px-2 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-md hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                      <path fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <nav class="flex items-center justify-end pt-4" aria-label="Table navigation" v-show="animals != ''">
            <ul class="inline-flex items-center -space-x-px">
              <li :class="{ disabled: currentPage === 1 }">
                <a @click.prevent="prevPage"
                  class="block px-3 cursor-pointer py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Previous</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </li>
              <li :class="{ active: page === currentPage }" v-for="page in pages" :key="page">
                <a @click.prevent="goToPage(page)" :class="isActive(page)"
                  class="px-3 cursor-pointer py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  {{ page }}
                </a>
              </li>
              <li :class="{ disabled: currentPage === pageCount }">
                <a @click.prevent="nextPage"
                  class="block cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <span class="sr-only">Next</span>
                  <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- Main modal -->
        <div v-show="showEditModal">
          <div class="modal p-2">
            <div class="relative w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <form @submit.prevent="editAnimal()" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Agregar Animal</h3>
                  <button @click="showEditModal = false" type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="animalsCreateModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-6">
                      <label for="dueño" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seleccione
                        la Finca</label>
                      <select v-model="animal.id_finca" id="dueño" required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        
                        <option :value="animal.id_finca">{{ farm.id }} - {{ farm.nombre }}</option>

                        <template v-for="farm in farms" :key="farm.id">
                          <option :value="farm.id">{{ farm.id }} - {{ farm.nombre }}</option>
                        </template>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="address"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identificacion</label>
                      <input v-model="animal.identificacion_animal" type="text" name="address" id="address"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                      <input v-model="animal.nombre" type="text" name="name" id="name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required="" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="hectareas"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                      <input v-model="animal.descripcion" type="text" name="hectareas" id="hectareas"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="dimensiones" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha
                        Nacimiento</label>
                      <input v-model="animal.fecha_nacimiento" type="date" name="dimensiones" id="dimensiones"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="dimensiones"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Raza</label>
                      <input v-model="animal.raza" type="text" name="dimensiones" id="dimensiones"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="dueño" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sexo</label>
                      <select v-model="animal.sexo" id="dueño" required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled selected>Seleccione el sexo</option>
                        <option value="M">Macho</option>
                        <option value="F">Hembra</option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="dimensiones" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha
                        Ingreso</label>
                      <input v-model="animal.fecha_ingreso" type="date" name="dimensiones" id="dimensiones"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="dueño"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                      <select v-model="animal.estado" id="dueño" required
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                  class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Guardar
                  </button>
                  <button @click="showEditModal = false"
                    class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
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
      animals: [],
      perPage: 5,
      currentPage: 1,


      showEditModal: false,

      animal: {
        id_finca: null,
        id: 0,
        identificacion_animal: '',
        nombre: '',
        descripcion: '',
        fecha_nacimiento: '',
        raza: '',
        sexo: '',
        fecha_ingreso: '',
        estado: null,

      },
      farm: {},
      farms: []
    }
  },
  mounted() {
    const url = import.meta.env.VITE_BASE_URL
    const urlAnimals = url + 'wAG4EG_q/animals'

    axios.get(urlAnimals).then((response) => {
      this.animals = response.data
    })
  },
  computed: {
    pageCount() {
      return Math.ceil(this.animals.length / this.perPage)
    },
    paginatedAnimals() {
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return this.animals.slice(startIndex, endIndex)
    },
    pages() {
      const pages = []
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i)
      }
      return pages
    }
  },
  methods: {
    getId(id) {
      const url = import.meta.env.VITE_BASE_URL;
      const urlAnimals = url + 'wAG4EG_q/animals/' + id

      axios.get(urlAnimals)
        .then(response => {
          this.animal = response.data
          const urlFarms = url + 'ryDMil1F/farms/' + this.animal.id_finca

          axios.get(urlFarms)
            .then(response => {
              this.farm = response.data
            });
        });

      const urlFarms = url + 'ryDMil1F/farms'

      axios.get(urlFarms)
        .then(response => {
          this.farms = response.data;
        });
    },
    editAnimal() {
      const url = import.meta.env.VITE_BASE_URL;
      const urlAnimals = url + 'wAG4EG_q/animals/' + this.animal.id

      axios.put(urlAnimals, {
        identificacion_animal: this.animal.identificacion_animal,
        nombre: this.animal.nombre,
        descripcion: this.animal.descripcion,
        fecha_nacimiento: this.animal.fecha_nacimiento,
        raza: this.animal.raza,
        sexo: this.animal.sexo,
        fecha_ingreso: this.animal.fecha_ingreso,
        estado: this.animal.estado,
        id_finca: this.animal.id_finca
      })
        .then((response) => {
          if (response.status == 200) {
            swal("Enhorabuena!", "Animal actualizado con exito!", "success")
              .then(() => {
                location.reload()
              });
          } else {
            swal("Error!", "Algo salio mal!", "error")
              .then(() => {
                location.reload()
              });
          }
        });
    },
    deleteAnimal(id) {
      const url = import.meta.env.VITE_BASE_URL
      const urlAnimals = url + 'wAG4EG_q/animals/' + id

      swal({
        title: "Esta seguro?",
        text: "Esta seguro que desea elimiar este animal?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            axios.delete(urlAnimals, {
            })
              .then((response) => {
                if (response.status == 200) {
                  swal("Enhorabuena!", "Animal eliminado con exito!", "success")
                    .then(() => {
                      location.reload()
                    });
                } else {
                  swal("Error!", "Algo salio mal!", "error")
                    .then(() => {
                      location.reload()
                    });
                }
              });
          } else {
            swal("Animal no eliminada")
              .then(() => {
                location.reload()
              });
          }
        });
    },

    //Paginated
    goToPage(page) {
      this.currentPage = page
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.currentPage++
      }
    },
    isActive(page) {
      return page == this.currentPage ? 'bg-blue-50' : ''
    }
  }
}
</script>


<style>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(77, 81, 93, 0.8);
}
</style>