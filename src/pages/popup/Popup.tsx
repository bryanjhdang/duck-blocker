// import { useState } from 'react'
import { Title } from '@mantine/core';
import { Switch } from '@mantine/core';
import BackgroundColorOptions from './components/BackgroundColorOptions';
import TabColorOptions from './components/TabColorOptions';
import BlockSiteButton from './components/BlockSiteButton';
import OptionsButton from './components/OptionsButton';

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
      <Title order={1}>Duck Blocker</Title>
  
      <div className="card">
        <button onClick={() => changeColorOnClick()}>
         Turn on Duck
        </button>
        
        <Switch>
          defaultChecked
          label="test"
        </Switch>
        <BackgroundColorOptions/>
        <TabColorOptions/>
        <BlockSiteButton/>
        <OptionsButton/>
      </div>
      
      <p className="read-the-docs">
        Please rate us!
      </p>
    </>
  )
}

export default Popup