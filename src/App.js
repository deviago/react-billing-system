import React, { Component } from 'react';
import { defaultRanges, DateRange } from 'react-date-range';
import Section from './components/Section';
import Popup from './Popup';
import * as jsPDF  from 'jspdf';
import InvoicePDF from './InvoicePDF';

import logonew from './energicos-logo.png';

import graphic from './styles/assets/img/graphic-key.svg';
import piechart from './styles/assets/img/pie-chart.svg';
import stripe from './styles/assets/img/stripe.png';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import Chance from 'chance';
import checkboxHOC from 'react-table/lib/hoc/selectTable';
import testData from './test_data';

import logo from './energicos-logo.png';

import './styles/App.css';
import './styles/global.css';
import styles from './styles/main.css';

const CheckboxTable = checkboxHOC(ReactTable);
const chance = new Chance();
const API = 'http://clients.yourworkwithus.com/projects/v2/invoice/findByDate?';
var recordData = [  
   {  
      "Rechnungsdatensatz":"",
    }
];

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-');
}

class App extends Component {

  constructor(props, context) {
    super(props, context);
    const data = this.getData();
    const columns = this.getColumns(data);

    this.state = {
      'datePicker' : null,
      'predefined' : {},
      'tabledata' : [],
      invoiceData: [],
      isLoading: false,
      error: null,
      data,
      columns,
      selection: [],
      selectionRec: [],
      selectAll: false,
      showPdfPrev:false,
      showPopup:false,
      generatePDF:false
    };

  }

  getData(){
    if (recordData && recordData != '') {
        const recorddata = testData.map((item)=>{
        // using chancejs to generate guid
        // shortid is probably better but seems to have performance issues
        // on codesandbox.io
        const _id = chance.guid();
        return {
          _id,
          ...item,
        }
      })
      return recorddata;
    }
  }

  getColumns(data){
    if (data && data != '') {
      const columns = [];
      const sample = data[0];
      Object.keys(sample).forEach((key)=>{
        if(key!=='_id') 
        {
          columns.push({
            accessor: key,
            Header: key,
          })
        }
      })
      return columns;
    }
  }


  // gettingRecord = (startDnum, endDnum) => {
  //   this.setState({ isLoading: true });
  //   let resQuery = 'anfangsdatum='+startDnum+'&endtermin=+'+endDnum;
  //   fetch('http://clients.yourworkwithus.com/projects/v2/invoice/findByDate?anfangsdatum=2016-01-01&endtermin=2018-01-01', { mode: 'no-cors' } )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // if (responseJson) {
  //         //   recordData = responseJson;
  //         //   console.log(recordData);
  //         //   //return recordData;
  //         // } else {
  //         //   throw new Error('Something went wrong ...');
  //         // }
  //         console.log(data);
  //     })
  //     .catch(error => this.setState({ error, isLoading: false }));
  // }

  gettingRecord = (startDnum, endDnum) => {
    this.setState({ isLoading: true });
    fetch('http://clients.yourworkwithus.com/projects/v2/invoice/findByDate?anfangsdatum=2016-01-01&endtermin=2018-01-01')
    .then( function(response) {
      return response.json();
    })
    .then( function(responseJson) {
        if (responseJson) {
            recordData = responseJson;
        }else{
          throw new Error('Something went wrong ...');
        }
    })
    .catch(error => this.setState({ error, isLoading: false }));
  };

  pdfToHTML = () => {

    // let nowState = this.state;
    // if (this.state.selectionRec.length > 0) {
    //   currState.nowState = true;
    //   currState.showPopup = !currState.showPopup;
    // }else{
    //   currState.nowState = false;
    // }
    // this.setState({currState});

      this.setState({generatePDF: true});

      var pdf = new jsPDF('p', 'pt', 'letter');
      var source = document.getElementById('genInvoicePDF');
      var specialElementHandlers = {
        '#editor': function(element, renderer) {
          return true
        }
      };

      var margins = {
        top: 0,
        left: 0,
      };

      pdf.fromHTML (
        source // HTML string or DOM elem ref.
      , margins.left // x coord
      , margins.top // y coord
      , {
          'elementHandlers': specialElementHandlers
        },
        function (dispose) {
          // dispose: object with X, Y of the last line add to the PDF
          // this allow the insertion of new lines after html
          pdf.save('InvoiceRecord.pdf');
        }
      )

  }

  toggleSelection = (key, shift, row) => {
    // start off with the existing state

    let invoiceRec = this.state.selectionRec;
    let index = invoiceRec.indexOf(row.Rechnungsdatensatz);

    if(index === -1){
      invoiceRec.push(row.Rechnungsdatensatz);
    }else{
      invoiceRec.splice(index, 1);
    }

    this.setState({ selectionRec: invoiceRec });

    if (this.state.selectionRec.length == 1) {
      this.setState({disablepreview: true});
    }else{
      this.setState({disablepreview: false});
    }
    
    let selection = [
      ...this.state.selection
    ];

    const keyIndex = selection.indexOf(key);
    // check to see if the key exists
    if (keyIndex >= 0) {
      // it does exist so we will remove it using destructing
      selection = [
        ...selection.slice(0, keyIndex),
        ...selection.slice(keyIndex + 1)
      ]
    } else {
      // it does not exist so add it
      selection.push(key);
    }
    // update the state
    this.setState({ selection });
  }

