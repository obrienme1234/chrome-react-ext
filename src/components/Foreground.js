/*global chrome*/

import React from 'react';
import { Auth } from 'aws-amplify';

function Foreground() {
    
document.onmouseup = () => {
    let words = window.getSelection().toString()
    console.log(words);
    chrome.storage.local.set({key: words}, function() {
      console.log('Value is set to ' + words);
    });
  };

  var list = document.getElementsByTagName('p')
  var list1 = document.getElementsByTagName('span')
  var list2 = document.getElementsByTagName('li')

// list.forEach(function(element) {
//     var button = document.createElement("input");
//     button.type = "button";
//     button.value = "im a button";
//     element.appendChild(button);
// });

// for (const child of list.children) {
//   console.log(child);
// }

for (let i=0; i <= list.length; i++){
    if (list[i].innerText != null){
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button";
    list[i].appendChild(button);
}}
for (let i=0; i <= list1.length; i++){
    if (list1[i].innerText != null){
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button";
    list1[i].appendChild(button);
}}
for (let i=0; i <= list2.length; i++){
    if (list2[i].innerText != null){
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button";
    list2[i].appendChild(button);
}}
    return (
        <div style={styles.main}>
        </div>
    )
}

const styles = {
    main: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        fontSize: '80px',
        pointerEvents: 'none'
    }
}

export default Foreground;