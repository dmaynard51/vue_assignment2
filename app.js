const app = Vue.createApp({
    data() {
        return {
            output: "",
            input: ""
        }
    },
    methods: {
        alertMethod(){
            alert("this is an alert");
        },

        showInput(event) {
            this.input = event.target.value;
        },

        registerOutput(event){
            this.output = event.target.value;

        },
    }
});

app.mount('#assignment')