/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import TL from "../../../Images/TL.png";
import Visa from "../../../Images/visa.png";
import chip from "../../../Images/chip.png";
import pattern from "../../../Images/pattern.png";
import background from "../../../Images/bgr.png";
import "./code.css";

const codes = [
  {
    bankName: "Bank of Guru",
    chipImage: chip,
    visaImage: Visa,
    back: background,
    pcard:pattern,
    cardNumber: "5212 4356 9889 6767",
    holder: "CARD HOLDER",
    valid: "VALID TILL",
    cardName: "KUWARP",
    date: "07/30",
  },
];
export const Code = () => {
  return (
    <>
      {codes.map((codel, index) => (
        <div className="container">
          <div className="card">
            <div className="card-face">
              <div className="f-box">
                <img src={codel.back} className=" back-img" alt="back-image"/>
                <div className="data">
                  <img src={codel.chipImage} width="60px" alt="Chip" />
                  <img src={codel.visaImage} width="80px" alt="Visa" />
                </div>
                <div className="data card-nm">
                  <h2>{codel.cardNumber}</h2>
                </div>
                <div className="data bank-card">
                  <h2>{codel.bankName} </h2>
                </div>
                <div className="data base-card">
                  <p>{codel.holder}</p>
                  <p>{codel.valid}</p>
                </div>
                <div className="data holder-name">
                  <p>{codel.cardName}</p>
                  <p>{codel.date}</p>
                </div>
                <div className="data lnc-card">
                  <p>
                    This card licensed by{" "}
                    <strong className="strong-text">Being dev.loper</strong> @
                    2022{" "}
                  </p>
                </div>
              
              
              
              </div>
              <div className="b-box">
                <div className="pat-card">
                  {/* <img src={codel.} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
