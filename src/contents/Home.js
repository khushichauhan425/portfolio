import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/selfie2.jpg';
import Social from '../components/Social';
import { useStyles} from 'react-use-styles';
const styles = {
    profilepic: {
        width: '30%', height: '50%', display: 'block', borderRadius: '50%;', margin: '0 auto'
    },
    typingeffect:{
        fontWeight:'bolder',fontSize:'45px',color:'#660066'
    }
};
function Home() {
    let classes = useStyles(styles);
    return (
        <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className={classes.profilepic}></img>
            <ReactTypingEffect className={classes.typingeffect} text={['Hi!!!...','I am Khushi Chauhan.', 'I am a Front-End Developer...']} speed={100} eraseDelay={700}/>
            <Social />
        </div>
    )
}
export default Home