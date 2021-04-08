
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
import {API_NANNY_ALL,API_UPDATE_NANNY} from "constants/const";
import Utils from "constants/utils_const"


export default class ListNannysReject extends React.Component{

  constructor(props){
    super(props)
  this.state=({

            pageSizeOptions: [5, 10, 15, 20, 25, 30],
            pageSize: 5,
            open_modal:false,
            nannys:[],
            total_pending:0         
             
    });

    this.searcher = null;
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
    this.handleFilterSearch = this.handleFilterSearch.bind(this);
    this.getNannys=this.getNannys.bind(this);
    this.handleDesactivate=this.handleDesactivate.bind(this);
    this.toggle=this.toggle.bind(this)
  
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
        
        for (let index = 0; index < data.length; index++) {
          if(data[index].user_status=="reject")
          nannys.push(data[index])                    
        }
      
        this.setState({nannys: nannys, total_pending:nannys.length}); 
      // Initialize the fuzzy searcher.
     this.searcher = new FuzzySearch(nannys, ["user_id","user_first_name", "user_last_name","user_email","user_mobile"], {
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
     
     for (let index = 0; index < data.length; index++) {
       if(data[index].user_status=="reject")
       nannys.push(data[index])                    
     }
   
     this.setState({nannys: nannys, total_pending:nannys.length}); 
   // Initialize the fuzzy searcher.
  this.searcher = new FuzzySearch(nannys, ["user_id","user_first_name", "user_last_name","user_email","user_mobile"], {
   caseSensitive: false
 });
   } else {
    Alert.alert("Error",'No se ha podido obtener el listado');
   } 
 }).catch(error => console.log(error));

}
/**
* Handles the disable nanny´s account.
*/
handleDesactivate=(nanny)=> {

let data={
user_id:nanny.user_id,        
user_status:"disabled"
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
  this.setState({open_modal:true});
 } else {
    console.log("Error",'No se ha podido desactivar la nanny')
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
nannys: this.searcher.search(e.target.value)
});

}

