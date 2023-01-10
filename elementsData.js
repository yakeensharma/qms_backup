export const claimElements = {
    "elements": {
        "meta": {
            "headline": "Claims",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on Epic as per the email recevied through Claim portal",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Captured correct Policy LOB and policy term as per DOL",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-carrier-information",
                "display_text": "Checked Carrier information & email release with correct email address refering policy LOB & term",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "claim-creation-loss-notice",
                "display_text": "Claim creation in Epic checked with loss notice",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "discrepancy-correct-action",
                "display_text": "If discrepancy occur : Checked its correctly actioned or not",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "language-correct-action",
                "display_text": "Language selection to email Insured, correctly actioned",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "claim-adjustment-epic",
                "display_text": "Checked Claim no. & adjuster information in Epic.",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-email-insured",
                "display_text": "Email released to Insured with correct email address",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-attachment-action",
                "display_text": "Email attachment correctly actioned with advised discription",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "advised-procedure",
                "display_text": "Activity closed with advised procedure",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "insured-notes-check",
                "display_text": "Any instructions regarding claim for the Insured and sticky notes checked",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "timely-followup",
                "display_text": "Follow up procedure for Claim no. & adjuster info, done with in time window",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "acl3-code",
                "display_text": "Checked ACL3 activity code",
                "serial_no": "13",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "15",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "18",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "19",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const lossRunElements = {
    "elements": {
        "meta": {
            "headline": "Loss Runs",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on Epic as per data available at Renewal Prep or Midturm Tracker",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Checked correct Policy detail (LOB, policy term & policy #)",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-lossRun-email-policy#",
                "display_text": "Loss Run task correctly actioned (Email release to correct PPE (Broker) with correct contant, email address & Policy #)",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-subject-check",
                "display_text": " Checked email with advised subject line and all emails ids updated",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "chcked-activity-generate",
                "display_text": "Checked correct activity generate",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-actioned-summary",
                "display_text": "Summary of Insurance, correctly actioned (Generated on Current Policy term)",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "attached=market-file",
                "display_text": "Checked Market file(current) attach",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-email-lossRun",
                "display_text": "Correctly actioned Loss Run email received from PPE",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-loss-summary",
                "display_text": "Loss Summary correctly actioned",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "correct-activity-closure-email",
                "display_text": "Activity closure & Email attachment correctly actioned with advised discription",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "check-rpr1-code",
                "display_text": "Checked RPR1 activity code",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
          

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "17",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}



export const boundBizzOnboarding = {
    "elements": {
        "meta": {
            "headline": "Boundbiz",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "finance-agreement-down-payment",
                "display_text": "Finance Aggrement + Down Payment (For Applicable Accounts)",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "client-renewal-rewrite",
                "display_text": "New Client / Renewal / Rewrite",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-policy-tab-red-fields",
                "display_text": "Policy Tab - All Red Fields + In Case of Renewals All Tabs Updated Per Renewal Mkt File",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "proof-of-Insurance",
                "display_text": "Proof of Insurance",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "pol3-tra1-trd1-activities",
                "display_text": "Activities - Pol3, Tra1, Trd1, Afu1/Biz2 (as applicable) Plus Mrk2",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "welcome-email-doc-validation",
                "display_text": "Welcome Email / Proof Sent/Insured's Docs validation",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-attachment",
                "display_text": "Emails Attachment",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "tracker-updation",
                "display_text": "Tracker Updation",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "email-content-validation",
                "display_text": "Mkt File Email Content Validation",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "account-tab-fields-torqid",
                "display_text": "Accounts Tab - All Red Fields Plus TORQ ID",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "contact-tab-All-Red-Fields",
                "display_text": "Contact Tab - All Red Fields",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "17",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}


export const certificateOfInsurance = {
    "elements": {
        "meta": {
            "headline": "COI",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on Epic as per the Sample Data and check Attachments Tab",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-attachment",
                "display_text": "Email attachment",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-insured-name",
                "display_text": "Insured name and Certificate Holder name is correct as per the request",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Master-Cert-Selection",
                "display_text": "Master Cert Selection- with No Expired policy  ( Example : 21-22 Master Cert)",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-Loss-Payee-request",
                "display_text": "If it’s a Loss Payee request : Check its correctly actioned or not",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Request-for-Certificate-Holder",
                "display_text": "Request for Certificate Holder to be listed as additional Insured correctly actioned ",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "account-manager-approval-request",
                "display_text": "Request with special description on certificate forwarded to the Account Manager and taken their approval before processing correctly actioned",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "insured-Expiration-date-instructions",
                "display_text": "Expiration date, any instructions regarding certificates for the Insured and sticky notes checked",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Cancellation-latest-service-summary",
                "display_text": "Cancellation & latest service summary correctly actioned ",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-insurance-of-Certificate",
                "display_text": "Prior insurance of Certificate holder checked and actioned correctly",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "email-ids-updation",
                "display_text": "Check : All emails ids updated under holder or not as per the request? & Check Correct description added on email",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "cer-activity",
                "display_text": "Check CER1 activity code ",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "18",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const changes = {
    "elements": {
        "meta": {
            "headline": "Changes",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on Epic as per the Sample Data and check the Request made by Account Managers",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Check Correct Changes added on EPIC",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Change-request-Details",
                "display_text": "Check the Change request Details?",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Master-Cert-Selection",
                "display_text": "Master Cert Selection- with No Expired policy  ( Example : 21-22 Master Cert)",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-Insured-Loss-Payee",
                "display_text": "Additional Insured/Loss Payee correctly actioned",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "proofs-of-insurance",
                "display_text": "Making Proofs for confirmation to Insured",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-content",
                "display_text": "EMAIL content",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-email-insured",
                "display_text": "Proofs (Attachments in the email)",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "documents",
                "display_text": "Documents",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "Insured-Language",
                "display_text": "Insured Language",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "email-attachment",
                "display_text": "Email Creation & Attachment",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "AM-Activity-Codes",
                "display_text": "Activity Codes (For Account Managers)",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
             
            },
            {
                "qkey": "activity-code-csr",
                "display_text": "Activity codes (For CSR) and attaching email",
                "serial_no": "13",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "15",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "18",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "19",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}



export const endorsements = {
    "elements": {
        "meta": {
            "headline": "Endorsements",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on Epic as per the email recevied from Carrier",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Checked correct endorsement detail, carrier and effective date",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-endorsement-information",
                "display_text": "Checked Endorsement discription in service summary with correct LOB",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "epic-endorsement-check",
                "display_text": "Changes done in Epic, checked with Endorsement",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "discrepancy-correct-action",
                "display_text": "If discrepancy occur : Checked its correctly actioned or not",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "language-correct-action",
                "display_text": "Language selection to email Insured, correctly actioned",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "endorsement-attachment",
                "display_text": "Endorsement attachment (No Invoice) correctly actioned",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-email-insured",
                "display_text": "Email released to Insured with correct email address",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-attachment-action",
                "display_text": "Email attachment correctly actioned with advised discription",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "endorsement-procedure-instructions",
                "display_text": "Any instructions regarding endorsement for the Insured and sticky notes checked",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "email-not-sent-insured",
                "display_text": "Email not send to Insured for Direct Bill",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "end3-activity",
                "display_text": "Checked END3 activity code ",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "18",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}



export const finance = {
    "elements": {
        "meta": {
            "headline": "Finance",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Added new receipt in Epic after correct system navigation",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "back-info-check",
                "display_text": "Added Bank A/C, Accounting Month & Effective date as advised",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-payment-information",
                "display_text": "Checked payment set with correct Insured name or Financing company ",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-payment-entries",
                "display_text": "Checked all payment entries correctly added",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-payment-ammount",
                "display_text": "Checked payment amount correctly actioned",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-discrepancy-occur",
                "display_text": "If discrepancy occur : Checked its correctly actioned or not",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "task-clouser-check",
                "display_text": "Task clouser correctly actioned",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-descriptions-check",
                "display_text": "Checked descriptions correctly stated",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "9",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "10",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}




export const policyChecking = {
    "elements": {
        "meta": {
            "headline": "Policy Checking",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on Epic as per the recevied data and select checklist",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Cross-Checked-Account",
                "display_text": "Cross Checked Account Tab",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-effective-date",
                "display_text": "Cross Checked Effective date",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "policies-premium-check",
                "display_text": "Policies and premium correctly actioned ",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-policy-coverage",
                "display_text": "Checked policy coverage and limits of Insurance",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-vehicle-driver-details",
                "display_text": "Checked Vehicle & Driver detail correctly actioned",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "additional-coverage-actioned",
                "display_text": "Additional coverage correctly actioned",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-discrepancy",
                "display_text": "If discrepancy occur : Checked its correctly actioned or not",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-closure-action",
                "display_text": "Email closure (No Invoice) correctly actioned",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "advised-email-attachment",
                "display_text": "Email attachment correctly actioned with advised discription",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "email-language-selection-insured",
                "display_text": "Language selection to email Insured, correctly actioned",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "disrepancy-email-check",
                "display_text": "If discrepancy occur : Attach the disrepancy email sent to AM",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "pol3-activity",
                "display_text": "Close POL 3 Activity after sending policy to the insured",
                "serial_no": "13",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "15",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "18",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "19",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}




export const tm_claim_dpo = {
    "elements": {
        "meta": {
            "headline": "Claim DPO",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the email recevied for Claim",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Capture correct Policy LOB and policy term as per DOL",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-claim-information",
                "display_text": "Claim#  and contact information (Adjustor & Date) correctly actioned",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "claim-creation-detail",
                "display_text": "Claim creation in AMS360 with briefied detail",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-correct-action",
                "display_text": "Activity creation correctly actioned",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "claim-email-correct-action",
                "display_text": "Claim Email Sent to Insured (Only For CL)",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "claim-suspense-actioned",
                "display_text": "Suspense creation correctly actioned (If not paid or closed)",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "update-claim-worksheet",
                "display_text": "Update claim in worksheet",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
           
            {
                "qkey": "correct-claim-description",
                "display_text": "Correct description of claim added in Activity",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "10",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "15",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}



export const tm_audit_form = {
    "elements": {
        "meta": {
            "headline": "Audit Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per received email",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Search Insured detail on respective website as per the email recevied from Carrier.",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-processed-ams",
                "display_text": "Processed in AMS (Depend upon the case)",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-payment-invoice",
                "display_text": "Check payment invoice for Agency Bill Only",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "eamil-correct-action",
                "display_text": "Email sent to insured.",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-correct-action",
                "display_text": "Activity created under correct Policy & Action",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-updated-closed",
                "display_text": "Suspense updated and closed",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-description-correct",
                "display_text": "In Activity description are correctly mentioned",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "9",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "10",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}


export const tm_notice_of_cancellation = {
    "elements": {
        "meta": {
            "headline": "Notice Of Cancellation",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured detail on respective website as per the email recevied from Carrier/IPFS",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-premium-details",
                "display_text": "Cross checked due premium or other reason and Cancellation effective date",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-procdeure-noc",
                "display_text": "Email procedure for NOC (Notice of cancellation) correctly actioned",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "policy-activity-creation",
                "display_text": "Activity created under correct Policy #",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-correct-action",
                "display_text": "Suspense creation correctly actioned",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-noc-sheet",
                "display_text": "Update the NOC sheet for non Payment policy",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "activity-description-correctly-mentioned",
                "display_text": "In Activity description are correctly mentioned",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
           

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "9",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_cancellation_form = {
    "elements": {
        "meta": {
            "headline": "CL Cancellation Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per received email",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Click on Policy and cancel Policy by selecting Transaction (For non Downloadable)",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-email-information",
                "display_text": "Sent email to the Policy Holder",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-policy-creation",
                "display_text": "Created activity under correct action & policy#",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-cancellation-google-sheet",
                "display_text": "Update the cancellation Google sheet",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "close-suspense",
                "display_text": "Close Suspense (If alerady created)",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
 

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}


export const tm_billing_form = {
    "elements": {
        "meta": {
            "headline": "Billing Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "suspense-open-policy",
                "display_text": "Open AMS and click for Suspense of current date and open Policy",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "check-carrier-payment",
                "display_text": "Check on Carrier site payment is received or not",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-activity-information",
                "display_text": "Create activity and attach required Documents if needed",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "payment-suspense-check",
                "display_text": "If Payment received complete suspense or If Payment not received (Email to insured if the account is not on ACH) move the suspense to onshore team ",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "descriptiom-correct-activity",
                "display_text": "Correct description added while creating Activity",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "update-no-payment-gsheet",
                "display_text": "If Payment received update the same in Google sheet, if not leave blank",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
 

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_activity_form = {
    "elements": {
        "meta": {
            "headline": "CL Activity Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "client-request-check",
                "display_text": "Request received from/sent to client",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "captured-ams-policies",
                "display_text": "Open AMS and search for Policy",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "checked-activity-information",
                "display_text": "Description are correctly mentioned in Activity",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "new-activity-policy-clicked",
                "display_text": "Click on New Activity and Select Policy#",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "select-email-action",
                "display_text": "Select Action, and attach email or document",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-creation",
                "display_text": "Create Suspense, if required and attached attachments",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
 

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_renewal_dp_form = {
    "elements": {
        "meta": {
            "headline": "Renewal DP Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS60 as per the recevied data and select correct policy LOB",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Checked Renewal policy is downloadable or Non-Downlodable in AMS",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-premium-information",
                "display_text": "Checked Premium, Payor and payment method in Carrier site from Declaration Page",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-premium-renewal-worksheet",
                "display_text": "Updated the Premiums on Renewal Worksheet",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "renew-ams-premium",
                "display_text": "Renew on AMS and add Premium if Non-Downlodable and other details",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-correct-action",
                "display_text": "Activity creation correctly actioned",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "claim-email-closure",
                "display_text": "Email closure correctly actioned",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-renewal-worksheet",
                "display_text": "Coloured the Renewal worksheet as per %",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
           
            {
                "qkey": "created-suspense-payor",
                "display_text": "Created Suspense as per Payor & payment method",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
   
            {
                "qkey": "correct-description-added",
                "display_text": "Correct description added in Activity",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "16",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_renwal_form_auto = {
    "elements": {
        "meta": {
            "headline": "Auto CL Renewal Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the email recevied for Detailing",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Check for Policy type and if Non download Policy check carrier site",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-policy-information",
                "display_text": "Update or make changes in Policy information",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "policy-contact-updation",
                "display_text": "Update or make changes in Policy contacts",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-commercial-location",
                "display_text": "Update or make changes in Commercial Location",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-coverage-changes",
                "display_text": "Update or make changes in Coverages",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-driver-information",
                "display_text": "Update or make changes in Driver Information",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-vehicle-information",
                "display_text": "Update or make changes in Vehicle Information",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-transaction-premium",
                "display_text": "Update or make changes in Transaction Premium (for Non Downloadable)",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-policy",
                "display_text": "Activity created under correct action (Policy)",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "update-loss-history",
                "display_text": "Update or make changes in Loss History",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "correct-activity-description",
                "display_text": "Correct description added in Activity",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "18",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_new_business_form_auto = {
    "elements": {
        "meta": {
            "headline": "Auto CL New Business Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the email recevied for Detailing",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Check for Policy type and if Non download Policy check carrier site",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-polcicy-info",
                "display_text": "Update or make changes in Policy information",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-policy-contacts",
                "display_text": "Update or make changes in Policy contacts",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-commercial-location",
                "display_text": "Update or make changes in Commercial Location",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-coverages",
                "display_text": "Update or make changes in Coverages",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-driver-info",
                "display_text": "Update or make changes in Driver Information",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-vehicle-info",
                "display_text": "Update or make changes in Vehicle Information",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-transaction-remium",
                "display_text": "Update or make changes in Transaction Premium (for Non Downloadable)",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation",
                "display_text": "Activity created under correct action (Policy)",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "update-loss-history",
                "display_text": "Update or make changes in Loss History",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "correct-activity-description",
                "display_text": "Correct description added in Activity",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "18",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}



export const tm_create_policy_from_submission_form =  {
    "elements": {
        "meta": {
            "headline": "Create Policy From Submission Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the email recevied for Policy Creation",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Check the submisison and created policy from Submission",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Update-Policy-Number",
                "display_text": "Update the Policy Number",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Update-Policy-Term",
                "display_text": "Update the Policy Term",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Update-Parent-Company",
                "display_text": "Update the Parent & Writing Company",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-premium",
                "display_text": "Update the Premium for Non Downloadable Carrier",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "auto-id-card",
                "display_text": "Auto ID Card",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "correct-policy-binder-insured",
                "display_text": "Policy/Binder  Activity / EOI (Evidence of Insurance)",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Unsigned-activity",
                "display_text": "Unsigned activity",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "signed-activity",
                "display_text": "Signed app activity / Suspense for Signed App",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "activity-for-dec",
                "display_text": "Dec Page activity / Suspense for Dec Page",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "billing-receipt-activity",
                "display_text": "Billing or Receipt Activity / Suspense for Billing",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "14",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "17",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "18",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}


export const tm_pl_activity_form = {
    "elements": {
        "meta": {
            "headline": "PL Activity Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Open AMS360 and Serach for the correct Insured.",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-wrt-document",
                "display_text": "Create Activity for the respective Document received in email.",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "document-attachment-wrt-action",
                "display_text": "Attach document with respective action.",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-creation",
                "display_text": "Create Suspense (if required).",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "description-correct-action",
                "display_text": "Correct Activity Description ",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
      

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "6",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "8",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_suspense_form = {
    "elements": {
        "meta": {
            "headline": "Suspense Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Open AMS360 and check for Suspense",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-changes",
                "display_text": "Check if required changes or update has been done or not",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-activity-docs",
                "display_text": "Activity Created, add documents. ",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-suspensee",
                "display_text": "Close the Suspense / Update Supense",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-3rd-attempt-check",
                "display_text": "Email to the stakeholder on Third attempt (For PL)",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "description-correct-action-activity",
                "display_text": "Correct description under activity",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}


export const tm_nb_prsopect_form_auto = {
    "elements": {
        "meta": {
            "headline": "Auto NB Prospect & Submission Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "request-received-client",
                "display_text": "Request received from client, open AMS360 to create",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "captured-correct-description",
                "display_text": "Correct description added in Activity",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "additional-customer-info-updated",
                "display_text": "Additional Customer Info tab updated",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "update-general-info",
                "display_text": "Updated General info., claims & contractors and Products General",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "update-loss-runs",
                "display_text": "Updated Loss Runs as 2 & No",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "add-new-customer-prospect",
                "display_text": "Adding New Customer by creating Prospect",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-contact-info",
                "display_text": "Update Contacts information",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "benefits-info-updated",
                "display_text": "Benefits Information tab updated",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-docs",
                "display_text": "Activity created and documents added",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "submission-created",
                "display_text": "Submission created",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "app-info-updation",
                "display_text": "Application info. & LOB are updated correctly",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "125-130-application-updated",
                "display_text": "Updated 125, 130 Application",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Commercial-Location-updation",
                "display_text": "Commercial Location updated",
                "serial_no": "13",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "coverage-updates",
                "display_text": "Coverages updated in Line of Business",
                "serial_no": "14",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "driver-info",
                "display_text": "Driver Informations",
                "serial_no": "15",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "vehicle-info",
                "display_text": "Vehicle Informations",
                "serial_no": "16",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-submission",
                "display_text": "Again create an Activity with submission Action",
                "serial_no": "17",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "create-save-acord-apps",
                "display_text": "Create and save Acord Apps.",
                "serial_no": "18",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-acord-apps",
                "display_text": "Activity are created for Acord apps.",
                "serial_no": "19",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "sales-tracker-sheet-updation",
                "display_text": "Sales Tracker sheet is updated",
                "serial_no": "20",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "21",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "22",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "23",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "24",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "25",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "26",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_endorsement_db_form= {
    "elements": {
        "meta": {
            "headline": "CL Endorsement DB",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "ams360-check-search",
                "display_text": "Search Insured on AMS360 as per the request received from client",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "download-endorsement-document",
                "display_text": "Download the Endorsement Document or Received Endorement Document by Email(Endorse or Detaill in AMS)",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-sent-to-Insured",
                "display_text": "Email sent to Insured",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-action",
                "display_text": "Created Activity under correct Action, Endorsement and emails Attached.",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-creation-updation",
                "display_text": "Suspense Updated and closed (If already created) / Suspense created if Auto download of transaction is not available under policy",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "updated-activity",
                "display_text": "Description updated in Activity",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "endorse-transaction",
                "display_text": "Endorse trans discription in AMS ",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "9",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_endorsement_ab_form= {
    "elements": {
        "meta": {
            "headline": "CL Endorsement AB",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "ams360-check-search",
                "display_text": "Search Insured on AMS360 as per the request received from client",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "download-endorsement-document",
                "display_text": "Download the Endorsement Document or Received Endorement Document by Email",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "email-sent-to-Insured",
                "display_text": "Email sent to Insured",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "invoice-check",
                "display_text": "Check invoicing done in AMS (Including Detailing) or not. (Only for Agency Bill)",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation",
                "display_text": "Created Activity under correct Action, Endorsement and emails Attached.",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-updation",
                "display_text": "Suspense Updated and closed (If already created) ",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "updated-description-activity",
                "display_text": "Updated description in activity",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "9",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_new_business_form = {
    "elements": {
        "meta": {
            "headline": "CL New Business Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the email recevied for Detailing",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Check for Policy type and if Non download Policy check carrier site",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-polcicy-info",
                "display_text": "Update or make changes in Policy information",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-policy-contacts",
                "display_text": "Update or make changes in Policy contacts",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-commercial-location",
                "display_text": "Update or make changes in Commercial Location",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
    
            {
                "qkey": "update-general-liability",
                "display_text": "Update or make changes in General Liability",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-transaction-premium",
                "display_text": "Update or make changes in Transaction Premium (for Non Downloadable)",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation",
                "display_text": "Activity created under correct action (Policy)",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "update-loss-history",
                "display_text": "Update or make changes in Loss History",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "correct-activity-description",
                "display_text": "Correct description added in Activity",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "16",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_renewal_review_form = {
    "elements": {
        "meta": {
            "headline": "CL Renewal Review Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic-ams360",
                "display_text": "Search Insured on AMS360 as per Renewal Review workSheet",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "ams360-detailing",
                "display_text": "Check the Detailing in AMS360",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "dec-page-download",
                "display_text": "Download the Dec Page from the AMS",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-suspensee",
                "display_text": "Close the Suspense / Update Supense",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-premium-to-zero",
                "display_text": "Updated all the premium to Zero",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "renewal-review-email",
                "display_text": "Sent Renewal Review Email to Insured with Document",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-email",
                "display_text": "Created Activity under correct Action and Email Attached",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "updated-renewal-review-sheet",
                "display_text": "Updated the Renewal Review worksheet",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "8",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "11",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_cl_renewal_form = {
    "elements": {
        "meta": {
            "headline": "CL Renewal Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the email recevied for Detailing",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "captured-correct-policies",
                "display_text": "Check for Policy type and if Non download Policy check carrier site",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "checked-policy-information",
                "display_text": "Update or make changes in Policy information",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "policy-contact-updation",
                "display_text": "Update or make changes in Policy contacts",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-commercial-location",
                "display_text": "Update or make changes in Commercial Location",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-general-liability",
                "display_text": "Update or make changes in  General Liability",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-schedule-of-hazard",
                "display_text": "Update or make changes in Schedule of Hazard",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "update-transaction-premium",
                "display_text": "Update or make changes in Transaction Premium (for Non Downloadable)",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-policy",
                "display_text": "Activity created under correct action (Policy)",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "update-loss-history",
                "display_text": "Update or make changes in Loss History",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "correct-activity-description",
                "display_text": "Correct description added in Activity",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "18",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_nb_prsopect_form = {
    "elements": {
        "meta": {
            "headline": "NB Prospect & Submission Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "request-received-client",
                "display_text": "Request received from client, open AMS360 to create",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "captured-correct-description",
                "display_text": "Correct description added in Activity",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "additional-customer-info-updated",
                "display_text": "Additional Customer Info tab updated",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "update-general-info",
                "display_text": "Updated General info., claims & contractors and Products General",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "update-loss-runs",
                "display_text": "Updated Loss Runs as 2 & No",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "add-new-customer-prospect",
                "display_text": "Adding New Customer by creating Prospect",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "update-contact-info",
                "display_text": "Update Contacts information",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "benefits-info-updated",
                "display_text": "Benefits Information tab updated",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-docs",
                "display_text": "Activity created and documents added",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "submission-created",
                "display_text": "Submission created",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "app-info-updation",
                "display_text": "Application info. & LOB are updated correctly",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "125-130-application-updated",
                "display_text": "Updated 125, 130 Application",
                "serial_no": "12",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Commercial-Location-updation",
                "display_text": "Commercial Location updated",
                "serial_no": "13",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "coverage-updates",
                "display_text": "Coverages updated in Line of Business",
                "serial_no": "14",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "hazard-updation",
                "display_text": "Schedule of Hazards updated with building details",
                "serial_no": "15",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-submission",
                "display_text": "Again create an Activity with submission Action",
                "serial_no": "16",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "create-save-acord-apps",
                "display_text": "Create and save Acord Apps.",
                "serial_no": "17",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-creation-acord-apps",
                "display_text": "Activity are created for Acord apps.",
                "serial_no": "18",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "sales-tracker-sheet-updation",
                "display_text": "Sales Tracker sheet is updated",
                "serial_no": "19",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "20",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "21",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "22",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "23",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "24",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "25",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_auto_quote_form = {
    "elements": {
        "meta": {
            "headline": "Auto Quote Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search for the Client / Add in Ezlynx or Carrier",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "first-insured-details",
                "display_text": "First Insured Details",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "second-insured-details",
                "display_text": "Second Insured Details (If Given)",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "new-carrier-details",
                "display_text": "New Business / Prior Carrier Details",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Drivers-Details",
                "display_text": "Drivers Details",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
    
            {
                "qkey": "vehicle-details",
                "display_text": "Vehicles Details",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "quote-limits",
                "display_text": "Quote Limits",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "file-download-agent",
                "display_text": "Download File & sent to Agent",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "carrier-questions",
                "display_text": "Carrier Questions (Ezlynx)",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "10",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "15",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_home_quote_form = {
    "elements": {
        "meta": {
            "headline": "Home Quote Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search for the Client / Add in Ezlynx or Carrier",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "first-insured-details",
                "display_text": "First Insured Details",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "second-insured-details",
                "display_text": "Second Insured Details (If Given)",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "new-carrier-details",
                "display_text": "New Business / Prior Carrier Details",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "Home-Details",
                "display_text": "Home Details",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
    
            {
                "qkey": "endorsement-details",
                "display_text": "Endorsement Details",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "quote-limits",
                "display_text": "Quote Limits",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "file-download-agent",
                "display_text": "Download File & sent to Agent",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },

            {
                "qkey": "carrier-questions",
                "display_text": "Carrier Questions (Ezlynx)",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "10",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "12",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "13",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "15",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}


export const tm_prospect_form = {
    "elements": {
        "meta": {
            "headline": "Prospect Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-epic",
                "display_text": "Search Insured on AMS360 as per the request received from client",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "client-info-sheet",
                "display_text": "Create Client info Sheet from Info received in email or Received Client Info sheet",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "customer-prospect",
                "display_text": "Adding New Customer by creating Prospect",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "shell-activity",
                "display_text": "Activity correctly created for Shell ",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "ploicy-submission",
                "display_text": "Submission for policy",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
    
            {
                "qkey": "actively-submission",
                "display_text": "Activity correctly created Submission",
                "serial_no": "6",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "clinet-info-sheet-attached",
                "display_text": "Client info Sheet attached in Activity",
                "serial_no": "7",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "sales-tracker-update",
                "display_text": "Updated in Sales Tracker",
                "serial_no": "8",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "update-customer-info",
                "display_text": "Update additional customer information",
                "serial_no": "9",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "update-contact-info",
                "display_text": "Update Contact Information",
                "serial_no": "10",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
         
            {
                "qkey": "update-dependent-info",
                "display_text": "Update Dependent information ",
                "serial_no": "11",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
  
           
            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "12",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "13",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "14",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "15",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "16",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "17",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_prospect_renewal_mide_term_form = {
    "elements": {
        "meta": {
            "headline": "Prospect Renewal & Mid Term Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-ams360",
                "display_text": "Search Insured on AMS360 as per the request received from client",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "submission-created",
                "display_text": "Submission Created",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "activity-submission",
                "display_text": "Activity for Submission",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "client-info-sheet",
                "display_text": "Create Client info Sheet",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "sales-tracker-updation",
                "display_text": "Updated in Sales Tracker (only for Mid Term Remarket)",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "6",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "8",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}

export const tm_reinstatement_form = {
    "elements": {
        "meta": {
            "headline": "Reinsatement Form",
            "completed_html": "<p><h1>Thanks so much for completing the Form! </h1></p><p><h4>Your Inputs will really help us get better</h4></p>"
            , "groupings": [{ "groupType": "matrix", "group": "g1" }, { "groupType": "panel", "group": "p1" }]
        },
        "questions": [
            {
                "qkey": "search-insured-ams360",
                "display_text": "Search Insured on AMS360 as per the request received from client",
                "serial_no": "1",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "sent_email-insured",
                "display_text": "Sent email to the Insured",
                "serial_no": "2",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "create-activity-attach-docs",
                "display_text": "Create Activity and attach documents",
                "serial_no": "3",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":true
                }
            },
            {
                "qkey": "suspense-transaction",
                "display_text": "Suspense for the Transaction under policy (Downloadable Policy after cancellation)",
                "serial_no": "4",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },
            {
                "qkey": "correct-description-activity",
                "display_text": "Correct description added in Activity",
                "serial_no": "5",
                "input_type": "radio-group",
                "options": ["Yes", "No", "Not Applicable"],
                "meta": {
                    "required": true,
                    "group": "g1",
                    "groupType": "matrix",
                    "isQualityMetric": true,
                    "critical":false
                }
            },

            {
                "qkey": "appreciation-comment",
                "display_text": "Pat on the back ( Appreciation):",
                "serial_no": "6",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "placeHolder": "Perfect, Good, Average etc.",
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
            {
                "qkey": "markdown-reason",
                "display_text": "Reason for markdown (write in details what went wrong & what is the correct process:",
                "serial_no": "7",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "comment",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2
                }
            },
           
            {
                "qkey": "error-type",
                "display_text": "Error Type",
                "serial_no": "8",
                "input_type": "dropdown",
                "choices": [
                    "Easy Step missed/ incorrectly processed",
                    "Medium Complexity step missed/incorrectly processed",
                    "Difficult step missed/incorrectly processed"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            },
            {
                "qkey": "real-time-correction",
                "display_text": "Can the error be corrected real time",
                "serial_no": "9",
                "input_type": "dropdown",
                "choices": [
                    "Error Corrected Real time",
                    "Error cannot be corrected real time"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "correction-user",
                "display_text": "Real Time correction done by Who",
                "serial_no": "10",
                "input_type": "dropdown",
                "choices": [
                   "QA","TL","ATL","Advisor","AM","Manager"
                ],
                "meta": {
                    "required": true,
                    "group": "p1",
                    "groupType": "panel",
                    "isQualityMetric": false,
                    "maxWidth": "50%",
                    "minWidth": "400px",
                }
            }
            ,
            {
                "qkey": "potential-savings",
                "display_text": "Potential Dollor saving due to error correction",
                "serial_no": "11",
                "input_type": "comment",
                "meta": {
                    "required": true,
                    "inputField": "text",
                    "group": "p1",
                    "groupType": "panel",
                    "maxWidth": "50%",
                    "minWidth": "400px",
                    "rows": 2

                }
            }

        ]
    }
}