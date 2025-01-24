
export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value) {
    return navigateTo('/login') 
  }
  // if (to.query.id === '2') {
  //   return abortNavigation()
  // }
})