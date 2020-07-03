import React, { useState, useEffect } from 'react'
import * as store from 'store'
import {
  BrowserRouter as Router,

  Link,

  
} from "react-router-dom";
export function Login({match}) {
      let params = match.params;
      console.log(match)

      const [token, setToken] = useState<string>(store.get('token'));

   

      useEffect(() => {
          store.set('token', token)
      }, [token])
      return (
        <div>
          <h4  style={{background: 'red', textAlign: 'center'}}>Make sure to enable 2FA on your account in upland, before you enter auth token</h4>
          <div style={{textAlign: 'center'}}>
          <input type="text" value={token} onChange={e => {
            setToken(e.target.value)}} placeholder='access token' />
          <Link to="/my-properties">Connect</Link> 
          <p style={{color: 'red'}}>{params.slug}</p>
            <p>To find your access token go to play.upland.me in chrome</p>
            <p>locate "view" =&gt; "developer" =&gt; "developer tools"</p>
            <p>Click "application" =&gt; find "session storage" =&gt; "play.upland.me"</p>
            <p>You access token is the field called "auth token</p>
          </div>
    
    
        </div>)
}
