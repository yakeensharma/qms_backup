import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SurveyComponent from './components/SurveyComponent';
import { claimElements } from "./elementsData"
import Login from './components/login';
import { createContext, useEffect } from "react";
import {
  lossRunElements, boundBizzOnboarding, certificateOfInsurance, changes, endorsements, finance, policyChecking, tm_claim_dpo
  , tm_audit_form, tm_notice_of_cancellation, tm_cl_cancellation_form, tm_billing_form
  , tm_cl_activity_form, tm_renewal_dp_form, tm_cl_renwal_form_auto, tm_cl_new_business_form_auto
  , tm_create_policy_from_submission_form, tm_pl_activity_form, tm_suspense_form, tm_nb_prsopect_form_auto
  , tm_auto_quote_form, tm_cl_endorsement_ab_form, tm_cl_endorsement_db_form, tm_cl_new_business_form, tm_cl_renewal_form, tm_cl_renewal_review_form, tm_home_quote_form, tm_nb_prsopect_form, tm_prospect_form, tm_prospect_renewal_mide_term_form, tm_reinstatement_form
} from "./elementsData"
import { useState } from 'react';
import Main from './components/main';
import 'antd/dist/antd.min.css'
import Forms from './components/forms';

const UserContext = createContext()
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <UserContext.Provider value={{ loggedIn: isLoggedin, loginSetter: () => { setIsLoggedin(!isLoggedin) } }}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={isLoggedin ? <Main children={<Forms/>} key_elem= {'1'}/> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forms' element={<Main  children={<Forms/>} key_elem= {'1'} />} />
          <Route path='/claims' element={<SurveyComponent input_json={claimElements} title="CLAIMS" />} />
          <Route path='/lossRuns' element={<SurveyComponent input_json={lossRunElements} title="LOSS RUNS" />} />
          <Route path='/boundBizOnboarding' element={<SurveyComponent input_json={boundBizzOnboarding} title="BOUNDBIZ ONBOARDING" />} />
          <Route path='/certificateOfInsurance' element={<SurveyComponent input_json={certificateOfInsurance} title="CERTIFICATE OF INSURANCE" />} />
          <Route path='/changes' element={<SurveyComponent input_json={changes} title="Changes" />} />
          <Route path='/endorsements' element={<SurveyComponent input_json={endorsements} title="Endorsements" />} />
          <Route path='/finance' element={<SurveyComponent input_json={finance} title="Finance" />} />
          <Route path='/policyChecking' element={<SurveyComponent input_json={policyChecking} title="Policy Checking" />} />
          <Route path='/tm_claim_dpo' element={<SurveyComponent input_json={tm_claim_dpo} title="Claim DPO" />} />
          <Route path='/tm_audit_form' element={<SurveyComponent input_json={tm_audit_form} title="Audit Form" />} />
          <Route path='/tm_notice_of_cancellation' element={<SurveyComponent input_json={tm_notice_of_cancellation} title="Notice Of Cancellation" />} />
          <Route path='/tm_cl_cancellation_form' element={<SurveyComponent input_json={tm_cl_cancellation_form} title="CL Cancellation Form" />} />
          <Route path='/tm_billing_form' element={<SurveyComponent input_json={tm_billing_form} title="Billing Form" />} />
          <Route path='/tm_cl_activity_form' element={<SurveyComponent input_json={tm_cl_activity_form} title="CL Activity Form" />} />
          <Route path='/tm_renewal_dp_form' element={<SurveyComponent input_json={tm_renewal_dp_form} title="Renewal DP Form" />} />
          <Route path='/tm_cl_renwal_form' element={<SurveyComponent input_json={tm_cl_renwal_form_auto} title="Auto CL Renewal Form" />} />
          <Route path='/tm_cl_new_business_form' element={<SurveyComponent input_json={tm_cl_new_business_form_auto} title="Auto CL New Business Form" />} />
          <Route path='/tm_create_policy_from_submission_form' element={<SurveyComponent input_json={tm_create_policy_from_submission_form} title="Create Policy From Submission Form" />} />
          <Route path='/tm_pl_activity_form' element={<SurveyComponent input_json={tm_pl_activity_form} title="PL Activity Form" />} />
          <Route path='/tm_suspense_form' element={<SurveyComponent input_json={tm_suspense_form} title="Suspense Form" />} />
          <Route path='/tm_auto_nb_prsopect_form' element={<SurveyComponent input_json={tm_nb_prsopect_form_auto} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_auto_quote_form' element={<SurveyComponent input_json={tm_auto_quote_form} title="NB Prospect & Submission Form" />} />
          <Route path='/tm_cl_endorsement_ab_form' element={<SurveyComponent input_json={tm_cl_endorsement_ab_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_cl_endorsement_db_form' element={<SurveyComponent input_json={tm_cl_endorsement_db_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_cl_new_business_form' element={<SurveyComponent input_json={tm_cl_new_business_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_cl_renewal_form' element={<SurveyComponent input_json={tm_cl_renewal_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_cl_renewal_review_form' element={<SurveyComponent input_json={tm_cl_renewal_review_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_home_quote_form' element={<SurveyComponent input_json={tm_home_quote_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_prospect_form' element={<SurveyComponent input_json={tm_prospect_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_prospect_renewal_mide_term_form' element={<SurveyComponent input_json={tm_prospect_renewal_mide_term_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_nb_prsopect_form' element={<SurveyComponent input_json={tm_nb_prsopect_form} title="Auto NB Prospect & Submission Form" />} />
          <Route path='/tm_reinstatement_form' element={<SurveyComponent input_json={tm_reinstatement_form} title="Auto NB Prospect & Submission Form" />} />

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
export  {UserContext};