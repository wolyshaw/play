export const hint = (state = {text: 'hint', show: false}, action) => {
  switch (action.type) {
    case 'show_hint':
      return {
        text: action.text,
        show: true
      }
    case 'hide_hint':
      return {
        text: '',
        show: false
      }
    default:
      return state
  }
}
