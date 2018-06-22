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
                <br />
                <Container>
                    <Row>
                        <Column size="lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">StartUp Details List</h4>
                                    {/* <p className="card-text">This is the form for information about the start up will go. it will be a form and able to create/update.</p> */}
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Start Up Name" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Address" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Facebook Url" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Instagram Url" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Twitter Url" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Linkedin Url" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <textarea className="form-control" aria-label="with textarea" placeholder="Type a short description of your Start Up here."></textarea> 
                                    </div>
                                    <button className="btn btn-outline-secondary" type="button">Save</button>
                                </div>
                            </div>
                        </Column>
                        <Column size="lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> What is needed Details </h4>
                                    {/* <p className="card-text"> This is where the start up will be able to put information about all of the things they need are. </p> */}
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="What resources do you need?" />
                                        <button className="btn btn-outline-secondary" type="button">Save</button>
                                    </div>
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
                                    {/* <p className="card-text"> this is where the starups will be able to see all of the Community organizers so they can see what each one is offering. </p> */}
                                    <hr />
                                    <div className="card-body">
                                        <h5 className="card-title"> First Community Organizer </h5>
                                        <p className="card-text">Short Description of the first community organizer</p>
                                        <p className="card-text">Resources Offered: Office Space, Hiring Help, etc..</p>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Second Community Organizer </h5>
                                        <p className="card-text">Short Description of the first community organizer</p>
                                        <p className="card-text">Resources Offered: Office Space, Hiring Help, etc..</p>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"> Third Community Organizer </h5>
                                        <p className="card-text">Short Description of the first community organizer</p>
                                        <p className="card-text">Resources Offered: Office Space, Hiring Help, etc..</p>
                                    </div>
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