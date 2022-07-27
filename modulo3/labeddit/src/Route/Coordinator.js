export const goToSignUpPage = (navigate) => {
    navigate('/signup')
}
export const goToFeedPage = (navigate) => {
    navigate('/feed')
}
export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}
export const logout = (navigate) => {
    navigate('/')
    window.localStorage.removeItem('token')
}
export const goToLoginPage = (navigate) => {
    navigate('/')
}