import React from "react";
import '../App.css';
import leftPanel from '../Component/leftPanel'
import { Container, Row, Col, Card } from 'react-bootstrap'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsIcon from '@mui/icons-material/Settings';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import video1 from '../video/1080P HD Business IP Camera Samples and Features - Platinum CCTV.mp4'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import cctv from '../Image/cctv.png'

const Panel = () => {
    return (

        <header>
            <Container className="container text-center">
                <Row className="row d-flex justify-content-center">

                    <Col md={1}>
                        <div className="d-flex flex-column leftPanelIcondiv">

                            <div className="d-flex justify-content-start m-3 icon">
                                <NotificationsActiveIcon style={{ fontSize: 42 }} />
                            </div>

                            <div className="d-flex justify-content-start m-3 icon">
                                <RocketLaunchIcon style={{ fontSize: 42 }} />
                            </div>

                            <div className="d-flex justify-content-start m-3 icon">
                                <EmailIcon style={{ fontSize: 38 }} />
                            </div>

                            <div className="d-flex justify-content-start m-3 icon">
                                <BackupIcon style={{ fontSize: 42 }} />
                            </div>

                            <div className="d-flex justify-content-start m-3 icon">
                                <SettingsIcon style={{ fontSize: 42 }} />
                            </div>

                            <div className="d-flex justify-content-start m-3 icon">
                                <CastConnectedIcon style={{ fontSize: 42 }} />
                            </div>

                        </div>
                    </Col>

                    <Col md={9}>

                        <div className="videoDiv p-3">

                            <div className="d-flex justify-content-start">
                                <div className="d-flex p-3">
                                    <LiveTvIcon style={{ fontSize: 32, color: "black", marginRight: 4 }} />
                                    <h3 className="">
                                        Living Room Camera
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <div className="d-flex justify-content-center ">

                                    <video width="700" height="350" controls className="m-2" >
                                        <source src={video1} type="video/mp4" />
                                    </video>

                                </div>

                                <div className="d-flex flex-row">

                                    <div>
                                        <video width="300" height="200" controls className="m-2" >
                                            <source src={video1} type="video/mp4" />
                                        </video>
                                    </div>

                                    <div>
                                        <video width="300" height="200" controls className="m-2" >
                                            <source src={video1} type="video/mp4" />
                                        </video>
                                    </div>

                                    <div>
                                        <video width="300" height="200" controls className="m-2" >
                                            <source src={video1} type="video/mp4" />
                                        </video>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={2}>

                        <div className="rightPanel text-center p-5">

                            <div>
                                <img src={cctv} alt="cctv" className="cctvImage" />
                            </div>

                            <div>
                                <Card border="primary"  style={{ width: "auto", marginTop: 110, background: "none", fontSize:20}}>
                                    <div>
                                        <p className="text-start ">
                                            Share Alert
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </header>
    )
}
export default Panel;