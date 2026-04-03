import React from 'react'

function Card({ image, icon, title, subtitle, description, date, linkText }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-0 p-0">

                {image && (
                    <img
                        src={image}
                        className="card-img-top object-fit-cover"
                        alt={title}
                    />
                )}

                {icon && (
                    <div className="card-icon text-center mt-3">
                        {icon}
                    </div>
                )}

                <div className={`card-body px-3 ${icon ? 'text-center' : 'text-start'}`}>

                    {date && (
                        <small className="text-muted d-block mb-1">{date}</small>
                    )}

                    <h5 className={`card-title mt-2 ${date ? 'text-primary' : ''}`}>
                        {title}
                    </h5>

                    {subtitle && (
                        <p className="text-muted mb-2">{subtitle}</p>
                    )}

                    {description && (
                        <p className="card-text text-muted mt-3">{description}</p>
                    )}

                    {linkText && (
                        <a href="#" className="card-link text-uppercase fw-semibold mt-3 d-block">{linkText}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card