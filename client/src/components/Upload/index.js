/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container,Col,Row,Button } from 'reactstrap';
import './Upload.css';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            fileName: null,
            sizeBig: false,
            msg: '',
            fileCount: Math.round(100 * Math.random()),
            UploadCheck: false
        }
        this.handleSizeCheck = this.handleSizeCheck.bind(this);
        this.handlePostReq = this.handlePostReq.bind(this);
    }

    //redirecting to login page 
    logout() {
        this.props.history.replace( '/' );
    }

    //handling size check on file input
    handleSizeCheck (event){
        const {file, msg} = this.state;
        if(event.target.files[0].size > 5000000){
            this.setState({
                msg: 'File Size too big!',
                sizeBig: true
            });
        }else {
            this.setState({
                file: event.target.files[0],
                fileName: event.target.files[0].name,
                msg: 'Click upload to submit the document',
                sizeBig: false
            });
        }
    }

    //handling upload to the database
    handlePostReq (event) {
        let data = JSON.stringify({
           name: 'file' + this.state.fileCount,
           uri: this.state.fileName 
        }); 
        console.log(data);
       axios
            .post('http://localhost:5000/api/files' , data, {
            headers: {
                'content-type': 'application/json'
            }})
            .then((res => {
                console.log(res.data)
                this.setState({
                    UploadCheck: true
                })
            }))
            .catch((err) => {
                console.log(err)
            }); 
    }


    render() {
        let $imgLargeMsg = null;
        let $imgPreviewTag = null;
        let $uploadMsg = null;
        if (this.state.file != null){
            let $imgPreviewUrl = URL.createObjectURL(this.state.file);
            $imgPreviewTag = ( <img className="showImg" src={ $imgPreviewUrl } alt="" />);
        }

        if(this.state.sizeBig){
            $imgLargeMsg = ( <p className="sizeMsg">{this.state.msg}</p> );
        }else{
            $imgLargeMsg = ( <p className="sizeMsg">{this.state.msg}</p> );
        }

        if(this.state.UploadCheck){
            $uploadMsg = ( <p className="uploadMsg">Upload Successful!</p> );
        }


        return(
            <div>
                <Navbar className="navbarDash" expand="md">
                    <NavbarBrand id="whiteAnch" href="/">Welcome, Mr Stark!</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink id="whiteAnch" href="" onClick={this.logout.bind(this)}>Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <Container>
                    <Row className="uploadForm">
                        <Col className="uploadLeft">
                            <p>Upload your photo ID documents here for the
                               verification in the mortgage approval process. (Max file size is 5MB)</p>
                            <input type="file" onChange={ this.handleSizeCheck }></input>
                            { $imgLargeMsg }
                        </Col>
                        <Col className="uploadRight">
                            { $imgPreviewTag }
                            <Button id="uploadBtn" primary onClick={ this.handlePostReq } >Upload </Button>
                            { $uploadMsg }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Upload;