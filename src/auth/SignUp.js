import React, {useEffect, useState} from 'react';
import * as firebaseui from 'firebaseui';
import "firebaseui/dist/firebaseui.css"
import app  from '../fireBaseConfig.js'



function SignUp() {

    useEffect(() => {
        const ui =
            firebaseui.auth.AuthUI.getInstance() ||
            new firebaseui.auth.AuthUI(app.auth);
            ui.start('.firebaseui-auth-container', {
                signInOptions: [{
                    provider : app.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName : false
                }]
            })
        
    }, []) 
    
  return (
      <div >
          sign up
          
          <div className='firebaseui-auth-container'> </div> 
      </div>
  )
}
 
export default SignUp