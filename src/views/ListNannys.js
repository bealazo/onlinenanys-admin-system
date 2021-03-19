
import React from "react";

// reactstrap components
import {
 
 Col, 
  Container,
  Row,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Badge
  
} from "reactstrap";
import FuzzySearch from "fuzzy-search";


export default class ListNannys extends React.Component{

            constructor(props){
              super(props)
            this.state=({

                      pageSizeOptions: [5, 10, 15, 20, 25, 30],
                      pageSize: 5,
                      nannys:[ 
                        {
                          user_id: 1,
                          user_first_name:"Beatriz",
                          user_last_name:"Lazo Tamayo",
                          user_mobile:"641420802",
                          user_email:"bea@gmail.com",
                          user_description:"soy hermosisima",
                          location_name:'Calle Nebrija, 13, 47010 Valladolid, España',
                          question_1: "si",
                          question_2:",bailar,animacion,patinaje,futbol,manualidades,cocinar",
                          question_3:",jugar,actividades,paciencia",
                          question_4:",no tengo preferencias",
                          question_5:"si",
                          question_6:"si",
                          question_7:"No tengo preferencias",
                          question_8:",llamar a los padres,llamar a emergencias",
                          question_9:",deberes,paseos,futbol,otros deportes,juegos,tareas del hogar,cocinar,organizar,limpiar",
                          question_10:"si",
                          educations:[
                            {
                            education_name:"Ingeniería informática",
                            education_center:"Universidad de Valladolid",
                            education_year:"2018"
                            },
                            {
                              education_name:"Educación Primaria",
                              education_center:"Universidad de Valladolid",
                              education_year:"2012"
                              }

                          ],
                          experiences:[
                            {
                            experiences_place:"parla",
                            experiences_job:"Niñera ",
                            experiences_year_begin:"2017",
                            experiences_year_end:"2019"
                            },
                            {
                              experiences_place:"Valladolid",
                              experiences_job:"OTS ",
                              experiences_year_begin:"2020",
                              experiences_year_end:null
                              }

                          ]
                         
                        },
                        {
                           
                          user_id: 2,
                          user_first_name: 'Beatriz',
                          user_last_name: "Lazo Tamayo"
                          },
                          {
                           
                           user_id: 3,
                            user_first_name: 'Beatriz',
                            user_last_name: "Lazo Tamayo"
                            },
                            {
                           
                               user_id: 4,
                                user_first_name: 'Beatriz',
                                user_last_name: "Lazo Tamayo"
                                },
                                {
                           
                                    user_id: 5,
                                    user_first_name: 'Beatriz',
                                    user_last_name: "Lazo Tamayo"
                                    },
                                    {
                           
                                        user_id: 6,
                                        user_first_name: 'Beatriz',
                                        user_last_name: "Lazo Tamayo"
                                        },
                                        {
                           
                                            user_id: 7,
                                            user_first_name: 'Beatriz',
                                            user_last_name: "Lazo Tamayo"
                                            },
                                            {
                           
                                                user_id: 8,
                                                user_first_name: 'Beatriz',
                                                user_last_name: "Lazo Tamayo"
                                                },
                                                {
                           
                                                    user_id: 9,
                                                    user_first_name: 'Beatriz',
                                                    user_last_name: "Lazo Tamayo"
                                                    },
                                                    {
                           
                                                        user_id: 10,
                                                        user_first_name: 'Beatriz',
                                                        user_last_name: "Lazo Tamayo"
                                                        }
                        ]
                        
                  

              });

              this.searcher = null;
              this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
              this.handleFilterSearch = this.handleFilterSearch.bind(this);
             // this.handleUpdate=this.handleUpdate.bind(this)
            
          }


      async componentDidMount(){
        
            try {
    
                //SUSTITUIR POR LA LLAMADA A LA API
                let res=this.state.nannys
                //CONVIERTO LA RESPUESTA A JSON
                //let nannys=await res.json()
                let nannys=res
    
            /*     this.setState(
                    {
                        ...this.state,nannys
                    }
                   
                ) */
               // Initialize the fuzzy searcher.
               this.searcher = new FuzzySearch(nannys, ["id","user_first_name", "user_last_name"], {
                caseSensitive: false
            });
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

   
   render() {
     const {nannys,pageSize,pageSizeOptions}=this.state
  return (
<>
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">Nannys pendientes</h5>
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
                                <InputGroupAddon type="prepend">
                                   
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
                <h3 className="mb-0">Listado de nannys</h3>
              </CardHeader>
              <Table className="align-items-center table-flush table-dark" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
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


