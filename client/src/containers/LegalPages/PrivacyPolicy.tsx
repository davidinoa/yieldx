import React from "react";
import { Col, Row } from "react-bootstrap";
import PageTitle from "../../elements/PageTitle/PageTitle";
import { LegalWrapper } from "./LegalPages.style";

export default function PrivacyPolicy() {
  return (
    <>
      <LegalWrapper>
        <Row>
          <PageTitle
            title="Privacy Policy"
            subtitle="Legal"
            page
            alignment="left"
          />
        </Row>
        <Row>
          <Col>
            <p>
              BondHouse Advisers, LLC has adopted this privacy policy with
              recognition that protecting the privacy and security of the
              personal information we obtain about our customers is an important
              responsibility. We also know that you expect us to service you in
              an accurate and efficient manner. To do so, we must collect and
              maintain certain personal information about you. We want you to
              know what information we collect and how we use and safeguard that
              information.
            </p>

            <p>
              <b>Information We Collect:</b> We collect certain nonpublic
              information about you (&ldquo;Customer Information&rsquo;). The
              essential purpose for collecting Customer Information is to allow
              us to provide advisory services to you. Customer Information we
              collect may include:
            </p>
            <ol>
              <li>
                Information that you provide on applications or other forms.
                This Customer Information may include personal and household
                information such as income, spending habits, investment
                objectives, financial goals, statements of account, and other
                records concerning your financial condition and assets, together
                with information concerning employee benefits and retirement
                plan interests, wills, trusts, mortgages and tax returns.
              </li>

              <li>
                Identifying information such as your name, age, address, social
                security number, etc.
              </li>

              <li>
                Information about your transactions with us, or others (e.g.,
                broker-dealers, clearing firms, or other chosen investment
                sponsors).
              </li>

              <li>
                Information we receive from consumer reporting agencies (e.g.,
                credit bureaus),as well as other various materials we may use to
                provide an appropriate recommendation or to fill a service
                request.
              </li>
            </ol>
            <p>
              <b>Security of Your Information:</b> We restrict access to your
              nonpublic personal information to those employees who need to know
              that information to service your account. We maintain physical,
              electronic and procedural safeguards that comply with applicable
              federal or state standards to protect your nonpublic personal
              information.
            </p>

            <p>
              <b>Information We Disclose:</b> As required or permitted by law,
              we disclose the nonpublic personal information we collect about
              our customers: (i) to persons necessary to effect the transactions
              and provide the services that our customers authorize, such as
              broker-dealers, custodians, independent managers etc.; (ii) to
              persons assessing our compliance with industry standards (e.g.,
              professional licensing authorities, etc.); (iii) our attorneys,
              accountants, and auditors; or (iv) as otherwise provided by law.
              We are permitted by law to disclose the nonpublic personal
              information about you to governmental agencies and other third
              parties in certain circumstances (such as third parties that
              perform administrative or marketing services on our behalf or for
              joint marketing programs). These third parties are prohibited to
              use or share the information for any other purpose.
            </p>

            <p>
              <b>Information We Disclose to Affiliated Third Parties:</b> We
              disclose the following information to affiliated third parties:
              Mostly positions, client names, for trading purposes, etc. The
              affiliated third parties to whom we disclose this information
              include: BondHouse Securities, LLC.
            </p>

            <p>
              <b>Former Clients:</b> If you decide to close your account(s) or
              become an inactive customer, we will adhere to our privacy
              policies, which may be amended from time to time.
            </p>

            <p>
              <b>Changes to Our Privacy Policy:</b> In the event there were to
              be a material change to our privacy policy regarding how we use
              your confidential information, we will provide written notice to
              you. Where applicable, you would be given an opportunity to limit
              or opt-out of such disclosure arrangements.
            </p>

            <p>
              <b>Questions:</b> If you have questions about this privacy notice
              or about the privacy of your customer information call our main
              number 800-516-0851 and ask to speak to the Chief Compliance
              Officer.
            </p>
          </Col>
        </Row>
      </LegalWrapper>
    </>
  );
}
