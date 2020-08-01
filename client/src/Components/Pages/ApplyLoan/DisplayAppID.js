import React,{Component} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./MainLoan.css";
import Button from "react-bootstrap/Button";
class Display extends Component{
    state={
        AppID:'',
        secondObj:null
    }

    componentDidMount(){
        let retrievedObjects = localStorage.getItem("students");
    let storeds = JSON.parse(retrievedObjects);
    let InfoData= Object.assign({},storeds);
    this.setState({secondObj:InfoData.Number})
    console.log(InfoData);

    let Num= localStorage.getItem("Application");
    let AppNum= JSON.parse(Num);
    this.setState({AppID:AppNum});
          
            //   TO set inside the array use below function.
            // let newNum = this.state.Num;
            // newNum.push(downInnerHTML);
            // let items = this.state.Num;
            // this.setState({ selected: items.filter(number => number !== downInnerHTML) });
            // console.log(this.state.Num)
            // console.log("This is new Array "+ this.state.selected);
    }


    handleSubmit=()=>{
        window.location.href="http://localhost:3000/"
    }
render(){
    return(
        <div>
       <Container fluid className="head">
           <Row>
               <Col md={12}>
               <div className="AppID" >
               <div>
                   <h3 style={{color:'black',paddingTop:'10vh'}}>Your Application ID: {this.state.AppID}</h3>
                   <h6 style={{textAlign:'center',color:'rgb(150, 168, 201)'}}>*This Application ID will be used To track your Loan</h6>
                   <h3 style={{color:'black',paddingTop:'3vh'}}>Phone Number: {this.state.secondObj}</h3>
                   <Button
                type="button"
                className="Button"
                onClick={this.handleSubmit}
                style={{marginTop:'10vh'}}
              >
                Back To Home
              </Button>
               </div>
               </div>
               </Col>
           </Row>
       </Container>
        </div>
    );
}
}
export default Display;