export const json = {
    showQuestionNumbers: "off",
    completedHtml:
      "<p><h1>Thanks so much for completing the survey! </h1></p><p><h4>Your feedback will really help us get better</h4></p>",
    elements: [
      {
        type: "matrix",
        name: "matrix1",
        title: "",
        titleLocation: "hidden",
        columns: [
          {
            value: "Yes",
            text: "Yes"
          },
          {
            value: "No",
            text: "No"
          },
          {
            value: "Not Applicable",
            text: "Not Applicable"
          },
      
        ],
        rows: [
          {
            value: "1",
            text: "1. We receive monthly performance updates from Cogneesol."
          },
          {
            value: "2",
            text:
              "2. We observed improvement based on our feedback shared with Cogneesol team."
          },
          {
            value: "3",
            text:
              "3. Business Insights about our business processes are discussed with us by Cogneesol."
          },
          {
            value: "4",
            text:
              "4. Active discussions take place with Cogneesol in relation to Improvement opportunities for our business processes."
          },
          {
            value: "5",
            text:
              "5. We receive updated process SOP document ( Standard Operating Procedure ) consistently from Cogneesol team"
          },
          {
            value: "6",
            text:
              "6. We had active discussions with Cogneesol around Service Level Agreements and Key Performance Indicators."
          }
        ],
        alternateRows: true,
        isAllRowRequired: true
      }]
    }