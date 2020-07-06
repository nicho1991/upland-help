import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import * as store from 'store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";
import { Login} from './login'
import { MyProperties } from './myProperties';
import styled from 'styled-components'
import { Roadmap } from './roadmap';
import { Frontpage } from './frontPage';


const Donate = styled.div `
  display: inline;
  vertical-align: middle;
  float: right;
}
`

const FloatLeft = styled.button `
  float: right;
}
`

const StyledNav = styled.nav `
padding: 10px;
background: lightgrey;
padding-bottom: 30px;
padding-top: 0px;
`

const BottomText = styled.div `
position: absolute;
bottom: 0;
width: 100%
`

function App() {



  useEffect(() => {
    window.addEventListener("storage",(e) => {
      console.log('change')
   });
    const token = localStorage.getItem('token');

    },[])




  useEffect(() => {
    const props = localStorage.getItem('props')
    if (props) {
      //setMyProperties(JSON.parse(props))
      //setLoadingProps(false)
    }
  }, [localStorage.getItem('props')])

  const logout = () => {
    store.clearAll();
  }




  


  return (
    <div>
    <Router>
      <div>
        <StyledNav>
        <button><Link to="/connect">Connect to upland</Link> </button>
        <button><Link to="/my-properties">My properties</Link> </button>
        <button><Link to="/roadmap">Road map</Link> </button>
        <Donate>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="FAL2VTZBEJRUU" />
          <input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt=""  src="https://www.paypal.com/en_DK/i/scr/pixel.gif" width="1" height="1" />
          </form>
          </Donate>
          <FloatLeft  onClick={() => logout()}><Link to='/'>clear data</Link></FloatLeft>



        </StyledNav>
        <Switch>
        

          <Route path="/connect/:slug?" component={Login}>

          </Route>
          <Route path="/my-properties">
            <MyProperties />
          </Route>
          <Route path="/roadmap">
            <Roadmap />
          </Route>
          <Route path="/" component={Frontpage}></Route>
 
          
        </Switch>

     
        <BottomText>
        <p style={{textAlign: "center"}}> This site saves NO data from our users. The site will exclusively communicate with upland.me own servers</p>
        <p style={{textAlign: "center"}}>Any saved information, is only saved on the browser.</p>
        </BottomText>

      </div>
    </Router>

    </div>
    // <div className="App">
    //   <p style={{background: 'red'}}>{error}</p>
    //   { !auth ? (
    //     <div>
    //       <h2>Login</h2>
    //       <h4 style={{background: 'red'}}>Make sure to enable 2FA on your account in upland, before you login</h4>
    //       <input type="text" value={token} onChange={e => setToken(e.target.value)} placeholder='access token' />
    //       <button onClick={myLogin}>login</button>
    //       <p>To find your access token go to play.upland.me in chrome</p>
    //       <p>locate "view" =&gt; "developer" =&gt; "developer tools"</p>
    //       <p>Click "application" =&gt; find "session storage" =&gt; "play.upland.me"</p>
    //       <p>You access token is the field called "auth token</p>

    //     </div>
    //     )
    //     : (
    //       <div>
    //         <button onClick={logout}>logout</button>
    //         {renderTable}
    //       </div>
    //     )}


    // </div>
  );
}

export default App;
