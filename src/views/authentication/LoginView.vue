<template>
    <div>
        <!-- Container -->
        <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
                <!-- Row -->
                <div class="w-full shadow-2xl xl:w-3/4 lg:w-11/12 flex">
                    <!-- Col -->
                    <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                        style="background-image: url('https://images.pexels.com/photos/461960/pexels-photo-461960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
                    </div>
                    <!-- Col -->
                    <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 class="pt-4 text-2xl text-center font-bold">Bienvenido a GanaSoft</h3>
                        <form @submit.prevent="login" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                    Usuario
                                </label>
                                <input v-model="username"
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="text" placeholder="--" required />
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                    Contraseña
                                </label>
                                <input v-model="password"
                                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    type="password" placeholder="--" required />
                                <!-- <p class="text-xs italic text-red-500">Please choose a password.</p> -->
                            </div>
                            <div class="mb-6 text-center">
                                <button
                                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Entrar
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="/register">
                                    Registrarse
                                </a>
                            </div>
                            <div class="text-center">
                                <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="#">
                                    ¿Ha olvidado su contraseña?
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
import swal from 'sweetalert'
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: '',
            users: {}
        }
    },
    mounted() {
        const api = import.meta.env.VITE_BASE_URL
        const url = api + 'jMpHsrSf/persons'

        axios.get(url).then((response) => {
            this.users = response.data
        })
    },
    methods: {
        login() {
            const usernameIndex = this.users.findIndex((e) => e.usuario === this.username);
            const passwordIndex = this.users.findIndex((e) => e.contrasena === this.password);

            if (usernameIndex !== -1 && passwordIndex !== -1) {
                const user = {
                    username: this.username,
                    password: this.password,
                    rol: this.users[usernameIndex].id_rol,
                    person: this.users[usernameIndex].id
                };

                localStorage.setItem('user', JSON.stringify(user));

                swal("¡Enhorabuena!", "Inicio de sesión exitoso", "success")
                    .then(() => {
                        this.$router.push('/dashboard');
                    });
            } else {
                swal("¡Error!", "Usuario o contraseña incorrectos", "error");
            }
        },
    }
}
</script>