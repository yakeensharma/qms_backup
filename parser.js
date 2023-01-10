import { basic_json } from "./basicJsonStruct";

export const ParseElementsIntoForm = (data) => {

    let aggJson = basic_json;

    let questions = data.elements.questions;
    let topLevelMeta = data.elements.meta
    let section = { sectionId: 0, done: false };
    let check_groupings = 0;
    let groupObj = {}
    if (topLevelMeta.groupings.length > 0) {
        check_groupings = topLevelMeta.groupings.length;
        for (let i of topLevelMeta.groupings) {
            groupObj[i["group"]] = -1;

        }
    }
    for (let i = 0; i < questions.length; i++) {

        if (questions[i].meta.group !== undefined && groupObj[questions[i].meta.group] === -1) {
            if (questions[i].meta.groupType === "matrix") {
                groupObj[questions[i].meta.group] = aggJson.elements.length;
                aggJson.elements.push({
                    type: questions[i].meta.groupType,
                    name: questions[i].meta.group,
                    titleLocation: "hidden",
                    columns: questions[i].options.map((item) => { return ({ value: item, text: item }) }),
                    rows: [{ value: String(questions[i].qkey), text: questions[i].serial_no + ". " + questions[i].display_text }],
                    alternateRows: true,
                    isAllRowRequired: questions[i].meta.required
                })
            }
            if (questions[i].meta.groupType === "panel") {
                groupObj[questions[i].meta.group] = aggJson.elements.length;
                aggJson.elements.push({
                    type: questions[i].meta.groupType,
                    name: questions[i].meta.group,
                    elements: [{
                        type: questions[i].meta.inputField || questions[i].input_type,
                        name: questions[i].qkey,
                        title: questions[i].serial_no + ". " + questions[i].display_text,
                        isRequired: questions[i].meta.required,
                        startWithNewLine: true,
                        maxWidth: questions[i].meta.maxWidth,
                        minWidth:questions[i].meta.minWidth,
                        rows:questions[i].meta.rows,
                        choices:questions[i].choices,

                    }]
                })
            }
            continue
        }
        if (questions[i].meta.group !== undefined && groupObj[questions[i].meta.group] !== -1) {
            if (questions[i].meta.groupType === "matrix") {
                aggJson.elements[groupObj[questions[i].meta.group]].rows.push({ value: String(questions[i].qkey), text: questions[i].serial_no + ". " + questions[i].display_text })
            }
            if (questions[i].meta.groupType === "panel") {

                aggJson.elements[groupObj[questions[i].meta.group]].elements.push(
                    {
                        type: questions[i].meta.inputField || questions[i].input_type,
                        name: questions[i].qkey,
                        title: questions[i].serial_no + ". " + questions[i].display_text,
                        isRequired: questions[i].meta.required,
                        startWithNewLine: true,
                        maxWidth: questions[i].meta.maxWidth,
                        minWidth:questions[i].meta.minWidth,
                        rows:questions[i].meta.rows,
                        choices:questions[i].choices,
    
                    }
                )
            }
        }
        if (questions[i].meta.group === undefined) {
            aggJson.elements.push(
                {
                    type: questions[i].meta.inputField,
                    name: questions[i].qkey,
                    title: questions[i].serial_no + ". " + questions[i].display_text,
                    isRequired: questions[i].meta.required,
                    startWithNewLine: true,
                    maxWidth: "50%",
                    minWidth: "400px",
                    rows:2

                })

        }


    }
    console.log(aggJson)
    return aggJson
}



export const getQualityQuestionCount = (data) => {
    let qualityCount = 0
    let questions = data.elements.questions;
    for (let i = 0; i < questions.length; i++) {
        if(questions[i].meta.isQualityMetric){
            qualityCount++;
        }  
    }
    return qualityCount;
}