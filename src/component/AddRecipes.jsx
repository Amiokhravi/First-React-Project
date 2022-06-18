import React from "react";

function AddRecipes({title, image, nameCarbs, nameCalcium, nameVitamin, nameFiber, nameSugar}) {
    return (
        <article className="  mt-4  col ms-auto">
            <div className="col">
                <div className="card h-100 main-article">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <div className="card-text">
                            <h5 className="card-title">{title}</h5>
                            <div className="carbs">{nameCarbs}</div>
                            <div className="calcuim">{nameCalcium}</div>
                            <div className="vitamin">{nameVitamin}</div>
                            <div className="fiber">{nameFiber}</div>
                            <div className="sugar">{nameSugar}</div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default AddRecipes;