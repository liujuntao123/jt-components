import pkg from '../package.json';
import pagination from './pagination'


const components = [
  pagination
]


const install = function (app) {
  components.map(component => app.component(`jt${component.name}`, component))
}



const { version } = pkg;
export  {
  version,
  pagination
}

export default {
  version,
  install,
}
