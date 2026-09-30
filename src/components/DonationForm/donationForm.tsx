import { Script } from "gatsby";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function DonationForm() {
  const [loaded, setLoaded] = useState(false);
  return (
    <Container>
        <div id="MC-embed-donation_widget"></div>
        <Script src="https://downloads.mightycause.com/widgets/v1/embed.min.js" type="text/javascript" onLoad={() => setLoaded(true)}/>
        {loaded && <Script
            dangerouslySetInnerHTML={{
                __html: `
                    if(window.MCForms === undefined) {
                        console.log('MCForms is not loaded');
                    } else {
                        window.MCForms.createEmbedInstance(
                            {
                            elementID: "MC-embed-donation_widget",
                            url: "https://www.coloradogives.org/forms/Blazerbots?id=fn3w0f&embed=donation_widget",
                            id: "mc-embed-instance-fn3w0f",
                            width: "300",
                            height: "500"
                            }
                        );
                    }
                    `,
            }}
        />}
     </Container>
  );
}

export { DonationForm };
