import Alpine from 'alpinejs'

import State from '~/state'

import '~/assets/styles/style.css'
 
window.Alpine = Alpine

Alpine.data('state', State)

Alpine.start()

