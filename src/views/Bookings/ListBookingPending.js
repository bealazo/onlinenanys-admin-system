
import React from "react";

// reactstrap components
import {
 
  Col, 
  Container,
  Row, 
  Input,
  InputGroup,
  InputGroupAddon, 
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Alert,
  Button,
  Modal, ModalHeader, ModalBody
 
} from "reactstrap";
import FuzzySearch from "fuzzy-search";
import {API_BOOKING_All, API_UPDATE_BOOKING, API_DADDY_ALL} from "../../constants/const";
import Utils from "../../constants/utils_const"


export default class ListBookingPending extends React.Component{

            constructor(props){
              super(props)
            this.state=({

                      pageSizeOptions: [5, 10, 15, 20, 25, 30],
                      pageSize: 5,
                      open_modal:false,
                      bookings:[] ,
                      total_pending:0   
                       
              });

              this.searcher = null;
              this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
              this.handleFilterSearch = this.handleFilterSearch.bind(this);
              this.getbookings=this.getbookings.bind(this);
              this.handleDesactivate=this.handleDesactivate.bind(this);
              this.toggle=this.toggle.bind(this)
            
          }


      async componentDidMount(){
       
            try {            
              var bookings =[];

              fetch(API_BOOKING_All, {
               // mode:"no-cors",
                method: 'GET',                  
                headers: new Headers({
                  'Content-Type': 'application/json'
                 })                   
               
              }).then(Utils.processResponse)
              .then(res => {
                const { statusCode, data } = res;
              
                if (statusCode === 200) {
                  
                  for (let index = 0; index < data.length; index++) {
                    if(data[index].booking_service_status=="pending")
                    bookings.push(data[index])                    
                  }
                
                  this.setState({bookings: bookings, total_pending:bookings.length}); 
                // Initialize the fuzzy searcher.
               this.searcher = new FuzzySearch(bookings, ["id","booking_service_created","booking_service_begin", "user_first_name_daddy","user_first_name_nanny","customer_email","nanny_email","customer_mobile","nanny_mobile","location_name"], {
                caseSensitive: false
              });
                } else {
                 Alert.alert("Error",'No se ha podido obtener el listado');
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

          var bookings =[];

          fetch(API_BOOKING_All, {
            // mode:"no-cors",
             method: 'GET',                  
             headers: new Headers({
               'Content-Type': 'application/json'
              })                   
            
           }).then(Utils.processResponse)
           .then(res => {
             const { statusCode, data } = res;
           
             if (statusCode === 200) {
               
               for (let index = 0; index < data.length; index++) {
                 if(data[index].booking_service_status=="pending")
                 bookings.push(data[index])                    
               }
             
               this.setState({bookings: bookings, total_pending:bookings.length}); 
             // Initialize the fuzzy searcher.
            this.searcher = new FuzzySearch(bookings, ["id","booking_service_created","booking_service_begin", "user_first_name_daddy","user_first_name_nanny","customer_email","nanny_email","customer_mobile","nanny_mobile","location_name"], {
             caseSensitive: false
           });
             } else {
              Alert.alert("Error",'No se ha podido obtener el listado');
             } 
           }).catch(error => console.log(error));
         
      }
        /**
     * Handles the disable booking´s account.
     */
    handleDesactivate=(booking)=> {

      let data={
        user_id:booking.user_id,        
        booking_service_status:"disabled"
    }
    console.log(data)
       
        //********CONEXION A LA API**********

        fetch(API_UPDATE_BOOKING, {
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
              console.log("Error",'No se ha podido desactivar el daddy')
           } 
         }).catch(error => console.log(error)); 
        
    
      
    }   
      /**
     * Handles the page size change event.
     */
    handlePageSizeChange=(e)=> {
       
      this.setState({
        ...this.state,
        pageSize: e.target.value
        });
      
    }
    /**
    * Handles the global search.
    */
  handleFilterSearch=(e)=> {
    this.setState({
      ...this.state,
      bookings: this.searcher.search(e.target.value)
      });
       
    }

 

    getbookings=()=>{

     
       var bookings =[];

       fetch(API_BOOKING_All, {
        // mode:"no-cors",
         method: 'GET',                  
         headers: new Headers({
           'Content-Type': 'application/json'
          })                   
        
       }).then(Utils.processResponse)
       .then(res => {
         const { statusCode, data } = res;
       
         if (statusCode === 200) {
          for (let index = 0; index < data.length; index++) {
            if(data[index].booking_service_status=="pending")
            bookings.push(data[index])                    
          }     
                   
           this.setState({bookings: bookings, total_pending:bookings.length}); 
         } else {
          console.log("Error",'No se ha podido obtener el listado')
         } 
       }).catch(error => console.log(error));



    }
    handleUpdate=(booking)=> {

        console.log(booking)
  
  
       this.props.history.push({
         
        pathname:"/admin/ver-booking-pendiente",
        state: {booking:booking
        }
          
      });
           
      }
   
   render() {
     const {bookings,pageSize,pageSizeOptions}=this.state
     console.log(this.state.bookings)
  
  return (
<>
   {/* Modal update */}   
   <Modal isOpen={this.state.open_modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Información</ModalHeader>
        <ModalBody>
        Daddy desactivado.
        </ModalBody>
        
      </Modal>
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">Bookings Pendientes</h5>
          </div>
        </Container>
      </div>
  
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="justify-content-end mb-2">
                         

                            <Col md="1">
                                <h3 className="text-white font-weight-bold">Total:</h3>
                               
                            </Col>
                            <Col md="1">
                            <h3 className="text-white font-weight-bold">{this.state.total_pending}</h3>
                            </Col>
                            
                            {/* Filters :: Search */}
                            <Col className="file-manager__filters__search d-flex" md="2">
                                <InputGroup seamless size="sm" className="ml-auto">
                                <InputGroupAddon addonType="prepend">
                                   
                                <i className="fa fa-search" />
                                    
                                </InputGroupAddon>
                                <Input onChange={this.handleFilterSearch} />
                                </InputGroup>
                            </Col>
        </Row>
        {/* Table */}
     
     <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                <h3 className="mb-0">Listado de bookings</h3>
                <Button color="link" className="mt--2" onClick={this.getbookings}><i className="fa fa-sync" /></Button>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush table-dark" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fecha creado</th>
                    <th scope="col">Fecha inicio</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Nombre daddy</th>
                    <th scope="col">Teléfono daddy</th>
                    <th scope="col">Email daddy</th>
                    <th scope="col">Nombre nanny</th>
                    <th scope="col">Teléfono nanny</th>
                    <th scope="col">Email nanny</th>
                    <th scope="col" className="text-right">Acciones</th>
                 
                  </tr>
                </thead>
                <tbody>
                { 
                      bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.id}</td>
                            <td>{booking.booking_service_created}</td>
                            <td>{booking.booking_service_begin}</td>
                            <td>{booking.location_name}</td>
                            <td>{booking.user_first_name_daddy}</td>
                            <td>{booking.customer_mobile}</td>
                            <td>{booking.customer_email}</td>
                            <td>{booking.user_first_name_nanny}</td>
                            <td>{booking.nanny_mobile}</td>
                            <td>{booking.nanny_email}</td>
                            <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>

                          <DropdownItem
                            //href="#"
                            onClick={this.handleUpdate.bind(this,booking)}
                          >                            
                           {/*  <Link to={{
                                  pathname: '/admin/actualizar',
                                  state: {
                                    fromNotifications: true
                                  } 
                                }}>Tyler McGinnis</Link> */}
                            Ver
                          </DropdownItem>
                        {/*   <DropdownItem
                            //href="#"
                            onClick={this.handleDesactivate.bind(this,booking)}
                          >
                            Desactivar
                          </DropdownItem> */}
                          
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>

                        </tr>
                      ))
                  
                }
             
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
     
      
      </Container>
      </>
         
    );
  }
}


