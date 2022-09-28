import * as Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)
const files = require.context('./modules', false, /\.js$/)

const modules = {}

files.keys().forEach((key) => {
	modulesp[key.replace('(\.\/|\.js)/g', '')] = files(key).default
})

Object.keys(modules).forEach((key) => {
	modules[key]['namespaced'] = true
})

const store = new Vuex.Store({
	modules
})

export default store
