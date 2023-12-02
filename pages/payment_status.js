import React from 'react';
import bodyParser from "body-parser";
import { promisify } from "util";
import Layout from '../components/Layout'
import ProgressBar from '../components/ProgressBar'
import { payment_status } from '../utils/constants'
const getBody = promisify(bodyParser.urlencoded());

function Confirmation(props) {

  const print=()=>{
    window.print();
  }

  return (
    <Layout>
      <div>
        <div className="overflow-hidden">
          <div className="container col-xxl-8 col-12 g-0">
            <div className="card d-flex flex-column shadow mt-3 p-lg-5 p-4 shadow-lg border-0" style={{borderRadius: '30px'}}>
              {/*NAVIGATION PART ICON*/}
              <div id="progress_div" className="mt-36">
                  <ProgressBar index={4}/>
              </div>
              <div className="divider-container">
                  <div className="bar-divider-1"> </div>
              </div>
              <h2 className="d-flex justify-content-center pt-5 headline-order fw-bold" style={{fontFamily: '"Montserrat"', fontStyle: 'normal'}}>PAYMENT OVERVIEW</h2>
              <p className="d-flex summary-desc justify-content-center align-self-center text-center mb-3 mb-xxxl-0" style={{fontFamily: '"Poppins"', fontWeight: 400, fontSize: '18px', maxWidth: '600px'}}>
                  {/* Payment is successful and you should receive an email for the full itenerary and details of the booking. */}
              </p>
              <div className="d-flex flex-xl-row-reverse flex-column justify-content-between">
                  <button onClick={print} type="button" className="btn rounded-pill fw-bold py-2 align-self-xl-end align-self-center mb-md-2 mb-5" style={{width: '150px', fontFamily: '"Montserrat"', background: '#ea242d', color: 'white'}}>
                  PRINT
                  </button>
                  <h5 style={{fontFamily: '"Montserrat"', fontStyle: 'normal', fontWeight: 700, textTransform: 'uppercase', color: '#500000'}} className="mt-1 mt-sm-5 upper-topic">BOOKING DETAILS</h5>
              </div>

              <hr className="hr mt-0" />

              <div className="mb-5" id="order_info_table">
                <div className="table_div" style={{backgroundColor: '#f5f5f5', borderRadius: '10px'}}>
                  <table className="m-0 w-100">
                    <tbody>
                      <TR title="Booking Id" value={props?.data?.orderid} />
                      <TR title="Transaction Id" value={props?.data?.tranID} />
                      <TR title="Amount" value={props?.data?.currency + " " + props?.data?.amount} />
                      <TR title="Status" value={payment_status[props?.data?.status]} />
                      {props?.data?.error_code && <TR title="Error Code" value={props?.data?.error_code} />}
                      {props?.data?.error_desc && <TR title="Error Description" value={props?.data?.error_desc} />}
                      <TR title="Channel" value={props?.data?.channel} />
                      <TR title="Payment Date" value={props?.data?.paydate} />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function TR({ title, value }) {
  return <tr style={{borderBottom: '1px solid #e8e2d6'}}>
    <th style={{fontFamily: '"Poppins"', fontWeight: '400!important', fontSize: '16px'}} scope="row" className="col-xl-4 col-5 p-3">{title}</th>
    <td style={{fontFamily: '"Poppins"', fontWeight: 600, fontSize: '16px'}} className="col-xl-9 col-5 p-3 fw-bold">
        {value}
    </td>
  </tr>
}


export default Confirmation

export async function getServerSideProps({ req, res }) {
    if (req.method === "POST") {
      await getBody(req, res);
    //   console.log("getBody",req.method, req.body)
    }
    //console.log("body", req.body)

    return {
      props: {
        data: req?.body,
        method: req.method
      }
    };
  }