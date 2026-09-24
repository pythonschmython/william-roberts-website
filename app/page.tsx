
export default function Home() {
  return (
    <main>

      {/* ---------- Navigation ---------- */}

      <nav className="nav">
        <div className="logo">
          William Roberts
        </div>

        <div className="links">
          <a href="#about">About</a>
          <a href="#subjects">Subjects</a>
          <a href="#teaching">Teaching</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ---------- Hero ---------- */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Private Science Tutoring
          </h1>

          <p className="subtitle">
            Chemistry, physics, and mathematics tutoring for high school
            and college students. I’m a Brown University chemistry graduate
            with 5+ years of teaching experience and a focus on making
            difficult concepts clear and approachable.
          </p>

          <p className="location">
            In-person in NYC · Online anywhere
          </p>

          <div className="hero-button">
            <a className="button" href="#contact">
              Book a Free Consultation
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


      {/* ---------- Credentials ---------- */}

      <section className="proof">

        <div>
          <strong>5+</strong>
          <span>Years tutoring</span>
        </div>

        <div>
          <strong>40+</strong>
          <span>Students taught</span>
        </div>

        <div>
          <strong>Brown</strong>
          <span>University chemistry graduate</span>
        </div>

        <div>
          <strong>200+</strong>
          <span>Students taught as Head TA</span>
        </div>

      </section>


      {/* ---------- Testimonials ---------- */}

      <section>

        <h2>What Students Say</h2>

        <div className="testimonials">

          <div className="testimonial">
            <p>
              "William is the most effective tutor I’ve had during my time
              at Brown, and has an innate pedagogical gift."
            </p>
            <span>— Brown University student</span>
          </div>

          <div className="testimonial">
            <p>
              "I likely wouldn’t have passed the class without him.
              If he was able to help my grades, he’ll be able to help anyone's."
            </p>
            <span>— Brown University student</span>
          </div>

          <div className="testimonial">
            <p>
              "I can say with complete confidence that I would have not
              seen the same type of success without William's tutoring
              and guidance."
            </p>
            <span>— Brown University student</span>
          </div>

          <div className="testimonial">
            <p>
              "He was extremely receptive and helpful with answering
              questions, and he made each of his lessons engaging, so I
              was never bored during our sessions."
            </p>
            <span>— Brown University student</span>
          </div>

        </div>

      </section>


      {/* ---------- Who I Work With ---------- */}

      <section>

        <h2>Who I Work With</h2>

        <div className="cards">

          <div className="card">
            <h3>High School Students</h3>
            <p>
              AP Chemistry, physics, mathematics, homework support,
              conceptual understanding, and exam preparation.
            </p>
          </div>

          <div className="card">
            <h3>College Students</h3>
            <p>
              General chemistry, organic chemistry, physics, calculus,
              and other undergraduate STEM courses.
            </p>
          </div>

          <div className="card">
            <h3>Exam Preparation</h3>
            <p>
              Structured review, targeted problem-solving practice,
              and help identifying and addressing gaps in understanding.
            </p>
          </div>

        </div>

      </section>


      {/* ---------- Subjects ---------- */}

      <section id="subjects">

        <h2>Subjects</h2>

        <div className="cards">

          <div className="card">
            <h3>Chemistry</h3>
            <p>
              <b>AP Chemistry</b>, <b>General Chemistry</b>,
              Organic Chemistry, and Analytical Chemistry.
            </p>
          </div>

          <div className="card">
            <h3>Physics</h3>
            <p>
              <b>Mechanics</b>, <b>Electricity & Magnetism</b>,
              and Optics.
            </p>
          </div>

          <div className="card">
            <h3>Mathematics</h3>
            <p>
              Algebra, Geometry, <b>Calculus I–III</b>, and Statistics.
            </p>
          </div>

        </div>

        <p className="advanced-note">
          Advanced university coursework is also available upon request.
        </p>

      </section>


      {/* ---------- Teaching ---------- */}

      <section id="teaching">

        <h2>How I Teach</h2>

        <p>
          My approach is straightforward: understand the idea first,
          then learn how to solve the problem. I focus on connecting
          abstract concepts to physical intuition so students aren't
          just memorizing procedures—they understand why things work.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Head Teaching Assistant</h3>
            <p>
              I served as Head Teaching Assistant for General Chemistry,
              Brown University's largest undergraduate STEM course,
              supporting more than 200 students through lectures,
              recitations, problem-solving sessions, and exam reviews.
            </p>
          </div>

          <div className="card">
            <h3>Private Tutor</h3>
            <p>
              I have worked with more than 40 high school and college
              students over the past five years, both individually and
              in groups. I focus on conceptual understanding, problem
              solving, and building genuine confidence in science.
            </p>
          </div>

        </div>

      </section>


      {/* ---------- About ---------- */}

      <section id="about">

        <h2>About Me</h2>

        <p>
          I graduated <em>magna cum laude</em> from Brown University
          with a Bachelor of Science in Chemistry. Alongside my research,
          which led to a publication in the <em>Journal of Chemical Physics</em>,
          I discovered a passion for teaching and helping students
          build confidence in science.
        </p>

        <p>
          Throughout my academic career, I studied chemistry from both
          theoretical and experimental perspectives. I believe the best
          science education comes from connecting abstract concepts to
          physical reality and making difficult ideas clear, approachable,
          and enjoyable.
        </p>

        <p>
          When I'm not teaching or in the laboratory, you can find me
          writing and reading poetry, building my lamp collection,
          or planning tomorrow's outfit.
        </p>

        <div className="button-center">
          <a
            href="/William_Roberts_CV.pdf"
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>

      </section>


      {/* ---------- Research ---------- */}

      <section id="research">

        <h2>Research</h2>

        <p>
          My research experience allows me to bring real scientific
          expertise into my teaching. As a physical chemist, I specialize
          in spectroscopy, instrumentation, microscopy, and experimental
          design.
        </p>


        <div className="research-card">

          <div className="research-text">
            <h3>Ultrafast Raman Microscopy</h3>

            <p>
              Designed and built an ultrafast stimulated Raman microscopy
              system for chemical imaging and molecular characterization.
              This work involved lasers, optics, spectroscopy, microscope
              design, galvo scanning systems, data acquisition hardware,
              and custom software development.
            </p>
          </div>

          <div className="research-image">
            <img
              src="/Raman.jpg"
              alt="Ultrafast Raman microscopy setup"
            />
          </div>

        </div>


        <div className="research-card">

          <div className="research-text">
            <h3>Molecular Spectroscopy</h3>

            <p>
              Investigated molecular electronic structure through
              photoelectron and photodetachment spectroscopy of
              cryogenically cooled molecular ions in the Lai-Sheng Wang
              laboratory. This research resulted in a publication in
              the Journal of Chemical Physics and involved high vacuum
              instrumentation, ion trapping, laser spectroscopy,
              and electronic structure analysis.
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


      {/* ---------- Publications ---------- */}

      <section id="publications">

        <h2>Publications & Writing</h2>

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
              Research contribution involving molecular spectroscopy,
              electronic structure analysis, and experimental
              characterization.
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
              A creative exploration of entropy and identity.
            </p>

          </div>

        </div>

      </section>


      {/* ---------- Contact ---------- */}

      <section id="contact" className="contact">

        <h2>Let's Work Together</h2>

        <p>
          Looking for help with chemistry, physics, or mathematics?
          Tell me a little about what you're working on and I'll get
          back to you.
        </p>

        <div className="contact-links">

          <a href="mailto:william@wrscience.com">
            william@wrscience.com
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