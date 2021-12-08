import React from 'react';

export default function BasicModal() {
  function openDialog() {
    window.open("https://sparkassetlibrary.shutterfly.com/dam/searchresults?t:lb=t", "Shutterfly SPARK", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+(screen.width/2)+", height="+(screen.height/2)+",top="+(screen.height/4)+",left="+(screen.width/4));
  }

  return (
    <div>
      <button id="openDialogButton" onClick={()=>{openDialog()}}>Open Dialog</button>
    </div>
  );
}