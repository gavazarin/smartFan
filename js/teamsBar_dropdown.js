const $teamsBar = document.querySelector('.teamsBar__header')
const $teamsBarItem = document.querySelector('.menu__item--desporto')
const $teamsBarOpen = document.querySelector('.icon-down')
const $teamsBarClose = document.querySelector('.icon-up')

$teamsBarOpen.addEventListener('click', function() {
    $teamsBar.classList.add('teamsBar_open')
    $teamsBarItem.classList.remove('desporto-closed')
    $teamsBarItem.classList.add('desporto-opened')
})

$teamsBarClose.addEventListener('click', function() {
    $teamsBar.classList.remove('teamsBar_open')
    $teamsBarItem.classList.remove('desporto-opened')
    $teamsBarItem.classList.add('desporto-closed')
})