import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template002 = ({ data, ...props }) => {

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
            {data?.[0]?.data?.First_Name}{" "}
            {data?.[0]?.data?.Last_Name}
          </h1>
          <h3 className="text-[1em]/[1.1] font-semibold text-[#3b3b3b]">
            {data?.[0]?.data?.Desired_Job_Title}
          </h3>
          <p className="text-[0.8]/[1] text-[#4b4b4b]">
            {data?.[0]?.data?.Address}
          </p>
          <a
            href={`mailto:${data?.[0]?.data?.Email
              }`}
            className="text-[0.8em]/[1] text-blue-600 underline"
          >
            {data?.[0]?.data?.Email}
          </a>
          <p className="text-[0.8em]/[1]">
            | {data?.[0]?.data?.Phone}</p>

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
          {data?.[4]?.data?.summary}
        </p>
      </div>

      <div className="grid grid-cols-[60%_40%]">
        {/* ===== EXPERIENCE SECTION ===== */}
        <div className="w-full bg-[#f9fbfd] px-2 py-[2px] flex flex-col gap-y-[4px]">
          <h2 className="uppercase text-[1.1em] font-semibold text-[#004c99] text-center">
            Work Experience
          </h2>
          <div className="flex flex-col gap-[4px] mx-auto">
            {data && data[1]?.data?.length > 0 ? (
              data[1].data.map((d, i) => (
                <div key={i} className="bg-white rounded-md shadow-sm px-[4px] py-[2px] border border-[#e5e7eb]">
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
                  <ul className=" text-[#1a1a1acc] space-y-[2px] pl-1 text-[0.9em]">
                    {d.Description}
                  </ul>
                </div>
              ))
            ) : null}
          </div>
        </div>

        <div className="w-full bg-[#e8f0ff] py-[2px] px-[2px]">
          <div>
            <h2 className="uppercase text-[1.1em] font-semibold text-[#004c99] mb-[4px] text-center">
              Education
            </h2>
            <div className="mx-auto flex flex-col gap-[4px]">
              {
                data && data[2].data.map((d, i) => {
                  return (
                    <div className="bg-white rounded-lg shadow-sm p-[4px] border border-[#dce7ff]">
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
          {/* ===== SKILLS + LANGUAGES ===== */}
          <div className="w-full  py-[2px] grid grid-cols-1 gap-2 border-y border-[#e5e7eb]">
            {/* Skills */}
            <div className="flex flex-col gap-y-[4px] bg-[#ffffff] rounded-lg p-[4px]">
              <h2 className="uppercase text-[1.1em] font-semibold text-[#004c99] text-center">
                Skills
              </h2>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-[2px] text-[0.9em][1] text-[#1a1a1acc]">
                {
                  data && data[3].data.map((d, i) => {
                    return <li className="w-full whitespace-wrap"><span className="mr-2">•</span>{d.Skill}</li>
                  })
                }
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
