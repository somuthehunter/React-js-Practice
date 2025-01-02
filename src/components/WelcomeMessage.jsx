const WelcomeMessage = ( {onGetPostclick} ) => {
    return <center className="welcome"><h1  > Welcome to this message</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostclick}>Get posts from the dummy server</button>
    </center>;
        
}

export default WelcomeMessage;