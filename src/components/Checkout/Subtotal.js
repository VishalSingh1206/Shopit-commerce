import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./Stateprovider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):{" "}
              <strong>{basket?.length}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
             
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"₹"}
      />
      <button>Proceed to Check-Out</button>
    </div>
  );
}

export default Subtotal;
