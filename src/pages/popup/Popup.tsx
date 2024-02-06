// import { useState } from 'react'
import './Popup.css'
import BackgroundColors from './BackgroundColors';
import TabColors from './TabColors';
import OptionsButtons from './OptionsButton';

function Popup() {
  // const [count, setCount] = useState(0) 
  const changeColorOnClick = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        const imgElement = document.createElement('img');
        imgElement.src = chrome.runtime.getURL('images/duck.jpg');
  
        imgElement.style.position = 'fixed';
        imgElement.style.top = '0';
        imgElement.style.left = '0';
        imgElement.style.width = '300px';
        imgElement.style.height = '300px';
        imgElement.style.zIndex = '9999';
  
        document.body.appendChild(imgElement);
  
        let posX = 0;
        let posY = 0;
        let speedX = 2;
        let speedY = 2;
  
        const moveElement = () => {
          posX += speedX;
          posY += speedY;
  
          if (posX + 300 >= window.innerWidth || posX <= 0) {
            speedX *= -1;
          }
  
          if (posY + 300 >= window.innerHeight || posY <= 0) {
            speedY *= -1;
          }
  
          imgElement.style.left = `${posX}px`;
          imgElement.style.top = `${posY}px`;
  
          requestAnimationFrame(moveElement);
        };
  
        moveElement();
      },
    });
  };
  
  

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
      <h1>Duck Blocker</h1>
      <div className="card">
        <button onClick={() => changeColorOnClick()}>
         Turn on Duck
        </button>
        
        <BackgroundColors/>
        <TabColors/>
        <OptionsButtons/>
      </div>
      
      <p className="read-the-docs">
        Please rate us!
      </p>
    </>
  )
}

export default Popup