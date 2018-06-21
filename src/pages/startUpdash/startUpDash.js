import React, {Component} from 'react';
import Navbar from '../../components/navbar/navbar';
import {Container} from '../../components/grid/container/container';
import {Row} from '../../components/grid/row/row';
import {Column} from '../../components/grid/column/column';


class StartDash extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Column size="lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">StartUp Details List</h4>
                                    <p className="card-text">This is the form for information about the start up will go. it will be a form and able to create/update.</p>
                                </div>
                            </div>
                        </Column>
                        <Column size="lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> What is needed Details </h4>
                                    <p className="card-text"> This is where the start up will be able to put information about all of the things they need are. </p>
                                </div>
                            </div>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Posted Community Organizers </h4>
                                    <p className="card-text"> this is where the starups will be able to see all of the Community organizers so they can see what each one is offering. </p>
                                </div>
                            </div> 
                        </Column>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default StartDash;