var app = new Vue({
    el: "#app",
    data: {
    message: "Hola jhosebro",
    },
});

let fechaActual = new Date();

var app2 = new Vue({
    el: "#app-2",
    data: {
    message:
        "Cargaste esta pagina el dia " +
        fechaActual.getDay() +
        " del mes " +
        fechaActual.getMonth() +
        " del año " +
        fechaActual.getFullYear() +
        " a las " +
        fechaActual.getHours() +
        ":" +
        fechaActual.getMinutes() +
        ":" +
        fechaActual.getSeconds(),
    },
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true,
    }
})

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: "Jhosebro mejora en desarrollo front-end" },
            { text: "Hoyos aprende a hacer una API sin errores" },
            { text: 'Cifuentes esta condenado a trabajar con Hoyos en OL software' }
        ]
    }
})

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Johan incumplido"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: "#app-6",
    data: { 
        message: "Hola jhosebro"
    }
})


Vue.component('lista-de-tareas', {
    props : ['lista'],
    template: '<li>{{ lista.text }}</li>',
})

var app7 = new Vue({
    el: "#app-7",
    data: { 
        listaDeTareas: [
            {id: 0, text: 'Jhosebro mejora en desarrollo front-end'},
            {id: 1, text: 'Hoyos aprende a hacer una API sin errores'},
            {id: 2, text: 'Cifuentes esta condenado a trabajar con Hoyos en OL software'},
        ]
    }
})