
import "../styles/ProjectCard.css";

function ProjectCard({
  title,
  description,
  technologies = [],
  image,
  imageAlt,
  liveUrl,
  sourceUrl,
  status,
}) {
  return (
    <article className="project-card">
      {/* Project image or placeholder */}
      <div className="project-card__media">
        {image ? (
          <img
            src={image}
            alt={imageAlt || `${title} preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span className="project-card__placeholder-mark">&lt;/&gt;</span>
            <span className="project-card__placeholder-label">
              PROJECT PREVIEW
            </span>
          </div>
        )}
      </div>

      {/* Project information */}
      <div className="project-card__body">
        {status && (
          <p className="project-card__status">{status}</p>
        )}

        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        {/* Technology tags */}
        {technologies.length > 0 && (
          <ul className="project-card__technologies" aria-label={`${title} technologies`}>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}

        {/* Show only the links that have been provided */}
        {(liveUrl || sourceUrl) && (
          <div className="project-card__actions">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Live Demo <span aria-hidden="true">↗</span>
              </a>
            )}

            {sourceUrl && (
              <a href={sourceUrl} target="_blank" rel="noreferrer">
                Source Code <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
