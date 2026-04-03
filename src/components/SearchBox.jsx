import React from 'react'

function SearchBox() {
    return (
        <>
            <div className="search-wrapper">
                <div className="container">
                    <div className="row g-3 align-items-end search-box">

                        <div className="col-lg-3 col-md-6">
                            <p className="label">LISTING TYPES</p>
                            <select className="form-select">
                                <option>Condo</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <p className="label">OFFER TYPE</p>
                            <select className="form-select">
                                <option>For Sale</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <p className="label">SELECT CITY</p>
                            <select className="form-select">
                                <option>New York</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <button className="search-btn w-100">Search</button>
                        </div>

                    </div>
                </div>
            </div>


        </>

    );
}

export default SearchBox