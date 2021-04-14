import React from "react";
import { Container,Row, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";

import ViewDaddyForm from "../../components/custom/ViewDaddyForm"
import {API_UPDATE_DADDY, API_UPDATE_USER} from "constants/const"
import Utils from "constants/utils_const"




class ViewDaddy extends React.Component{
    
    constructor(props){
        super(props)
        this.state=(

            { 
            
            form: this.props.location.state.daddy,           
            status:{selectstatus:this.props.location.state.daddy.user_status},
           
            //HERE
            name:{value:this.props.location.state.daddy.user_first_name},
            lastname:{value:this.props.location.state.daddy.user_last_name},
            email:{value:this.props.location.state.daddy.user_email},
            presentation:{value:this.props.location.state.daddy.user_description},

            open_modal:false,

        

            error:null
            }
            
        )
        this.handleClick=this.handleClick.bind(this)       
        this.handleChangeStatus=this.handleChangeStatus.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
       
    
        this.toggle=this.toggle.bind(this)
        
   
    }

   
    handleClick()
    {
        this.props.history.push({
           
                pathname:"/admin/daddys",

        
        })
       
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
  
   
    async handleSubmit (e){
       
        e.preventDefault()


        //OJO TENGO QUE ENVIAR EL USER_ID Y LOS CAMPOS EDITABLES (COMO STRING)
        
        try {

         
            let data={
                id:this.state.form.user_id,
                
                user_status:this.state.status.selectstatus,

            }

               console.log(data)      
           //********CONEXION A LA API**********

       fetch(API_UPDATE_USER, {
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
                console.log("Error",'No se ha podido actualizar al daddy')
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
            pathname:"/admin/daddys"                   
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
        Daddy actualizado correctamente.
        </ModalBody>
        
      </Modal>
   
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">Perfil del daddy</h5>
          </div>
        </Container>
      </div>
  
            <Container fluid className="mt--9" fluid>
               
               <Row noGutters className="page-header py-4">
                    
                </Row>
                <ViewDaddyForm
                    
                    form={form}
                  
                 
                    onChangeStatus={this.handleChangeStatus}
                   
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleClick}

                                  
                />
                
            </Container>

            </>
        )
     }
    
}
export default ViewDaddy