import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProjectInfo() {
    useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);


    const location = useLocation();
    const { project } = location.state || {};

    useEffect(() => {
        // Activate Bootstrap carousel (in case it's not auto-activated)
        if (window.bootstrap && window.bootstrap.Carousel) {
            const carouselEl = document.querySelector('#projectCarousel');
            if (carouselEl) new window.bootstrap.Carousel(carouselEl);
        }
    }, []);

    if (!project) {
        return (
            <div className="text-center p-5">
                <h2>Project Information Not Found</h2>
                <p>Please return to the homepage and select a project to view its details.</p>
                <Link to="/" className="btn btn-primary">Go to Homepage</Link>
            </div>
        );
    }

    const allImages = [project.imageSrc, ...(project.moreImages || [])];

    return (
        <div className="container py-4">
            <Link to="/projects" className="btn btn-secondary mb-4">← Back to All Projects</Link>

            {/* Carousel */}
            <div id="projectCarousel" className="carousel slide mb-5" data-bs-ride="carousel" data-bs-interval="1000">
                <div className="carousel-inner rounded">
                    {allImages.map((img, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <img src={img} className="d-block w-100 rounded" alt={`Project Slide ${index + 1}`} style={{ maxHeight: '550px', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Project Header */}
            <div className="mb-4">
                <h1 style={{ textAlign: 'center', fontFamily: 'impact' }}>{project.name}</h1>
                <div className="mt-3" style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-success ${project.isInactive ? 'disabled' : ''}`}>
                        View Live Site
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-dark ms-2 ${project.isInactive ? 'disabled' : ''}`}>
                        GitHub Repository
                    </a>
                </div>
            </div>

            {/* Project Description */}
            {project.fullDetails?.explanation && (
                <p className="mt-3 card card-body" style={{ fontSize: '1.1rem', lineHeight: '1.6', fontWeight: 500, textAlign: 'justify' }}>
                    {project.fullDetails.explanation}
                </p>
            )}

            {/* Features */}
            <div className="row mt-5">
                <div className="col-md-6 mt-5">
                    <h4>User Features</h4>
                    <ul className="list-group list-group-flush">
                        {project.fullDetails?.features?.userFeatures?.map((item, idx) => (
                            <li key={idx} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 mt-5">
                    <h4>Admin Features</h4>
                    <ul className="list-group list-group-flush">
                        {project.fullDetails?.features?.adminFeatures?.map((item, idx) => (
                            <li key={idx} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Requirements */}
            <div className="row mt-5">
                <div className="col-md-6 mt-5">
                    <h4>Functional Requirements</h4>
                    <ul className="list-group list-group-flush">
                        {project.fullDetails?.requirements?.functionalRequirements?.map((item, idx) => (
                            <li key={idx} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 mt-5">
                    <h4>Non-Functional Requirements</h4>
                    <ul className="list-group list-group-flush">
                        {project.fullDetails?.requirements?.nonFunctionalRequirements?.map((item, idx) => (
                            <li key={idx} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-5">
                <h4>Tech Stack</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Frontend:</strong> {project.fullDetails?.techStack?.frontend}</li>
                    <li className="list-group-item"><strong>Backend:</strong> {project.fullDetails?.techStack?.backend}</li>
                    <li className="list-group-item"><strong>Database:</strong> {project.fullDetails?.techStack?.database}</li>
                    <li className="list-group-item"><strong>Authentication:</strong> {project.fullDetails?.techStack?.auth}</li>
                    <li className="list-group-item"><strong>Deployment:</strong> Frontend - {project.fullDetails?.techStack?.deployment?.frontend}, Backend - {project.fullDetails?.techStack?.deployment?.backend}</li>
                    <li className="list-group-item"><strong>Version Control:</strong> {project.fullDetails?.techStack?.versionControl}</li>
                </ul>
            </div>

            {/* Timeline */}
            <div className="mt-5">
                <h4>Timeline</h4>
                <ul className="list-group list-group-flush">
                    {project.fullDetails?.timeline?.map((item, idx) => (
                        <li key={idx} className="list-group-item"><strong>{item.date}:</strong> {item.activity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
