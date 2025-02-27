import './App.css'

function App() {

  return (
    <>
      <div id="websiteImageSection">
        <img id="websiteImage" src="/imgs/fleet_group_pic.png" height="500px" />
      </div>
      <section id="pageTitle">
        <h1>Crimson Fleet Discord Server</h1>
      </section>
      <div className="card">
        <button id="discordInviteButton" onClick={() => window.location.replace("https://discord.gg/txADRdyGEB")}>
          Join to Discord
        </button>
        <p id="helperTextForButton">
          Click on the button to join our Discord server. 
        </p>
        <p id="websiteStatus">
          Website is under development.
        </p>
      </div>
      <p className="read-the-docs" id="websiteTags">
        Tags: Crimson | Crimson Fleet | Fleet | Crimson Fleet Star Citizen | Star Citizen | SC | Crimson Fleet SC | Start Citizen Crimson Fleet
      </p>
    </>
  )
}

export default App
