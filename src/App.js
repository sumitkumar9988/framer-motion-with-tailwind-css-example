import SpotlightEffect from "./components/text/SpotlightEffect";
import Animate from './components/animation/Animate'
import Propagation from './components/animation/Propagation'
import Orchestration from './components/animation/Orchestration'
import Drag from './components/animation/Drag'
import Accordin from './components/animation/Accordin'
import ScrollEffect from './components/animation/ScrollEffect.js'
import ScrollEffect2 from './components/animation/ScrollEffect2.js'
import AutoNavbar from './components/animation/AutoNavbar'
import MenuHover from './components/animation/MenuHover'




function App() {
  return (
    <div className="">
      {/* <AutoNavbar/> */}
      <SpotlightEffect tittle="Pfolio Animation Kit"/>
      <Animate/>
      <Propagation/>
      <Orchestration/>
      <Drag/>
      <Accordin/>
      <ScrollEffect/>
      <MenuHover/>
    </div>
  );
}

export default App;
