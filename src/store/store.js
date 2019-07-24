import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        start: '',
        end: ''
    },
    mutations:{
        changeStart(state, msg) {
            state.start = msg;
            console.log(state.start);
            return 0;
        },
        changeEnd(state, msg) {
            state.end = msg;
            console.log(state.end);
            return 0;
        }
    }
})
export default store