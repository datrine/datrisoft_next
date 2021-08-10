import PCIndex from "../comps/page_views/index/pcIndex"
import View from "../comps/view"

const Home = () => {
return <View mobileView={<MobileView/> } pcView={<PCView/>} />
}

function MobileView(params) {
  
}

function PCView(params) {
  return<>
  <PCIndex/>
  </>
}

export default Home
