import { RightArrowAltIcon } from "@stylesComponents/icons"
import { ContainerStyle } from "./style"

interface StartContainerProps {
  isSideBar: boolean
}

const StartContainer = ({isSideBar} : StartContainerProps) => {
  return (
    <ContainerStyle isSideBar={isSideBar}>
      <img src="./barraca.png" alt="barraca" />
      <div className="start">
        <div className="text">
          Start your Adventure
          <span>Create Adventure with your friends</span>
        </div>
        <button type="button"><RightArrowAltIcon /></button>
      </div>
  </ContainerStyle>
  )
}

export default StartContainer