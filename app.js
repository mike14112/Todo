const App = {
    data(){
        return {
            title:'თქვენი შენიშვნები',
            notes:[],
            inputValue: '',
            
        }
    
    },

    methods: {

        addNewNote(){
        if(this.inputValue !== ''){
            this.notes.push(this.inputValue)
            this.inputValue = ''

        }
     
        }  ,
        deleteNote(index){
            this.notes.splice(index, 1)
        },
        key(e){
console.log(e.keypress)
        }
      }

}

Vue.createApp(App).mount('#app')