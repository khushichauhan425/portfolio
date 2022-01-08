import React,{Component} from 'react';
import Widecard from '../components/Widecard';
class Education extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="B.Tech Computer Science and Engineering" where="Dr. APJ Abdul Kalam Technical University" from="Aug 2017" to="June 2021"/>
                <Widecard title="12th" where="Sophia Girl's School Meerut"  from="Apr 2016" to="Mar 2017"/>
                <Widecard title="10th" where="Sophia Girl's School Meerut" from="Apr 2014"  to="Mar 2015"/>
            </div>
        )
    }
}

export default Education