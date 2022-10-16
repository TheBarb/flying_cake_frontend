export const filterSweetTaste = (items) => {
  return items.filter(item => {
    return item.attributes.sweetnotsalty
  })
}

export const filterSaltyTaste = (items) => {
  return items.filter(item => {
    return !item.attributes.sweetnotsalty
  })
}