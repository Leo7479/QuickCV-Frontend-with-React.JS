import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template001 = ({ data, ...props }) => {
  return (
    <div className={" min-w-[300px] min-h-[450px] bg-[#f6f8fb] text-[#1a1a1a] overflow-hidden " + props.className}>
      {/* HEADER */}
      <div className="w-full h-[20%] bg-gradient-to-r from-[#003973] to-[#E5E5BE] text-white px-4 py-2 flex flex-row justify-start items-center gap-6">
        {/* Profile Image */}
        <div className="relative h-full aspect-square bg-white rounded-full border-4 border-solid border-white overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.idntimes.com/content-images/post/20230222/sam-altman-eade70e38f1d7453722e37e7ab3e0efc.jpg"
            alt=""
          />
        </div>

        {/* Info */}
        <div className="w-fit h-full flex flex-col gap-y-[3%] max-w-[70%]">
          <h1 className="text-[1.4em]/[1.1] font-bold uppercase">
            {data && data[0].data.First_Name ? data[0].data.First_Name : "Alex"}{" "}
            {data && data[0].data.Last_Name ? data[0].data.Last_Name : "Williams"}
          </h1>
          <h3 className="text-[1em]/[1.1] font-semibold opacity-90 uppercase">
            {data && data[0].data.Desired_Job_Title
              ? data[0].data.Desired_Job_Title
              : "Accountant"}
          </h3>
          <p className="text-[0.8em]/[1] opacity-80 uppercase">
            {data && data[0].data.Address ? data[0].data.Address : "California, USA"}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-[2px] mt-[2px]">
            <a
              href={`mailto:${data && data[0].data.Email ? data[0].data.Email : "alex.williams@gmail.com"}`}
              className="text-[0.8em] text-blue-600 underline"
            >
              {data && data[0].data.Email ? data[0].data.Email : "alex.williams@gmail.com"}
            </a>
            <p className="text-[0.8em]">
              | {data && data[0].data.Phone ? data[0].data.Phone : "+91-9944994499"}
            </p>
          </div>
          <div className="flex gap-x-3 mt-1">
            <Link to="#" className="hover:text-yellow-300">
              <Linkedin className="w-[1em]" size="10px" />
            </Link>
            <Link to="#" className="hover:text-yellow-300">
              <Github className="w-[1em]" size="10px" />
            </Link>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="grid grid grid-cols-[32%_2%_64%] pt-2">
        {/* LEFT COLUMN */}
        <div className="col-span-1 flex flex-col px-2 md:px-4 gap-y-[8px]">
          {/* Summary */}
          <section>
            <h2 className="text-[1.1em]/[1] uppercase font-semibold border-b-[2px] border-[#003973] pb-1 mb-2 uppercase">
              Summary
            </h2>
            <p className="text-[0.8em] text-[#1a1a1acc] leading-[1.4em]">
              Senior Analyst with 5+ years of experience in data analysis, business intelligence,
              and process optimization. Skilled in driving operational efficiency, forecasting,
              and leading data-driven strategies to support business decisions and improvements.
              Strong communicator focused on results.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] pb-1 mb-2 uppercase">
              Skills
            </h2>
            <ul className="list-disc list-inside text-[0.9em]/[1] text-[#1a1a1acc] grid grid-cols-2 gap-y-1">
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
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] pb-1 mb-2 uppercase">
              Languages
            </h2>
            <ul className="list-disc list-inside text-[0.8em]/[1] text-[#1a1a1acc] space-y-[2px]">
              <li>Bengali</li>
              <li>English</li>
              <li>Hindi</li>
              <li>Japanese</li>
            </ul>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-2 flex flex-col gap-[8px] md:px-4">
          {/* Work Experience */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] pb-1 mb-2 uppercase">
              Work Experience
            </h2>

            <div className="flex flex-col gap-2">
              {/* Job 1 */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[1em]/[1.1] font-serif">
                    Senior Software Developer
                  </h3>
                  <p className="italic text-[0.8em]/[1.1] text-[#555]">Jul 2021 - Current</p>
                </div>
                <p className="italic text-[#1a1a1acc] text-[0.9em]/[1.1] mb-[2px]">
                  Loom & Lantern Co. - New York, NY
                </p>
                <ul className="list-disc list-inside text-[#1a1a1acc] space-y-[2px] pl-1">
                  <li>
                    Spearhead data analysis and reporting for key business functions, identifying
                    trends and providing insights to improve company performance and profitability.
                  </li>
                  <li>
                    Conduct in-depth market analysis and competitive benchmarking to inform strategic
                    decisions, resulting in a 15% increase in market share within one year.
                  </li>
                  <li>
                    Develop predictive models to forecast sales performance and customer behavior,
                    contributing to more accurate budgeting and resource allocation.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-[1.1em]/[1.1] font-serif">
                    Junior Software Developer
                  </h3>
                  <p className="italic text-[0.8em]/[1.1] text-[#555]">Jul 2018 - June 2021</p>
                </div>
                <p className="italic text-[#1a1a1acc] text-[0.9em]/[1.1] mb-[2px]">
                  Loom & Lantern Co. - New York, NY
                </p>
                <ul className="list-disc list-inside text-[#1a1a1acc] space-y-[2px] pl-1">
                  <li>
                    Analyzed and interpreted large datasets to identify business opportunities and
                    recommend process improvements, leading to a 20% reduction in operational costs.
                  </li>
                  <li>
                    Created detailed financial models and dashboards to track key performance
                    indicators (KPIs), enabling data-driven decision-making across departments.
                  </li>
                  <li>
                    Worked closely with project managers to monitor progress on major initiatives,
                    ensuring projects were delivered on time and within budget.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] mb-[4px] uppercase">
              Education
            </h2>

            <div className="flex flex-col gap-y-[4px]">
              <div className="flex flex-col gap-y-[2px]">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-[1em] font-serif">Higher Secondary</h3>
                  <p className="italic text-[0.9em]/[1] text-[#555]">2021</p>
                </div>
                <p className="text-[0.9em]/[1] text-[#1a1a1acc] pl-1">
                  Raiganj Coronation High School
                </p>
                <p className="text-[0.9em]/[1] pl-1">
                  <span className="text-[#555]">Score: </span>
                  <span className="font-bold italic">95.4%</span>
                </p>
              </div>

              <div className="flex flex-col gap-y-[2px]">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-[1em] font-serif">
                    Secondary (Matriculation)
                  </h3>
                  <p className="italic text-[0.9em]/[1] text-[#555]">2019</p>
                </div>
                <p className="text-[0.9em]/[1] text-[#1a1a1acc] pl-1">
                  Raiganj Coronation High School
                </p>
                <p className="text-[0.9em]/[1] pl-1">
                  <span className="text-[#555]">Score: </span>
                  <span className="font-bold italic">90%</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template001;
