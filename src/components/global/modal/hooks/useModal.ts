import { useState } from "react"
import { ModalConfigProps } from "../types/modal"

const useModal = () => {
  const [modalConfig, setModalConfig] = useState<ModalConfigProps>(null)
  const [isShown, setIsShown] = useState(false)

  const showModal = (config: ModalConfigProps) => {
    setModalConfig(config)
    setTimeout(() => {
      setIsShown(true)
    }, 10)
  }

  const hideModal = () => {
    setIsShown(false)

    setTimeout(() => {
      setModalConfig(null)
    }, 300)
  }

  return { isShown, showModal, hideModal, modalConfig }
}

export default useModal
