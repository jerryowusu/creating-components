import React from 'react'

const ModeToggler = () => {

    let darkModeOn = true;
    const darkMode = <h1>Dark mode is on</h1>
    const lightMode = <h1>Light mode is on</h1>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
        if (darkModeOn) {
            console.log('dark mode is on') 
        } else {
            console.log("dark mode is off")
        }
    //    console.log('darkmode is on')
    }
    
  return (
    <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick} >Change mode</button>
    </div>
  )
}

export default ModeToggler