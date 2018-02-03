import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const PaypalBtn = props => (
  <span className="Paypal-btn" {...props}>
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="QRWYRBTSFU3GU"/>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>
</span>


);

export default PaypalBtn;