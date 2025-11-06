import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template003 = ({ data, ...props }) => {

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
          <h1 className="text-[1.4em]/[1.1] font-bold tracking-tight">{data?data[0].data.FirstName:null} {data?data[0].data.LastName:null}</h1>
          <h3 className="text-[1em]/[1.1] font-semibold text-[#3b3b3b]">{data && data[0].data.Desired_Job_Title}</h3>
          <p className="text-[0.8em]/[1] text-[#4b4b4b]">{data && data[0].data.Address}</p>
          <a href={`mailto:${data && data[0].data.Email}`} className="text-[0.8em]/[1] text-blue-600 underline">{data && data[0].data.Email}</a>
          <p className="text-[0.8em]/[1]">{data && data[0].data.Phone}</p>
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
              {data?.[4]?.data?.summary}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="w-full ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Skills</h2>
            <ul className="text-[0.8em]/[1] text-[#1a1a1acc] mt-1 grid grid-cols-5 gap-1">
              {
                data && data[3].data.map((d, i) => {
                  return <li className="w-full whitespace-wrap"><span className="mr-2">•</span>{d.Skill}</li>
                })
              }
            </ul>
          </div>
        </div>



        {/* Work Experience */}
        <div className="flex items-start mb-2 relative pr-2">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Work Experience</h2>

            {data && data[1]?.data?.length > 0 ? (
              data[1].data.map((d, i) => (
                <div key={i} className="mt-1 pl-1 border-l-2 border-[#b2ebf2]">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[1em]/[1.1] font-serif">
                      {d.Job_Title}
                    </h3>
                    <p className="italic text-[0.8em]/[1.1] text-[#555]">
                      {d.Start_Date} - {d.End_Date}
                    </p>
                  </div>
                  <p className="italic text-[#1a1a1acc] text-[0.9em]/[1.1] mb-[2px]">
                    {d.Employer} - {d.Location}
                  </p>
                  <ul className="text-[#1a1a1acc] space-y-[2px] pl-1 text-[0.9em]">
                    {d.Description}
                  </ul>
                </div>
              ))
            ) : null}

          </div>
        </div>

        {/* Education */}
        <div className="flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Education</h2>
            <div className="flex flex-col gap-y-2 ">
            {
              data && data[2].data.map((d, i) => {
                return (
                  <div className="mt-1 pl-1 border-l-2 border-[#b2ebf2]">
                    <div className="flex justify-between items-center">
                      <h3 className="text-[1em] w-[75%] font-bold font-serif text-[#1a1a1a]">
                        {d.Degree}
                      </h3>
                      <p className="italic text-[#666] w-[20%] text-[0.7em]">{d.End_Date}</p>
                    </div>
                    <p className="text-[#1a1a1acc] text-[0.8em]/[1]">
                      {d.School_Name}
                    </p>
                    <p className="text-[0.7em]/[1]">
                      <span className="text-[#555]">Score: </span>
                      <span className="italic font-bold">95.4%</span>
                    </p>
                    <p className="pl-[2px] text-[0.9em]/[1]">{d.Description}</p>

                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
        {/* Languages */}
        <div className="w-full flex items-start mb-2 relative">
          <div className="absolute left-[1em] top-0 w-[1.5em] aspect-square rounded-full bg-[#00acc1] border-2 border-white shadow-md"></div>
          <div className="w-full ml-[3.5em]">
            <h2 className="font-semibold text-[#004c99] text-[1.1em]/[1] uppercase">Languages</h2>
            <ul className="w-full h-fit text-[0.8em]/[1] text-[#1a1a1acc] mt-1 gap-x-[5%] flex flex-row flex-wrap justify-start items-center">
              <li><span className="mr-2">•</span>Bengali</li>
              <li><span className="mr-2">•</span>English</li>
              <li><span className="mr-2">•</span>Hindi</li>
              <li><span className="mr-2">•</span>Japanese</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template003;
