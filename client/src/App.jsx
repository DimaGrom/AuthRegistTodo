import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'

import useToken from './common/useToken.js'
import useUser from './common/useUser.js'

import Nav from './components/Nav/Nav.jsx'
import Registration from './components/Registration/Registration.jsx'
import User from './components/User/User.jsx'
import LogOut from './components/LogOut/LogOut.jsx'
import LogIn  from './components/LogIn/LogIn.jsx'


const App = () => {

  const {isToken, setIsToken} = useToken()
  const {isUser, setIsUser} = useUser()

  return(
    <>
     <BrowserRouter>
          <Nav 
            isToken={isToken}
            setIsToken={setIsToken} 
            isUser={isUser}
           />
          {
            isToken
              ? <Switch>
                 <Route path='/user' >
                  <User 
                    isToken={isToken} 
                    setIsToken={setIsToken}
                  />
                 </Route>
                 <Route path='/logOut'>
                   <LogOut 
                     isToken={isToken} 
                     setIsToken={setIsToken} 
                    />
                 </Route>
                </Switch> 
              : <Switch>
                  <Route path='/registration' >
                    <Registration 
                      setIsToken={setIsToken} 
                      setIsUser={setIsUser}
                     />
                  </Route>
                  <Route path='/login' >
                    <LogIn 
                      setIsToken={setIsToken} 
                      setIsUser={setIsUser}
                    />
                  </Route>
                </Switch>
          }              
        </BrowserRouter>
    </>
   )
  
}


export default App;