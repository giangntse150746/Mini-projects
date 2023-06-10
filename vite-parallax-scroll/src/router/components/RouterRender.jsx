import React, { useEffect } from 'react'
import { IRouteRender } from '../model-router-helper/IRouterHelper'
import { Route } from 'react-router-dom'
import { Redirect, useHistory } from 'react-router'
import useAuth from '@app/hooks/use-auth'
import { toast } from 'react-toastify'
import { ToastComponent } from '@app/components'
import { useDispatch, useSelector } from '@app/hooks'
import { setLoaded } from '@app/slices/page-title'

const RouterRender= (props) => {
  const dispatch = useDispatch()
  const isLoaded = useSelector((state) => state.pageTitle.isReload)
  const { routes } = props
  const history = useHistory()
  const auth = useAuth()
  let isCurrentPath = false
  const currentPath = history.location.pathname

  // useEffect(() => {
  //   if (currentPath !== '/') {
  //     auth
  //       .isAuthenticated()
  //       .then((response) => {
  //         if (response) {
  //           dispatch(setLoaded(response))
  //           // history.push('/dashboard');
  //         } else {
  //           toast(<ToastComponent type="failed" content="Session expired" />)
  //           history.push('/')
  //         }
  //       })
  //       .catch(() => {
  //         history.push('/')
  //       })
  //   } else {
  //     auth
  //       .isAuthenticated()
  //       .then((response) => {
  //         if (response) {
  //           dispatch(setLoaded(response))
  //           history.push('/dashboard')
  //         } else {
  //         }
  //       })
  //       .catch(() => {
  //         history.push('/')
  //       })
  //   }
  // }, [])

  return (
    <>
      {routes.map((r) => {
        const { layout: Layout, component: Component } = r
        if (currentPath === r.path) {
          isCurrentPath = true
        }
        if (Layout) {
          return (
            <Route
              key={r.path}
              path={r.path}
              render={() => (
                <Layout>
                  <Component />
                </Layout>
              )}
              exact={r.exact}
            />
          )
        }
        return <Route key={r.path} path={r.path} component={Component} exact={r.exact} />
      })}
      {!isCurrentPath && isLoaded && <Redirect to="/notfound" />}
    </>
  )
}

export default RouterRender
