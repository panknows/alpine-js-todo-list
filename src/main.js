import Alpine from 'alpinejs'

import { TodosStore } from '~/store'

import '~/assets/styles/style.scss'
 
window.Alpine = Alpine

Alpine.store('todos', TodosStore)

Alpine.start()

