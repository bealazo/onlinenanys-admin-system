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

                                                                                                                                                                                                                              
const NannyUpdateRejectForm = ({ form, checked_colabora,checked_entusiasmo,checked_tar,checked_jueg,checked_exp,checked_cert,checked_esP,checked_esI,checked_esCR,checked_profE,checked_profM,checked_profA,checked_profP,checked_profPr,checked_estI,checked_solotardes,checked_soloman,checked_solofinde,checked_prefB, checked_pref2, checked_pref6,checked_pref12,checked_expsinT,checked_expmen1,checked_soloexpF,checked_soloEsp,checked_org,checked_div,checked_cons,checked_am,checked_car,checked_rel,onChangeForces,onChangeOportunities,onChangeComments,onChangeProfile,onChangeStatus,onChangeReviews,onSubmit,onCancel}) => (
 
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
               <label>Presentación</label>
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
               <label>Dirección</label>
               <Input
                 id="location_name"
                 name="location_name"
                 value={form.location_name}
                readOnly
               />
               
             </Col>
             <Col md="4" className="form-group">
               <label>Disponibilidad</label>
               <Input
                 id="disponibilidad"
                 name="disponibilidad"
                 value={form.disponibilidad}
                readOnly
               />               
             </Col>
            
             <Col md="4" className="form-group">
               <label>Idiomas</label>
               <Input
                 id="languages"
                 name="languages"
                 value={form.languages}
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
                            <td>{(index+1) + ")" +" " +education.education_name}</td>
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
                            <td>{(index+1) + ")" +" " +experience.experiences_job}</td>
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
           <Row className="mt-5 mb-2"> <h2 className="display-5">Fortalezas</h2></Row>
           <Row form>
           <Col md="2" className="form-group">
                <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checked_entusiasmo"checked={checked_entusiasmo} onChange={onChangeForces}/>
                Entusiasmo y deseos de trabajar
              </Label>
          
            </FormGroup>
            </Col>
            <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox"  name="checked_colabora" checked={checked_colabora} onChange={onChangeForces}/>
                Colabora con Deberes
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_tar" checked={checked_tar} onChange={onChangeForces}/>
                Realiza Tareas del Hogar
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name= "checked_jueg" checked={checked_jueg} onChange={onChangeForces}/>
                Juega y hace reír a los niños
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name= "checked_exp" checked={checked_exp} onChange={onChangeForces}/>
                Experiencia con niños de todas las edades
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name= "checked_cert" checked={checked_cert} onChange={onChangeForces} />
                Certificado de Primeros Auxilios
              </Label>
              </FormGroup>
              </Col>
           </Row>
           <Row form className="mt-2">
           <Col md="2" className="form-group">
                <FormGroup check>
              <Label check>
                <Input type="checkbox" name= "checked_esP" checked={checked_esP} onChange={onChangeForces}/>
                Estudios de Prescolar
              </Label>
          
            </FormGroup>
            </Col>
            <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox"name= "checked_esI" checked={checked_esI} onChange={onChangeForces}/>
                Estudios en Educación Infantil
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name= "checked_esCR" checked={checked_esCR} onChange={onChangeForces} />
                Estudios de Cocina y Repostería
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name= "checked_estI" checked={checked_estI} onChange={onChangeForces} />
                Estudios relacionados con cuidados infantiles
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_profE" checked={checked_profE} onChange={onChangeForces}/>
                Profesión Enfermera
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_profM" checked={checked_profM} onChange={onChangeForces}/>
                Profesión Monitora de Deportes
              </Label>
              </FormGroup>
              </Col>
           </Row>
           <Row form className="mt-2">
           <Col md="2" className="form-group">
                <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checked_profA" checked={checked_profA} onChange={onChangeForces}/>
                Profesión Auxiliar de Enfermería
              </Label>
          
            </FormGroup>
            </Col>
            <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_profP" checked={checked_profP} onChange={onChangeForces} />
                Profesión Profesora
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_profPr" checked={checked_profPr} onChange={onChangeForces}/>
                Profesión Profesora de Preescolar - Educación Infantil
              </Label>
              </FormGroup>
              </Col>
            
           </Row>


           <Row className="mt-5 mb-2"> <h2 className="display-5">Oportunidades</h2></Row>
           <Row form>
           <Col md="2" className="form-group">
                <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checked_solotardes" checked={checked_solotardes} onChange={onChangeOportunities}/>
                Solo trabaja por las tardes
              </Label>
          
            </FormGroup>
            </Col>
            <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_soloman"checked={checked_soloman} onChange={onChangeOportunities}/>
                Solo trabaja por las mañanas
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_solofinde" checked={checked_solofinde}onChange={onChangeOportunities}/>
                Solo trabaja fines de semanas
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_prefB" checked={checked_prefB}onChange={onChangeOportunities}/>
                Prefiere trabajar con Bebes
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_pref2"checked={checked_pref2} onChange={onChangeOportunities}/>
                Prefiere trabajar con niños de 2-6
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_pref6" checked={checked_pref6} onChange={onChangeOportunities}/>
                Prefiere trabajar con niños de 6-12
              </Label>
              </FormGroup>
              </Col>
           </Row>
           <Row form className="mt-2">
           <Col md="2" className="form-group">
                <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checked_pref12"checked={checked_pref12} onChange={onChangeOportunities} />
                Prefiere trabajar con niños mayores de 12
              </Label>
          
            </FormGroup>
            </Col>
            <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_expsinT" checked={checked_expsinT} onChange={onChangeOportunities} />
                Experiencia sin Titulación Especial
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_expmen1" checked={checked_expmen1} onChange={onChangeOportunities}/>
                Experiencia menos de 1 año
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_soloexpF" checked={checked_soloexpF} onChange={onChangeOportunities}/>
                Solo experiencia Familiar
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_soloEsp" checked={checked_soloEsp} onChange={onChangeOportunities} />
                Solo Español - Natal
              </Label>
              </FormGroup>
              </Col>
             
           </Row>

           <Row className="mt-5 mb-2"> <h2 className="display-5">Comentarios</h2></Row>
           <Row form>
           <Col md="2" className="form-group">
                <FormGroup check>
              <Label check>
                <Input type="checkbox" name="checked_org"  checked={checked_org} onChange={onChangeComments}/>
                Organizada y Paciente
              </Label>
          
            </FormGroup>
            </Col>
            <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_div"  checked={checked_div}onChange={onChangeComments}/>
                Divertida y Afable
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_cons"  checked={checked_cons}onChange={onChangeComments}/>
                Consistente y Sistemática
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_am"  checked={checked_am}onChange={onChangeComments} />
                Amable y Entusiasta
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_car"  checked={checked_car} onChange={onChangeComments}/>
                Cariñosa y Atenta
              </Label>
              </FormGroup>
              </Col>
              <Col md="2" className="form-group">
            <FormGroup check>
            <Label check>
                <Input type="checkbox" name="checked_rel"  checked={checked_rel} onChange={onChangeComments} />
                Relajado y Tolerante
              </Label>
              </FormGroup>
              </Col>
           </Row>
           <Row className="mt-5 mb-2"> <h2 className="display-5">Observaciones</h2></Row>
           <Row form >
              <Col className="form-group">
              <FormGroup>
                <Label for="reviews">Observaciones</Label>
                <Input name="reviews" defaultValue={form.nany_observaciones} onChange={onChangeReviews}>
                     
                </Input>
            </FormGroup>
              </Col>
            
            </Row>
           <Row className="mt-5 mb-2"> <h2 className="display-5">Validación</h2></Row>
           <Row form >
              <Col md="4" className="form-group">
              <FormGroup>
                <Label for="selectprofile">Tipo de Perfil</Label>
                <Input type="select" name="selectprofile" onChange={onChangeProfile}>
                  
                 <option selected={(form.nany_tipo_perfil==""||form.nany_tipo_perfil=="junior")?true:false} value="junior">Perfil Junior</option>  
                  <option selected={(form.nany_tipo_perfil=="premium")?true:false} value="premium">Perfil Premium</option>
                  <option selected={(form.nany_tipo_perfil=="pro")?true:false} value="pro">Perfil Pro</option>    
                           
                </Input>
            </FormGroup>
              </Col>
              <Col md="4" className="form-group">
              <FormGroup>
                <Label for="selectstatus">Estado</Label>
                <Input type="select" name="selectstatus" onChange={onChangeStatus}>

                <option selected={(form.user_status==""||form.user_status=="pending")?true:false} value="pending">Pendiente</option>
                  <option selected={(form.user_status=="approved")?true:false} value="approved">Aprobado</option>
                  <option selected={(form.user_status=="reject")?true:false} value="reject">Rechazado</option>
                  <option selected={(form.user_status=="suspend")?true:false} value="suspend">Suspendido</option>
                  <option selected={(form.user_status=="disabled")?true:false} value="disable">Desactivado</option>
                  <option selected={(form.user_status==""||form.user_status=="pending")?true:false} value="pending">Pendiente</option>
                  
                                
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

NannyUpdateRejectForm.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
 

};

NannyUpdateRejectForm.defaultProps = {
  title: "Actualizar nanny"
};

export default NannyUpdateRejectForm;
