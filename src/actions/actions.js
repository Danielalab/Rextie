export const actionTypes = {
  NAVIGATION_TO : 'NAVIGATION_TO',
  CHANGE : 'CHANGE'
};
  
export const navigationTo = (page) => ({
  type: actionTypes.NAVIGATION_TO,
  page,
});

export const navigationTran = (info) => ({
  type: actionTypes.CHANGE,
  info,
})
  