handleUpdate=(nanny)=> {

console.log(nanny)

//Initialize Forces checkboxes    
let forcesarray=(nanny.nany_fortalezas!==null)? nanny.nany_fortalezas.split(","):[]
let checked_colabora=forcesarray.includes("Colabora con Deberes")?true:false
let checked_entusiasmo=forcesarray.includes("Entusiasmo y deseos de trabajar")?true:false
let checked_tar=forcesarray.includes("Colabora en Tareas del Hogar")?true:false
let checked_jueg=forcesarray.includes("Entretiene y hace reír")?true:false
let checked_exp=forcesarray.includes("Hace deportes")?true:false
let checked_cert=forcesarray.includes("Hace manualidades")?true:false
let checked_esP=forcesarray.includes("Toca instrumento musical")?true:false
let checked_esI=forcesarray.includes("Pinta, dibuja y colorea")?true:false
let checked_esCR=forcesarray.includes("Estudios de Preescolar/Educación Infantil")?true:false
let checked_estI=forcesarray.includes("Estudios Superiores de algún tipo")?true:false
let checked_profE=forcesarray.includes("Certificado de Primeros Auxilios")?true:false
let checked_profM=forcesarray.includes("Estudios de Enfermería o Similares")?true:false
let checked_profA=forcesarray.includes("Monitora de Deportes")?true:false

let forces={
"checked_colabora":checked_colabora,
"checked_entusiasmo":checked_entusiasmo,
"checked_tar":checked_tar,
"checked_jueg":checked_jueg,
"checked_exp":checked_exp,
"checked_cert":checked_cert,
"checked_esP":checked_esP,
"checked_esI":checked_esI,
"checked_esCR":checked_esCR,
"checked_estI":checked_estI,
"checked_profE":checked_profE,
"checked_profM":checked_profM,
"checked_profA":checked_profA       
}

//Initialize Oportunities checkboxes
let oportunitiesarray=(nanny.nany_oportunidades!==null)? nanny.nany_oportunidades.split(","):[]
let checked_solotardes=oportunitiesarray.includes("Solo trabaja por las tardes")?true:false
let checked_soloman=oportunitiesarray.includes("Solo trabaja por las mañanas")?true:false
let checked_solofinde=oportunitiesarray.includes("Solo trabaja fines de semanas")?true:false
let checked_prefB=oportunitiesarray.includes("Prefiere trabajar con Bebes")?true:false
let checked_pref2=oportunitiesarray.includes("Prefiere Trabajar con niños mayores de 2 años")?true:false
let checked_pref6=oportunitiesarray.includes("Prefiere Trabajar con niños mayores de 5 años")?true:false   
let checked_expmen1=oportunitiesarray.includes("Experiencia menos de 1 año")?true:false
let checked_soloexpF=oportunitiesarray.includes("Solo experiencia Familiar")?true:false
let checked_soloEsp=oportunitiesarray.includes("Solo lengua materna")?true:false
let oportunities={
"checked_solotardes":checked_solotardes,
"checked_soloman":checked_soloman,
"checked_solofinde":checked_solofinde,
"checked_prefB":checked_prefB,
"checked_pref2":checked_pref2,
"checked_pref6":checked_pref6,       
"checked_expmen1":checked_expmen1,
"checked_soloexpF":checked_soloexpF,
"checked_soloEsp":checked_soloEsp,


}

//Initialize Comments checkboxes
let commentsarray=(nanny.nany_comentarios!==null)? nanny.nany_comentarios.split(","):[]
let checked_org=commentsarray.includes("Organizada/o")?true:false
let checked_org1=commentsarray.includes("Paciente")?true:false
let checked_div=commentsarray.includes("Divertida/o")?true:false
let checked_div1=commentsarray.includes("Afable")?true:false
let checked_cons=commentsarray.includes("Consistente")?true:false
let checked_cons1=commentsarray.includes("Sistemática/o")?true:false
let checked_am=commentsarray.includes("Amable")?true:false
let checked_am1=commentsarray.includes("Entusiasta")?true:false
let checked_car=commentsarray.includes("Cariñosa/o")?true:false
let checked_car1=commentsarray.includes("Atenta/o")?true:false
let checked_rel=commentsarray.includes("Relajada/o")?true:false
let checked_rel1=commentsarray.includes("Tolerante")?true:false
let comments={
"checked_org":checked_org,
"checked_org1":checked_org1,
"checked_div":checked_div,
"checked_div1":checked_div1,
"checked_cons":checked_cons,
"checked_cons1":checked_cons1,
"checked_am":checked_am,
"checked_am1":checked_am1,
"checked_car":checked_car,
"checked_car1":checked_car1,
"checked_rel":checked_rel,
"checked_rel1":checked_rel1,

}

this.props.history.push({

pathname:"/admin/actualizar-nanny-rechazada",
state: {nanny:nanny,
forces:forces,
oportunities:oportunities,
comments:comments,
checked_org:checked_org,
checked_org1:checked_org1,
checked_div:checked_div,
checked_div1:checked_div1,
checked_cons:checked_cons,
checked_cons1:checked_cons1,
checked_am:checked_am,
checked_am1:checked_am1,
checked_car:checked_car,
checked_car1:checked_car1,
checked_rel:checked_rel,
checked_rel1:checked_rel1,
checked_solotardes:checked_solotardes,
checked_soloman:checked_soloman,
checked_solofinde:checked_solofinde,
checked_prefB:checked_prefB,
checked_pref2:checked_pref2,
checked_pref6:checked_pref6,

checked_expmen1:checked_expmen1,
checked_soloexpF:checked_soloexpF,
checked_soloEsp:checked_soloEsp,
checked_entusiasmo:checked_entusiasmo,
checked_tar:checked_tar,
checked_jueg:checked_jueg,
checked_exp:checked_exp,
checked_cert:checked_cert,
checked_esP:checked_esP,
checked_esI:checked_esI,
checked_colabora:checked_colabora,
checked_esCR:checked_esCR,
checked_estI:checked_estI,
checked_profE:checked_profE,
checked_profM:checked_profM,
checked_profA:checked_profA
}

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
for (let index = 0; index < data.length; index++) {
  if(data[index].user_status=="reject")
  nannys.push(data[index])                    
}     
         
 this.setState({nannys: nannys, total_pending:nannys.length}); 
} else {
console.log("Error",'No se ha podido obtener el listado')
} 
}).catch(error => console.log(error));



}


render() {
const {nannys,pageSize,pageSizeOptions}=this.state

return (
<>
{/* Modal update */}   
<Modal isOpen={this.state.open_modal} toggle={this.toggle}>
<ModalHeader toggle={this.toggle}>Información</ModalHeader>
<ModalBody>
Nanny desactivada.
</ModalBody>

</Modal>
{/* Header */}
<div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
<Container fluid>
<div className="header-body">
<h5 className="text-white mb-0 font-weight-bold display-4">Nannys rechazadas</h5>
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
                <DropdownItem
                  //href="#"
                  onClick={this.handleDesactivate.bind(this,nanny)}
                >
                  Desactivar
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


