const DefaultTemplateConfig = () => {
    const output = [
        {
            "name": "Contact",
            "data": {
                "First_Name": "Shubhrajit",
                "Last_Name": "Sarkar",
                "Desired_Job_Title": "Super Mario Senior software developer",
                "Address": "New Town Kolkata",
                "Phone": "7479199661",
                "Email": "shubhrajit.sarkar@codeclouds.co.in"
            }
        },
        {
            "name": "Experience",
            "entries": {
                "$numberInt": "2"
            },
            "data": [
                {
                    "Job_Title": "Senior Software Developer",
                    "Employer": "Loom & Lantern Co.",
                    "Location": "New York, NY",
                    "Start_Date": "2025-01",
                    "End_Date": "2025-03",
                    "Description": 
                        ["Spearhead data analysis and reporting for key business functions, identifying trends and providing insights to improve company performance and profitability.", "Conduct in-depth market analysis and competitive benchmarking to inform strategic decisions, resulting in a 15% increase in market share within one year." ,"Develop predictive models to forecast sales performance and customer behavior, contributing to more accurate budgeting and resource allocation."]
                    
                },
                {
                    "Job_Title": "Junior Software Developer",
                    "Employer": "Codeclouds",
                    "Location": "Australia",
                    "Start_Date": "2025-05",
                    "End_Date": "2025-10",
                    "Description": 
                        ["Analyzed and interpreted large datasets to identify business opportunities and recommend process improvements, leading to a 20% reduction in operational costs.", "Created detailed financial models and dashboards to track key performance indicators (KPIs), enabling data-driven decision-making across departments.", "Worked closely with project managers to monitor progress on major initiatives, ensuring projects were delivered on time and within budget."]
                    
                }
            ]
        },
        {
            "name": "Education",
            "entries": {
                "$numberInt": "2"
            },
            "data": [
                {
                    "Description": "holaaaa Amigooo",
                    "School_Name": "MCKVIE",
                    "Degree": "Computer Science and Engineering",
                    "Location": "Howrah",
                    "Start_Date": "2025-01",
                    "End_Date": "2025-01"
                },
                {
                    "School_Name": "Luluuuu",
                    "Location": "Lolaaa",
                    "Degree": "Higher Secondary",
                    "Start_Date": "2025-02",
                    "End_Date": "2025-02",
                    "Description": "Real Website:"
                }
            ]
        },
        {
            "name": "Skills",
            "entries": {
                "$numberInt": "2"
            },
            "data": [
                {
                    "Skill": "Java"
                },
                {
                    "Skill": "Python"
                },
                {
                    "Skill": "C"
                },
                {
                    "Skill": "C++"
                },
                {
                    "Skill": "Node.JS"
                },
                {
                    "Skill": "ReactJS"
                },
                {
                    "Skill": "MongoDB"
                },
                {
                    "Skill": "ExpressJS"
                },
                {
                    "Skill": "HTML"
                },
                {
                    "Skill": "CSS"
                },
                {
                    "Skill": "JavaScript"
                }
            ]
        },
        {
            "name": "Summary",
            "data": {
                "summary": "Senior Analyst with 5+ years of experience in data analysis, business intelligence, and process optimization. Skilled in driving operational efficiency, forecasting, and leading data-driven strategies to support business decisions and improvements."
            }
        },
        {
            "name": "Finalize"
        }
    ];
    return output;
}

export default DefaultTemplateConfig;