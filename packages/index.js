import parent from './parent'
import child from './child'
import child2 from './child2'
export default {
	install(Vue) {
		Vue.use(parent)
		Vue.use(child)
		Vue.use(child2)
	},
}
