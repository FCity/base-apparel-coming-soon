let form = document.getElementById('form')
let email = document.getElementById('email')
let formBtn = document.getElementById('btn-form')
let iconErr = document.getElementById('icon-error')
let alertErr = document.getElementById('alert-error')

formBtn.addEventListener('click', emailMatch)

window.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    emailMatch()
  }
})

function emailMatch() {
  if (!email.value.match(/.+@.+[.](com|net|org|edu|gov)/)) {
    form.style.border = '3px solid var(--soft-red)'
    iconErr.style.display = 'inline-block'
    alertErr.style.display = 'block'
  } else {
    form.style.border = '1px solid var(--desat-red)'
    iconErr.style.display = 'none'
    alertErr.style.display = 'none'
  }
}