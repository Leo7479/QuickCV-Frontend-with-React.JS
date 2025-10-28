const Footer = ()=>{
    return(
        <footer className="w-full h-fit bg-dark py-20 mt-20">
            <div className="py-4 px-2 w-full h-fit flex flex-col md:flex-row text-aliceBlue justify-start md:justify-around items-start">
                <div className="w-[25%] h-full flex flex-col items-start justify-start">
                    <div className="flex">
                    <img src="./logo.png" alt=""/>
                    <h1 className="font-semibold text-2xl text-white">QuickCV</h1>
                    </div>
                    <p className="text-lg">We help job seekers stand out in the highly competitive labor market with BetterCV!</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl text-white mb-4">Resources</h1>
                    <ul className="text-lg">
                        <li className="hover:underline cursor-pointer text-aliceBlue">Resume Builder</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Resume Writing</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Resume Formatting</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Resume Writing Guide</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Professional Resume</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Entry-level Resume</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Student Resume</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-2xl text-white mb-4">Support</h1>
                    <ul className="text-lg">
                        <li className="hover:underline cursor-pointer text-aliceBlue">Privacy Policy</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Cookie Policy</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Terms and Conditions</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Subscription Terms</li>
                        <li className="hover:underline cursor-pointer text-aliceBlue">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <div>&copy; All rights are preserved by Shubhrajit Sarkar. Made with Love.</div>
                    <div>Design Credits: <a href="https://bettercv.com" className="underline">https://bettercv.com</a></div>
                    <div>Email: <a href="mailto:shubhrajitsarkar123ss@gmail.com" className="underline">shubhrajitsarkar123ss@gmail.com</a></div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;