const tg = window.Telegram.WebApp

export function useTelegram() {

  const handleOnClose = () => {
    tg.close()
  }

  const handleOnToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
    }
  }
  
  return {
    handleOnClose,
    handleOnToggleButton,
    tg, 
    user: tg.initDataUnsafe?.user?.username,
  }
}