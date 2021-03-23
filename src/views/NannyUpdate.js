import React from "react";
import { Container,Row, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";

import NannyUpdateForm from "../components/custom/NannyUpdateForm"
import {API_UPDATE_NANNY} from "constants/const"
import Utils from "constants/utils_const"




class NannyUpdate extends React.Component{
    
    constructor(props){
        super(props)
        this.state=(

            { 
            
            form: this.props.location.state.nanny, 
            forces:{},  
            oportunities:{},
            comments:{},
            profile:{selectprofile:""},
            status:{selectstatus:""},
            reviews:{value:""},
            open_modal:false,
          
            error:null
            }
            
        )
        this.handleClick=this.handleClick.bind(this)
        this.handleChangeForces=this.handleChangeForces.bind(this)
        this.handleChangeOportunities=this.handleChangeOportunities.bind(this)
        this.handleChangeComments=this.handleChangeComments.bind(this)
        this.handleChangeProfile=this.handleChangeProfile.bind(this)
        this.handleChangeStatus=this.handleChangeStatus.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChangeReviews=this.handleChangeReviews.bind(this)
        this.toggle=this.toggle.bind(this)
   
    }

    handleClick()
    {
        this.props.history.push({
           
                pathname:"/admin/nannys",

        
        })
       
    }

    handleChangeForces(e)
    {
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

      
        this.setState({
        
        forces:{...this.state.forces,[name]:value}
        });
       
       
    }
    handleChangeOportunities(e)
    {
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

      
        this.setState({
        
        oportunities:{...this.state.oportunities,[name]:value}
        });
       
       
    }
    handleChangeComments(e)
    {
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

      
        this.setState({
        
        comments:{...this.state.comments,[name]:value}
        });
       
       
    }
    handleChangeProfile(e)
    {
        
        const target = e.target;
        const value = target.type === 'select' ? target.checked : target.value;
        const name = target.name;

      
        this.setState({        
        profile:{[name]:value}
        });
     
       
    }
    handleChangeStatus(e)
    {
        
        const target = e.target;
        const value = target.type === 'select' ? target.checked : target.value;
        const name = target.name;

      
        this.setState({
        
        status:{[name]:value}
        });
       
       
    }
    handleChangeReviews(e)
    {
        
        const target = e.target;
        const value = target.value;
       
        this.setState({
        
        reviews:{...this.state.reviews,value}
        });
       
       
    }
    async handleSubmit (e){
       
        e.preventDefault()


        //OJO TENGO QUE ENVIAR EL USER_ID Y LOS CAMPOS EDITABLES (COMO STRING)
        
        try {

            var forces1="";
            var oportunities1="";
            var comments1="";

            var forces2= this.state.forces;
            var oportunities2=this.state.oportunities;
            var comments2=this.state.comments;           
          
                    forces2["Entusiasmo y deseos de trabajar"]===true?forces1+="Entusiasmo y deseos de trabajar,":forces1+=""
                    forces2["Colabora con Deberes"]===true?forces1+="Colabora con Deberes,":forces1+=""    
                    forces2["Realiza Tareas del Hogar"]===true?forces1+="Realiza Tareas del Hogar,":forces1+="" 
                    forces2["Juega y hace reír a los niños"]===true?forces1+="Juega y hace reír a los niños,":forces1+="" 
                    forces2["Experiencia con niños de todas las edades"]===true?forces1+="Experiencia con niños de todas las edades,":forces1+="" 
                    forces2["Certificado de Primeros Auxilios"]===true?forces1+="Certificado de Primeros Auxilios,":forces1+="" 
                    forces2["Estudios de Prescolar"]===true?forces1+="Estudios de Prescolar,":forces1+="" 
                    forces2["Estudios en Educación Infantil"]===true?forces1+="Estudios en Educación Infantil,":forces1+="" 
                    forces2["Estudios de Cocina y Repostería"]===true?forces1+="Estudios de Cocina y Repostería,":forces1+="" 
                    forces2["Profesión Enfermera"]===true?forces1+="Profesión Enfermera,":forces1+="" 
                    forces2["Profesión Monitora de Deportes"]===true?forces1+="Profesión Monitora de Deportes,":forces1+="" 
                    forces2["Profesión Auxiliar de Enfermería"]===true?forces1+="Profesión Auxiliar de Enfermería,":forces1+="" 
                    forces2["Profesión Profesora"]===true?forces1+="Profesión Profesora,":forces1+="" 
                    forces2["Profesión Profesora de Preescolar - Educación Infantil"]===true?forces1+="Profesión Profesora de Preescolar - Educación Infantil,":forces1+="" 
                    forces2["Estudios relacionados con cuidados infantiles"]===true?forces1+="Estudios relacionados con cuidados infantiles,":forces1+="" 

                    oportunities2["Solo trabaja por las tardes"]===true?oportunities1+="Solo trabaja por las tardes,":oportunities1+="" 
                    oportunities2["Solo trabaja por las mañanas"]===true?oportunities1+="Solo trabaja por las mañanas,":oportunities1+="" 
                    oportunities2["Solo trabaja fines de semanas"]===true?oportunities1+="Solo trabaja fines de semanas,":oportunities1+="" 
                    oportunities2["Prefiere trabajar con Bebes"]===true?oportunities1+="Prefiere trabajar con Bebes,":oportunities1+="" 
                    oportunities2["Prefiere trabajar con niños de 2-6"]===true?oportunities1+="Prefiere trabajar con niños de 2-6,":oportunities1+="" 
                    oportunities2["Prefiere trabajar con niños de 6-12"]===true?oportunities1+="Prefiere trabajar con niños de 6-12,":oportunities1+="" 
                    oportunities2["Prefiere trabajar con niños mayores de 12"]===true?oportunities1+="Prefiere trabajar con niños mayores de 12,":oportunities1+="" 
                    oportunities2["Experiencia sin Titulación Especial"]===true?oportunities1+="Experiencia sin Titulación Especial,":oportunities1+="" 
                    oportunities2["Experiencia menos de 1 año"]===true?oportunities1+="Experiencia menos de 1 año,":oportunities1+="" 
                    oportunities2["Solo experiencia Familiar"]===true?oportunities1+="Solo experiencia Familiar,":oportunities1+="" 
                    oportunities2["Solo Español - Natal"]===true?oportunities1+="Solo Español - Natal,":oportunities1+="" 
                  
                    comments2["Organizada y Paciente"]===true?comments1+="Organizada y Paciente,":comments1+="" 
                    comments2["Divertida y Afable"]===true?comments1+="Divertida y Afable,":comments1+="" 
                    comments2["Consistente y Sistemática"]===true?comments1+="Consistente y Sistemática,":comments1+="" 
                    comments2["Amable y Entusiasta"]===true?comments1+="Amable y Entusiasta,":comments1+="" 
                    comments2["Cariñosa y Atenta"]===true?comments1+="Cariñosa y Atenta,":comments1+="" 
                    comments2["Relajado y Tolerante"]===true?comments1+="Relajado y Tolerante,":comments1+="" 

            let data={
                user_id:this.state.form.user_id,
                nany_fortalezas:forces1,
                nany_oportunidades:oportunities1,
                nany_comentarios:comments1,
                nany_tipo_perfil:this.state.profile.selectprofile,
                nany_observaciones:this.state.reviews.value,
                user_status:this.state.status.selectstatus
            }
        
                  
           //********CONEXION A LA API**********

           fetch(API_UPDATE_NANNY, {
            // mode:"no-cors",
             method: 'PUT', 
             body: JSON.stringify(data),                 
             headers: new Headers({
               'Content-Type': 'application/json'
              })                   
            
           }).then(Utils.processResponse)
           .then(res => {
             const { statusCode, data } = res;
           
             if (statusCode === 200) {
               this.setState({open_modal:true});
              
             } else {
                console.log("Error",'No se ha podido actualizar a la nanny')
             } 
           }).catch(error => console.log(error));
          

            
        } catch (error) {
               
            this.setState(
                {
                    
                    error:error
                }
                
             )
            
        }
    }

    toggle(){
        
        this.setState({
            open_modal:!this.state.open_modal,
           
        })
        this.props.history.push({       
            pathname:"/admin/nannys"                   
          });
       
    }

        
    render(){
      
         let form=this.state.form
       
        return(
            <>
        {/* Modal update */}   
      <Modal isOpen={this.state.open_modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Información</ModalHeader>
        <ModalBody>
        Nanny actualizada correctamente. Actualice el listado para ver los cambios.
        </ModalBody>
        
      </Modal>
   
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">Actualización del perfil de la nanny</h5>
          </div>
        </Container>
      </div>
  
            <Container fluid className="mt--9" fluid>
               
               <Row noGutters className="page-header py-4">
                    
                </Row>
                <NannyUpdateForm
                    
                    form={form}
                    onChangeForces={this.handleChangeForces}
                    onChangeOportunities={this.handleChangeOportunities}
                    onChangeComments={this.handleChangeComments}
                    onChangeStatus={this.handleChangeStatus}
                    onChangeProfile={this.handleChangeProfile}
                    onChangeReviews={this.handleChangeReviews}
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleClick}
                 
                />
                
            </Container>

            </>
        )
     }
    
}
export default NannyUpdate