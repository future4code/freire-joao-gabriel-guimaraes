export const goToHomePage = (navigate) => {
    navigate("/")
  }
export const goToVoltar = (navigate) => {
    navigate(-1)
  }
export const goToTeste = (navigate, user) => {
    navigate(`/${user}`)
  }
export const goToHistory = (navigate) => {
    navigate(`/history`)
  }


