import React from "react";
import { Container,Row } from "reactstrap";

import NannyUpdateForm from "../components/custom/NannyUpdateForm"




class NannyUpdate extends React.Component{
    
    constructor(props){
        super(props)
        this.state=(

            { 
            
            form: this.props.location.state.nanny,   
          
            error:null
            }
            
        )
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
   
    }

    handleClick()
    {
        this.props.history.push({
           
                pathname:"/admin/nannys",

        
        })
       
    }

    handleChange(e)
    {
        this.setState(
            {   form: {
                ...this.state.form, 
                [e.target.name]:e.target.value
              }
          }
      )
       
    }
    async handleSubmit (e){
       
        e.preventDefault()

        console.log("entré al onsubmit")

        //OJO TENGO QUE ENVIAR EL USER_ID Y LOS CAMPOS EDITABLES (COMO STRING)
        
        try {

           //********CONEXION A LA API**********
            //Configurando la petición
            /* let config={

                method:"POST",
                headers:{
                    "Accept" : "application/json",
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(this.state.user_id)
                
            } */
          
           /*  let res =await fetch(`urlAPI`,config)
           
            let json =await res.json()
           
           // this.props.history.push("/nannys")
           
           */

            
        } catch (error) {
               
            this.setState(
                {
                    
                    error:error
                }
                
             )
            
        }
    }

   

        
    render(){
      
         let form=this.state.form
      
        return(
            <>
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
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleClick}
                 
                />
                
            </Container>

            </>
        )
     }
    
}
export default NannyUpdate