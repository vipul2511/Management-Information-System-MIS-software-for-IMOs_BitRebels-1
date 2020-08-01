import React, { Component } from 'react';
import './Application.css';
import Header from '../header/Header';
import firebase from '../../firebase SDK/firebase';



class Application extends Component {

    state = {
        Num: [],
        selected: [],
        data:[],
        AppNumber:null,
        PhoneNo:null,
        ApplicationID:null,
        PhoneNumber:null
    }
    // Here its function is for generating the unique no.
    // sixdigit = () => {
    //     var minm = 100000000;
    //     var maxm = 999999999;
    //     let downInnerHTML = Math.floor(Math
    //         .random() * (maxm - minm + 1)) + minm;
    //     console.log(downInnerHTML);
    //     let newNum = this.state.Num;
    //     newNum.push(downInnerHTML);
    //     let items = this.state.Num;
    //     this.setState({ selected: items.filter(number => number !== downInnerHTML) });
    //     console.log(this.state.Num)
    //     console.log("This is new Array "+ this.state.selected);
    // }
    TrackApp=()=>{
      
        let PhnNO=this.state.PhoneNo;
       let AppNum=Number(this.state.ApplicationID);
       console.log(AppNum);
       console.log(this.state.PhoneNumber);
       console.log(this.state.AppNumber);
       console.log(PhnNO)
       if(PhnNO===this.state.PhoneNumber && AppNum === this.state.AppNumber){
        window.location.href="/Status";
       }else{
           alert("not work");
       }
    }
     readData=()=>{
        let userID= localStorage.getItem('UserID');
        console.log(userID);
       firebase.database().ref('users/Application/'+userID).orderByChild('/AppID/').on('value',snap=>{
            let post = snap.val().finalData.AppID;
            let phone=snap.val().finalData.Phone;
            this.setState({AppNumber:post});
            this.setState({PhoneNo:phone});
            console.log(post);
            console.log(phone);
        });
        // newData.on("child_added",function(snapshot){
        //    let PostData= snapshot.val();
        //    console.log(PostData);
        // })
        // newData.orderByKey().equalTo('AppID').on("child_added",function(snapshot){
        //  console.log(snapshot.key);
        // });
        // newData.on('value',(snapshot)=>{
        //     let items =[];
        //     snapshot.forEach((child)=>{
        //       items.push({
        //         ApplicationNumber:child.val().ApplicationID,
        //         MobileNo: child.val().PhoneNumber,
        //     //    Email_value:child.val().Email,
        //     //    profile_img:child.val().url,
        //     //    total_item:child.val().Totaldonation
            
        //       });
        //     });
        //     this.setState({ data:items});
        //     console.log(`${this.state.data}`);   
        // })
        }
     componentWillMount(){
         this.readData();
     }
     handleChange=({target})=>{
        this.setState({ [target.name]:target.value});
         }
    render() {

        return (
            <div>
                <div className="Main_contain">
                    <Header />
                    <div className="form-container">
                        <h1>Track Your Application Status</h1>
                        <p>For security reasons,please answer the fields below to<br /> fetch your applications.</p>
                        <form>
                            <input type="number" className="input-box" onChange={this.handleChange}  name="ApplicationID" placeholder="APPLICATION ID" />
                            <input type="number" className="input-box" onChange={this.handleChange}  name="PhoneNumber" placeholder="ENTER YOUR MOBILE NUMBER" />
                            <h2><button type="button" onClick={this.TrackApp} className=" btn button1">TRACK APPLICATION</button></h2>
                           
                        </form>
                    </div>
                
                </div>
            </div>
        )
    }
}
export default Application;

