import {
  FaJava,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaReact,
  FaFigma,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IconContext } from "react-icons";
import "./Home.css";
import image from "../assets/photo.jpg";
const Home = () => {
  return (
    <div className="relative flex h-screen w-screen justify-center items-center bg-[#242424]">
      <div className="relative w-4/12 h-[90%] flex min-w-[450px] bg-third">
        <div className="relative w-8/12 h-full flex">
          <div className="relative w-1/3 h-full">
            <div className="w-full h-1/2 justify-center flex items-center">
              <div className="flex flex-col items-center gap-12 pt-[170px]">
                <p className="ro rotate-[270deg] z-10 text-[22px] font-semibold font-Poppins">
                  Education
                </p>
                <div className="h-[80px] bg-black w-[2px] z-10"></div>
              </div>
            </div>
            <div className="w-full h-1/2 bg-primary">
              <div className="flex flex-col items-center gap-10 pt-[100px]">
                <p className="ro rotate-[270deg] z-10 text-[22px] font-semibold font-Poppins">
                  Projects
                </p>
                <div className="h-[100px] bg-black w-[2px] z-10"></div>
              </div>
            </div>
            <div className="w-[90%] h-1/4 bg-fourth absolute top-[260px]"></div>
            <div className="bg-fourth rounded-full h-16 w-16 absolute top-5 left-5 flex justify-center items-center">
              <p className="font-Abril text-white text-2xl">CV</p>
            </div>
          </div>
          <div className=" w-2/3 h-full font-Poppins">
            <div className="w-full h-1/2 text-[6px] py-5 flex flex-col gap-4 pr-3">
              <div className="">
                <h3 className="text-[10px] font-semibold font-Poppins mb-3">
                  About Me
                </h3>
                <p className="">
                  Enthusiastic engineering student pursuing a Bachelor of
                  Technology in Computer Science, passionate about coding and
                  problem-solving. Dedicated to continuous improvement, thrives
                  on solving real-world problems. Actively contributes to
                  open-source projects, aspiring to make a significant impact in
                  the tech industry. Eager to collaborate on meaningful
                  projects, constantly seeks learning opportunities to grow
                  personally and professionally. Possesses strong
                  problem-solving and ownership skills. Open to connecting with
                  like-minded individuals and industry professionals to build a
                  brighter future together.
                </p>
              </div>
              <div>
                <h3 className="text-[8px] font-semibold font-Poppins mb-2">
                  Bachelor of Technology - BTech • ABES Institute of Technology
                </h3>
                <h3 className="text-[8px] font-semibold font-Poppins flex justify-between mb-1">
                  <span>Computer science</span>
                  <span>Sep 2023 - Present</span>
                </h3>
                <p>
                  I am a dedicated student currently pursuing a Bachelor of
                  Technology (BTech) degree at ABES Institute of Technology
                  Throughout my academic journey, I have actively engaged in
                  gaining practical skills and embracing new learning
                  opportunities
                </p>
              </div>
              <div>
                <h3 className="text-[8px] font-semibold font-Poppins mb-2">
                  Diploma • Sanskar Institute of Engineering and Technology
                  (AKTU)
                </h3>
                <h3 className="text-[8px] font-semibold font-Poppins flex justify-between mb-1">
                  <span>mechanical engineering</span>
                  <span>Aug 2020 - Aug 2023</span>
                </h3>
                <p>
                  I hold a diploma in Mechanical Engineering from Sanskar
                  Institute of Engineering. Through this program, I gained a
                  solid understanding of mechanical principles and practical
                  skills. Collaborative projects and group assignments enhanced
                  my teamwork and communication abilities. I am eager to apply
                  my education to real-world challenges in the field of
                  mechanical engineering
                </p>
              </div>
            </div>
            <div className="w-full h-1/2 bg-primary text-[6px] py-5 flex flex-col gap-5 pr-1">
              <div>
                <h3 className="text-[8px] font-semibold font-Poppins mb-1">
                  GEEKPOK - search pokemons
                </h3>
                <ul className="">
                  <li className="">
                    -Utilized HTML, CSS, and JavaScript to implement filters
                    using filter property
                  </li>
                  <li>
                    -Utilized Pokemon API to retrieve and showcase Pokemon
                    images and names
                  </li>
                  <li>
                    -Created visually captivating individual Pokemon cards to
                    enhance user engagement
                  </li>
                  <li>
                    -Implemented enticing hover effects to promote interactive
                    user experience
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[8px] font-semibold font-Poppins mb-1">
                  AI-Powered Search Engine using Gemini
                </h3>
                <ul>
                  <li>
                    -Dynamic and innovative software engineer with a passion for
                    leveraging artificial intelligence to solve complex problems
                  </li>
                  <li>
                    -Developed an AI-powered search bar using JavaScript (JS)
                    and integrated the Gemini API to enable advanced search
                    capabilities.
                  </li>
                  <li>
                    -AI-driven Semantic Search: Leveraged the Gemini API to
                    enable semantic search, providing more accurate and relevant
                    search results based on context.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[8px] font-semibold font-Poppins mb-1">
                  FIGMA design
                </h3>
                <ul>
                  <li>
                    -Revamped Figma design layout for innovative IT solution
                    company
                  </li>
                  <li>
                    -Introduced fresh logo that aligns with companys vision
                  </li>
                  <li>
                    -Meticulously designed elements to address unique challenges
                    in IT solution landscape
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 w-4/12 h-full font-Poppins">
          <div className="w-full h-[30%] bg-green-300">
            <img src={image} className="h-full object-cover"></img>
          </div>
          <div className="w-full h-[45%] bg-black">
            <div className="h-1/2 text-white flex flex-col gap-2 justify-center px-3">
              <h1 className="text-4xl text-left font-semibold">Bharat Bisht</h1>
              <h3 className="text-left">Front-End Devloper & UI&UX</h3>
            </div>
            <div className="flex flex-col justify- mt-5">
              <h3 className="text-white text-left pl-3 text-sm font-extralight mb-3">
                Skills
              </h3>
              <IconContext.Provider
                value={{ color: "white", className: "global-class-name" }}
              >
                <div className="flex flex-wrap justify-center gap-2">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <SiJavascript />
                  <FaGithub />
                  <FaReact />
                  <FaFigma />
                  <FaJava />
                  <FaNode />
                </div>
              </IconContext.Provider>
              ;
            </div>
          </div>
          <div className="w-full h-[25%] bg-secondary text-white  p-4 text-[10px]">
            <div className="h-1/2">
              <h5 className="text-[15px] mb-2">Address</h5>
              <p>Ghaziabad, India</p>
            </div>
            <div className="h-1/2">
              <h5 className="text-[15px] mb-2">Contact</h5>
              <div>
                <p>+91-9311023507</p>
                <p>kamalbisht819@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-8/12 h-[60px] absolute bottom-0 bg-black text-white flex justify-center items-center text-[10px] gap-4">
          {/* <p className="font-semibold text-[15px]">Social media</p> */}
          <div className="flex items-center gap-1">
            <FaInstagram />
            <p>bharatxox</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFacebook />
            <p>bharatxox</p>
          </div>
          <div className="flex items-center gap-1">
            <FaLinkedin />
            <p>Bharat-Bisht</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
