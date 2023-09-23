import React from "react";

function Compte(){
    return(
        <div className="container shadow-lg p-3 mt-5 mb-5 bg-body-tertiary rounded ">
            <div className="row">
                <div className="col">
                    <h3 className="text-center mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">Je m'inscrit</h3>
                    <form>
                        <label>Nom</label>
                        <input type="text" />
                    </form>
                </div>
                <div className="col">
                    <h3 className="text-center mt-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">Je me connecte</h3>
                    <label>Nom</label>
                        <input type="text" />
                </div>

            </div>
        </div>
    )
}
export default Compte;