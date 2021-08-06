/* src/App.js */
/*global chrome*/
import React, { useEffect, useState } from 'react'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import awsConfig from "../amplify-config";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
Amplify.configure(awsConfig);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'rgsvzvcvc',
      views: 0
    };
  }
  componentDidMount=()=> {
    // Add listener when component mounts
    var self = this;
    var views = chrome.extension.getViews({ type: "popup" });
    self.setState({views: views.length})
    console.log('comp monted')
    chrome.storage.local.get(['key'], function(result) {
      console.log('Value currently is ' + result.key);
      self.setState({message: result.key});

    });
   
  }
  
  componentDidUpdate() {
    var self = this;

    chrome.storage.local.get(['key'], function(result) {
      self.setState({message: result.key});

    });
  }
  render() {
    
    if  (this.state.views > 0){
      return (
      <div>
        <h2> popup openeed</h2>
        <AmplifySignOut/>
      </div>)
    } else {
      return <h1>popup clockDrift</h1>

    }

    
  }
}


const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default withAuthenticator(App)