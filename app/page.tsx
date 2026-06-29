export default function Home() {
  return (
    <main>

      <nav className="nav">
        <div className="logo">
          William Roberts
        </div>

        <div className="links">
          <a href="#about">About</a>
          <a href="#teaching">Teaching</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <section className="hero">

        <div>
          

          <h1>
            Tutoring that builds confidence. 
          </h1>

          <p className="subtitle">
            Ivy League grad helping students master chemistry, 
            physics, and mathematics through personalized one-on-one instruction.
          </p>
          
          <p className="hero-quote">
            — <em>"An innate pedagogical gift."</em>
          </p>

          <div className="hero-button">

            <a className="button" href="#contact">
              Contact Me
            </a>

          </div>

        </div>


        <div className="photo">
          <img
            src="/william.jpeg"
            alt="William Roberts"
          />
        </div>

      </section>





           <section id="about">

        <h2>About Me</h2>

        <p>
          I graduated from Brown University Magna Cum Laude with a
          bachelors of science in Chemistry. I am passionate about helping students build confidence
          in their scientific ability, expanding what they thought
          themselves capable of.
        </p>

        <p>
          Throughout my academic career, I have studied chemistry
          from both theoretical and experimental perspectives.
          My coursework and research have given me a strong
          foundation in chemistry, physics, mathematics, and
          scientific problem solving.
        </p>

        <p>
          I believe the best science education comes from connecting
          abstract concepts to physical reality. Whether a student
          is learning their first chemistry concepts or tackling
          advanced university material, my goal is to make difficult
          ideas clear and approachable.
        </p>

        <p>
          When not teaching or in the laboratory, you can find me
          writing or reading poetry, building my lamp collection, or planning tomorrows outfit.
        </p>

        <a 
          href="/William_Roberts_CV.pdf"
          target="_blank"
          className="cv-button"
        >
          Download CV
        </a>


      </section>




      <section id="teaching">

        <h2>Teaching Experience</h2>

        <div className="cards">


          <div className="card">

            <h3>
              Head Teaching Assistant
            </h3>

            <p>
              I worked as the HTA for General Chemistry, Brown's largest undergraduate STEM course, supporting
              over 200 students. I led weekly lectures and recitations
              along with in-depth, exam review sessions. I worked with
              students through problem solving,
              content understanding, and exam strategies.
            </p>

          </div>



          <div className="card">

            <h3>
              Tutor
            </h3>

            <p>
              I have worked as tutor for over 5 years and 40+ students, in both one-on-one and in group settings.
              Across a number of courses, I work to improve conceptual understanding, develop
              problem solving strategies, and build actual confidence
              in science.
            </p>

          </div>



          


        </div>

      </section>






      <section id="subjects">

        <h2>Tutoring Subjects</h2>

        <div className="cards">


          <div className="card">

            <h3>
              Chemistry
            </h3>

            <p>
              <b> Chemistry, AP Chemistry, General Chemistry (Undergraduate)</b>,
              Organic Chemistry, Analytical Chemistry, Thermodynamics (Graduate),
              Quantum Mechanics (Graduate)
            </p>

          </div>



          <div className="card">

            <h3>
              Physics
            </h3>

            <p>
              <b>General Physics: Mechanics, General Physics: Electricity and Magnetism</b>,
              Optics
            </p>

          </div>



          <div className="card">

            <h3>
              Mathematics
            </h3>

            <p>
              Algebra, Geometry, Calculus I-III, Statistics 
            </p>

          </div>


        </div>

      </section>






      <section id="research">

        <h2>Research</h2>

        <p>
          My research experience allows me to bring real scientific
          expertise into my teaching. As a physical chemist, I specialize
          in spectroscopy, instrumentation, microscopy, and experimental
          design.

          <br /><br />

          My undergraduate research culminated in an honors senior thesis:

          {" "}

          <a
            href="/honors-thesis.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              Ultrafast Raman Spectroscopy and Chemical Imaging
            </strong>
          </a>
        </p>


        <div className="research-card">

          <div className="research-text">

            <h3>
              Ultrafast Raman Microscopy
            </h3>

            <p>
              Designed and built an ultrafast stimulated Raman
              microscopy system for chemical imaging and molecular
              characterization. This work involved lasers, optics,
              spectroscopy, microscope design, galvo scanning systems,
              data acquisition hardware, and custom software development.
            </p>

          </div>

          <div className="research-image">

            <img
              src="/Raman.jpg"
              alt="Raman spectroscopy setup"
            />

          </div>

        </div>



        <div className="research-card">

          <div className="research-text">

            <h3>
              Molecular Spectroscopy
            </h3>

            <p>
              Investigated molecular electronic structure through
              photoelectron and photodetachment spectroscopy of
              cryogenically cooled molecular ions in the Lai-Sheng Wang
              laboratory. This research resulted in a publication in
              the Journal of Chemical Physics and involved high vacuum
              instrumentation, ion trapping, laser spectroscopy, and
              electronic structure analysis.
            </p>

          </div>

          <div className="research-image">

            <img
              src="/PES.jpg"
              alt="Photoelectron spectroscopy apparatus"
            />

          </div>

        </div>

      </section>



      <section id="publications">

        <h2>
          Publications & Writing
        </h2>


        <div className="cards">


          <div className="card">

            <h3>
              <a
                href="https://pubs.aip.org/jcp/article/160/20/204305/3286118/Photoelectron-and-photodetachment-spectroscopy-of"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photoelectron and Photodetachment Spectroscopy
                of Cryogenically-Cooled 2-Anthrolide Anion
              </a>
            </h3>

            <p>
              Journal of Chemical Physics
            </p>

            <p>
              Research contribution involving molecular
              spectroscopy, electronic structure analysis,
              and experimental characterization.
            </p>

          </div>




          <div className="card">

            <h3>
              <a
                href="https://www.chrysalism.art/issue-0/human-entropy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Human Entropy
              </a>
            </h3>

            <p>
              Chrysalis Press — Issue 0
            </p>

            <p>
              A creative exploration of entropy, identity,
              and the relationship between scientific concepts
              and human experience.
            </p>

          </div>


        </div>

      </section>

      <section>

        <h2>
          Student Testimonials
        </h2>


        <div className="testimonials">


          <div className="testimonial">

            <p>
              "William is the most effective tutor I’ve had during my time at Brown, and has an innate pedagogical gift."
            </p>

          </div>



          <div className="testimonial">

            <p>
              "I likely wouldn’t have passed the class without him. If he was able to help my grades, he’ll be able to help anyone's."
            </p>

          </div>

          <div className="testimonial">

            <p>
              "I can say with complete confidence that I would have not seen the same type of success without William's tutoring and guidance."
            </p>

          </div>

          <div className="testimonial">

            <p>
              "He was extremely receptive and helpful with answering questions, and he made each of his lessons engaging, so I was never bored during our sessions."
            </p>

          </div>

        </div>


      </section>







      <section id="contact" className="contact">

        <h2>
          Contact
        </h2>


        <div className="contact-links">

          <a href="mailto:william_roberts@brown.edu">
            william_roberts@brown.edu
          </a>


        

          <a 
            href="https://www.linkedin.com/in/william-roberts-4b3491275"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>


    </section>

    </main>
  );
}