export const user_info = set => {
  let {nice_name, password, email} = set
  return {
    type: 'user_info',
    nice_name,
    password,
    email
  }
}
