import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const DefaultTemplate = ({ data, ...props }) => {
    return (
        <div className={`overflow-hidden min-w-[300px] min-h-[450px] ${props ? props.className : null}`}>
            <div className="relative w-full h-[20%] bg-[#cbdfec] flex py-2 px-4 justify-start items-center gap-x-4">
                <div className="relative h-full aspect-square bg-white rounded-full overflow-hidden shadow-md">
                    <img className="w-full h-full object-cover" src="https://static.wixstatic.com/media/983969_6676cbaa11f241ec8a9c2b1d8ea0d80f~mv2.png/v1/fill/w_731,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Man14.png" alt="" />
                </div>
                <div className="relative flex flex-col w-fit h-full gap-y-[5%] max-w-[70%] shrink-0">
                    <h1 className="text-[1.4em]/[1.1] font-bold uppercase">{data && data[0].data.First_Name ? data[0].data.First_Name : null} {data && data[0].data.Last_Name ? data[0].data.Last_Name : null}</h1>
                    <h3 className="text-[1em]/[1.1] font-semibold uppercase">{data && data[0].data.Desired_Job_Title ? data[0].data.Desired_Job_Title : null}</h3>
                    <p className="text-[0.8em]/[1] uppercase">{data && data[0].data.Address ? data[0].data.Address : null}</p>
                    <a href={`mailto:${data && data[0].data.Email}`} className="text-[0.8em] text-blue-600 underline">{data && data[0].data.Email ? data[0].data.Email : null}</a>
                    <p className="text-[0.8em]/[1]">{data && data[0].data.Phone ? data[0].data.Phone : null}</p>
                    <div className="flex justify-start items-center gap-x-2">
                        <Link to=""><Linkedin className="w-[1em]" size="10px" /></Link>
                        <Link to=""><Github className="w-[1em]" size="10px" /></Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-[80%] bg-white grid grid-cols-[32%_2%_64%] pt-2">
                <div className="flex flex-col justify-start items-start px-2 gap-y-[8px]">
                    <div className="flex flex-col gap-y-[4px]">
                        <h2 className="font-semibold underline text-[1.1em]/[1] uppercase">Summary</h2>
                        <p className="text-[0.8em] text-left text-[#1a1a1abf]">{data && data[4].data?.summary ? data[4].data.summary : null}</p>
                    </div>
                    <div className="flex flex-col gap-y-[4px]">
                        <h2 className="font-semibold underline text-[1.1em]/[1] uppercase">Skills</h2>
                        <ul className="flex flex-col gap-y-[2px] text-[#1a1a1abf]">
                            {
                                data && data[3].data.map((d, i) => {
                                    return <li><span className="mr-2">•</span>{d.Skill}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-y-[2px]">
                        <h2 className="text-[1.1em]/[1] font-semibold underline uppercase">Languages</h2>
                        <ul className="flex flex-col gap-y-[2px] text-[#1a1a1abf]">
                            <li><span className="mr-2">•</span>Bengali</li>
                            <li><span className="mr-2">•</span>English</li>
                            <li><span className="mr-2">•</span>Hindi</li>
                            <li><span className="mr-2">•</span>Japanese</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-start">
                    <div className="w-[1px] h-[95%] bg-black/40"></div>
                </div>
                <div className="pl-2 flex flex-col gap-y-[8px] w-full h-full">
                    <div className="w-full h-fit">
                        <h1 className="text-[1.1em]/[1] underline font-semibold uppercase mb-[5px]">Work Experience</h1>
                        <div className="flex flex-col justify-start items-start h-fit w-full gap-y-[6px] pl-[2px]">
                            {
                                data && data[1]?.data?.map((d, i) => {
                                    return (
                                        <div className="w-full h-fit">
                                            <div className="w-full flex flex-row justify-between items-start">
                                                <p className="font-bold text-[1em]/[1.1] font-serif">{d.Job_Title}</p>
                                                <p className="text-[0.8em] font-semibold text-[#1a1a1acc] italic">{d.Start_Date} - {d.End_Date}</p>
                                            </div>
                                            <p className="text-[0.9em]/[1.1] text-[#1a1a1afc] italic">{d.Employer} - {d.Location}</p>
                                            <div className="w-full h-fit mt-[2px]">
                                                <ul className="flex flex-col gap-y-[2px] text-[#1a1a1abf] pl-[2px] text-[0.9em]">
                                                    {d?.Description?.map((line,i)=>{
                                                        return <li><span className="mr-2">•</span>{line}</li>
                                                    })}
                                                </ul>
                                            </div>
                                        </div>)
                                })

                            }

                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <h1 className="text-[1.1em]/[1] underline font-semibold uppercase mb-[5px]">Education</h1>
                        <div className="w-full h-fit pl-[2px] flex flex-col gap-y-[4px]">
                            {
                                data && data[2].data.map((d, i) => {
                                    return (
                                        <div className="w-full h-fit flex flex-col gap-y-[2px]">
                                            <div className="flex justify-between items-center">
                                                <h1 className="text-[1em]/[1] font-bold font-serif">{d.Degree}</h1>
                                                <p className="italic text-[#1a1a1abf]">{d.Start_Date} - {d.End_Date}</p>
                                            </div>
                                            <h3 className="text-[#1a1a1abf] text-[0.9em]/[1.1] font-sans pl-[2px]">{d.School_Name}</h3>
                                            <p className="pl-[2px]"><span className="text-[#1a1a1abf] text-[0.9em]/[1.1]">Score:&nbsp;</span><span className="italic font-bold">95.4%</span></p>
                                            <p className="pl-[2px] text-[0.9em]/[1]">{d.Description}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default DefaultTemplate;