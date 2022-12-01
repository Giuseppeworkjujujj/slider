Vue.config.devtools = true;
Vue.config.debug = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            contatore: 0,
            
            img: [
                "img/p1.jpg",
                "img/p2.jpg",
                "img/p3.jpg",
                "img/p4.jpg",
            ]
          
        },
        methods: {
            next: function() {
                this.contatore++
                if (this.contatore > 3) {
                    this.contatore = 0;
                }
           },
           prev: function() {
            this.contatore--
            if (this.contatore < 0) {
                this.contatore = 3;
            }
             },
        }
    }
)