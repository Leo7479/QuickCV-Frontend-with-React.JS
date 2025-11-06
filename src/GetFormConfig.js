const GetFormConfig = ()=>{
    const formConfig = [
        {
            name: "Contact",
            description: "Add your up-to-date contact information so employers and recruiters can easily reach you.",
            gridCols: 2,
            multiple: false, 
            fields: [
                { name: "First_Name",type: "text", required: true, placeholder: "Alex"},
                { name: "Last_Name", type: "text", required: false, placeholder: "Williams"},
                { name: "Desired_Job_Title", type: "text", required:true, placeholder: "eg: Accountant", className: "col-span-2"},
                { name: "Address", type: "text", required:false, placeholder: "California, USA, 012345", className: "col-span-2"},
                { name: "Phone", type: "tel", required:false, placeholder: "eg: 9999944444", pattern: "[0-9]{10}"},
                { name: "Email", type: "email", required:true, placeholder: "eg: alex.williams@gmail.com"}
            ]
        },
        {
            name: "Experience",
            description: "List your work experience starting with the most recent position first.",
            gridCols: 4,
            multiple: true,
            withHeading: true,
            fields: [
                { name: "Job_Title", type: "text", required: true, placeholder: "Junior Accountant", className: "col-span-2"},
                { name: "Employer", type: "text", required: false, placeholder: "Company Name", className: "col-span-2"},
                { name: "Location", type: "text", required: true, placeholder: "San Francisco, CA, USA", className: "col-span-2"},
                { name: "Start_Date", type: "month", required: false, placeholder: "MM/YYYY"},
                { name: "End_Date", type: "month", required: false, placeholder: "MM/YYYY"},
                { name: "Description", type: "text", required: false, placeholder: "Enter some description", className: "col-span-4"}
            ]
        },
        {
            name: "Education",
            description: "Add your education details - even if you haven’t graduated yet.",
            gridCols: 4,
            multiple: true,
            withHeading: true,
            fields: [
                { name: "School_Name", type: "text", required: false, placeholder: "UCLA", className: "col-span-2"},
                { name: "Location", type: "text", required: false, placeholder: "New York", className: "col-span-2"},
                { name: "Degree", type: "text", required: true, placeholder: "BA in Finance and Banking", className: "col-span-2"},
                { name: "Start_Date", type: "month", required: true, placeholder: "MM/YYYY"},
                { name: "End_Date", type: "month", required: true, placeholder: "MM/YYYY"},
                { name: "Description", type: "text", required: false, placeholder: "Enter some description", className: "col-span-4"}
            ]
        },
        {
            name: "Skills",
            description: "Add your most relevant professional skills.",
            gridCols: 1,
            multiple: true, 
            withHeading: false,
            fields: [
                { name: "Skill", type: "text", required: false, placeholder: "Mathematics"}
            ]
        },
        {
            name: "Summary",
            description: "Write a short introduction that highlights your experience, key skills, and career goals.",
            gridCols: 1,
            multiple: false,
            fields: [
                { name: "summary", type: "text", placeholder: "Type from scratch or select one of our recruiter-approved structure examples", className:"large-text"}
            ]
        },
        {
            name: "Finalize"
        }
    ];
    return formConfig
}
export default GetFormConfig;