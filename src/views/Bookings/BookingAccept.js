import React from "react";
import { Container,Row, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";

import BookingAcceptForm from "../../components/custom/BookingAcceptForm"
import {API_UPDATE_BOOKING, API_UPDATE_USER} from "constants/const"
import Utils from "constants/utils_const"




class BookingAccept extends React.Component{
    
    constructor(props){
        super(props)
        this.state=(

            { 
            
            form: this.props.location.state.booking,           
            status:{selectstatus:this.props.location.state.booking.booking_service_status},
            reviews: this.props.location.state.booking.booking_service_observaciones,
          
            open_modal:false,

        

            error:null
            }
            
        )
        this.handleClick=this.handleClick.bind(this)       
        this.handleChangeStatus=this.handleChangeStatus.bind(this)
        this.handleChangeReviews=this.handleChangeReviews.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
       
    
        this.toggle=this.toggle.bind(this)
        
   
    }

   
    handleClick()
    {
        this.props.history.push({
           
                pathname:"/admin/bookings-aceptados",

        
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
    handleChangeReviews(e)
    {
        console.log("entre a handlechangereviews")
        
        const target = e.target;
        const value = target.value;   
        console.log(value)  
      
        this.setState({
        
        reviews:{...this.state.reviews,value}
        });
       
       
    }
  
   
    async handleSubmit (e){
       
        e.preventDefault()


        //OJO TENGO QUE ENVIAR EL USER_ID Y LOS CAMPOS EDITABLES (COMO STRING)
        
        try {

         
            let data={

                booking_id:this.state.form.id,                
                //booking_service_status:this.state.status.selectstatus,
                booking_service_observaciones:this.state.reviews.value

            }

               console.log(data)      
           //********CONEXION A LA API**********

       fetch(API_UPDATE_BOOKING, {
            // mode:"no-cors",
             method: 'POST', 
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
                console.log("Error",'No se ha podido actualizar al booking')
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
            pathname:"/admin/bookings-aceptados"                   
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
        Booking actualizado correctamente.
        </ModalBody>
        
      </Modal>
   
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">Booking</h5>
          </div>
        </Container>
      </div>
  
            <Container fluid className="mt--9" fluid>
               
               <Row noGutters className="page-header py-4">
                    
                </Row>
                <BookingAcceptForm
                    
                    form={form}
                  
                 
                    onChangeStatus={this.handleChangeStatus}
                    onChangeReviews={this.handleChangeReviews}
                   
                    onSubmit={this.handleSubmit}
                    onCancel={this.handleClick}

                                  
                />
                
            </Container>

            </>
        )
     }
    
}
export default BookingAccept