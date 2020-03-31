async function init() {
  await $('#navigation').load('./components/Navbar.html', () => {
    console.log('Navigation loaded')
  })

  await $('#footer').load('./components/Footer.html', () => {
    console.log('Navigation loaded')
  })
}
init()