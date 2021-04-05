import React from "react";
import { Container,Row, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";

import NannyUpdateForm from "../components/custom/NannyUpdateForm"
import {API_UPDATE_NANNY, API_UPDATE_USER} from "constants/const"
import Utils from "constants/utils_const"




class NannyUpdate extends React.Component{
    
    constructor(props){
        super(props)
        this.state=(

            { 
            
            form: this.props.location.state.nanny, 
            forces: this.props.location.state.forces,  
            oportunities:this.props.location.state.oportunities,
            comments:this.props.location.state.comments,
            profile:{selectprofile:"junior"},
            status:{selectstatus:"pending"},
            reviews:{value:this.props.location.state.nanny.nany_observaciones},

            //HERE
            name:{value:this.props.location.state.nanny.user_first_name},
            lastname:{value:this.props.location.state.nanny.user_last_name},
            email:{value:this.props.location.state.nanny.user_email},
            presentation:{value:this.props.location.state.nanny.user_description},

            open_modal:false,

            //initialize forces          
            checked_colabora:this.props.location.state.checked_colabora,
            checked_entusiasmo:this.props.location.state.checked_entusiasmo,
            checked_tar:this.props.location.state.checked_tar,
            checked_jueg:this.props.location.state.checked_jueg,
            checked_exp:this.props.location.state.checked_exp,
            checked_cert:this.props.location.state.checked_cert,
            checked_esP:this.props.location.state.checked_esP,
            checked_esI:this.props.location.state.checked_esI,
            checked_esCR:this.props.location.state.checked_esCR,
            checked_estI:this.props.location.state.checked_estI,
            checked_profE:this.props.location.state.checked_profE,
            checked_profM:this.props.location.state.checked_profM,
            checked_profA:this.props.location.state.checked_profA,
           

            //initialize oportunities          
            checked_solotardes:this.props.location.state.checked_solotardes,
            checked_soloman:this.props.location.state.checked_soloman,
            checked_solofinde:this.props.location.state.checked_solofinde,
            checked_prefB:this.props.location.state.checked_prefB,
            checked_pref2:this.props.location.state.checked_pref2,
            checked_pref6:this.props.location.state.checked_pref6,          
            checked_expmen1:this.props.location.state.checked_expmen1,
            checked_soloexpF:this.props.location.state.checked_soloexpF,
            checked_soloEsp:this.props.location.state.checked_soloEsp,

            //initialize comments          
            checked_org:this.props.location.state.checked_org,
            checked_org1:this.props.location.state.checked_org1,
            checked_div:this.props.location.state.checked_div,
            checked_div1:this.props.location.state.checked_div1,
            checked_cons:this.props.location.state.checked_cons,
            checked_cons1:this.props.location.state.checked_cons1,
            checked_am:this.props.location.state.checked_am,
            checked_am1:this.props.location.state.checked_am1,
            checked_car:this.props.location.state.checked_car,
            checked_car1:this.props.location.state.checked_car1,
            checked_rel:this.props.location.state.checked_rel,
            checked_rel1:this.props.location.state.checked_rel1,

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

        //HERE
        this.handleName=this.handleName.bind(this)
        this.handleLastname=this.handleLastname.bind(this)
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePresentation=this.handlePresentation.bind(this)

        this.toggle=this.toggle.bind(this)
        
   
    }

   
    handleClick()
    {
        this.props.history.push({
           
                pathname:"/admin/nannys-pendientes",

        
        })
       
    }

    handleChangeForces(e)
    {
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
       
        const name = target.name;
        if(name=="checked_colabora"){this.setState({        
         checked_colabora:!this.state.checked_colabora,            
        });}
        if(name=="checked_entusiasmo"){this.setState({        
            checked_entusiasmo:!this.state.checked_entusiasmo,            
           });}
           if(name=="checked_tar"){this.setState({        
            checked_tar:!this.state.checked_tar,            
           });}
           if(name=="checked_jueg"){this.setState({        
            checked_jueg:!this.state.checked_jueg,            
           });}
           if(name=="checked_exp"){this.setState({        
            checked_exp:!this.state.checked_exp,            
           });}
           if(name=="checked_cert"){this.setState({        
            checked_cert:!this.state.checked_cert,            
           });}
           if(name=="checked_esP"){this.setState({        
            checked_esP:!this.state.checked_esP,            
           });}
           if(name=="checked_esI"){this.setState({        
            checked_esI:!this.state.checked_esI,            
           });}
           if(name=="checked_esCR"){this.setState({        
            checked_esCR:!this.state.checked_esCR,            
           });}
           if(name=="checked_estI"){this.setState({        
            checked_estI:!this.state.checked_estI,            
           });}
           if(name=="checked_profE"){this.setState({        
            checked_profE:!this.state.checked_profE,            
           });}
           if(name=="checked_profM"){this.setState({        
            checked_profM:!this.state.checked_profM,            
           });}
           if(name=="checked_profA"){this.setState({        
            checked_profA:!this.state.checked_profA,            
           });}
          
    
        this.setState({        
        forces:{...this.state.forces,[name]:value},
                
        });
           
    }
    handleChangeOportunities(e)
    {
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name=="checked_solotardes"){this.setState({        
            checked_solotardes:!this.state.checked_solotardes,            
           });}
           if(name=="checked_soloman"){this.setState({        
            checked_soloman:!this.state.checked_soloman,            
           });}
           if(name=="checked_solofinde"){this.setState({        
            checked_solofinde:!this.state.checked_solofinde,            
           });}
           if(name=="checked_prefB"){this.setState({        
            checked_prefB:!this.state.checked_prefB,            
           });}
           if(name=="checked_pref2"){this.setState({        
            checked_pref2:!this.state.checked_pref2,            
           });}
           if(name=="checked_pref6"){this.setState({        
            checked_pref6:!this.state.checked_pref6,            
           });}
         
           if(name=="checked_expmen1"){this.setState({        
            checked_expmen1:!this.state.checked_expmen1,            
           });}
           if(name=="checked_soloexpF"){this.setState({        
            checked_soloexpF:!this.state.checked_soloexpF,            
           });}
           if(name=="checked_soloEsp"){this.setState({        
            checked_soloEsp:!this.state.checked_soloEsp,            
           });}

        this.setState({
        
        oportunities:{...this.state.oportunities,[name]:value}
        });
       
       
    }
    handleChangeComments(e)
    {
        
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(name=="checked_org"){this.setState({        
            checked_org:!this.state.checked_org,            
           });}
           if(name=="checked_org1"){this.setState({        
            checked_org1:!this.state.checked_org1,            
           });}
           if(name=="checked_div"){this.setState({        
            checked_div:!this.state.checked_div,            
           });}
           if(name=="checked_div1"){this.setState({        
            checked_div1:!this.state.checked_div1,            
           });}
           if(name=="checked_cons"){this.setState({        
            checked_cons:!this.state.checked_cons,            
           });}
           if(name=="checked_cons1"){this.setState({        
            checked_cons1:!this.state.checked_cons1,            
           });}
           if(name=="checked_am"){this.setState({        
            checked_am:!this.state.checked_am,            
           });}
           if(name=="checked_am1"){this.setState({        
            checked_am1:!this.state.checked_am1,            
           });}
           if(name=="checked_car"){this.setState({        
            checked_car:!this.state.checked_car,            
           });}
           if(name=="checked_car1"){this.setState({        
            checked_car1:!this.state.checked_car1,            
           });}
           if(name=="checked_rel"){this.setState({        
            checked_rel:!this.state.checked_rel,            
           });}
           if(name=="checked_rel1"){this.setState({        
            checked_rel1:!this.state.checked_rel1,            
           });}
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

    //HERE

    handleName(e)
    {
        
        const target = e.target;
        const value = target.value;
       
        this.setState({
        
        name:{...this.state.name,value}
        });
       
       
    }
    handleLastname(e)
    {
        
        const target = e.target;
        const value = target.value;
       
        this.setState({
        
        lastname:{...this.state.lastname,value}
        });
       
       
    }
    handleEmail(e)
    {
        
        const target = e.target;
        const value = target.value;
       
        this.setState({
        
        email:{...this.state.email,value}
        });
       
       
    }
    handlePresentation(e)
    {
        
        const target = e.target;
        const value = target.value;
       
        this.setState({
        
        presentation:{...this.state.presentation,value}
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
          
                    forces2["checked_entusiasmo"]===true?forces1+="Entusiasmo y deseos de trabajar,":forces1+=""
                    forces2["checked_colabora"]===true?forces1+="Colabora con Deberes,":forces1+=""    
                    forces2["checked_tar"]===true?forces1+="Colabora en Tareas del Hogar,":forces1+="" 
                    forces2["checked_jueg"]===true?forces1+="Entretiene y hace reír,":forces1+="" 
                    forces2["checked_exp"]===true?forces1+="Hace deportes,":forces1+="" 
                    forces2["checked_cert"]===true?forces1+="Hace manualidades,":forces1+="" 
                    forces2["checked_esP"]===true?forces1+="Toca instrumento musical,":forces1+="" 
                    forces2["checked_esI"]===true?forces1+="Pinta, dibuja y colorea,":forces1+="" 
                    forces2["checked_esCR"]===true?forces1+="Estudios de Preescolar/Educación Infantil,":forces1+="" 
                    forces2["checked_estI"]===true?forces1+="Estudios Superiores de algún tipo,":forces1+="" 
                    forces2["checked_profE"]===true?forces1+="Certificado de Primeros Auxilios,":forces1+="" 
                    forces2["checked_profM"]===true?forces1+="Estudios de Enfermería o Similares,":forces1+="" 
                    forces2["checked_profA"]===true?forces1+="Monitora de Deportes,":forces1+="" 
                  

                    oportunities2["checked_solotardes"]===true?oportunities1+="Solo trabaja por las tardes,":oportunities1+="" 
                    oportunities2["checked_soloman"]===true?oportunities1+="Solo trabaja por las mañanas,":oportunities1+="" 
                    oportunities2["checked_solofinde"]===true?oportunities1+="Solo trabaja fines de semanas,":oportunities1+="" 
                    oportunities2["checked_prefB"]===true?oportunities1+="Prefiere trabajar con Bebes,":oportunities1+="" 
                    oportunities2["checked_pref2"]===true?oportunities1+="Prefiere Trabajar con niños mayores de 2 años,":oportunities1+="" 
                    oportunities2["checked_pref6"]===true?oportunities1+="Prefiere Trabajar con niños mayores de 5 años,":oportunities1+=""                    
                    oportunities2["checked_expmen1"]===true?oportunities1+="Experiencia menos de 1 año,":oportunities1+="" 
                    oportunities2["checked_soloexpF"]===true?oportunities1+="Solo experiencia Familiar,":oportunities1+="" 
                    oportunities2["checked_soloEsp"]===true?oportunities1+="Solo lengua materna,":oportunities1+="" 
                  
                    comments2["checked_org"]===true?comments1+="Organizada,":comments1+="" 
                    comments2["checked_org1"]===true?comments1+="Paciente,":comments1+="" 
                    comments2["checked_div"]===true?comments1+="Divertida,":comments1+="" 
                    comments2["checked_div1"]===true?comments1+="Afable,":comments1+="" 
                    comments2["checked_cons"]===true?comments1+="Consistente,":comments1+="" 
                    comments2["checked_cons1"]===true?comments1+="Sistemática,":comments1+=""
                    comments2["checked_am"]===true?comments1+="Amable,":comments1+="" 
                    comments2["checked_am1"]===true?comments1+="Entusiasta,":comments1+=""
                    comments2["checked_car"]===true?comments1+="Cariñosa,":comments1+="" 
                    comments2["checked_car1"]===true?comments1+="Atenta,":comments1+="" 
                    comments2["checked_rel"]===true?comments1+="Relajado,":comments1+="" 
                    comments2["checked_rel1"]===true?comments1+="Tolerante,":comments1+="" 

            let data={
                user_id:this.state.form.user_id,
                nany_fortalezas:forces1,
                nany_oportunidades:oportunities1,
                nany_comentarios:comments1,
                nany_tipo_perfil:this.state.profile.selectprofile,
                nany_observaciones:this.state.reviews.value,
                user_status:this.state.status.selectstatus,

            }

               console.log(data)      
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
              // this.setState({open_modal:true});
              
             } else {
                console.log("Error",'No se ha podido actualizar a la nanny')
             } 
           }).catch(error => console.log(error)); 


           //HERE

           let data1={
            id:this.state.form.user_id,
            user_first_name:this.state.name.value,
            user_last_name:this.state.lastname.value,
            user_email:this.state.email.value,
            user_description:this.state.presentation.value
        }

        console.log(data1)

           fetch(API_UPDATE_USER, {
            // mode:"no-cors",
             method: 'PUT', 
             body: JSON.stringify(data1),                 
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
            pathname:"/admin/nannys-pendientes"                   
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
        Nanny actualizada correctamente.
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
                  
                    checked_colabora={this.state.checked_colabora}
                    checked_entusiasmo={this.state.checked_entusiasmo}
                    checked_tar={this.state.checked_tar}
                    checked_jueg={this.state.checked_jueg}
                    checked_exp={this.state.checked_exp}
                    checked_cert={this.state.checked_cert}
                    checked_esP={this.state.checked_esP}
                    checked_esI={this.state.checked_esI}
                    checked_esCR={this.state.checked_esCR}
                    checked_estI={this.state.checked_estI}
                    checked_profE={this.state.checked_profE}
                    checked_profM={this.state.checked_profM}
                    checked_profA={this.state.checked_profA}
                   

                    checked_solotardes={this.state.checked_solotardes}
                    checked_soloman={this.state.checked_soloman}
                    checked_solofinde={this.state.checked_solofinde}
                    checked_prefB={this.state.checked_prefB}
                    checked_pref2={this.state.checked_pref2}
                    checked_pref6={this.state.checked_pref6}                   
                    checked_expmen1={this.state.checked_expmen1}
                    checked_soloexpF={this.state.checked_soloexpF}
                    checked_soloEsp={this.state.checked_soloEsp}

                    checked_org={this.state.checked_org}
                    checked_org1={this.state.checked_org1}
                    checked_div={this.state.checked_div}
                    checked_div1={this.state.checked_div1}
                    checked_cons={this.state.checked_cons}
                    checked_cons1={this.state.checked_cons1}
                    checked_am={this.state.checked_am}
                    checked_am1={this.state.checked_am1}
                    checked_car={this.state.checked_car}
                    checked_car1={this.state.checked_car1}
                    checked_rel={this.state.checked_rel}
                    checked_rel1={this.state.checked_rel1}
                   
                   
                    onChangeForces={this.handleChangeForces}
                    onChangeOportunities={this.handleChangeOportunities}
                    onChangeComments={this.handleChangeComments}
                    onChangeStatus={this.handleChangeStatus}
                    onChangeProfile={this.handleChangeProfile}
                    onChangeReviews={this.handleChangeReviews}
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleClick}

                    //HERE
                    onChangeName={this.handleName}
                    onChangeLastname={this.handleLastname}
                    onChangeEmail={this.handleEmail}
                    onChangePresentation={this.handlePresentation}                 
                />
                
            </Container>

            </>
        )
     }
    
}
export default NannyUpdate