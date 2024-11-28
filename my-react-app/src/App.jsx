import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {

    return (
        <>
            <Student name="Nam" age={20} isStudent={true}/>
            <Student name="Patrick" age={42} isStudent={false}/>
            <Student name="Squidward" age={50} isStudent={false}/>
            <Student name="Sandy" age={27} isStudent={true}/>
            <Student name="Larry"/>
        </>
    );
}

export default App
