import React, {useEffect} from "react";



function Booking() {
    
    useEffect(() => {
        const transId = Math.round(Math.random()*100000).toString();
        window.abtasty.send("transaction", { 
            tid: transId,
            ta: "checkoutId",
            pm: "paypal",
            sm: "relais colis",
            tc: "EUR",
            tr: parseInt($('#price').text()),
        });
        window.abtasty.send("item", {
            tid: transId,
            ic: "Code1",
            in: "Séjour",
            iv: "CAT1",
            iq: parseInt($('#travellers').val()),
            ip: parseInt($('#price').text()),
        });
    }, []);

    return(
        <div>
            {'You trip is Booked !'}
        </div>
    )
}

export default Booking;