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

                                                                                                                                                                                                                              
const BookingDoForm = ({ form,onChangeStatus,onChangeReviews,onSubmit,onCancel}) => (
 
  <Card className="mt-1">
    
    <CardBody>
        <Row className="justify-content-center">
          <Col>
             <Form onSubmit={onSubmit}>
              <Row className="justify-content-center mb-5"> <h2 className="display-4">Datos del booking</h2></Row>
              <Row form>
             
                <Col md="4" className="form-group">
                  <label>Id.</label>
                  <Input
                    id="id"
                    name="id"
                    value={form.id}
                   readOnly
                  />
                  
                </Col>
                
                <Col md="4" className="form-group">
                  <label >Fecha creado</label>
                  <Input
                    id="booking_service_created"
                    name="booking_service_created"
                    defaultValue={form.booking_service_created}
                    readOnly         

                  />
                 
                </Col>
                <Col md="4" className="form-group">
                  <label >Fecha inicio</label>
                  <Input
                   
                    id="booking_service_begin"
                    name="booking_service_begin"
                    defaultValue={form.booking_service_begin}
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
             
             <Col md="4" className="form-group">
               <label >Nombre daddy</label>
               <Input
                 id="user_first_name_daddy"
                 name="user_first_name_daddy"
                 defaultValue={form.user_first_name_daddy}
                 readOnly               

               />
              
             </Col>

             <Col md="4" className="form-group">
               <label>Teléfono daddy</label>
               <Input
                
                 id="customer_mobile"
                 name="customer_mobile"
                 defaultValue={form.customer_mobile}
                 readOnly
                 
               />
            
             </Col>
             
           </Row>
       
           <Row form>
             
           
             <Col md="4" className="form-group">
               <label>Email daddy</label>
               <Input
                 id="customer_email"
                 name="customer_email"
                 value={form.customer_email}
                readOnly
               />               
             </Col>   
             <Col md="4" className="form-group">
               <label>Nombre nanny</label>
               <Input
                 id="user_first_name_nanny"
                 name="user_first_name_nanny"
                 value={form.user_first_name_nanny}
                readOnly
               />               
             </Col>   
             <Col md="4" className="form-group">
               <label>Teléfono nanny</label>
               <Input
                 id="nanny_mobile"
                 name="nanny_mobile"
                 value={form.nanny_mobile}
                readOnly
               />               
             </Col>   
             
            
           </Row>
           <Row form>
             
           
             <Col md="4" className="form-group">
               <label>Email nanny</label>
               <Input
                 id="nanny_email"
                 name="nanny_email"
                 value={form.nanny_email}
                readOnly
               />               
             </Col>   
             </Row>
        
           <hr className="my-3" />
          
          {/*  <Row className="mt-5 mb-2"> <h2 className="display-5">Estado</h2></Row>
           <Row form >
             
              <Col md="4" className="form-group">
              <FormGroup>
                <Label for="selectstatus">Estado</Label>
                <Input type="select" name="selectstatus" onChange={onChangeStatus}>

                <option selected={(form.booking_service_status==""||form.booking_service_status=="pending")?true:false} value="pending">Pendiente</option>
                  <option selected={(form.booking_service_status=="accept")?true:false} value="accept">Aceptado</option>
                  <option selected={(form.booking_service_status=="paid")?true:false} value="paid">Pagado</option>
                  <option selected={(form.booking_service_status=="do")?true:false} value="do">Finalizado</option>
                  <option selected={(form.booking_service_status=="reject")?true:false} value="reject">Rechazado</option>
                  <option selected={(form.booking_service_status=="cancel")?true:false} value="cancel">Cancelado</option>
                 
                  
                                
                </Input>
            </FormGroup>

            </Col>
            </Row>
            <hr className="my-3" /> */}
          
          <Row className="mt-5 mb-2"> <h2 className="display-5">Observaciones</h2></Row>
          <Row form >
            
             <Col md="4" className="form-group">
             <FormGroup>
               <label >Observaciones</label>
               <Input 
               
               id="booking_service_observaciones"
               name="booking_service_observaciones"
               defaultValue={form.booking_service_observaciones}
            
               onChange={onChangeReviews}              
               
               />
              
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

BookingDoForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  nombre:PropTypes.string,
  pvc:PropTypes.number

};

BookingDoForm.defaultProps = {
  title: "Editar pieza"
};

export default BookingDoForm;
