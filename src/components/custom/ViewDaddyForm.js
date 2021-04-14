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
  Table,
  FormGroup, Label,
  
} from "reactstrap";

                                                                                                                                                                                                                              
const ViewDaddyForm = ({ form,onChangeStatus,onSubmit,onCancel}) => (
 
  <Card className="mt-1">
    
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
                    defaultValue={form.user_first_name}
                    readOnly         

                  />
                 
                </Col>
                <Col md="4" className="form-group">
                  <label >Apellidos</label>
                  <Input
                   
                    id="user_last_name"
                    name="user_last_name"
                    defaultValue={form.user_last_name}
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
                 defaultValue={form.user_email}
                 readOnly               

               />
              
             </Col>

             <Col md="4" className="form-group">
               <label>Presentación</label>
               <Input
                
                 id="user_description"
                 name="user_description"
                 defaultValue={form.user_description}
                 readOnly
                 
               />
            
             </Col>
             
           </Row>
       
           <Row form>
             
           
             <Col md="4" className="form-group">
               <label>Foto de Perfil</label>
               <Input
                 id="image"
                 name="image"
                 value={form.image_path==null?"NO":"SI"}
                readOnly
               />               
             </Col>   
             <Col md="4" className="form-group">
                  <div className="card-profile-image" style={{marginTop:30}}>
                  
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                           "https://onlinenanys.com/images/"+form.image_path
                        }
                      />
                   
                  </div>
              
              </Col>  
            
           </Row>
           <hr className="my-3" />
           
           <Row className="justify-content-center mb-5 mt-5"> <h2 className="display-4">Respuestas al Cuestionario</h2></Row>
           <Row form>
             
             <Col md="4" className="form-group">
               <label >1: ¿Qué expectativas tiene usted de una persona que cuide a su hijo?</label>
               <Input
                 id="question_1"
                 name="question_1"
                 value={form.question_1}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >2: ¿Prefiere una persona con experiencia o no le importa si no tiene experiencia?</label>
               <Input
                 id="question_2"
                 name="question_2"
                 value={form.question_2}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>3: ¿Prefiere que la cuidadora sea siempre la misma?</label>
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
               <label >4:¿Le gustaría que la cuidadora realizara actividades extraescolares con el o los niños?</label>
               <Input
                 id="question_4"
                 name="question_4"
                 value={form.question_4}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >5:¿Desearía que la Nanny cumpla un horario específico de actividades con su hijo?</label>
               <Input
                 id="question_5"
                 name="question_5"
                 value={form.question_5}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>6: ¿Si fuese necesario le daría indicaciones a la Nanny que suministre algún medicamento al niño?</label>
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
               <label >7:¿Brindaría las indicaciones pertinentes para la preparación de los alimentos?</label>
               <Input
                 id="question_7"
                 name="question_7"
                 value={form.question_7}
                readOnly
               />
               
             </Col>
             
             <Col md="4" className="form-group">
               <label >8: En caso de accidente qué acciones debería realizar la nanny.</label>
               <Input
                 id="question_8"
                 name="question_8"
                 value={form.question_8}
                 readOnly                  

               />
              
             </Col>
             <Col md="4" className="form-group">
               <label>9: ¿Tiene alguna edad de preferencia para la persona que va a cuidar a su hijo?</label>
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
               <label >10:¿Qué tareas o actividades le gustaria que hicieran sus hijos con la Nanny?</label>
               <Input
                 id="question_10"
                 name="question_10"
                 value={form.question_10}
                readOnly
               />
               
             </Col>
             
            
             
           </Row>
           <hr className="my-3" />
          
           <Row className="mt-5 mb-2"> <h2 className="display-5">Estado</h2></Row>
           <Row form >
             
              <Col md="4" className="form-group">
              <FormGroup>
                <Label for="selectstatus">Estado</Label>
                <Input type="select" name="selectstatus" onChange={onChangeStatus}>

                <option selected={(form.user_status==""||form.user_status=="approved")?true:false} value="approved">Aprobado</option>
                  <option selected={(form.user_status=="pending")?true:false} value="pending">Pendiente</option>
                  <option selected={(form.user_status=="reject")?true:false} value="reject">Rechazado</option>
                  <option selected={(form.user_status=="suspend")?true:false} value="suspend">Suspendido</option>
                  <option selected={(form.user_status=="disabled")?true:false} value="disabled">Desactivado</option>
                 
                  
                                
                </Input>
            </FormGroup>

            </Col>
            </Row>
              <Row form className="justify-content-end">
                <Col md="0">
                              
                  <Button className="mb-2 mr-1" color="primary" type="submit" onSubmit={onSubmit}>Guardar</Button>
                  <Button className="mb-2 mr-1" outline color="primary" onClick={onCancel}>Cancelar</Button>

                </Col>
              </Row>
             
            </Form> 
          </Col>
        </Row>
        </CardBody>
  </Card>
);

ViewDaddyForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  nombre:PropTypes.string,
  pvc:PropTypes.number

};

ViewDaddyForm.defaultProps = {
  title: "Editar pieza"
};

export default ViewDaddyForm;
