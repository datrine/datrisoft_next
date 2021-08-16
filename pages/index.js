import MobileIndex from "../comps/page_views/index/mobileView"
import PCIndex from "../comps/page_views/index/pcIndex"
import View from "../comps/view"

const Home = () => {
  return <View mobileView={<MobileView />} pcView={<PCView />} />
}

function MobileView(params) {
  return <><MobileIndex /></>
}

function PCView(params) {
  return <>
    <PCIndex />
  </>
}

export default Home
