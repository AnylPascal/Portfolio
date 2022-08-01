import { Container } from '@material-ui/core';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Cloudy} from '../Images/cloudiview.svg';
import forfans from '../Images/forfans.jpg'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <div>
                <Container id='.fetch' justify-content='center' flex-box='grid'>
                    <a href={'https://www.fetchgoal.com/' }> 
                    <img src={forfans} class="float-top ..."  alt="" height={250} width={400} ></img>
                    </a>
                    <p id='fetchy'>FetchGoal A Full Stack Web App.</p>
                    
                </Container>
            </div>

        
            <Container id='.cloud' justify-content='center' flex-box='grid' >
                <a href={'https://www.cloudiview.com/' }>
              <Cloudy />
                </a>
                
            </Container>
            <br />
            
            </div>
        )
    }
}
