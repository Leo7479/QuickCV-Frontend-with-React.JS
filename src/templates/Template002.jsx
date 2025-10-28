import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template002 = (props) => {
  const firstName = props.firstName || "Shubhrajit";
  const lastName = props.lastName || "Sarkar";

  return (
    <div
      className={
        "bg-[#f9fafc] text-[#1a1a1a] shadow-md overflow-hidden font-sans min-w-[300px] min-h-[450px] " +
        props.className
      }
    >
      {/* ===== HEADER ===== */}
      <div className="w-full h-[20%] bg-[#e4f1ff] text-[#1a1a1a] px-8 py-2 flex justify-start items-center gap-6">
        {/* Image */}
        <div className="h-full aspect-square rounded-full overflow-hidden border-[3px] border-[#d0e7ff] shadow-sm">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.tmmxsctQdTCbVCX4LGDIuQHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col h-full text-left gap-y-[2%]">
          <h1 className="text-[1.4em]/[1.1] font-bold tracking-tight">
            {firstName} {lastName}
          </h1>
          <h3 className="text-[1em]/[1.1] font-semibold text-[#3b3b3b]">
            Software Developer
          </h3>
          <p className="text-[0.8]/[1] text-[#4b4b4b]">
            Ukilpara, Raiganj, Uttar Dinajpur, 733134
          </p>
          <a
            href="mailto:shubhrajitsarkar123ss@gmail.com"
            className="text-[0.8em]/[1] text-blue-600 underline"
          >
            shubhrajitsarkar123ss@gmail.com
          </a>
          <p className="text-[0.8em]/[1]">+91-7498975766</p>

          <div className="flex justify-center sm:justify-start items-center gap-3">
            <Link to="#" className="text-[#0a66c2] hover:text-blue-700">
              <Linkedin className="w-[1em]" size={18} />
            </Link>
            <Link to="#" className="text-[#333] hover:text-black">
              <Github className="w-[1em]" size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== SUMMARY SECTION ===== */}
      <div className="w-full bg-[#f5faff] text-center h-[14%] flex flex-col justify-center items-center">
        <h2 className="uppercase text-[1.1em]/[1] font-semibold text-[#004c99] mb-[4px]">
          Summary
        </h2>
        <p className="text-[0.9em]/[1] text-[#1a1a1acc] max-w-[800px] mx-auto px-4 pb-2">
          Senior Analyst with 5+ years of experience in data analysis, business
          intelligence, and process optimization. Skilled in driving operational
          efficiency, forecasting, and leading data-driven strategies to support
          business decisions and improvements. Strong communicator focused on
          results.
        </p>
      </div>

      <div className="grid grid-cols-[65%_32%]">
        {/* ===== EXPERIENCE SECTION ===== */}
        <div className="w-full bg-[#f9fbfd] px-2 py-[2px] flex flex-col gap-y-[4px]">
          <h2 className="uppercase text-[1.1em] font-semibold text-[#004c99] text-center">
            Work Experience
          </h2>
          <div className="flex flex-col gap-[4px] mx-auto">
            {/* Job 1 */}
            <div className="bg-white rounded-md shadow-sm px-[4px] py-[2px] border border-[#e5e7eb]">
              <div className="flex justify-between items-start flex-wrap">
                <h3 className="font-bold text-[1.1em]/[1.1] font-serif text-[#222]">
                  Senior Software Developer
                </h3>
                <p className="italic text-[0.8em]/[1] text-[#666]">Jul 2021 - Current</p>
              </div>
              <p className="italic text-[#1a1a1acc] text-[0.9em]/[1] mb-[2px]">
                Loom & Lantern Co. - New York, NY
              </p>
              <ul className="list-disc list-inside text-[1em]/[1] text-[#1a1a1acc] space-y-[2px]">
                <li><span className="mr-2">•</span>
                  Spearhead data analysis and reporting for key business
                  functions, identifying trends and providing insights to improve
                  company performance and profitability.
                </li>
                <li><span className="mr-2">•</span>
                  Conduct in-depth market analysis and competitive benchmarking to
                  inform strategic decisions, resulting in a 15% increase in
                  market share within one year.
                </li>
                <li><span className="mr-2">•</span>
                  Develop predictive models to forecast sales performance and
                  customer behavior, contributing to more accurate budgeting and
                  resource allocation.
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="bg-white rounded-md shadow-sm px-[4px] py-[2px] border border-[#e5e7eb]">
              <div className="flex justify-between items-start flex-wrap">
                <h3 className="font-bold text-[1em]/[1.1] font-serif text-[#222]">
                  Junior Software Developer
                </h3>
                <p className="italic text-[0.8em]/[1] text-[#666]">Jul 2018 - June 2021</p>
              </div>
              <p className="italic text-[#1a1a1acc] text-[0.8em]/[1] mb-[2px]">
                Loom & Lantern Co. - New York, NY
              </p>
              <ul className="list-disc list-inside text-[1em]/[1] text-[#1a1a1acc] space-y-[2px]">
                <li><span className="mr-2">•</span>
                  Analyzed and interpreted large datasets to identify business
                  opportunities and recommend process improvements, leading to a
                  20% reduction in operational costs.
                </li>
                <li><span className="mr-2">•</span>
                  Created detailed financial models and dashboards to track key
                  performance indicators (KPIs), enabling data-driven
                  decision-making across departments.
                </li>
                <li><span className="mr-2">•</span>
                  Worked closely with project managers to monitor progress on
                  major initiatives, ensuring projects were delivered on time and
                  within budget.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== EDUCATION SECTION ===== */}
        <div className="w-full bg-[#e8f0ff] py-[2px] px-[2px]">
          <div>
            <h2 className="uppercase text-[1.1em] font-semibold text-[#004c99] mb-[4px] text-center">
              Education
            </h2>
            <div className="mx-auto flex flex-col gap-[4px]">
              <div className="bg-white rounded-lg shadow-sm p-[4px] border border-[#dce7ff]">
                <div className="flex justify-between items-center">
                  <h3 className="text-[1em] w-[75%] font-bold font-serif text-[#1a1a1a]">
                    Higher Secondary
                  </h3>
                  <p className="italic text-[#666] w-[20%] text-[0.7em]">2021</p>
                </div>
                <p className="text-[#1a1a1acc] text-[0.8em]/[1]">
                  Raiganj Coronation High School
                </p>
                <p className="text-[0.7em]/[1]">
                  <span className="text-[#555]">Score: </span>
                  <span className="italic font-bold">95.4%</span>
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-[4px] border border-[#dce7ff]">
                <div className="flex justify-between items-center">
                  <h3 className="text-[1em] w-[75%] font-bold font-serif text-[#1a1a1a]">
                    Intermediate (Matriculation)
                  </h3>
                  <p className="italic text-[#666] w-[20%] text-[0.7em]">2019</p>
                </div>
                <p className="text-[#1a1a1acc] text-[0.8em]/[1]">
                  Raiganj Coronation High School
                </p>
                <p className="text-[0.7em]/[1]">
                  <span className="text-[#555]">Score: </span>
                  <span className="italic font-bold">90%</span>
                </p>
              </div>
            </div>
          </div>
          {/* ===== SKILLS + LANGUAGES ===== */}
          <div className="w-full  py-[2px] grid grid-cols-1 gap-2 border-y border-[#e5e7eb]">
            {/* Skills */}
            <div className="flex flex-col gap-y-[4px] bg-[#ffffff] rounded-lg p-[4px]">
              <h2 className="uppercase text-[1.1em] font-semibold text-[#004c99] text-center">
                Skills
              </h2>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-[2px] text-[0.9em][1] text-[#1a1a1acc]">
                <li><span className="mr-2">•</span>Java</li>
                <li><span className="mr-2">•</span>Python</li>
                <li><span className="mr-2">•</span>C++</li>
                <li><span className="mr-2">•</span>Spring</li>
                <li><span className="mr-2">•</span>ReactJS</li>
                <li><span className="mr-2">•</span>HTML</li>
                <li><span className="mr-2">•</span>CSS</li>
                <li><span className="mr-2">•</span>JavaScript</li>
                <li><span className="mr-2">•</span>Node.js</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-y-[4px] bg-[#ffffff] rounded-lg p-[4px]">
              <h2 className="uppercase text-[1.1em]/[1] font-semibold text-[#004c99] mb-[4px] text-center">
                Languages
              </h2>
              <ul className="flex flex-col text-[0.9em]/[1] text-[#1a1a1acc] space-y-[2px]">
                <li><span className="mr-2">•</span>Bengali</li>
                <li><span className="mr-2">•</span>English</li>
                <li><span className="mr-2">•</span>Hindi</li>
                <li><span className="mr-2">•</span>Japanese</li>
              </ul>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Template002;
