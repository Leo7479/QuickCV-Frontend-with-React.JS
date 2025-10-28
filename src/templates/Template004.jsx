import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template004 = (props) => {
  const firstName = props.firstName || "Shubhrajit";
  const lastName = props.lastName || "Sarkar";

  return (
    <div className="max-w-[900px] mx-auto bg-[#fefefe] text-[#1a1a1a] rounded-xl shadow-lg overflow-hidden font-sans min-w-[300px] min-h-[450px]">
      
      {/* ===== HEADER ===== */}
      <div className="flex flex-col sm:flex-row items-center bg-[#f0f4f8] p-8 gap-6">
        {/* Profile Picture */}
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-[#d0e7f9] shadow-md">
          <img
            src="https://static.wixstatic.com/media/983969_6676cbaa11f241ec8a9c2b1d8ea0d80f~mv2.png/v1/fill/w_731,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Man14.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name & Info */}
        <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight">{firstName} {lastName}</h1>
          <h3 className="text-lg font-semibold text-[#333]">Software Developer</h3>
          <p className="text-sm text-[#555]">Ukilpara, Raiganj, Uttar Dinajpur, 733134</p>
          <a href="mailto:shubhrajitsarkar123ss@gmail.com" className="text-sm text-blue-600 underline">shubhrajitsarkar123ss@gmail.com</a>
          <p className="text-sm">+91-7498975766</p>
          <div className="flex justify-center sm:justify-start items-center gap-3 mt-1">
            <Link to="#" className="text-[#0a66c2] hover:text-blue-700"><Linkedin size={18} /></Link>
            <Link to="#" className="text-[#333] hover:text-black"><Github size={18} /></Link>
          </div>
        </div>
      </div>

      {/* ===== SECTIONS ===== */}
      <div className="px-8 py-8 flex flex-col gap-6">
        {/* Summary */}
        <div className="bg-[#e6f7ff] p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#004c99] mb-2">Summary</h2>
          <p className="text-sm text-[#1a1a1acc] leading-[1.5em]">
            Senior Analyst with 5+ years of experience in data analysis, business intelligence, and process optimization. Skilled in driving operational efficiency, forecasting, and leading data-driven strategies to support business decisions and improvements.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-[#fff7e6] p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#cc6600] mb-2">Skills</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#1a1a1acc] list-disc list-inside">
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

        {/* Languages */}
        <div className="bg-[#f0f4f8] p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#004466] mb-2">Languages</h2>
          <ul className="text-sm text-[#1a1a1acc] list-disc list-inside space-y-1">
            <li>Bengali</li>
            <li>English</li>
            <li>Hindi</li>
            <li>Japanese</li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="bg-[#e6ffe6] p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#006600] mb-2">Work Experience</h2>

          {/* Job 1 */}
          <div className="mb-3">
            <h3 className="font-bold text-[#222]">Senior Software Developer</h3>
            <p className="italic text-sm text-[#666]">Jul 2021 - Current</p>
            <p className="italic text-sm text-[#1a1a1acc]">Loom & Lantern Co. - New York, NY</p>
            <ul className="text-sm text-[#1a1a1acc] list-disc list-inside mt-1 space-y-1">
              <li>Spearhead data analysis and reporting for key business functions.</li>
              <li>Conduct market analysis and competitive benchmarking to improve strategy.</li>
              <li>Develop predictive models to forecast sales performance and customer behavior.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div>
            <h3 className="font-bold text-[#222]">Junior Software Developer</h3>
            <p className="italic text-sm text-[#666]">Jul 2018 - June 2021</p>
            <p className="italic text-sm text-[#1a1a1acc]">Loom & Lantern Co. - New York, NY</p>
            <ul className="text-sm text-[#1a1a1acc] list-disc list-inside mt-1 space-y-1">
              <li>Analyzed large datasets to identify business opportunities.</li>
              <li>Created financial models and dashboards to track KPIs.</li>
              <li>Worked closely with project managers to deliver projects on time.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="bg-[#fff0f0] p-5 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-[#cc0000] mb-2">Education</h2>

          <div className="mb-3">
            <h3 className="font-bold text-[#222]">Higher Secondary</h3>
            <p className="italic text-sm text-[#666]">2021</p>
            <p className="text-sm text-[#1a1a1acc]">Raiganj Coronation High School</p>
            <p className="text-sm"><span className="italic font-bold">Score:</span> 95.4%</p>
          </div>

          <div>
            <h3 className="font-bold text-[#222]">Secondary (Matriculation)</h3>
            <p className="italic text-sm text-[#666]">2019</p>
            <p className="text-sm text-[#1a1a1acc]">Raiganj Coronation High School</p>
            <p className="text-sm"><span className="italic font-bold">Score:</span> 90%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template004;
