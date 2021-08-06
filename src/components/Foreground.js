import React from 'react';
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import awsConfig from "../amplify-config";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
Amplify.configure(awsConfig);
// import {
//     CognitoIdToken, 
//     CognitoAccessToken, 
//     CognitoRefreshToken, 
//     CognitoUserSession,
//     CognitoUser,
//     CognitoUserPool
//   } from "amazon-cognito-identity-js";
// import {Auth} from "aws-amplify";
// Amplify.configure(awsExports);


// chrome.storage.local.get(['key'], function(request) {
//     if (request.session) {
//       authenticateUser(request.session);;
//     } else {
//       console.log(request);
//     }
//     sendResponse("OK")
//   });

// //Re-build the session and authenticate the user
// export const authenticateUser =  (session) => {
//     let idToken = new CognitoIdToken({
//       IdToken: session.idToken.jwtToken
//     });
//     let accessToken = new CognitoAccessToken({
//         AccessToken: session.accessToken.jwtToken
//     });
//     let refreshToken = new CognitoRefreshToken({
//         RefreshToken: session.refreshToken.token
//     });
//     let clockDrift = session.clockDrift;
//     const sessionData = {
//       IdToken: idToken,
//       AccessToken: accessToken,
//       RefreshToken: refreshToken,
//       ClockDrift: clockDrift
//     }
//     // Create the session
//     let userSession  = new CognitoUserSession(sessionData);
//     const userData = {
//       Username: userSession.getIdToken().payload['cognito:username'],
//       Pool: new CognitoUserPool({UserPoolId: YOUR_USER_POOL_ID, ClientId: YOUR_APP_CLIENT_ID})
//     }
    
//     // Make a new cognito user
//     const cognitoUser = new CognitoUser(userData);
//     // Attach the session to the user
//     cognitoUser.setSignInUserSession(userSession);
//     // Check to make sure it works
//     cognitoUser.getSession(function(err, session) {
//       if(session){
//         //Do whatever you want here
//       } else {
//         console.error("Error", err);
//       }
      
//     })
//     // The session is now stored and the amplify library can access it to do
//     // whatever it needs to.
//   }


// function Foreground() {
    
// document.onmouseup = () => {
//     let words = window.getSelection().toString()
//     console.log(words);
//     chrome.storage.local.set({key: words}, function() {
//       console.log('Value is set to ' + words);
//     });
//   };

//Listen for incoming external messages.

// React.useEffect(() => { 
    // return await Auth.currentAuthenticatedUser()
    // .then(() => { return true; })
    // .catch(() => { return false; });
//         chrome.storage.local.get(['key'], function(result) {
//             console.log(result.key)
//             console.log(result)
//         });
//     })

//   var list = document.getElementsByTagName('p')
//   var list1 = document.getElementsByTagName('span')
//   var list2 = document.getElementsByTagName('li')
 
//   for (let i=0; i <= list.length; i++){
//     if (list[i].innerText != null){
//     var button = document.createElement("BUTTON");
//         function myFunction() {
//             console.log('works')
//         let words = list[i].innerText;
//         chrome.storage.local.get(['key'], function(result) {
//             console.log(result.key)
//             console.log(result)
//         });
//         return words
//       }
//       button.addEventListener("click", myFunction);
//       button.innerHTML = "Button";
//     list[i].appendChild(button);
// }}

// for (let i=0; i <= list1.length; i++){
//     if (list1[i].innerText != null){
//     var button = document.createElement("BUTTON");
//         function myFunction() {
//             console.log('works')
//         let words = list1[i].innerText;
//         chrome.storage.local.get(['key'], function(result) {
//             console.log(result.key)
//             console.log(result)
//         });
//         return words
//       }
//       button.addEventListener("click", myFunction);
//       button.innerHTML = "Button";
//     list1[i].appendChild(button);
// }}

// for (let i=0; i <= list2.length; i++){
//     if (list2[i].innerText != null){
//     var button = document.createElement("BUTTON");
//         function myFunction() {
//         let words = list2[i].innerText;
//         chrome.storage.local.get(['key'], function(result) {
//             console.log(result.key)
//             console.log(result)
//         });
//         return words
//       }
//     button.addEventListener("click", myFunction);
//     button.innerHTML = "Button";
//     list2[i].appendChild(button);
  
// }}


