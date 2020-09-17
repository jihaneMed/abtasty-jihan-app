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
            tr: 1150,
            icn: 1,
        });
        window.abtasty.send("item", {
            tid: transId,
            ic: "Code1",
            in: "Séjour",
            iv: "CAT1",
            iq: 1,
            ip: 1000,
        });
    }, []);

    return(
        <div>
            {'You trip is Booked !'}
        </div>
    )
}

export default Booking;