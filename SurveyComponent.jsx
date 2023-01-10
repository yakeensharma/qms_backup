import React, { useEffect, useState } from "react";
import { Select } from 'antd';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { UserOutlined, AccountBookOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import "survey-core/defaultV2.css";
import "../index.css";
import "../styles.css";
import { json } from "../json";
import { claimElements } from "../elementsData"
import { getQualityQuestionCount, ParseElementsIntoForm } from "../parser"

StylesManager.applyTheme("defaultV2");
const childrenList = [];
function SurveyComponent({ input_json, title, transId, empId }) {
  const [survey, setMySurvey] = useState({});
  useEffect(() => {
    setMySurvey(new Model(ParseElementsIntoForm(input_json)));
  },[])

 
  const [qualityScore, setQualityScore] = useState(0);
  const [qualityTotalCount, setQualityTotalCount] = useState(getQualityQuestionCount(input_json));

  if(survey.onValueChanged){
 
  survey?.onValueChanged?.add(function (sender) {
    let curr_quality_count = qualityTotalCount;
    let curr_yes_count = 0;
    let quality_no_flag = 0;
    let qualityScore = 0;

    for(let item of Object.keys(sender.data?.g1)){
      if(item === "real-time-correction"){
        continue
      }
        if(sender.data.g1[item] === "No"){
          quality_no_flag = 1;
          break;
        }
        if(sender.data.g1[item] === "Not Applicable"){
          curr_quality_count--;
        }
        if(sender.data.g1[item] === "Yes"){
          curr_yes_count++;
        }

    }
    if(!quality_no_flag){
      setQualityScore(Math.round((curr_yes_count/curr_quality_count)*100) ? Math.round((curr_yes_count/curr_quality_count)*100): 0)
    }
    else{
      setQualityScore(0)
    }

  });
}

  return (
    <>

      <div className="background-radial-gradient" style={{ height: '70px' }}>
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Segoe UI",
            fontSize: "30"
          }}
        >
          <h1 className=" display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>{title}</h1>
        </div>

      </div>
      <div style={{ borderRadius: "25px", height: "60px", margin: "5px", borderStyle: "solid", padding: "10px", borderColor: "grey", borderWidth: "2px", textAlign: "center",display:'flex'}}>
        <Input disabled size="medium" placeholder={transId} prefix={<AccountBookOutlined />} style={{ marginRight: "40px",width:"300px" ,marginLeft:"170px"}} />
        <Input disabled size="medium" placeholder={empId} prefix={<UserOutlined />}  style={{width:"300px" }}/>
        <span style={{ marginLeft: "40px",marginTop:"8px" }}>Quality Score : {qualityScore} %</span>
      </div>

      {survey.onValueChanged ? <Survey id="surveyElement" model={survey} /> : <></>}
    </>)
}

export default SurveyComponent;
