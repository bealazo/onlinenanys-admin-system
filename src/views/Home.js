import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
 
  Container,
  Card, CardImg,CardBody,
  CardTitle,
  
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Home = (props) => {
 
  return (
    <>
     {/* Header */}
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h1 className="text-white mb-0 font-weight-bold text-center">BIENVENIDO AL SISTEMA DE GESTIÓN DE ONLINENANYS</h1>
          </div>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" >
      <div>
     
      <Card> 
      <CardBody>
          <CardTitle className="text-center" tag="h2">Sistema para la validación de los perfiles de las nannys registradas en la App</CardTitle>          
        </CardBody>
      
      <CardImg  width="100%" src={
                              require("../assets/img/theme/home.jpg" ).default                        
                            } alt="Onlinenanys" />       
        
      </Card>
    </div>
      </Container>
    </>
  );
};

export default Home;
