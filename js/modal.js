const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  

  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
  }

  }

  Modal.buttonClose.onclick = () => {
    Modal.close()
    inputWeight.value = ""
    inputHeight.value = ""
  }

  window.addEventListener('keydown', handleKeyDown)

  function handleKeyDown (event) {
    if (event.key === 'Escape'){
      Modal.close()
      inputWeight.value = ""
      inputHeight.value = ""
      }
}
