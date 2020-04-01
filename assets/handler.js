async function init() {
  await $('#navigation').load('./components/Navbar.html')
  await $('#footer').load('./components/Footer.html')
}
init()