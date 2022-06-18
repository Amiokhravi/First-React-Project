import React, {useState, useEffect} from "react";
import AddRecipes from "../component/AddRecipes";

function AdvanceSearch() {
    const [Query, setQuery] = useState("");
    const [Number, setNumber] = useState(5);
    const [Carbs, setCarbs] = useState("");
    const [Fiber, setFiber] = useState("");
    const [Vitamin, setVitamin] = useState("");
    const [Sugar, setSugar] = useState("");
    const [Calcium, setCalcium] = useState("");
    const [Recipes, setRecipes] = useState([]);
    const apiKey = `343bf349d95049749b2b1aed18a00d53`;
    const url1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${Query}&minCarbs=10&maxCarbs=${Carbs}&minVitaminB1=0&maxVitaminB1=${Vitamin}&minCalcium=0&maxCalcium=${Calcium}&minSugar=0&maxSugar=${Sugar}&minFiber=0&maxFiber=${Fiber}&number=${Number}`;
    const getData = () => {
        if (Query == "") {
            alert("Please Fill The Box");
        } else {
            fetch(url1)
                .then((res) => res.json())
                .then((data) => setRecipes(data.results))
                .catch((error) => console.log(error));
            setNumber("");
            setQuery("");
        }
    };


    const queryChange = (e) => {
        setQuery(e.target.value);
    };
    const carbsChange = (e) => {
        setCarbs(e.target.value);
    };
    const calciumChange = (e) => {
        setCalcium(e.target.value);
    };
    const fiberChange = (e) => {
        setFiber(e.target.value);
    };
    const sugarChange = (e) => {
        setSugar(e.target.value);
    };
    const vitaminChange = (e) => {
        setVitamin(e.target.value);
    };
    const numberChange = (e) => {
        setNumber(e.target.value);
    };

    return (
        <main className="mb-5 ">
            <div className="main-container d-flex align-items-center ">
                <div className="main-form-container container">
                    <form
                        action=""
                        method="get"
                        className="search-form container p-4 text-center position-relative  align-content-around w-50"
                    >
                        <h4 className="text-center">Search Recipes of Foods</h4>
                        <input
                            type="search"
                            id="search-inp"
                            placeholder="Search Recipes"
                            className="d-block container  mt-3  p-2 w-50"
                            onChange={queryChange}
                            value={Query}
                        />
                        <div className="container flex-wrap">
                            <div className="selecte-inputs  d-flex mt-4 flex-wrap ">
                                <div className="carbs-select col align-self-center ">
                                    <div className="col">
                                        <label htmlFor="number">  Carbs: </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="10"
                                            max="100"
                                            onChange={carbsChange}
                                            placeholder='10-100'
                                        />
                                    </div>
                                </div>
                                <div className="vitamin-select col align-self-center">
                                    <div className="col">
                                        <label htmlFor="number"> Vitamin: </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="0"
                                            max="100"
                                            onChange={vitaminChange}
                                            placeholder='10-100'
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="sugar-select col align-self-center">
                                        <label htmlFor="number">Sugar: </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="0"
                                            max="100"
                                            onChange={sugarChange}
                                            placeholder='10-100'
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="calcium-select col align-self-center">
                                        <label htmlFor="number">Calcium: </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="0"
                                            max="100"
                                            onChange={calciumChange}
                                            placeholder='10-100'
                                        />
                                    </div>
                                </div>
                                <div className="fiber-select col align-self-center">
                                    <div className="col">
                                        <label htmlFor="number"> Fiber:</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="0"
                                            max="100"
                                            onChange={fiberChange}
                                            placeholder='10-100'
                                        />
                                    </div>
                                </div>
                                <label htmlFor="number" className="mt-3">
                                    {" "}
                                    Recipes:{" "}
                                </label>
                                <select
                                    id="numbers"
                                    className="mt-3 ms-2 text-center p-1"
                                    onChange={numberChange}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <input
                            type="button"
                            value="Search"
                            className="search-btn mt-2 w-50 p-2 mb-2"
                            onClick={getData}
                        />
                    </form>
                </div>
            </div>
            <section
                className="main-section mt-5 d-flex flex-column justify-content-center  align-items-center container">
                <h2 className="main-title p-1">Results</h2>
                <div className="row row-cols-1 g-5 row-cols-md-2 add-recipes-box mt-1 container">
                    {Recipes !== [] &&
                    Recipes.map((item, index) => (
                        <AddRecipes
                            image={item.image}
                            title={item.title}
                            key={index}
                            nameCarbs={
                                item.nutrition.nutrients[0].name +
                                " / " +
                                item.nutrition.nutrients[0].amount
                            }
                            nameSugar={
                                item.nutrition.nutrients[1].name +
                                " / " +
                                item.nutrition.nutrients[1].amount
                            }
                            nameFiber={
                                item.nutrition.nutrients[2].name +
                                " / " +
                                item.nutrition.nutrients[2].amount
                            }
                            nameVitamin={
                                item.nutrition.nutrients[3].name +
                                " / " +
                                item.nutrition.nutrients[3].amount
                            }
                            nameCalcium={
                                item.nutrition.nutrients[4].name +
                                " / " +
                                item.nutrition.nutrients[4].amount
                            }
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default AdvanceSearch;
