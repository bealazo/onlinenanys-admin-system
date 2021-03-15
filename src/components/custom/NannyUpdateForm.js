import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  Button,
  Table
  
} from "reactstrap";

const NannyUpdateForm = ({ form,onChange,onSubmit,onCancel}) => (
  
  <Card small className="mt-1">
    
    <CardBody>
        <Row className="justify-content-center">
          <Col>
             <Form onSubmit={onSubmit}>
              <Row className="justify-content-center mb-5"> <h2 className="display-4">Datos personales</h2></Row>
              <Row form>
             
                <Col md="4" className="form-group">
                  <label>Id.</label>
                  <Input
                    id="user_id"
                    name="user_id"
                    value={form.user_id}
                   readOnly
                  />
                  
                </Col>
                
                <Col md="4" className="form-group">
                  <label >Nombre</label>
                  <Input
                    id="user_first_name"
                    name="user_first_name"
                    value={form.user_first_name}
                    readOnly                  

                  />
                 
                </Col>
                <Col md="4" className="form-group">
                  <label >Apellidos</label>
                  <Input
                   
                    id="user_last_name"
                    name="user_last_name"
                    value={form.user_last_name}
                    readOnly
                    
                  />
               
                </Col>
                
              </Row>
              <Row form>
             
             <Col md="4" className="form-group">
               <label >Teléfono</label>
               <Input
                 id="user_mobile"
                 name="user_mobile"
                 value={form.user_mobile}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >Email</label>
               <Input
                 id="user_email"
                 name="user_email"
                 value={form.user_email}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>Descripción</label>
               <Input
                
                 id="user_description"
                 name="user_description"
                 value={form.user_description}
                 readOnly
                 
               />
            
             </Col>
             
           </Row>
           <Row form>
             
             <Col md="4" className="form-group">
               <label >Dirección</label>
               <Input
                 id="location_name"
                 name="location_name"
                 value={form.location_name}
                readOnly
               />
               
             </Col>
             
            
             
           </Row>
           <hr className="my-3" />
           <Row className="justify-content-center mb-5"> <h2 className="display-4">Estudios</h2></Row>

           <Table className="align-items-center table-flush" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Estudios</th>
                    <th scope="col">Centro</th>
                    <th scope="col">Año</th>
                                   
                  </tr>
                </thead>
                <tbody>
                { 
                      form.educations.map((education, index) => (
                        <tr key={index}>
                            <td>{education.education_name}</td>
                            <td>{education.education_center}</td>
                            <td>{education.education_year}</td>
                            
                  
                        </tr>
                      ))
                  
                }
             
                </tbody>
              </Table>
          
           <hr className="my-3" />
           <Row className="justify-content-center mb-5 mt-5"> <h2 className="display-4">Experiencias</h2></Row>
           <Table className="align-items-center table-flush" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Empleo</th>
                    <th scope="col">Lugar</th>
                    <th scope="col">Año Inicio</th>
                    <th scope="col">Año Fin</th>
                                   
                  </tr>
                </thead>
                <tbody>
                { 
                      form.experiences.map((experience, index) => (
                        <tr key={index}>
                            <td>{experience.experiences_job}</td>
                            <td>{experience.experiences_place}</td>
                            <td>{experience.experiences_year_begin}</td>
                            <td>{experience.experiences_year_end}</td>                            
                  
                        </tr>
                      ))
                  
                }
             
                </tbody>
              </Table>
           <hr className="my-3" />
           <Row className="justify-content-center mb-5 mt-5"> <h2 className="display-4">Respuestas al Cuestionario</h2></Row>
           <Row form>
             
             <Col md="4" className="form-group">
               <label >1: ¿Te gustan los niños?</label>
               <Input
                 id="question_1"
                 name="question_1"
                 value={form.question_1}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >2: Habilidades para el cuidado de los niños</label>
               <Input
                 id="question_2"
                 name="question_2"
                 value={form.question_2}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>3: Manejo de un niño inquieto</label>
               <Input
                
                 id="question_3"
                 name="question_3"
                 value={form.question_3}
                 readOnly
                 
               />
            
             </Col>
             
           </Row>
           <Row form>
             
             <Col md="4" className="form-group">
               <label >4: Preferencia de edad</label>
               <Input
                 id="question_4"
                 name="question_4"
                 value={form.question_4}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >5: Cumplir con los horarios de los padres</label>
               <Input
                 id="question_5"
                 name="question_5"
                 value={form.question_5}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>6: Llevar a los niños a actividades extraescolares</label>
               <Input
                
                 id="question_6"
                 name="question_6"
                 value={form.question_6}
                 readOnly
                 
               />
            
             </Col>
             
           </Row>
           <Row form>
             
             <Col md="4" className="form-group">
               <label >7: Preparar alimentos de acuerdo a las indicaciones de los padres</label>
               <Input
                 id="question_7"
                 name="question_7"
                 value={form.question_7}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >8: En caso de accidente</label>
               <Input
                 id="question_8"
                 name="question_8"
                 value={form.question_8}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>9: Otras tareas o actividades dispuesta/o hacer</label>
               <Input
                
                 id="question_9"
                 name="question_9"
                 value={form.question_9}
                 readOnly
                 
               />
            
             </Col>
             
           </Row>
           <Row form>
             
             <Col md="4" className="form-group">
               <label >10: Certificado de antecedentes penales</label>
               <Input
                 id="question_10"
                 name="question_10"
                 value={form.question_10}
                readOnly
               />
               
             </Col>
             
            
             
           </Row>
           <hr className="my-3" />
           <Row className="justify-content-center mb-5 mt-5"> <h2 className="display-4">Validación del Perfil</h2></Row>
           <Row form></Row>
              <Row form className="justify-content-end">
                <Col md="0">
                              
                  <Button className="mb-2 mr-1" color="primary" type="submit">Guardar</Button>
                  <Button className="mb-2 mr-1" outline color="primary" onClick={onCancel}>Cancelar</Button>

                </Col>
              </Row>
             
            </Form> 
          </Col>
        </Row>
        </CardBody>
  </Card>
);

NannyUpdateForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  nombre:PropTypes.string,
  pvc:PropTypes.number

};

NannyUpdateForm.defaultProps = {
  title: "Editar pieza"
};

export default NannyUpdateForm;
