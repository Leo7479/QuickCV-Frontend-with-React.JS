import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template003 = (props) => {
  const firstName = props.firstName || "Shubhrajit";
  const lastName = props.lastName || "Sarkar";

  return (
    <div className={"relative min-w-[300px] min-h-[450px] bg-[#fcfcfc] text-[#1a1a1a] shadow-lg overflow-hidden font-sans " + props.className}>

      {/* ===== HEADER ===== */}
      <div className="relative w-full h-[20%] bg-[#e0f7fa] flex flex-col sm:flex-row items-center sm:items-start px-4 py-2 gap-2">
        {/* Profile Image */}
        <div className="relative h-full aspect-square rounded-full overflow-hidden border-2 border-[#b2ebf2] shadow-sm">
          <img
            src="https://static.wixstatic.com/media/983969_6676cbaa11f241ec8a9c2b1d8ea0d80f~mv2.png/v1/fill/w_731,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Man14.png"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name & Info */}
        <div className="flex flex-col w-fit h-full text-left gap-y-[2%]">
          <h1 className="text-[1.4em]/[1.1] font-bold tracking-tight">{firstName} {lastName}</h1>
          <h3 className="text-[1em]/[1.1] font-semibold text-[#3b3b3b]">Software Developer</h3>
          <p className="text-[0.8em]/[1] text-[#4b4b4b]">Ukilpara, Raiganj, Uttar Dinajpur, 733134</p>
          <a href="mailto:shubhrajitsarkar123ss@gmail.com" className="text-[0.8em]/[1] text-blue-600 underline">shubhrajitsarkar123ss@gmail.com</a>
          <p className="text-[0.8em]/[1]">+91-7498975766</p>
          <div className="flex justify-center sm:justify-start items-center gap-3 mt-1">
            <Link to="#" className="text-[#0a66c2] hover:text-blue-700"><Linkedin className="w-[1em]" size="10px" /></Link>
            <Link to="#" className="text-[#333] hover:text-black"><Github className="w-[1em]" size="10px" /></Link>
          </div>
        </div>
      </div>

      {/* ===== TIMELINE SECTIONS ===== */}
      <div className="px-0 py-2 relative w-full h-[80%]">
        {/* Vertical Line */}
        <div className="absolute left-[1.75em] top-0 bottom-0 w-[2px] bg-[#b2ebf2] -translate-x-[50%]"></div>

        {/* Timeline Item */}
        <div className="w-full h-fit flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Summary</h2>
            <p className="text-[0.8em]/[1] text-[#1a1a1acc]">
              Senior Analyst with 5+ years of experience in data analysis, business intelligence, and process optimization. Skilled in driving operational efficiency, forecasting, and leading data-driven strategies to support business decisions and improvements.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="w-full ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Skills</h2>
            <ul className="text-[0.8em]/[1] text-[#1a1a1acc] mt-1 grid grid-cols-5 gap-1">
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>Spring</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>



        {/* Work Experience */}
        <div className="flex items-start mb-2 relative pr-2">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Work Experience</h2>

            {/* Job 1 */}
            <div className="mt-1 pl-1 border-l-2 border-[#b2ebf2]">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-bold text-[#222] text-[1em] flex justify-center items-center">Senior Software Developer</h3>
                <p className="italic text-[0.7em]/[1] text-[#666] flex justify-center items-center">Jul 2021 - Current</p>
              </div>
              <p className="italic text-[0.8em] text-black">Loom & Lantern Co. - New York, NY</p>
              <ul className="text-[1em]/[1] text-[#1a1a1acc] list-disc list-inside mt-1 space-y-[2px] pl-1">
                <li>Spearhead data analysis and reporting for key business functions, identifying trends and providing insights to improve company performance and profitability.</li>
                <li>Conduct in-depth market analysis and competitive benchmarking to inform strategic decisions, resulting in a 15% increase in market share within one year.</li>
                <li>Develop predictive models to forecast sales performance and customer behavior, contributing to more accurate budgeting and resource allocation.</li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="mt-1 pl-1 border-l-2 border-[#b2ebf2]">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-[#222] text-[1em] flex justify-center items-center">Junior Software Developer</h3>
                <p className="italic text-[0.7em]/[1] text-[#666] flex justify-center items-center">Jul 2018 - June 2021</p>
              </div>
              <p className="italic text-[0.8em]/[1] text-black">Loom & Lantern Co. - New York, NY</p>
              <ul className="text-[1em]/[1] text-[#1a1a1acc] list-disc list-inside mt-1 space-y-[2px] pl-1">
                <li>Analyzed and interpreted large datasets to identify business opportunities and recommend process improvements, leading to a 20% reduction in operational costs.</li>
                <li>Created detailed financial models and dashboards to track key performance indicators (KPIs), enabling data-driven decision-making across departments.</li>
                <li>Worked closely with project managers to monitor progress on major initiatives, ensuring projects were delivered on time and within budget.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Education</h2>

            <div className="mt-1 pl-1 border-l-2 border-[#b2ebf2]">
              <h3 className="text-[1em] font-bold font-serif">Higher Secondary</h3>
              <p className="italic text-[0.8em]/[1] text-[#666]">2021</p>
              <p className="text-[0.8em]/[1] text-[#1a1a1acc]">Raiganj Coronation High School</p>
              <p className="text-[0.8em]/[1]"><span className="italic font-bold">Score:</span> 95.4%</p>
            </div>

            <div className="mt-1 pl-1 border-l-2 border-[#b2ebf2]">
              <h3 className="text-[1em] font-bold font-serif">Secondary (Matriculation)</h3>
              <p className="italic text-[0.8em]/[1] text-[#666]">2019</p>
              <p className="text-[0.8em]/[1] text-[#1a1a1acc]">Raiganj Coronation High School</p>
              <p className="text-[0.8em]/[1]"><span className="italic font-bold">Score:</span> 90%</p>
            </div>
          </div>
        </div>
        {/* Languages */}
        <div className="w-full flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="w-full ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Languages</h2>
            <ul className="w-full h-fit text-[0.8em]/[1] text-[#1a1a1acc] mt-1 gap-x-[5%] flex flex-row flex-wrap justify-start items-center">
              <li>Bengali</li>
              <li>English</li>
              <li>Hindi</li>
              <li>Japanese</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template003;
