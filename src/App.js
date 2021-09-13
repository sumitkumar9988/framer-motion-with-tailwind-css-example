import SpotlightEffect from "./components/text/SpotlightEffect";
import Animate from './components/animation/Animate'
import Propagation from './components/animation/Propagation'
import Orchestration from './components/animation/Orchestration'
import Drag from './components/animation/Drag'
import Accordin from './components/animation/Accordin'
import GrowOnScroll from './components/animation/GrowOnScroll'


function App() {
  return (
    <div className="">
      {/* <SpotlightEffect tittle="Pfolio Animation Kit"/> */}
      <Animate/>
      <Propagation/>
      <Orchestration/>
      <Drag/>
      <Accordin/>
      <GrowOnScroll/>
      <Orchestration/>

    </div>
  );
}

export default App;
