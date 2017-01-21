export const showLogin = set => {
  let {nice_name, password, email} = set
  return {
    type: 'show_login',
    nice_name,
    password,
    email
  }
}

export const hideLogin = () => ({
  type: 'hide_login'
})
