import PropTypes from 'prop-types';

function UserGreeting(props) {

    // If else method 1
    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please log in to continue</h2>
    // }

    // If else method 2 -  Short
    // return (
    //     props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //                        <h2 className="login-prompt">Please log in to continue</h2>
    // );

    // If else method 3 - Store value into unchangable variables
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return (
        props.isLoggedIn ? welcomeMessage : loginPrompt
    );
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLogged: false,
    username: "Guest",
}
export default UserGreeting