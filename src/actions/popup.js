export const closePopup = callback => ({ type: 'close_popup', callback })

export const openPopup = (data = {}) => {
  return { type: 'open_popup', data }
}
