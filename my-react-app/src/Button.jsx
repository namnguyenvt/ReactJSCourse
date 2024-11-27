// import styles from './Button.module.css'

function Button() {

    // CSS style - Inline
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        
    }

    return(
        // CSS style - Module - {styles.button}

        // CSS style - Inline
        <button style={styles}>Click me</button>
    );
}

export default Button