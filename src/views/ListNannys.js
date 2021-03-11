
import React, {useState, useEffect} from "react";
import  { useTable } from "react-table";

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

  
} from "reactstrap";
import FuzzySearch from "fuzzy-search";


const Listdata=(props)=> {
    
               const pageSizeOptions= [5, 10, 15, 20, 25, 30]
               let pageSize= 5
               const data=[ 
                    {
                      id: 1,
                      user_first_name: 'Beatriz',
                      user_last_name: "Lazo Tamayo"
                     
                    },
                    {
                       
                      id: 2,
                      user_first_name: 'Beatriz',
                      user_last_name: "Lazo Tamayo"
                      },
                      {
                       
                        id: 3,
                        user_first_name: 'Beatriz',
                        user_last_name: "Lazo Tamayo"
                        },
                        {
                       
                            id: 4,
                            user_first_name: 'Beatriz',
                            user_last_name: "Lazo Tamayo"
                            },
                            {
                       
                                id: 5,
                                user_first_name: 'Beatriz',
                                user_last_name: "Lazo Tamayo"
                                },
                                {
                       
                                    id: 6,
                                    user_first_name: 'Beatriz',
                                    user_last_name: "Lazo Tamayo"
                                    },
                                    {
                       
                                        id: 7,
                                        user_first_name: 'Beatriz',
                                        user_last_name: "Lazo Tamayo"
                                        },
                                        {
                       
                                            id: 8,
                                            user_first_name: 'Beatriz',
                                            user_last_name: "Lazo Tamayo"
                                            },
                                            {
                       
                                                id: 9,
                                                user_first_name: 'Beatriz',
                                                user_last_name: "Lazo Tamayo"
                                                },
                                                {
                       
                                                    id: 10,
                                                    user_first_name: 'Beatriz',
                                                    user_last_name: "Lazo Tamayo"
                                                    }
                    ]
                    
                  const [searcher, setSearcher] = useState(null);
     
                    useEffect(() => {
                        try {

                            setSearcher(new FuzzySearch(data, ["user_first_name,user_last_name"], {
                             caseSensitive: false
                         }));
                         } catch (error) {
                 
                             
                             
                         }
                      });
                      console.log(data)
      /**
     * Handles the page size change event.
     */
      const handlePageSizeChange=(e)=> {
       
        pageSize= e.target.value
      
    }
    /**
    * Handles the global search.
    */
   const handleFilterSearch=(e)=> {
       data= searcher.search(e.target.value)
       
    }

    const columns = [
        {
          Header: "Id",
          accessor: "id",
         
        },
       
        {
          Header: "Nombre",
          accessor: "user_first_name",
          
         
    
        },
        
        {
          Header: "Apellidos",
          accessor: "user_last_name",
       
        },
        
      /*   {
          Header: "Acciones",
          accessor: "actions",
          maxWidth: 300,
          minWidth: 180,
          style:{overflow:"visible"},
          sortable: false,
  
          Cell: row => (
           
           
               
                <Button theme="white" style={{cursor:"pointer"}} data-toggle="tooltip" title="Actualizar la nanny"
                       // onClick={this.handleClick.bind(this,row.original)}
                >
                  <i className="material-icons">remove_red_eye</i>
                </Button>
  
              
          )
        } */
      ];
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      });
   
  return (
<>
    {/* Header */}
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
          <h5 className="text-white mb-0 font-weight-bold display-4">data</h5>
          </div>
        </Container>
      </div>
  
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Row>
                            {/* Filters :: Page Size */}
                          {/*  <Col className="file-manager__filters__rows d-flex" md="6">
                                <span>Mostrar</span>
                                <Input type="select" name="select" id="exampleSelect"
                                    size="sm"
                                    value={pageSize}
                                    onChange={()=>handlePageSizeChange}
                                >
                                {pageSizeOptions.map((size, idx) => (
                                    <option key={idx} value={size}>
                                        {size} filas
                                    </option>
                                ))}
                                </Input>
                            </Col>  */}

                            {/* Filters :: Search */}
                            <Col className="file-manager__filters__search d-flex" md="6">
                                <InputGroup seamless size="sm" className="ml-auto">
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>
                                    <i className="material-icons">search</i>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input onChange={()=>handleFilterSearch} />
                                </InputGroup>
                            </Col>
                            </Row>
        {/* Table */}
      <Row>
         <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </Row>
      {/*   <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Listado de data</h3>
              </CardHeader>
              <Table className="align-items-center table-flush table-dark" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Acciones</th>
                 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            src={
                              require("../assets/img/theme/bootstrap.jpg")
                                .default
                            }
                          />
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                   
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
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Actualizar
                          </DropdownItem>
                       
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  
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
       */}
      
      </Container>
      </>
         
  );

};
export default Listdata;

