import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Template001 = ({ data, ...props }) => {
  return (
    <div
      className={
        "min-w-[300px] min-h-[450px] bg-[#f6f8fb] text-[#1a1a1a] overflow-hidden " +
        (props?.className || "")
      }
    >
      {/* HEADER */}
      <div className="w-full h-[20%] bg-gradient-to-r from-[#003973] to-[#E5E5BE] text-white px-4 py-2 flex flex-row justify-start items-center gap-6">
        {/* Profile Image */}
        <div className="relative h-full aspect-square bg-white rounded-full border-4 border-solid border-white overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={
              data && data[0].data.Profile_Image
                ? data[0].data.Profile_Image
                : "https://static.wixstatic.com/media/983969_6676cbaa11f241ec8a9c2b1d8ea0d80f~mv2.png/v1/fill/w_731,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Man14.png"
            }
            alt=""
          />
        </div>

        {/* Info */}
        <div className="w-fit h-full flex flex-col gap-y-[3%] max-w-[70%]">
          <h1 className="text-[1.4em]/[1.1] font-bold uppercase">
            {data?.[0]?.data?.First_Name}{" "}
            {data?.[0]?.data?.Last_Name}
          </h1>
          <h3 className="text-[1em]/[1.1] font-semibold opacity-90 uppercase">
            {data?.[0]?.data?.Desired_Job_Title}
          </h3>
          <p className="text-[0.8em]/[1] opacity-80 uppercase">
            {data?.[0]?.data?.Address}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-[2px] mt-[2px]">
            <a
              href={`mailto:${data?.[0]?.data?.Email
                }`}
              className="text-[0.8em] text-blue-600 underline"
            >
              {data?.[0]?.data?.Email}
            </a>
            <p className="text-[0.8em]">
              | {data?.[0]?.data?.Phone}
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
      <div className="grid grid-cols-[32%_2%_64%] pt-2">
        {/* LEFT COLUMN */}
        <div className="col-span-1 flex flex-col px-2 md:px-4 gap-y-[8px]">
          {/* Summary */}
          <section>
            <h2 className="text-[1.1em]/[1] uppercase font-semibold border-b-[2px] border-[#003973] pb-1 mb-2">
              Summary
            </h2>
            <p className="text-[0.8em] text-[#1a1a1acc] leading-[1.4em]">
              {data?.[4]?.data?.summary}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] pb-1 mb-2 uppercase">
              Skills
            </h2>
            <ul className="text-[0.9em]/[1] text-[#1a1a1acc] grid grid-cols-2 gap-y-1">
              {data && data[3]?.data?.length > 0 ? (
                data[3].data.map((d, i) => (
                  <li key={i}>
                    <span className="mr-2">•</span>
                    {d.Skill}
                  </li>
                ))
              ) : null}
            </ul>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] pb-1 mb-2 uppercase">
              Languages
            </h2>
            <ul className="text-[0.8em]/[1] text-[#1a1a1acc] space-y-[2px]">
              <li>• Bengali</li>
              <li>• English</li>
              <li>• Hindi</li>
              <li>• Japanese</li>
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
              {data && data[1]?.data?.length > 0 ? (
                data[1].data.map((d, i) => (
                  <div key={i}>
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
          </section>

          {/* Education */}
          <section>
            <h2 className="text-[1.1em]/[1] font-semibold border-b-[2px] border-[#003973] mb-[4px] uppercase">
              Education
            </h2>

            <div className="flex flex-col gap-y-[4px]">
              {data && data[2]?.data?.length > 0 ? (
                data[2].data.map((d, i) => (
                  <div key={i} className="flex flex-col gap-y-[2px]">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-[1em] font-serif">
                        {d.Degree}
                      </h3>
                      <p className="italic text-[0.9em]/[1] text-[#555]">
                        {d.Start_Date} - {d.End_Date}
                      </p>
                    </div>
                    <p className="text-[0.9em]/[1] text-[#1a1a1acc] pl-1">
                      {d.School_Name}
                    </p>
                    <p className="text-[0.9em]/[1] pl-1">
                      <span className="text-[#555]">Score: </span>
                      <span className="font-bold italic">
                        {d.Score || "95.4%"}
                      </span>
                    </p>
                    <p className="text-[0.9em]/[1] pl-1">{d.Description}</p>
                  </div>
                ))
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Template001;
