import React,{Component} from "react";

class Projects extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                
                <h2>1. ToDo App </h2>
                <p>Built a ToDo App using React js and Javascript.
                   The basic functionality of the application is to add the tasks and mark them complete once done.
                   It also contains the feature to delete the tasks once completed.
                </p>
                <p>Github link to the application:- <a href="https://github.com/khushichauhan425/ToDo-App">View Here</a></p>

                <h2>2. Metronome App </h2>
                <p>Built a Metronome App using React js and Javascript.
                   It produces an audible click or other sound at a regular interval that can be set by the user, 
                   typically in beats per minute.
                </p>
                <p>Github Link to the application:- <a href="https://github.com/khushichauhan425/Metronome-App">View Here</a></p>

                <h2>3. Social Media Integration App</h2>
                <p>Built a Social Media Integration App using Facebook, LinkedIn and Google OAuth 2.0 Integration.</p>
                <p>Github Link to the Application:- <a href="https://github.com/khushichauhan425/social-media-integration">View Here</a></p>
            </div>

        )
    }
}
export default Projects