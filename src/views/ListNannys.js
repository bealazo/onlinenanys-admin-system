
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
  Button
 
} from "reactstrap";
import FuzzySearch from "fuzzy-search";
import {API_NANNY_ALL} from "constants/const";
import Utils from "constants/utils_const"


export default class ListNannys extends React.Component{

            constructor(props){
              super(props)
            this.state=({

                      pageSizeOptions: [5, 10, 15, 20, 25, 30],
                      pageSize: 5,
                      nannys:[]      
                       
              });

              this.searcher = null;
              this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
              this.handleFilterSearch = this.handleFilterSearch.bind(this);
              this.getNannys=this.getNannys.bind(this);
            
          }


      async componentDidMount(){
       
            try {            
              var nannys =[];

              fetch(API_NANNY_ALL, {
               // mode:"no-cors",
                method: 'GET',                  
                headers: new Headers({
                  'Content-Type': 'application/json'
                 })                   
               
              }).then(Utils.processResponse)
              .then(res => {
                const { statusCode, data } = res;
              
                if (statusCode === 200) {
                 
                  nannys=data
                  this.setState({nannys: nannys}); 
                // Initialize the fuzzy searcher.
               this.searcher = new FuzzySearch(nannys, ["id","user_first_name", "user_last_name","user_email","user_mobile"], {
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
      nannys: this.searcher.search(e.target.value)
      });
       
    }

    handleUpdate=(nanny)=> {

         
     this.props.history.push({
       
      pathname:"/admin/actualizar",
      state: {nanny:nanny}
    });
         
    }

    getNannys=()=>{

     
       var nannys =[];

       fetch(API_NANNY_ALL, {
        // mode:"no-cors",
         method: 'GET',                  
         headers: new Headers({
           'Content-Type': 'application/json'
          })                   
        
       }).then(Utils.processResponse)
       .then(res => {
         const { statusCode, data } = res;
       
         if (statusCode === 200) {          
           nannys=data           
           this.setState({nannys: nannys}); 
         } else {
          console.log("Error",'No se ha podido obtener el listado')
         } 
       }).catch(error => console.log(error));



    }

   
   render() {
     const {nannys,pageSize,pageSizeOptions}=this.state
     console.log(this.state.nannys)
  return (
<>
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">Nannys pendientes de verificación</h5>
          </div>
        </Container>
      </div>
  
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="justify-content-end mb-2">
                            {/* Filters :: Page Size */}
                         {/*  <Col className="file-manager__filters__rows d-flex" md="2">
                                <span>Mostrar: </span>
                                <Input type="select" name="select" id="exampleSelect"
                                    size="sm"
                                    value={pageSize}
                                    onChange={this.handlePageSizeChange}
                                >
                                {pageSizeOptions.map((size, idx) => (
                                    <option key={idx} value={size}>
                                        {size} filas
                                    </option>
                                ))}
                                </Input>
                            </Col>  */}

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
                <h3 className="mb-0">Listado de nannys</h3>
                <Button color="link" className="mt--2" onClick={this.getNannys}><i className="fa fa-sync" /></Button>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush table-dark" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col" className="text-right">Acciones</th>
                 
                  </tr>
                </thead>
                <tbody>
                { 
                      nannys.map((nanny, index) => (
                        <tr key={index}>
                            <td>{nanny.user_id}</td>
                            <td>{nanny.user_first_name}</td>
                            <td>{nanny.user_last_name}</td>
                            <td>{nanny.user_email}</td>
                            <td>{nanny.user_mobile}</td>
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
                            onClick={this.handleUpdate.bind(this,nanny)}
                          >
                           {/*  <Link to={{
                                  pathname: '/admin/actualizar',
                                  state: {
                                    fromNotifications: true
                                  } 
                                }}>Tyler McGinnis</Link> */}
                            Actualizar
                          </DropdownItem>
                          
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


