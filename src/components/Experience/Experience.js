import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faNpm,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="experience-title">experience</div>
      <div className="experience-container">
        <div style={{ paddingBottom: "30px" }}>
          I recently completed a 16 week software development course at
          <span style={{ color: "#9DE6F5" }}> School of Code </span> which
          focused on teaching all elements needed for full-stack development.
        </div>
        <div style={{ paddingBottom: "30px" }}>
          Being paired with a new partner each week as well as two team
          projects, the final project being a month long, taught me practical
          workplace skills such as
          <span style={{ color: "#9DE6F5" }}> pair programming, testing </span>
          and the
          <span style={{ color: "#9DE6F5" }}> UI/UX design process.</span>
        </div>
        <div style={{ paddingBottom: "30px" }}>
          I am now seeking opportunities for a
          <span style={{ color: "#9DE6F5" }}> junior software developer </span>
          position.
        </div>
        <div style={{ paddingBottom: "30px" }}>
          I'm a <span style={{ color: "#9DE6F5" }}> full-stack developer </span>
          with a passion for creating clean, intuative and responsive apps for
          all devices. While I enjoy being creative with visual designs, I
          equally like logic and problem solving.
        </div>
        <div style={{ paddingBottom: "20px" }}>
          Here's the <span style={{ color: "#9DE6F5" }}> tech stack </span> I've
          been working with.
        </div>
        <div className="experience-tech-container">
          <FontAwesomeIcon
            className="experience-techstack"
            title="HTML"
            icon={faHtml5}
          />
          <FontAwesomeIcon
            className="experience-techstack"
            title="CSS"
            icon={faCss3Alt}
          />
          <FontAwesomeIcon
            className="experience-techstack"
            title="JavaScript"
            icon={faJs}
          />
          <img
            className="experience-techimages"
            title="TypeScript"
            src={require("../../images/typescript.png")}
            alt="TypeScript"
          />
          <FontAwesomeIcon
            className="experience-techstack"
            title="React"
            icon={faReact}
          />
          <img
            className="experience-techimages"
            title="Next.js"
            src={require("../../images/next.png")}
            alt="Next.js"
          />
          <FontAwesomeIcon
            className="experience-techstack"
            title="Node.js"
            icon={faNodeJs}
          />
          <img
            className="experience-techimages"
            title="PostgresQL"
            src={require("../../images/postgreesql.png")}
            alt="Next.js"
          />
          <img
            className="experience-techimages"
            title="MongDB"
            src={require("../../images/mongo.png")}
            alt="Next.js"
          />
          <img
            className="experience-techimages"
            title="Chakra UI"
            src={require("../../images/chakra.png")}
            alt="Next.js"
          />
          <FontAwesomeIcon
            className="experience-techstack"
            title="GitHub"
            icon={faGithub}
          />
          <FontAwesomeIcon
            className="experience-techstack"
            title="Npm"
            icon={faNpm}
          />
        </div>
        <div>
          <div className="experience-info-title">
            <img
              className="experience-soc"
              src={require("../../images/soc.png")}
              alt="SoC"
            />
            <div className="experience-info-title-container">
              <div className="experience-text" style={{ fontSize: "1.3em" }}>
                {" "}
                School of Code{" "}
              </div>
              <div className="experience-text2" style={{ fontSize: ".8em" }}>
                {" "}
                april '22 - august '22
              </div>
            </div>
          </div>
          <div className="experience-info-desc">
            Starting April 2022, I completed a full-time, intensive 16 week
            bootcamp to take my passion for tech and turn it into a career.{" "}
            During this time, I went from having minimal knowledge of software
            development to a solid foundation of modern skills needed for
            software development.
          </div>
          <div className="experience-info-desc">
            The curriculum was tailored to provide all of the skills needed for
            full-stack development, like using React, JavaScript, HTML, CSS, but
            also for working within a team environment, such as pair
            programming, agile methodology, testing and product management
            within a team.{" "}
          </div>
          <div className="experience-info-desc">
            During the last 4 weeks of the course, I had the opportunity to work
            within a team of 5 on a real world project and gained many valuable
            skills which I will carry on to my next job. I Had many
            opportunities of being project lead which I lead daily stand-ups and
            retros to see our teams progress as well as setting sprint times and
            goals.
          </div>
        </div>
        <div className="experience-info-title">
          <div className="experience-FGD"> FGD</div>
          <div className="experience-info-title-container">
            <div className="experience-text" style={{ fontSize: "1.3em" }}>
              {" "}
              Freelance Graphic Design{" "}
            </div>
            <div className="experience-text2" style={{ fontSize: ".8em" }}>
              {" "}
              february '16 - february '20
            </div>
          </div>
        </div>
        <div className="experience-info-desc">
          Shortly after graduating College in IT and Graphic Design, I was eager
          to move into a working environment and started with freelance graphic
          design. Over the next 4 years, I gained a great amount of practical
          work experience especially working within new team environments as it
          was common to slot into new teams several times a year while working
          for different clients.
        </div>
        <div className="experience-info-desc">
          As all of my work was freelance, it was crucial that I maintained good
          client relationships to get future work with them when needed. As I
          worked for several different clients per year, it was also essential
          for me to be comfortable working within a new team when needed.
        </div>
        <div className="experience-info-desc">
          Early in my career, I worked hard to liaise with different clients and
          seek out work to create many relationships which lasted the entire
          four years I worked as a graphic designer. I developed great time
          management skills in order to finish work by client deadlines as well
          as asking for consistent feedback during the design process to ensure
          I followed the project scope.
        </div>
        <div className="experience-info-desc">
          Towards the end of 2021 I was comfortable with where I currently was
          at, but wanted to seek out more fulfilling work where I could
          constantly progress and improve in a field that's constantly changing
          such as tech. This led to me to applying for and starting the School
          of Code bootcamp in 2022.
        </div>
      </div>
    </div>
  );
}

export default Experience;
