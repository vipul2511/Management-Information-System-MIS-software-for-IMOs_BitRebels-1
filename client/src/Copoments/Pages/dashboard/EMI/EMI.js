import React from 'react';
import './EMI.css'
import firebase from '../../../../firebase SDK/firebase';
import Chart from 'chart.js'
import Button from "react-bootstrap/Button";
const AMOUNT_FORMAT = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const DATE_FORMAT = new Intl.DateTimeFormat(
  new Intl.DateTimeFormat(
    "en-US"
    // , {
    //   day: "numeric",
    //   month: "short",
    //   year: "numeric"
    // }
  )
);

export default class EMI extends React.Component {
  constructor(props){
    super(props);
  this.state={
    EMIData:null,
    phone:null,
    newUrlobj:'',
    loaded:false,
    loanAmount:null,
    interestRate:null,
    loanPeriod:null,
    DateLoan:null,
    emiAmount:'',
    numberOFPayments:'',
    actualPayment:'',
    totalPayment:'',
    totalInterest:''
  }
  }
  navigate=()=>{
    let status=3
    let userID= localStorage.getItem('UserID');
    firebase.database().ref('users/').child('Admin/'+userID).set(status).then(succ =>{
    firebase.database().ref('users/').child('EMI/'+userID).set(this.state.EMIData).then(succ=>{
      firebase.database().ref('users/Application/'+userID).remove().then(succ=>{
        window.location.href="/Repay";
      });
     
    });
  });
  }
  handleChange=(event)=>{
    this.setState({ [event.target.name]:event.target.value});
    console.log([event.target.name]);
    console.log(event.target.value);
  }

