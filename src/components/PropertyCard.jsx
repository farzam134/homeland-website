import { FaHeart } from "react-icons/fa";

function PropertyCard({ image, title, address, price, beds, baths, area, tag1, tag2 }) {
  return (
    <div className="col-12 col-md-6 col-lg-4  mb-4">
      <div className="card property-card border-0">

        <div className="position-relative overflow-hidden">
          <img src={image} className="card-img-top property-img" alt="house" />

          {/* Tags wrapper - dono tags ek saath top-left mein */}
          <div className="position-absolute top-0 start-0 m-2 d-flex flex-column gap-1">
            
            <span
              className="badge"
              style={{ backgroundColor: tag1 === "LEASE" ? "#17a2b8" : "#dc3545" }}>
              {tag1}
            </span>

            {tag2 && (
              <span className="badge bg-success">
                {tag2}
              </span>
            )}

          </div>

          {/* Heart icon - bottom right */}
          <div className="position-absolute bottom-0 end-0 m-2">
            <div className="heart-icon">
              <FaHeart />
            </div>
          </div>

        </div>

        <div className="card-body">
          <h5 className="fw-semibold">{title}</h5>
          <p className="text-muted small">{address}</p>
          <h4 className="text-success fw-bold">{price}</h4>
          <div className="d-flex justify-content-between text-muted small mt-3">
            <span>{beds} Beds</span>
            <span>{baths} Baths</span>
            <span>{area}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PropertyCard;