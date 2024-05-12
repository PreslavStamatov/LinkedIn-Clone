import HiringSection from "./HiringSection"
import './styles/CentralContainer.css'
import PostWritingSection from './PostWritingSection'

function CentralContainer(props:any) {
  return (
    <div id='central-container'>
      <HiringSection></HiringSection>
      <PostWritingSection></PostWritingSection>
      
    </div>
    
  )
}

export default CentralContainer