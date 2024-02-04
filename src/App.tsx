// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0) 
  const changeColorOnClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        // Adding an HTML h1 element
        // const h1Element = document.createElement('h1');
        // h1Element.textContent = 'Hello, World!';

        // Adding an HTML img
        const imgElement = document.createElement('img');
        imgElement.src = chrome.runtime.getURL('images/duck.jpg');

        // Styling the img element
        imgElement.style.position = 'fixed';
        imgElement.style.top = '0';
        imgElement.style.left = '0';
        imgElement.style.padding = '10px';
        imgElement.style.width = '300px'; // Set the desired width
        imgElement.style.height = '300px'; // Set the desired height
        imgElement.style.zIndex = '9999'; // Setting a high z-index to ensure it's above everything else

        // Appending the img element to the document body
        document.body.appendChild(imgElement);

        // document.body.style.backgroundColor = 'green';
      }
    });
  }

  // const onClick = async () => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id! },
  //     func: () => {
  //       document.body.style.backgroundColor = 'green';
  //     }
  //   });
  // }
  return (
    <>
      <h1>Extension</h1>
      <div className="card">
        <button onClick={() => changeColorOnClick()}>
         Change Color
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App