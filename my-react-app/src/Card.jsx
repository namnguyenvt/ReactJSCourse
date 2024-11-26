import images from './assets/catMeme.jpg'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={images} alt="profile picture"></img>
            <h2 className="card-title">Nam Nguyen</h2>
            <p className="card-text">Student in Western Sydney University</p>
            <p className="card-text">Bachelor of Information and Communication Technology</p>
        </div>
    );
}

export default Card