//     return (
//         <div style={styles.main}>
//         </div>
//     )
// }

// const styles = {
//     main: {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: '1000',
//         fontSize: '80px',
//         pointerEvents: 'none'
//     }
// }

// export default Foreground

const apiName = 'WildRydesAPI';
const apiPath = '/ride';

class Foreground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authToken: null,
      idToken: null,
      requestRideEnabled: false,
      word: '',
      updates: [
        'Welcome! Click the map to set your pickup location.'
      ]
    };
  }
  async componentDidMount() {
    const session = await Auth.currentSession().then((session) => {
      this.setState({ authToken: session.accessToken.jwtToken });
      this.setState({ idToken: session.idToken.jwtToken });
      console.log(session)
    });
    this.setState({ authToken: session.accessToken.jwtToken });
    this.setState({ idToken: session.idToken.jwtToken });
    console.log(session)
  }

  /**
   * Determines if the API is enabled
   *
   * @return {Boolean} true if API is configured
   */
   hasApi() {
    const api = awsConfig.API.endpoints.filter(v => v.endpoint !== '');
    return (typeof api !== 'undefined');
}


  /**
   * Calls the backend API to retrieve the Unicorn data
   *
   * @param {Number} latitude
   * @param {Number} longitude
   */
   
   async getData(pin) {
    const apiRequest = {
        body: {
        PickupLocation: {
            Longitude: 'word'
          }
        },
        headers: {
        'Authorization': this.state.idToken,
        'Content-Type': 'application/json'
        }
    };
    console.log('API Request:', apiRequest);
    return await API.post(apiName, apiPath, apiRequest);
}

  /**
   * Called when Request Ride is called
   */
  async onClick() {
    console.log(this.state.authToken)
    console.log(this.state.idToken)
    const updates = [ 'Requesting Unicorn' ];
    try {
      this.setState({
        requestRideEnabled: false,
        updates
      });
      const data = await this.getData(this.state.pin);
      console.log(data);
      updates.push([ `Your unicorn, ${data.Unicorn.Name} will be with you in ${data.Eta}` ]);
      this.setState({ updates });

      // Let's fake the arrival
      setTimeout(() => {
        console.log('Ride Complete');
        const updateList = this.state.updates;
        updateList.push([ `${data.Unicorn.Name} has arrived` ]);
        this.setState({
          updates: updateList,
          requestRideEnabled: false,
          pin: null
        });
      }, data.Eta * 1000);
    } catch (err) {
      console.error(err);
      updates.push([ 'Error finding unicorn' ]);
      this.setState({ updates });
    }
  }

  /**
   * Called when the mapClick happens
   * @param {Point} position the position of the map pin
   */
  onMapClick(position) {
    console.log(`onMapClick(${JSON.stringify(position)})`);
    this.setState({ pin: position, requestRideEnabled: true });
  }
  
myFunction(words){
  console.log('fuctino firing kid')
  console.log(words)
}
  render() {

  var list = document.getElementsByTagName('p')
  var list1 = document.getElementsByTagName('span')
  var list2 = document.getElementsByTagName('li')
 
  for (let i=0; i <= list.length; i++){
    if (list[i].innerText != null){
    var button = document.createElement("BUTTON");
    let words = list[i].innerText;
    button.addEventListener("click", () => this.onClick());
    button.innerHTML = "Button";
    list[i].appendChild(button);
}}

for (let i=0; i <= list1.length; i++){
    if (list1[i].innerText != null){
    var button = document.createElement("BUTTON");
    let words = list1[i].innerText;
    button.addEventListener("click", () => this.onClick());
    button.innerHTML = "Button";
    list1[i].appendChild(button);
}}

for (let i=0; i <= list2.length; i++){
    if (list2[i].innerText != null){
    let words = list2[i].innerText;
    button.addEventListener("click", () => this.onClick());
    button.innerHTML = "Button";
    list2[i].appendChild(button);
  
}}
 
    const hasApi = this.hasApi();

    // If API is not configured, but auth is, then output the
    // token.
    if (!hasApi) {
      return 
    }

    // If the API is configured, then display the "requestUnicorn"
    // button.  If data is available (i.e. unicorn is requested),
    // then display the additional patterns (unicorn on map).
    const updateList = this.state.updates.map(
      (v, i) => <li key={i}>{v}</li>
    );
    return 
  }
}

export default Foreground;