  checkData=()=>{
    console.log(this.state.loanAmount,this.state.interestRate,this.state.loanPeriod,this.state.DateLoan);
  }
  calculateEMI=()=>{
    let amortSchedule = [];
    const extraPaymentScheule = new Map();
    let loanAmount = this.state.loanAmount;
    let interestRate = this.state.interestRate;
    let loanPeriod = this.state.loanPeriod;
    let loanStartDate = this.state.DateLoan;
    console.log(loanAmount,interestRate,loanPeriod,loanStartDate);

    let roi = interestRate / 12 / 100;
   let nom = 12 * loanPeriod;

   let rateVariable = Math.pow(1 + roi, nom);

    const emi = Math.ceil(
      loanAmount * roi * (rateVariable / (rateVariable - 1))
    );
    let userID= localStorage.getItem('UserID');
    console.log(userID);
    let userNumber;
    firebase.database().ref('users/Application/'+userID).once("value",function(snapshot){
      userNumber=snapshot.val().finalData.Phone;
      console.log(userNumber);
      this.setState({phone:userNumber});
    }.bind(this));
     this.setState({emiAmount:AMOUNT_FORMAT.format(emi)})
     this.setState({numberOFPayments:nom})
     let emiDate = new Date(loanStartDate);
    let beginningBalance = loanAmount;
    let principle = loanAmount;
    let interest;
    amortSchedule = [];
    var totalEarlyPayments = 0;
    var totalInterest = 0;
    for (var i = 1; i <= nom; i++) {
      // This is to make sure the exact amount to be taken for last EMI
      let emiForThisInstallment =
        beginningBalance < emi ? beginningBalance : emi;

      emiDate = new Date(emiDate.setMonth(emiDate.getMonth() + 1));
      principle -= emiForThisInstallment;
      interest = (beginningBalance * roi).toFixed(2);
      totalInterest += beginningBalance * roi;
      let extraPaymentForThisInstallment =
        extraPaymentScheule.get(i) != null ? extraPaymentScheule.get(i) : 0;
     let totalPayment = emiForThisInstallment + extraPaymentForThisInstallment;
      totalEarlyPayments += extraPaymentForThisInstallment;
      amortSchedule.push({
        emi_number: i,
        payment_date: DATE_FORMAT.format(emiDate),
        beginning_balance: AMOUNT_FORMAT.format(beginningBalance),
        phone:this.state.phone,
        scheduled_payment: AMOUNT_FORMAT.format(emiForThisInstallment),
        total_payment: AMOUNT_FORMAT.format(totalPayment),
        principle: AMOUNT_FORMAT.format(emiForThisInstallment - interest),
        interest: AMOUNT_FORMAT.format(interest),
        extra_payment:
          extraPaymentScheule.get(i) != null
            ? AMOUNT_FORMAT.format(extraPaymentScheule.get(i))
            : "",
        ending_balance: AMOUNT_FORMAT.format(
          beginningBalance -
            (emiForThisInstallment - interest + extraPaymentForThisInstallment)
        ),
      });
      if (beginningBalance < emi) {
        break;
      }

      beginningBalance = (
        beginningBalance -
        (emiForThisInstallment - interest) -
        extraPaymentForThisInstallment
      ).toFixed(2);

      if (beginningBalance <= 0) break;
    }
   this.renderChart(loanAmount, totalInterest);
    const amortTable = document.getElementById("amort_table");
    const amortTableBody = document.getElementById("amort_table tbody");
    if (amortSchedule.length > 0) {
      amortTable.style.display = "block";
     this.setState({EMIData:amortSchedule});
      var tableBody = "";
      amortSchedule.forEach((schedule, index) => {
        tableBody += "<tr>";
        tableBody += "<td class='text-center'>" + schedule.emi_number + "</td>";
        tableBody +=
          "<td class='text-center'>" + schedule.payment_date + "</td>";
        tableBody +=
          "<td class='text-right'>" + schedule.beginning_balance + "</td>";
        tableBody +=
          "<td class='text-right'>" + schedule.scheduled_payment + "</td>";
        tableBody +=
          "<td class='text-right'>" + schedule.total_payment + "</td>";
        tableBody += "<td class='text-right'>" + schedule.principle + "</td>";
        tableBody += "<td class='text-right'>" + schedule.interest + "</td>";
        tableBody +=
          "<td class='text-right'>" + schedule.ending_balance + "</td>";

        tableBody += "</tr>";
      });

      document.querySelector("#amort_table tbody").innerHTML = tableBody;
    } else {
      amortTable.style.display = "none";
    }
    this.setState({actualPayment:amortSchedule.length})
    this.setState({totalPayment:AMOUNT_FORMAT.format(totalEarlyPayments)})
    this.setState({totalInterest:AMOUNT_FORMAT.format(Math.round(totalInterest))});
  }
   renderChart=(principle, interest) =>{
    window.chartColors = {
      red: "rgb(255, 99, 132)",
      orange: "rgb(255, 159, 64)",
      yellow: "rgb(255, 205, 86)",
      green: "rgb(75, 192, 192)",
      blue: "rgb(54, 162, 235)",
      purple: "rgb(153, 102, 255)",
      grey: "rgb(201, 203, 207)",
    };
    var config = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [Math.round(principle), Math.round(interest)],
            backgroundColor: [window.chartColors.blue, window.chartColors.red],
            label: "Amortization Schedule",
          },
        ],
        labels: ["Principle", "Interest"],
      },
      options: {
        responsive: true,
        legend: {
          position: "bottom",
        },
      },
    };
  
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx, config);
  }
   render() {
    return(
      <div>
      <div className="container earEMI" style={{marginRight:'12vw'}}>
      <h2 className="display-4">EMI Calculator</h2>
      <div className="main-flex">
        <div className="main-data-picker">
          <table className="table table-sm" style={{width:'100vh'}}>
            <tbody>
              <tr>
                <td>
                  <label className="active" for="loan_amount">Loan Amount</label>
                </td>
                <td>
                  <input
                    id="loan_amount"
                    type="text"
                    onChange={this.handleChange}
                    name="loanAmount"
                    value={this.state.loanAmount}
                    className="form-control form-control-sm numeric inputBox"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="interest_rate"
                    >Annual Interest Rate</label>
                  
                </td>
                <td>
                  <input
                    id="interest_rate"
                    type="text"
                    onChange={this.handleChange}
                    name="interestRate"
                    className="form-control form-control-sm numeric inputBox"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="loan_period">Loan period in years</label>
                  
                </td>
                <td>
                  <input
                    id="loan_period"
                    type="number"
                    onChange={this.handleChange}
                    name="loanPeriod"
                    className="form-control form-control-sm numeric inputBox"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="loan_start_date"
                    >Start date of loan</label>      
                </td>
                <td>
                  <input
                    id="loan_start_date"
                    type="date"
                    name="DateLoan"
                    onChange={this.handleChange}
                    className="form-control form-control-sm date inputBox"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="emi_amount"
                    >Scheduled monthly payment</label>
                  
                </td>
                <td>
                  <input
                    id="emi_amount"
                    type="text"
                    value={this.state.emiAmount}
                    className="form-control form-control-sm numeric inputBox"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="number_of_payments"
                    >Scheduled number of payments</label>
                  
                </td>
                <td>
                  <input
                    id="number_of_payments"
                    type="text"
                    value={this.state.numberOFPayments}
                    className="form-control form-control-sm numeric inputBox"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="actual_number_of_payments"
                    >Actual number of payments</label>
                  
                </td>
                <td>
                  <input
                    id="actual_number_of_payments"
                    value={this.state.actualPayment}
                    type="text"
                    className="form-control form-control-sm numeric inputBox"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="total_early_payments"
                    >Total of early payments</label>
                  
                </td>
                <td>
                  <input
                    id="total_early_payments"
                    value={this.state.totalPayment}
                    type="text"
                    className="form-control form-control-sm numeric inputBox"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="active" for="total_interest"
                    >Total interest</label>  
                </td>
                <td>
                  <input
                    id="total_interest"
                    type="text"
                    value={this.state.totalInterest}
                    className="form-control form-control-sm numeric inputBox"
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <Button className="btn EMI_btn" onClick={this.calculateEMI}>Check EMI</Button>
            <Button className="btn EMI_btn" style={{marginLeft:'18vw',width:'10vw'}} onClick={this.navigate}>Submit</Button>
          </div>
        </div>
        <div class="main-chart">
          <div id="chart-container"><canvas id="chart-area"></canvas></div>
        </div>
      </div>
      <br />
      <div id="amort_table">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th class="text-center">Months</th>
              <th class="text-center">Payment Date</th>
              <th class="text-right">Beginning Balance</th>
              <th class="text-right">Scheduled Payment</th>
              <th class="text-right">Total Payment</th>
              <th class="text-right">Principle</th>
              <th class="text-right">Interest</th>
              <th class="text-right">Ending Balance</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
     </div>
    );
   }
}