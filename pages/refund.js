import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout'

export default function Footer() {

    return (
        <Layout>
            <div className="refund-page overflow-hidden">
                <div id="banner" className="mb-5 bg-image d-flex justify-content-center align-items-start" style={{backgroundImage: 'linear-gradient(red, #b32129)', backgroundPosition: 'center'}}>
                    <div id="inner_banner_div" className="position-relative bg-transparent container px-4 d-flex flex-column gap-4">
                        <div className="d-flex align-items-center flex-column">
                            <h1 className="text-white fw-bold" style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontFamily: '"Montserrat"'}}>REFUND POLICY</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                <div className="container-lg mt-5">
                    <h2 className="fw-bold text-center">
                        AGREEMENT BETWEEN CUSTOMER AND CAHAYA NUR HOLIDAYS (M) SDN BHD
                    </h2>
                    <h5 className="text-wrap py-3" style={{minHeight: '300px', fontFamily: 'Poppins', fontWeight: 400}}>
                        In the event of a refund due to cancellation or changes to the
                        booking, refunds will only be due to the customer in line with the
                        rules and restrictions of the applicable suppliers as notified in
                        the booking process.<br /><br /> No refund can be made in respect of
                        accommodation, meals, sightseeing tours, transport or any other
                        services, which are included in the tour fares and not utilised by
                        the tour member.<br /><br /> Refunds will only be made after Kakijalan received
                        the refunds amount from supplier. Customers should note that refunds
                        from supplier may take up to 6 -12 months. <br /><br />All refunds shall depend
                        on the exchange rate at the point of refund. Upon receiving the
                        refunds from supplier, the amount (after deductions of
                        administration fee) will be transferred back via the same payment
                        mode of the original booking.
                    </h5>
                </div>
                </div>
            </div>
        </Layout>
    )
}