  toggleAll = () => {

    if (this.state.selectionRec.length == 1) {
      this.setState({disablepreview: true});
    }

    const invoiceRecAll = this.state.invoiceRecAll ? false : true;
    const invoiceAll = [];
    if (invoiceRecAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach((item) => {
        invoiceAll.push(item._original.Rechnungsdatensatz);
      })
    }
    this.setState({ invoiceRecAll, invoiceAll })

    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.checkboxTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we just push all the IDs onto the selection array
      currentRecords.forEach((item) => {
        selection.push(item._original._id);
      })
    }
    this.setState({ selectAll, selection })

  }

  isSelected = (key) => {
    return this.state.selection.includes(key);
  }

  generateSelection = () => {
    //console.log('selection:', this.state.selectionRec);
    // if (this.state.selectionRec.length > 0) {
    //   this.setState({ showPdfPrev: true });
    // }else{
    //   this.setState({ showPdfPrev: false });
    // }
  }

  previewSelection = () => {
    // console.log('selection:', this.state.selection);
    let currState = this.state;
    if (this.state.selectionRec.length > 0) {
      currState.showPdfPrev = true;
      currState.showPopup = !currState.showPopup;
    }else{
      currState.showPdfPrev = false;
    }
    this.setState({currState});
  }

  handleChange(which, payload) {    
    let startDatenum = convertDate(payload['startDate']['_d']);
    let endDatenum = convertDate(payload['endDate']['_d']);

    if ( (startDatenum != '') && (endDatenum != '') ) {
      this.gettingRecord(startDatenum, endDatenum);
    }

    this.setState({
      [which] : payload
    });

  }

  handleSubmit = (event) => {      
      let arr = [1,2,3];
      this.setState({tabledata:arr});
      event.preventDefault();
      this.setState({ submitted: true });
      const { startDate } = this.state;
      const { endDate } = this.state;
      let reddata = '';
      //console.log(recordData);
      if (recordData) {
        reddata = this.getData();
      }
      if (reddata) {
        this.getColumns(reddata);
      }
  }

  togglePopup = () => {
    this.setState({showPopup: !this.state.showPopup});
  }

  render() {

    const {datePicker, predefined, } = this.state;
    const format = 'YYYY-MM-DD';
    const { toggleSelection, toggleAll, isSelected, generateSelection, previewSelection } = this;
    const { data, columns, selectAll, } = this.state;
    const { invoiceData, isLoading, error } = this.state;

    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      selectType: 'checkbox',
    };

    // if (error) {
    //   return <p>{error.message}</p>;
    // }

    // if (isLoading) {
    //   return <p>Loading ...</p>;
    // }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main className={styles['Main']}>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className="invoiceDateRange">
              <Section title='Select Date Range'>
                <div>
                  <input
                    type='text'
                    value={ predefined['startDate'] && predefined['startDate'].format(format).toString() }
                  />
                  <input
                    type='text'
                    value={ predefined['endDate'] && predefined['endDate'].format(format).toString() }
                  />
                </div>
                <DateRange
                  linkedCalendars={ true }
                  ranges={ defaultRanges }
                  onChange={ this.handleChange.bind(this, 'predefined') }
                  theme={{
                    Calendar : { width: 200 },
                    PredefinedRanges : { marginLeft: 10, marginTop: 10 }
                  }}
                />
              </Section>
            </div>
            <div className="invoiceBillnum">
                <input type='text' name='billNumber' placeholder='Search By Bill Number'/>
                <button className="btn createacc">Get Record</button>
            </div>
          </form>
        </main>

        {this.state.tabledata.length > 0 && (
          <div className="invoiceRecord">

          <button className="btn createacc" onClick={this.pdfToHTML}>Generate Invoice</button>
          <button className="btn createacc previewRec" onClick={this.previewSelection} disabled={!this.state.disablepreview}>Preview Invoice</button>
          <CheckboxTable
            ref={(r)=>this.checkboxTable=r}
            data={data}
            columns={columns}
            defaultPageSize={5}
            className="-striped -highlight"

            {...checkboxProps}
          />
          </div>
        )}

        {this.state.tabledata.length == 0 && (
          <h3 className="nonRecord">No Record Found!!</h3>
        )}

        {this.state.showPdfPrev && this.state.showPopup && (
          <Popup 
            togglePopup={this.togglePopup}
          />
        )}

        {this.state.generatePDF &&
          <InvoicePDF />
        }

      </div>
    );
  }
}

export default App;
