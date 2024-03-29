
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
 
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css"
 
library.add(faBars)

import 'w3-css'

function MyApp({Component,...pageProps}) {
    return <Component {...pageProps}/>
}

export default MyApp;