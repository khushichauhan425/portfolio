import React,{Component} from 'react';
class Social extends Component{
    render(){
        return(
            <div className="social">
                <a href="https://github.com/khushichauhan425" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="www.linkedin.com/in/khushi-chauhan-764002159" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopenner noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://medium.com/" target="_blank" rel="noopenner noreferrer"><i className="fab fa-medium-m"></i></a>
            </div>
        )
    }
}
export default Social