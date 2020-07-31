import React from 'react';
import Loader from 'react-loader-spinner';
import './loading.css'
import firebase from './firebase SDK/firebase';

export default class Loading extends React.Component {
  constructor(props){
    super(props);
  this.state={
    ImagesUrl:[],
    newUrlobj:'',
    loaded:false
  }
  }
  retrieveImg=()=>{
    let IMg=[];
  let storageRef=firebase.storage().ref();
  storageRef.child('images/').listAll().then(function(result){
    result.items.forEach(ref =>{
     ref.getDownloadURL().then(link =>{ 
    IMg.push(link);
    console.log(link);
     });
    })
  });
  this.setState({ImagesUrl:IMg});
  console.log(IMg);
  setTimeout(this.login,10000);

}

login=async()=>{
  let UrlArry= this.state.ImagesUrl;
  let newObj = Object.assign({},UrlArry);
  console.log(newObj);
this.setState({newUrlobj:newObj});
await localStorage.setItem('URL',JSON.stringify(newObj));
this.setState({loaded:true});
}
componentWillMount(){
  this.retrieveImg();
}
nav=()=>{
  window.location.href="/Home"
}
   render() {
    return(
      <div id="loader">
      { this.state.loaded ?
        <div>{this.nav()}</div>:
     <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100} //3 secs

     /> }
     </div>
    );
   }
}