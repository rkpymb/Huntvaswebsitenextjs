import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Mstyles from '../../Style/home.module.css';
export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Terms & Conditions : Hunt VAS"
          description="Elevate Your Business with Hunt VAS - Virtual Assistant Experts"
        />

        <div className={Mstyles.MyContainer80full}>

          <div className={Mstyles.TitleC}>
            <div className={Mstyles.MyContainer80fullTopDevider}></div>
            <h1> Terms & Conditions

            </h1>
            <div className={Mstyles.TitleCenterDesc}>
              <p>
                Our Terms & Conditions outline the contractual agreement between you and Hunt VAS when using our services. These terms govern the rights, obligations, and responsibilities of both parties and are designed to provide clarity and ensure a fair and secure business relationship.


              </p>

              <p>
               <span className={Mstyles.Boldunderline}>Service Usage:</span>We specify the permitted use of our services and any prohibited activities that may result in account termination.
              </p>


              <p>
              <span className={Mstyles.Boldunderline}>Account Registration: </span>The Terms & Conditions explain the requirements and responsibilities related to account registration and maintenance.
              </p>


              <p>
              <span className={Mstyles.Boldunderline}>Service Changes: </span>We clarify our right to make changes to our services and any associated implications for users.
              </p>


              <p>
              <span className={Mstyles.Boldunderline}>Payment and Billing: </span>Details regarding payment methods, billing cycles, and charges are outlined in this section.

              </p>

              <p>
              <span className={Mstyles.Boldunderline}>Dispute Resolution: </span>
                  Our Terms & Conditions describe the process for dispute resolution, including steps for addressing issues or conflicts.
              </p>


              <p>
              <span className={Mstyles.Boldunderline}>Payment and Billing: </span>
                 We specify the circumstances under which we may terminate accounts and the associated consequences.
              </p>

              <p>
                 By using our services, you agree to abide by the Terms & Conditions outlined in this policy.

              </p>










            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
