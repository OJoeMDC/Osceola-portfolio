import FocusCard from "./FocusCard.jsx";

export default function Hero({ projects, categories }) {
    return (
        <>
    {/* Hero Section */}
          <section className="hero section-container">
            <div className="hero-grid">
              <section className="hero-content">
                <h1>Hi, I'm Osceola</h1>
                <p className="eyebrow">Front-End • Back-End • Full-Stack</p>
                <p className="hero-description">
                  Full-stack developer experienced in building scalable applications and cloud-based solutions.
                </p>
                <div className="hero-buttons">
                  <button onClick={() => 
                    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"},
                    )} className="primary-button"
                    >
                      View Projects
                  </button>
    
                  <button onClick={() => 
                    document.getElementById("contact")?.scrollIntoView({behavior: "smooth",}
                    )} className="secondary-button"
                    >
                      Contact Me
                    </button>
                </div>
              </section>
    
    
              {/* Focus Card in Hero */}
              <FocusCard 
                projects={projects}
                categories={categories}
              />
            </div>
          </section>
          </>
    )
}