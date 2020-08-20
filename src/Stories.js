import React, { useState, useEffect } from "react";
import { DESTINATIONS } from "./constants";
import { Link } from "react-router-dom";
import flagship from "@flagship.io/js-sdk";

function Stories() {

  const [fsVisitor, setFsVisitor] = useState(null);
  const [customBtnData, setCustomBtnData] = useState({});


  useEffect(() => {
    const fsSdk = flagship.start('bkabbarggr1dtrcs8gq0', { fetchNow: true, enableConsoleLogs: true });
  
    const visitorInstance = fsSdk.newVisitor('test-perf', {
      screenMode: 'light',
    });
  
    visitorInstance.on('ready', () => {
      setFsVisitor(visitorInstance);
    });
  }, []);

  useEffect(
    () => {
      if (fsVisitor) {
        const data = fsVisitor.getModifications([
          {
            key: 'color',
            defaultValue: '#fff',
          },
          {
            key: 'borderColor',
            defaultValue: '#007bff',
          },
          {
            key: 'backgroundColor',
            defaultValue: '#007bff',
          },
        ], true)
        setCustomBtnData(data);
      }
    }, [fsVisitor],
  );

  return (
    <div className="Stories">
      <h3>Top Destinations</h3>
      {DESTINATIONS.map(story => {
        const { id, image, title } = story;
        return (
          <div key={id}>
            <img src={image} alt={title} />
            <div>
              {title}
            </div>
            <Link to='/booking'>
              <button 
              type='button' 
              style={
                {
                  color: customBtnData.color,
                  backgroundColor: customBtnData.backgroundColor,
                  borderColor: customBtnData.borderColor,
                }
              }
              onClick={() => {
                if (fsVisitor) {
                  const eventPayload = {
                    transactionId: '123456789',
                    affiliation: 'travels',
                  };
                  fsVisitor.sendHits([
                    {
                      type: 'Transaction',
                      data: eventPayload,
                    },
                  ]);
                }
              }}>Go To Booking</button>
            </Link>
            <button type='button' onClick= {() => 
              {
                if (fsVisitor) {
                  const eventPayload = {
                    category: 'Action Tracking',
                    action: 'clickOnTrackButton',
                  };
                  fsVisitor.sendHits([
                    {
                      type: 'Event',
                      data: eventPayload,
                    },
                  ]);
                }
              }
            } > Track click</button>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
