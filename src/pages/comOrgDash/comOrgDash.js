import React, {Component} from 'react';
import Navbar from '../../components/navbar/navbar';
import {Container} from '../../components/grid/container/container';
import {Row} from '../../components/grid/row/row';
import {Column} from '../../components/grid/column/column';


class ComDash extends Component {
    render () {
        return(
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Column size="lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Invite/Member List</h4>
                                    <p className="card-text">This is where the list of all the startups will go. they will have buttons next to them to invite or if they are members</p>
                                </div>
                            </div>
                        </Column>
                        <Column size="lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Community Organizer Details </h4>
                                    <p className="card-text"> this is where all of the information about the Community Organizer will go. should be a form and be able to update. </p>
                                </div>
                            </div>
                        </Column>
                    </Row>
                    <br />
                    <Row>
                        <Column size="lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Posted Startups </h4>
                                    <p className="card-text"> this is where all of the current startups will go so that the com orgs can see what they are in need of. there will be a symbol next to them if they are a member. </p>
                                </div>
                            </div> 
                        </Column>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ComDash;