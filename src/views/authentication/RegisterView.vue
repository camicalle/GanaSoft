<template>
    <div>
        <!-- Container -->
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
                <!-- Row -->
                <div class="w-full shadow-2xl xl:w-3/4 lg:w-11/12 flex">
                    <!-- Col -->
                    <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        style="background-image: url('https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
                    </div>
                    <!-- Col -->
                    <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center font-bold">Crear una Cuenta</h3>
                        <form @submit.prevent="insert" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Primer Nombre
                                    </label>
                                    <input v-model="person.primer_nombre"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="--" required />
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Segundo Nombre
                                    </label>
                                    <input v-model="person.segundo_nombre"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="--" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Primer Apellido
                                    </label>
                                    <input v-model="person.primer_apellido"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="--" required />
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Segundo Apellido
                                    </label>
                                    <input v-model="person.segundo_apellido"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="--" required />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Correo electronico
                                    </label>
                                    <input v-model="person.correo"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="email" placeholder="--" required />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Telefono
                                    </label>
                                    <input v-model="person.telefono"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="tel" placeholder="--" required />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="mb-2">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Usuario
                                    </label>
                                    <input v-model="person.usuario"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="--" required />
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-bold text-gray-700">
                                        Contraseña
                                    </label>
                                    <input v-model="person.contrasena"
                                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        type="password" placeholder="--" required />
                                </div>
                            </div>
                            <div class="mb-6 text-center">
                                <button
                                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Registrarse
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="/login">
                                    ¿Ya tienes una cuenta? Inicia Sesión
                                </a>
                            </div>
                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="/">
                                    Volver al Inicio
                                </a>
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
            person: {
                primer_nombre: '',
                segundo_nombre: '',
                primer_apellido: '',
                segundo_apellido: '',
                correo: '',
                telefono: '',
                usuario: '',
                contrasena: '',
                id_rol: 2,
                estado: 1
            },
        }
    },
    methods: {
        insert() {
            const api = import.meta.env.VITE_BASE_URL
            const url = api + 'jMpHsrSf/persons'

            axios.post(url, {
                primer_nombre: this.person.primer_nombre,
                segundo_nombre: this.person.segundo_nombre,
                primer_apellido: this.person.primer_apellido,
                segundo_apellido: this.person.segundo_apellido,
                correo: this.person.correo,
                telefono: this.person.telefono,
                usuario: this.person.usuario,
                contrasena: this.person.contrasena,
                id_rol: this.person.id_rol,
                estado: this.person.estado
            })
                .then((response) => {
                    if (response.status == 201) {
                        swal('Enhorabuena!', 'Registrado exitoso!', 'success').then(() => {
                            this.$router.push('/login')
                        })
                    } else {
                        swal('Error!', 'Algo salio mal!', 'error').then(() => {
                            location.reload()
                        })
                    }
                })
        },
    }
}
</script>