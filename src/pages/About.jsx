import React from "react";

function About() {
    return (
        <section className="main-section-2">
            <article className="main-article-2 container">
                <div className="mt-5">
                    <h3>Our Mission</h3>
                    <p>
                        spoonacular will be the first food management system that combines
                        dining out, eating store-bought food, and cooking at home to help
                        you find and organize the restaurants, products, and recipes that
                        fit your diet and can help you reach your nutrition goals.
                    </p>
                    <div className="main-article-image-2 container w-75 mt-5 mb-5"></div>
                    <p className="mb-5">
                        As a spoonacular user, you can already add your favorite recipes and
                        store bought products to our <span className="fw-bold">free meal planner</span>, which
                        automatically
                        generates your shopping list and calculates the nutritional
                        information for you. Whether you're cooking from scratch or picking
                        something up at the store, our meal planner doubles as a <span className="fw-bold">food
            tracker</span> that counts your calories, protein, fat, carbs, sugar, and
                        other nutrients for you. With our <span className="fw-bold">food search engine</span> , you will
                        soon
                        find everything from "protein shake with 20 grams of protein" to
                        "best vegan restaurant in Chicago" to "Paleo brownie recipes." We
                        want to make spoonacular the only site you need when it comes to the
                        food you eat. <span className="fw-bold">All your food. One place.</span>
                    </p>
                </div>
            </article>

        </section>
    );
}

export default About;
