import React, { Fragment } from "react"
import '../../assets/css/dashboard.css'

const VentanaDashboard = () => {
    return (
        <Fragment>
            <div className="content-wrapper">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                            <div className="inforide">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-4 rideone">
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                    <h4>Employee</h4>
                                    <h2>20</h2>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                            <div className="inforide">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridetwo">
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                    <h4>Clients</h4>
                                    <h2>120</h2>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                            <div className="inforide">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-4 ridethree">
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                    <h4>Jobs</h4>
                                    <h2>50</h2>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default VentanaDashboard;

