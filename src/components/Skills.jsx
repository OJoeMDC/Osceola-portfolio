export default function Skills() {
    return(
      <section id="quals" className="section-container quals-section">
          <div className="quals-heading">
            <h2>Qualifications</h2>
            <p className="eyebrow">Technical Background</p>
          </div>
          <div className="quals-grid">
            <div className="cred-card">
              <h3 className="listTitle">Certifications</h3>
              <ul className="list">
                <p className="eyebrow listTitle">CoITB Certifications</p>
                <li>CoITB Certified Javascript Professional Exam</li>
                <li>CoITB Certified React Developer Exam</li>
                <li>CoITB Certified MySQL Exam</li>
                <li>CoITB Certified HTML & CSS Exam</li>
              </ul>
            </div>
            <div className="cred-card">
              <h3 className="listTitle">Skills</h3>
              <ul className="list">
                <p className="eyebrow listTitle">Code</p>
                <li> MySQL</li>
                <li> React</li>
                <li> CSS</li>
                <li>Node.js</li>
                <p className="eyebrow listTitle">Design</p>
                <li> Framer</li>
                <li> Figma</li>
                <li> Wireframing</li>
                <li> Responsive layouts</li>
                <li> Reusable components</li>
                <li> Mobile-first Design</li>
                <p className="eyebrow listTitle">Other</p>
                <li> APIs</li>
                <li> Local storage</li>
                <li> Server-side logic</li>
                <li> AWS & Azure</li>
              </ul>
            </div>
            <div className="cred-card">
              <h3 className="listTitle">Education</h3>
              <ul className="list">
                <p className="eyebrow listTitle">Courses</p>
                <li>Javascript Professional Developer Course</li>
                <li>CIW Javascript Specialist Course</li>
                <li>Mysql Backend Developer Course</li>
                <li>HTML + CSS Developer Course</li>
                <li>React Developer Course</li>
                <p className="eyebrow listTitle">College Education</p>
                <li>AS Information Technology | SNHU</li>
              </ul>
            </div>
          </div>
      </section>
    );
}