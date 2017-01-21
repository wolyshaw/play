export const get_user = set => {
  let {nice_name, password, email} = set
  return {
    type: 'get_user',
    nice_name,
    password,
    email
  }
}
