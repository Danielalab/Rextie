export const actionTypes = {
  NAVIGATION_TO : 'NAVIGATION_TO'    
};
  
export const navigationTo = (page) => ({
  type: actionTypes.NAVIGATION_TO,
  page,
});
  