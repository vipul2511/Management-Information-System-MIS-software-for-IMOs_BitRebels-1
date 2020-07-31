import React,{ Component } from 'react';
import firebase from '../../firebase SDK/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ]
};
class FirebaseTest extends Component{
    constructor(props){
        super(props);
           this.state={
                email:'varshangshrimali@yahoo.com',
                password:'324567',
                data:[],
                image:null,
                url:'',
                progress:0
              }
        this.handleChange=this.handleChange.bind(this);
        this.handleUpload=this.handleUpload.bind(this);
    }
   
 handleChange = e =>{
    if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
      }
 }
 handleUpload =()=>{
    console.log(this.state.image);
    const {image} = this.state;
    const uploadTask = firebase.storage().ref().child('images/'+image.name).put(image);
// here code start of retrieving the image
uploadTask.on(
    "state_changed",
    snapshot => {
      // progress function ...
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      this.setState({ progress });
    },
    error => {
      // Error function ...
      console.log(error);
    },
    () => {
      // complete function ...
     firebase.storage()
        .ref("images/")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          this.setState({ url });
        });
    }
  );
 }
    writeData=()=>{
      const data = firebase.database().ref('users/').push(this.state);
        console.log('Data saved',data);
    }
    readData=()=>{
        const newData = firebase.database().ref('users/');
        newData.on('value',(snapshot)=>{
            let items =[];
            snapshot.forEach((child)=>{
              items.push({
                City_Name:child.val().email,
                Name_value: child.val().password,
            //    Email_value:child.val().Email,
            //    profile_img:child.val().url,
            //    total_item:child.val().Totaldonation
              });
            });
            this.setState({ data:items});
            console.log(this.state.data);      
        })
    }
    displayData =()=>{
        return (<div>
            {this.state.data.map((item, index) => (
                <p key={index}>{item.City_Name}
                {item.Name_value}
                </p>
            ))}
            </div>);
    }
  //   onClick() {
  //     const phoneNumber = '+919079947710';
  //     const appVerifier = window.recaptchaVerifier;
  //     firebase
  //     .auth()
  //     .signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(confirmResult => {
  //       console.log(confirmResult);
  //     })
  //     .catch(error => {
  //       // error
  //       console.log(error);
  //     });
  // }
    componentDidMount(){
        // this.writeData();
        this.readData();
    //     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
    // {
    //    size:"invisible"
    //     // other options
    // });
    }
    render(){
        return (
            <div >
                <h1>Setting a database</h1>
             {this.displayData()}
            <div style={{textAlign:'center'}}>
            <progress value={this.state.progress} max="100" />
            <br/>
             <input type="file" onChange={this.handleChange}/>
             <button onClick={this.handleUpload}>upload</button>
             <br />
             <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Uploaded Image" height="300" width="400"/>
             {/* <input id="recaptcha-container" type="button" onClick={this.onClick} /> */}
             <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
             </div>
            </div>
        )
    }
   
}

export default FirebaseTest;
