import React from "react";
import { Formik } from "formik";
import { bool, object } from "yup";
import { Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { Checkbox } from "../elements/elements";
import { Form, FormRow, Heading, Terms } from "./AgreementForm.styles";
import BottomNav from "../../CreateInvestor/BottomNav/BottomNav";

export interface AgreementState {
  agree: boolean;
}

function AgreementForm() {
  const history = useHistory();
  const location = useLocation<AgreementState>();
  const defaults = { agree: false };
  const isOrganization = true;
  return (
    <Formik
      initialValues={{ ...defaults, ...location.state }}
      validateOnChange
      validateOnBlur
      validateOnMount={!location.state}
      onSubmit={values => {
        history.replace(history.location.pathname, {
          formValues: values,
          direction: "next"
        });
      }}
      validationSchema={object({
        agree: bool()
          .required()
          .test("agree", "Must agree to terms and conditions", value =>
            Boolean(value)
          )
      })}
    >
      {({ values, isSubmitting, submitForm }) => (
        <>
          <Form id="formik">
            <FormRow>
              <Heading as={Col} xs={24}>
                Legal information
              </Heading>
              <Terms as={Col} xs={24}>
                <Row>
                  <Col>
                    <p>
                      I hereby authorize Clearing Firm to (i) execute trades and
                      process transactions in the Account as directed by
                      Advisor; (ii) remit checks, wire funds, and to otherwise
                      make disbursements of funds held in the Account to (1)
                      banks, broker-dealers, investment companies, or other
                      financial institutions to an account of identical
                      registration, or (2) you at your address of record at
                      Advisor’s instruction; (iii) provide Advisor with
                      issuer-related communications, including those that
                      require a voting decision or other action, and to perform
                      all actions relating to those communications, including
                      the voting of shares and proxy material, and (iv) pay
                      investment advisory and other fees from the Account at,
                      and in the amount of, Advisor’s instruction, without
                      inquiry or investigation, in accordance with the terms of
                      the Customer Account Agreement and Advisor Authorization.
                    </p>
                    <p>
                      I authorize my broker, advisor, and/ or Clearing Firm to
                      obtain a consumer report at the time of application to
                      verify my creditworthiness and to obtain a consumer report
                      from time to time for updates, renewals, extensions, and
                      collection activity on any approved account. Upon my
                      written request, my broker, advisor, and/ or Clearing Firm
                      will disclose to me whether it obtained a report, and if
                      so, the name and address of the consumer-reporting agency
                      that provided it. In the event that my account is denied
                      by Clearing Firm, as a result of the consumer report
                      verification, I authorize Clearing Firm to provide to my
                      broker or advisor the reason(s) for such denial.
                    </p>
                    <p>
                      BY SIGNING THIS APPLICATION, I ACKNOWLEDGE THE FOLLOWING:
                      (1) THAT, PAGE 4 PARAGRAPH 10 OF THE CUSTOMER ACCOUNT
                      AGREEMENT CONTAINS A PREDISPUTE ARBITRATION CLAUSE AND IN
                      ACCORDANCE WITH THIS AGREEMENT I (WE) AGREE IN ADVANCE TO
                      ARBITRATE ANY CONTROVERSIES WHICH MAY ARISE BETWEEN OR
                      AMONG ME (US), MY BROKER AND/OR ADVISOR, AND/OR CLEARING
                      FIRM, (2) RECEIPT OF A COPY OF THE CUSTOMER ACCOUNT
                      AGREEMENT FOLLOWING THIS APPLICATION AND MY (OUR)
                      AGREEMENT WITH THE TERMS THEREIN AND (3) THE INFORMATION
                      PROVIDED ABOVE IS ACCURATE.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      This Customer Account Agreement (the “Agreement”) sets
                      forth the respective rights and obligations of Apex
                      Clearing Corporation (“Apex”) and the customer identified
                      on the New Account Application (the “Customer”) in
                      connection with the Customer’s brokerage account with Apex
                      (the “Account”). Customer hereby agrees as follows with
                      respect to the Account, which Customer has established
                      with Apex for the purchase, sale, and/or carrying of
                      securities or contracts relating thereto and/or the
                      borrowing of funds, at the instruction of Customer’s
                      registered investment advisor as authorized by Customer in
                      the New Account Application (“Advisor”), which
                      transactions will be cleared through Apex. To help the
                      government fight the funding of terrorism and money
                      laundering, Federal law requires all financial
                      institutions to obtain, verify, and record information
                      that identifies each person who opens an account. In order
                      to open the Account, Customer will provide information
                      that will allow Apex to identify Customer, including, but
                      not limited to, Customer’s name, address, date of birth,
                      and copies of Customer’s driver license and/or other
                      identifying documents.
                    </p>
                    <ol>
                      <li>
                        Applicable Rules and Regulations. All transactions for
                        the Account shall be subject to the constitution, rules,
                        regulations, customs, and usages of the exchange or
                        market and its clearing house, if any, upon which such
                        transactions are executed, except as otherwise
                        specifically provided in this Agreement.
                      </li>
                      <li>
                        Definitions. “Obligations” means all indebtedness, debit
                        balances, liabilities, or other obligations of any kind
                        of the Customer to Apex, whether now existing or
                        hereafter arising. “Assets” shall include, but shall not
                        be limited to, money, securities, commodities, or other
                        property of every kind and nature and all contracts and
                        options relating to them in any way, whether for present
                        of future delivery.
                      </li>
                      <li>
                        Advisor Agreement. Customer represents that Customer has
                        entered into a separate agreement directly with Advisor
                        (“Advisor Agreement”) authorizing Advisor to manage the
                        Account, including executing trades, appointing
                        sub-advisors, depositing or withdrawing funds to and
                        from Account, requesting information, receiving Account
                        statements and confirmations, changing certain of my
                        information, and generally transacting in and managing
                        the Account. Customer understands that Advisor has
                        entered into an agreement with Apex pursuant to which
                        Apex is willing to grant access to Advisor for Advisor
                        to manage accounts for Advisor’s customers whom open
                        brokerage accounts at Apex for Advisor to manage.
                        Customer authorizes Advisor to establish relationships
                        with Apex and to appoint and use other sub-agents on the
                        Account at Advisor’s discretion. Should Advisor appoint
                        a sub-agent to the Account, Apex shall be entitled to
                        rely on and execute any instructions from that sub-agent
                        as if they were given directly by Advisor.
                      </li>
                      <li>
                        Apex’s Role and Appointment. Customer appoints Apex as
                        agent to carry the Account and to execute Advisor’s
                        instructions relating to the Account. Customer agrees
                        Apex may execute, clear, and settle any transaction in
                        the Account at the instruction of Advisor and may accept
                        and execute any instruction relating to the Account
                        without inquiry or investigation. Customer assumes all
                        investment risk with the Account and with authorizing
                        Advisor to transact for the Account. Customer
                        understands all transactions in the Account will be
                        executed by Apex only at the instruction of Advisor
                        acting pursuant to the Advisor Agreement, and that
                        Apex’s role is only to hold or custody Account Assets,
                        distribute or collect funds on behalf of the Account,
                        execute and clear trades at the instruction of Advisor,
                        generate account statements, and provide other custodial
                        and clearing services as may be mandated by various
                        regulatory standards and requirements. Customer
                        understands Apex does not and will not offer investment
                        advice, review the Account or transactions therein, make
                        any determination of Customer’s suitability for any
                        transaction or investment, will have no responsibility
                        for trades made or activity in the Account, and has no
                        discretion over transactions in or decisions made on
                        behalf of Customer or the Account. Customer acknowledges
                        that Advisor provides and is solely responsible for all
                        investment advice and investment advisory services given
                        in connection with the Account. Additionally, Apex will
                        not verify the accuracy of any management fees Customer
                        pays to Advisor pursuant to the terms of the Advisor
                        Agreement. Notwithstanding the foregoing, in the event
                        Customer initiates a claim against Apex, in Apex’s
                        capacity as custodial broker or otherwise, and does not
                        prevail, Customer shall be responsible for the costs and
                        expenses associated with Apex’s defense of such claim.
                        Apex may, in its sole and absolute discretion, and
                        without prior notice to Customer or Advisor, transact,
                        restrict, or refuse any orders placed in the Account.
                      </li>
                      <li>
                        Advisor Fee and Charges. Customer will pay fees to
                        Advisor for its services in accordance with the Advisor
                        Agreement (each such payment an “Advisor Fee”). Customer
                        authorizes and instructs Apex to deduct the Advisor Fee
                        directly from the Account and pay it to Advisor.
                        Customer agrees and acknowledges that Advisor will
                        instruct Apex of the amount to deduct and pay to
                        Advisor, and Customer agrees to hold harmless Apex in
                        any dispute related to the amount of any Advisor Fee.
                        Apex may also charge, and Customer authorizes Apex to
                        deduct from the Account, fees for services performed by
                        Apex at Customer or Advisor’s instruction, including,
                        but not limited to, transactions, preparation and
                        delivery of paper statements and confirmations, rejected
                        payments, and wire transfers. Customer acknowledges per
                        the agreement between Advisor and Apex that Advisor may
                        pay Apex fees directly for Apex’s services provided.
                        Regardless of the method used to calculate fees charged
                        by Apex to Advisor, Customer understands that Apex is
                        not an advisor and will not act as an advisor on the
                        Account. Additionally, the Advisor Fee may not include
                        underlying ETF or mutual fund expenses, which are
                        standard expenses that shareholders pay in accordance
                        with such funds’ prospectus, in which case Apex shall be
                        entitled to deduct such fees from the Account.
                      </li>
                      <li>
                        Breach; Security Interest. Whenever in Apex’s discretion
                        Apex considers it necessary for Apex’s, Advisor’s, or
                        Customer’s protection or in the event of, but not
                        limited to: (i) any breach by Customer of this or any
                        agreement with Apex or Advisor or (ii) Customer’s
                        failure to pay for Assets purchased or deliver Assets
                        sold, Apex may sell any and all Assets held in the
                        Account or any other account in Customer’s name (either
                        individually or jointly with others), cancel or complete
                        any open orders for the purchase or sale of any Assets
                        and/or borrow or buy-in any Assets required to make
                        delivery against any sale, including a short sale,
                        effected for the Customer, all without notice or demand
                        for deposit of collateral, other notice of sale or
                        purchase, or other notice or advertisement, each of
                        which is expressly waiver by Customer, and/or Apex may
                        require Customer to deposit cash or adequate collateral
                        to Account prior to any settlement date in order to
                        assure the performance or payment of any open
                        contractual commitments and/or unsettled transactions.
                        Apex has the right to refuse to execute transactions for
                        Customer or Advisor at any time and for any reason. Any
                        and all Assets belonging to Customer or in which
                        Customer may have an interest held by Apex or carried in
                        any of Customer&rsquo;s accounts with Apex (either
                        individually or jointly with others) shall be subject to
                        a continuing and perfected first priority lien and
                        security interest and right of set-off held by Apex for
                        the discharge of and all indebtedness or obligation
                        Customer may have to Apex, and will be held as security
                        for payment of any liability or indebtedness in the
                        Account or any of Customer’s accounts with Apex,
                        wherever or however arising and without regard to
                        whether or not Apex has made advances with respect to
                        such Assets, and Apex is hereby authorized to sell
                        and/or purchase any and all Assets in any of
                        Customer&rsquo;s accounts, and/or to transfer any such
                        Assets among any of the Customer&rsquo;s accounts to the
                        fullest extent of the law and without notice where
                        allowed. The losses, costs and expenses, including but
                        not limited to reasonable attorneys&rsquo; fees and
                        expenses, incurred and payable or paid by Apex in the
                        (i) collection of a debit balance and/or any unpaid
                        deficiency in the Account or any accounts of the
                        Customer with Apex or (ii) defense of any matter arising
                        out of the Customer’s or Advisor’s transactions, shall
                        be payable to Apex by Customer. Customer understands
                        that because of circumstances beyond Apex’s control,
                        Customer’s voting rights may be impaired. For example,
                        if the stock of a company that one Apex customer has
                        purchased has not yet been received from the seller(s),
                        then a different Apex customers’ abilities to vote that
                        company’s stock could be impaired until those shares are
                        received by Apex. In addition, if the stock of a company
                        that Customer has purchased has not yet been received
                        from the seller(s), then payments received by the
                        Customer, in lieu of the dividends on that stock not yet
                        received, may receive tax treatment less favorable than
                        that accorded to dividends.
                      </li>
                      <li>
                        Cancellation. Apex is authorized, in its sole
                        discretion, should it for any reason whatsoever deem it
                        necessary for its protection, without any notice, to
                        cancel any outstanding order, to close out the Account
                        or any accounts of Customer at Apex, in whole or in
                        part, or to close out any commitment made on behalf of
                        Customer. Customer also authorizes Apex to terminate the
                        account with or without Advisor’s instruction without
                        notice to Customer.
                      </li>
                      <li>
                        Payment of Indebtedness on Demand. Customer shall at all
                        times be liable for payment upon demand of any
                        obligations owing from Customer to Apex and Customer
                        shall be liable to Apex for any deficiency remaining in
                        Account or in any other accounts of Customer at Apex in
                        the event of the liquidation thereof (as contemplated by
                        this Agreement or otherwise), in whole or in part, by
                        Apex, Advisor, or Customer. Customer shall make payment
                        of such obligations immediately upon demand.
                      </li>
                      <li>
                        Communications. Apex may send communications to Customer
                        at Customer’s address on the New Account Application or
                        at such other address as Advisor may hereafter give to
                        Apex on behalf of Customer. All communications so sent,
                        whether by mail, electronically, or otherwise, shall be
                        deemed given to Customer personally, whether actually
                        received or not. Customer shall be responsible for
                        reviewing all statements and confirmations of Account as
                        well as communications sent by Apex. Statements of
                        Customer shall be conclusive if not objected to in
                        writing by Customer within ten (10) days and
                        confirmations shall be conclusive if not objected to in
                        writing by Customer within five (5) days, after
                        forwarding by Apex by mail or otherwise. In
                        consideration of Apex sending any mail to Customer in
                        care of a post office box or third party address,
                        Customer hereby agrees that all correspondence of any
                        nature whatsoever sent to Customer at such address will
                        have the same force and effect as if it had been
                        delivered to Customer personally.
                      </li>
                      <li>
                        ARBITRATION AGREEMENT. THIS AGREEMENT CONTAINS A
                        PREDISPUTE ARBITRATION CLAUSE. BY SIGNING AN ARBITRATION
                        AGREEMENT THE PARTIES AGREE AS FOLLOWS:
                        <ul>
                          <li>
                            a. ALL PARTIES TO THIS AGREEMENT ARE GIVING UP THE
                            RIGHT TO SUE EACH OTHER IN COURT, INCLUDING THE
                            RIGHT TO A TRIAL BY JURY EXCEPT AS PROVIDED BY THE
                            RULES OF THE ARBITRATION FORM IN WHICH A CLAIM IS
                            FILED;
                          </li>
                          <li>
                            b. ARBITRATION AWARDS ARE GENERALLY FINAL AND
                            BINDING; A PARTY’S ABILITY TO HAVE A COURT REVERSE
                            OR MODIFY AN ARBITRATION AWARD IS VERY LIMITED.
                          </li>
                          <li>
                            c. THE ABILITY OF THE PARTIES TO OBTAIN DOCUMENTS,
                            WITNESS STATEMENTS AND OTHER DISCOVERY IS GENERALLY
                            MORE LIMITED IN ARBITRATION THAN IN COURT
                            PROCEEDINGS;
                          </li>
                          <li>
                            d. THE ARBITRATORS DO NOT HAVE TO EXPLAIN THE
                            REASON(S) FOR THEIR AWARD UNLESS, IN AN ELIGIBLE
                            CASE, A JOINT REQUEST FOR AN EXPLAINED DECISION HAS
                            BEEN SUBMITTED BY ALL PARTIES TO THE PANEL AT LEAST
                            20 DAYS PRIOR TO THE FIRST SCHEDULED HEARING DATE.
                          </li>
                          <li>
                            e. THE PANEL OF ARBITRATORS WILL TYPICALLY INCLUDE A
                            MINORITY OF ARBITRATORS WHO WERE OR ARE AFFILIATED
                            WITH THE SECURITIES INDUSTRY.
                          </li>
                          <li>
                            f. THE RULES OF SOME ARBITRATION FORUMS MAY IMPOSE
                            TIME LIMITS FOR BRINGING A CLAIM IN ARBITRATION. IN
                            SOME CASES, A CLAIM THAT IS INELIGIBLE FOR
                            ARBITRATION MAY BE BROUGHT IN COURT.
                          </li>
                          <li>
                            g. THE RULES OF THE ARBITRATION FORUM IN WHICH THE
                            CLAIM IS FILED, AND ANY AMENDMENTS THERETO, SHALL BE
                            INCORPORATED INTO THIS AGREEMENT.
                          </li>
                        </ul>
                      </li>
                      <p>
                        THIS ARBITRATION AGREEMENT SHOULD BE READ IN CONJUNCTION
                        WITH THE DISCLOSURES ABOVE. ANY AND ALL CONTROVERSIES,
                        DISPUTES OR CLAIMS BETWEEN OR AMONG APEX, ADVISOR,
                        AND/OR CUSTOMER OR THEIR REPRESENTATIVES, EMPLOYEES,
                        DIRECTORS, OFFICERS, OR CONTROL PERSONS, ARISING OUT OF,
                        IN CONNECTION WITH, FROM, OR WITH RESPECT TO (a) ANY
                        PROVISIONS OF OR THE VALIFITY OF THIS AGREEMENT OR ANY
                        RELATED AGREEMENTS, (b) THE RELATIONSHIP OF THE PARTIES
                        HERETO, OR (c) ANY CONTROVERSY ARISING OUT OF APEX’S
                        BUSINESS, ADVISOR&rsquo;S BUSINESS OR THE
                        CUSTOMER&rsquo;S ACCOUNTS, SHALL BE CONDUCTED PURSUANT
                        TO THE CODE OF ARBITRATION PROCEDURE OF THE FINANCIAL
                        INDUSTRY REGULATORY AUTHORITY (“FINRA”). ARBITRATION
                        MUST BE COMMENCED BY SERVICE OF A WRITTEN DEMAND FOR
                        ARBITRATION OR A WRITTEN NOTICE OF INTENTION TO
                        ARBITRATE. THE DECISION AND AWARD OF THE ARBITRATOR(S)
                        SHALL BE CONCLUSIVE AND BINDING UPON ALL PARTIES, AND
                        ANY JUDGMENT UPON ANY AWARD RENDERED MAY BE ENTERED IN A
                        COURT HAVING JURISDICTION THEREOF, AND NEITHER PARTY
                        SHALL OPPOSE SUCH ENTRY.
                        <br />
                        No person shall bring a putative or certified class
                        action to arbitration, nor seek to enforce any
                        pre-dispute arbitration agreement against any person who
                        has initiated in court a putative class action; or who
                        is a member of a putative class who has not opted out of
                        the class with respect to any claims encompassed by the
                        putative class action until: (i) the class certification
                        is denied; (ii) the class is de-certified; or (iii)
                        Customer is excluded from the class by the court. Such
                        forbearance to enforce an agreement to arbitrate shall
                        not constitute a waiver of any rights under this
                        Agreement except to extent stated herein.
                      </p>
                      <li>
                        Representations. Customer represents and warrants that
                        Customer is of majority age, is not an employee of any
                        exchange, corporation of which any exchange owns a
                        majority of stock, or member of any exchange, member
                        firm, or member corporation registered on any exchange,
                        or of a bank, trust company, insurance company, or of
                        any corporation, firm, or individual engaged in the
                        business dealing either as broker or as principal in
                        securities, bills of exchange, acceptances, or other
                        forms of commercial paper, or, alternatively, that the
                        Customer has obtained and will provide to Apex
                        additional documentation which may include information
                        required under FINRA Rule 3210(407) from its employer
                        authorizing the Customer to open and maintain an account
                        with Apex. If Customer is a corporation, partnership,
                        trust, or other entity, Customer represents that its
                        governing instruments permit this Agreement, that this
                        Agreement has been authorized by all require persons,
                        and that the signatory on the New Account Application is
                        authorized to sign on behalf of and bind Customer.
                        Customer represents that it shall comply with all
                        applicable laws, rules, and regulations in connection
                        with the Account. Customer further represents that no
                        one except Customer has an interest in the Account or
                        other accounts of Customer with Apex.
                      </li>
                      <li>
                        Tax Treaty Eligibility. This Agreement shall serve as
                        the Customer&rsquo;s certification that Customer is
                        eligible to receive tax treaty benefits between the
                        country of residence indicated on the new account form
                        and the country or countries of origin holding
                        jurisdiction over the instruments held within
                        Customer&rsquo;s account.
                      </li>
                      <li>
                        Joint Accounts. If the New Account Application indicates
                        that the Account shall consist of more than one person,
                        Customer&rsquo;s obligations under this Agreement shall
                        be joint and several among them all. References to
                        &ldquo;Customer&rdquo; shall include each of the
                        customers identified on the New Account Application.
                        Apex may rely on transfer or other instructions from
                        Advisor or any one of the Customers in a joint account,
                        and such instructions shall be binding on each Customer.
                        Apex may deliver Assets, and send confirmations,
                        notices, statements and communications of every kind to
                        any one of the Customers, and such action shall be
                        binding on each Customer. Notwithstanding the foregoing,
                        Apex is authorized in its sole discretion to require
                        joint action by some or all Customers with respect to
                        any matter concerning the joint account, including but
                        not limited to the giving or cancellation of orders and
                        the withdrawal of money or securities. In the case of
                        Tenants by the Entirety accounts, joint action will be
                        required for all matters concerning the joint account.
                        Tenants by Entirety accounts are not recognized in
                        certain jurisdictions, and, where not expressly allowed,
                        will not be a permitted designation of the account.
                      </li>
                      <li>
                        Custodial Accounts for Minors. If a custodial account
                        was selected, such as UTMA/UGMA, as the Customer Type in
                        the New Account Application, the custodian opening the
                        account (“Custodian”) understands Custodian has opened a
                        custodial account for a minor and acts as the account
                        custodian on behalf of the minor owner. It is
                        Custodian’s obligation to adhere to all applicable laws
                        and regulations governing such accounts. Custodian
                        should consult with an attorney and/or tax advisor
                        before opening a custodial account. The age of majority
                        varies by state. Custodian agrees to promptly inform its
                        advisor and broker in writing upon the account owner
                        reaching the age of majority and to facilitate the
                        transfer of the account assets to its beneficial owner.
                        Apex reserves the right, but shall not be obligated, to
                        terminate the custodianship and/or transfer the account
                        assets to the beneficial owner upon the minor reaching
                        the age of majority as determined by the state code
                        Custodian has included, without notice to or consent of
                        Custodian.
                      </li>
                      <li>
                        Other Agreements. If the Customer trades any options,
                        the Customer agrees to be bound by the terms of your
                        Customer Option Agreement. The Customer understands that
                        copies of these agreements are available from you and,
                        to the extent applicable, are incorporated by reference
                        herein. The terms of these other agreements are in
                        addition to the provisions of this Agreementband any
                        other written agreements between you and the Customer.
                      </li>
                      <li>
                        Data Not Guaranteed. Customer expressly agrees that any
                        data or online reports is provided to the Customer
                        without warrantiesbof any kind, express or implied,
                        including but not limited to, the implied warranties of
                        merchantability, fitness of a particularbpurpose or
                        non-infringement. Customer acknowledges that the
                        information contained in any reports provided by Apex
                        isbobtained from sources believed to be reliable but is
                        not guaranteed as to its accuracy of completeness. Such
                        information couldbinclude technical or other
                        inaccuracies, errors or omissions. In no event shall
                        Apex or any of its affiliates be liable to Customer or
                        any third party for the accuracy, timeliness, or
                        completeness of any information made available to
                        Customer or for any decision made or taken by Customer
                        in reliance upon such information. In no event shall
                        Apex or its affiliated entities be liable for any
                        special incidental, indirect or consequential damages
                        whatsoever, including, without limitation, those
                        resulting from loss of use, data or profits, whether or
                        not advised of the possibility of damages, and on any
                        theory of liability, arising out of or in connection
                        with the use of any reports provided by you or with the
                        delay or inability to use such reports.
                      </li>
                      <li>
                        Payment for Order Flow Disclosure. Depending on the
                        security traded and absent specific direction from
                        Customer, equity and option orders are routed to market
                        centers (i.e., broker-dealers, primary exchanges or
                        electronic communication networks) for execution.
                        Routing decisions are based on a number of factors
                        including the size of the order, the opportunity for
                        price improvement and the quality of order executions,
                        and decisions are regularly reviewed to ensure the duty
                        of best execution is met. Apex may receive compensation
                        or other consideration for the placing of orders with
                        market centers for execution. The amount of the
                        compensation depends on the agreement reached with each
                        venue. The source and nature of compensation relating to
                        Customer&rsquo;s transactions will be furnished upon
                        written request.
                      </li>
                      <li>
                        Credit Check. Apex is authorized, in its discretion,
                        should Apex for any reason deem it necessary for its
                        protection, to request and obtain a consumer credit
                        report for Customer.
                      </li>
                      <li>
                        Miscellaneous. If any provision of this Agreement is
                        held to be invalid or unenforceable, it shall not affect
                        any other provision of this Agreement. The headings of
                        each section of this Agreement are descriptive only and
                        do not modify or qualify any provision of this
                        Agreement. This Agreement and its enforcement shall be
                        governed by the laws of the state of Texas and shall
                        cover individually and collectively all accounts which
                        the Customer has previously opened, now has open or may
                        open or reopen with you, or any introducing broker, and
                        any and all previous, current and future transactions in
                        such accounts. Except as provided in this Agreement, no
                        provision of this Agreement may be altered, modified or
                        amended unless in writing signed by Apex’s authorized
                        representative. This Agreement and all provisions shall
                        inure to the benefit of Apex and its successors, whether
                        by merger, consolidation or otherwise, Apex’s assigns,
                        and all other persons specified in Paragraph 10. Apex
                        shall not be liable for losses caused directly or
                        indirectly by any events beyond Apex’s reasonable
                        control, including without limitation, government
                        restrictions, exchange or market rulings, suspension of
                        trading or unusually heavy trading in securities, a
                        general change in economic, political or financial
                        conditions, war or strikes. Apex may transfer the
                        accounts of Customer to Apex’s successors and assigns.
                        This Agreement shall be binding upon Customer and the
                        heirs, executors, administrators, successors and assigns
                        of Customer. Failure to insist on strict compliance with
                        this Agreement is not considered a waiver of Apex’s
                        rights under this Agreement. At Apex’s discretion, it
                        may terminate this Agreement at any time on notice to
                        the Customer and the Customer will continue to be
                        responsible for any obligation incurred by the Customer
                        prior to termination. Customer may not assign Customer’s
                        rights or delegate Customer’s obligations under this
                        Agreement, in whole or in part, without Apex’s prior
                        consent.
                      </li>
                      <li>
                        SIPC Protection. As a member of the Securities Investor
                        Protection Corporation (SIPC), funds are available to
                        meet customer claims up to a ceiling of $500,000,
                        including a maximum of $250,000 for cash claims. For
                        additional information regarding SIPC coverage,
                        including a brochure, please contact SIPC at (202)
                        371-8300 or visit www.sipc.org. Apex has purchased an
                        additional insurance policy through a group of London
                        Underwriters (with Lloyd&rsquo;s of London Syndicates as
                        the Lead Underwriter) to supplement SIPC protection.
                        This additional insurance policy becomes available to
                        customers in the event that SIPC limits are exhausted
                        and provides protection for securities and cash up to
                        certain limits. Similar to SIPC protection, this
                        additional nsurance does not protect against a loss in
                        the market value of securities.
                      </li>
                      <li>
                        Sweep Program. If the Customer elects to participate in
                        one of your FDIC or money market sweep programs, the
                        Customer acknowledges and agrees that: (a) the Customer
                        has read and understands the sweep program terms and
                        conditions and/or prospectuses available at
                        http://www.apexclearing.com/disclosures/ and is aware of
                        the products available in such sweep programs; (b) you
                        may make changes to your FDIC and/or money market sweep
                        programs and products at any time, in your sole
                        discretion and with or without notice to Customer; (c)
                        the free credit balances in the Customer’s Account may
                        begin being included in the sweep program upon Account
                        opening; and (d) you have no obligation to monitor the
                        applicable sweep program elected for the Customer’s
                        Account or to make recommendations about, or changes to,
                        the sweep program that might be beneficial to the
                        Customer.
                      </li>
                      <li>
                        Trusted Contacts. Under FINRA Rule 4512 your broker is
                        required to disclose to you (the customer) that your
                        broker, Apex Clearing Corporation or an associated
                        person of your broker or Apex Clearing Corporation is
                        authorized to contact the trusted contact person and
                        disclose information about the customer’s account to
                        address possible financial exploitation, to confirm the
                        specifics of the customer’s current contact information,
                        health status, or the identity of any legal guardian,
                        executor, trustee or holder of a power of attorney, or
                        as otherwise permitted by FINRA Rule 2165.
                      </li>
                      <li>
                        ACH Agreement. If Customer requests Automated
                        Clearinghouse (“ACH”) transactions from Customer’s
                        Account at Apex, Customer authorizes Apex to originate
                        or facilitate transfer credits/debits to/from Customer’s
                        eligible bank account. Transactions sent through the
                        NACHA network will be subject to all applicable rules of
                        NACHA and all rules set forth in Federal Reserve
                        Operating circulars or other applicable laws and
                        regulations. ACH deposits to Customer’s brokerage
                        account are provisional. If the beneficiary bank does
                        not receive final and complete payment for a payment
                        order transferred through ACH, the beneficiary bank is
                        entitled to recover from the beneficiary any provisional
                        credit and Apex may charge Customer’s account for the
                        transaction amount. Customer understands Apex or
                        Customer’s Advisor may not notify Customer of any
                        returned or rejected ACH transfers. Customer agrees to
                        hold Apex and Apex’s agents free of liability for
                        compliance with these instructions. Customer hereby
                        agrees to hold harmless Apex and each of its affiliates,
                        offices, directors, employees, and agents against, any
                        claims, judgments, expenses, liabilities or costs of
                        defense or settlement relating to: (a) any refusal or
                        failure to initiate or honor any credit or debit
                        request, by Apex or Advisor, whether (i) due to a lack
                        of funds necessary to credit Customer’s account; (ii)
                        due to inadvertence, error caused by similarity of
                        account holder names or (iii) otherwise provided Apex
                        has not acted in bad faith; (b) if the routing number is
                        incorrect or the routing number or other information
                        changes at another U.S. financial institution or (c) any
                        loss, damage, liability or claim arising, directly or
                        indirectly, from any error, delay or failure which is
                        caused by circumstances beyond Apex’s direct control. To
                        the extent permitted by applicable law or regulation,
                        Apex hereby disclaims all warranties, express or
                        implied, and in no event shall Apex be liable for any
                        special indirect, incidental, or consequential damages
                        whatsoever resulting from the ACH electronic service or
                        any ACH transactions. Nothing in this herein shall
                        constitute a commitment or undertaking by Apex or
                        Advisor to effect any ACH transaction or otherwise act
                        upon the instructions of Customer or Advisor with
                        respect to any account at Apex. This authorization shall
                        remain in full force and effect until Customer revokes
                        authorization by written notification to Advisor that is
                        forwarded to Apex. Customer understands that Apex has
                        the right to terminate or suspend the ACH agreement at
                        any time and without notice.
                      </li>
                    </ol>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3>Privacy Policy</h3>
                    <p>
                      Apex Clearing Corporation (“Apex”) carries your account as
                      a clearing broker by arrangement with your broker-dealer
                      or registered investment advisor as Apex’s introducing
                      client. At Apex, we understand that privacy is an
                      important issue for customers of our introducing firms. It
                      is our policy to respect the privacy of all accounts that
                      we maintain as clearing broker and to protect the security
                      and confidentiality of non‐public personal information
                      relating to those accounts. Please note that this policy
                      generally applies to former customers of Apex as well as
                      current customers.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Personal Information Collected</h4>
                    <p>
                      In order to service your account as a clearing broker,
                      information is provided to Apex by your introducing firm
                      who collects information from you in order to provide the
                      financial services that you have requested. The
                      information collected by your introducing firm and
                      provided to Apex or otherwise obtained by Apex may come
                      from the following sources and is not limited to:
                    </p>
                    <ul>
                      <li>
                        Information included in your applications or forms, such
                        as your name, address, telephone number, social security
                        number, occupation, and income;
                      </li>
                      <li>
                        Information relating to your transactions, including
                        account balances, positions, and activity;
                      </li>
                      <li>
                        Information which may be received from consumer
                        reporting agencies, such as credit bureau reports;
                      </li>
                      <li>information relating to your creditworthiness;</li>
                      <li>
                        Information which may be received from other sources
                        with your consent or with the consent of your
                        introducing firm.
                      </li>
                    </ul>
                    <p>
                      In addition to servicing your account, Apex may make use
                      of your personal information for analysis purposes, for
                      example, to draw conclusions, detect patterns or determine
                      preferences.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Sharing of Non-public Personal Information</h4>
                    <p>
                      Apex does not disclose non-public personal information
                      relating to current or former customers of introducing
                      firms to any third parties, except as required or
                      permitted by law, including but not limited to any
                      obligations of Apex under the USA PATRIOT Act, and in
                      order to facilitate the clearing of customer transactions
                      in the ordinary course of business.
                    </p>
                    <p>
                      Apex has multiple affiliates and relationships with third
                      party companies. Examples of these companies include
                      financial and non‐financial companies that perform
                      services such as data processing and companies that
                      perform securities executions on your behalf. We may share
                      information among our affiliates and third parties, as
                      permitted by law, in order to better service your
                      financial needs and to pursue legitimate business
                      interests, including to carry out, monitor and analyze our
                      business, systems and operations.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Security</h4>
                    <p>
                      Apex strives to ensure that our systems are secure and
                      that they meet industry standards. We seek to protect non‐
                      public personal information that is provided to Apex by
                      your introducing firm or otherwise obtained by Apex by
                      implementing physical and electronic safeguards. Where we
                      believe appropriate, we employ firewalls, encryption
                      technology, user authentication systems (i.e. passwords
                      and personal identification numbers) and access control
                      mechanisms to control access to systems and data. Apex
                      endeavors to ensure that third party service providers who
                      may have access to non‐public personal information are
                      following appropriate standards of security and
                      confidentiality. Further, we instruct our employees to use
                      strict standards of care in handling the personal
                      financial information of customers. As a general policy,
                      our staff will not discuss or disclose information
                      regarding an account except; 1) with authorized personnel
                      of your introducing firm, 2) as required by law or
                      pursuant to regulatory request, or 3) as authorized by
                      Apex to a third party or affiliate providing services to
                      your account or pursuing Apex’s legitimate business
                      interests.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Access to Your Information</h4>
                    <p>
                      You may access your account information through a variety
                      of media offered by your introducing firm and Apex (i.e.
                      statements or online services). Please contact your
                      introducing firm if you require any additional
                      information.
                    </p>
                    <p>
                      Apex may use “cookies” in order to provide better service,
                      to facilitate its customers’ use of the website, to track
                      usage of the website, and to address security hazards. A
                      cookie is a small piece of information that a website
                      stores on a personal computer, and which it can later
                      retrieve.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Changes to Apex&rsquo;s Privacy Policy</h4>
                    <p>
                      Apex reserves the right to make changes to this policy.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>
                      How to Get in Touch with Apex about this Privacy Policy
                    </h4>
                    <p>
                      For reference, this Privacy Policy is available on our
                      website at www.apexclearing.com. For more information
                      relating to Apex’s Privacy Policy or to limit our sharing
                      of your personal information, please contact:
                    </p>
                    <p>
                      Apex Clearing Corporation
                      <br />
                      Attn: Compliance Department 350 N. St. Paul St., Suite
                      1300
                      <br />
                      Dallas, Texas 75201
                      <br />
                      214‐765‐1055
                      <br />
                    </p>
                  </Col>
                </Row>
                {isOrganization && (
                  <Row>
                    <Col>
                      <p>
                        I authorize Apex Clearing Corporation
                        (&ldquo;Apex&rdquo;) to obtain a consumer report at the
                        time of application to verify my creditworthiness and to
                        obtain a consumer report from time to time for updates,
                        renewals, extensions, and collection activity on any
                        approved account. Upon my written request, Apex will
                        disclose to me whether it obtained a report, and if so,
                        the name and address of the consumer-reporting agency
                        that provided it. In the event that my account is
                        denied, as a result of the consumer report verification,
                        I authorize Apex to provide to my introducing broker the
                        reason(s) for such denial.
                      </p>
                      <p>
                        BY SIGNING THIS APPLICATION, I (WE) ACKNOWLEDGE THE
                        FOLLOWING: (1) THAT, PAGE 2, PARAGRAPH 8 OF THE CUSTOMER
                        ACCOUNT AGREEMENT CONTAINS A PREDISPUTE ARBITRATION
                        CLAUSE AND IN ACCORDANCE WITH THIS AGREEMENT I (WE)
                        AGREE IN ADVANCE TO ARBITRATE ANY CONTROVERSIES WHICH
                        MAY ARISE BETWEEN OR AMONG ME (US), MY BROKER, AND/OR
                        CLEARING FIRM, (2) RECEIPT OF A COPY OF THE CUSTOMER
                        ACCOUNT AGREEMENT FOLLOWING THIS APPLICATION AND MY
                        (OUR) AGREEMENT WITH THE TERMS THEREIN AND (3) THE
                        INFORMATION PROVIDED ABOVE IS ACCURATE AND CORRECT.
                      </p>
                    </Col>
                  </Row>
                )}
              </Terms>
            </FormRow>
            <FormRow className="divider">
              <Checkbox
                name="agree"
                label="I agree to the terms & conditions"
              />
            </FormRow>
          </Form>
          <BottomNav
            onNext={submitForm}
            blockNext={!values.agree || isSubmitting}
            onPrevious={() => {
              history.replace(history.location.pathname, {
                formValues: values,
                direction: "back"
              });
            }}
          />
        </>
      )}
    </Formik>
  );
}

export default AgreementForm;
