export default function FocusCard({ projects, categories }) {


    return (
        <section className="focus-card">
            <h2>Building Full-Stack Confidence</h2>
            <p className="eyebrow">Current Focus</p>
            <div className="category-list">
                {categories.map((category) => (
                    <div className="category-item" key={category}>
                    <span>{category}</span>
                    <span>{projects.filter((project) => project.type === category).length} project</span>
                    </div>
                ))}
                <div className="category-item experience">
                    <span>Experience</span>
                    <span>5 Years</span>
                </div>
            </div>
        </section>
    )
}