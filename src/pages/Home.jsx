import React, {useState, useEffect} from "react";
import AddRecipes from "../component/AddRecipes";

function Home() {
    const [RandomRecipes, setRandomRecipes] = useState([]);
    const [Query, setQuery] = useState("");
    const [Number, setNumber] = useState(5);
    const [Recipes, setRecipes] = useState([]);
    const apiKey = `343bf349d95049749b2b1aed18a00d53`;
    const url1 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${Query}&maxFat=25&number=${Number}`;
    const url2 = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=6 `;
    useEffect(() => {
        fetch(url2)
            .then((res) => res.json())
            .then((data) => setRandomRecipes(data.results))
            .catch((error) => console.log(error));
    }, []);

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
            setRandomRecipes([]);
        }
    };

    const queryChange = (e) => {
        setQuery(e.target.value);
    };
    const numberChange = (e) => {
        setNumber(e.target.value);
    };

    return (
        <main className="mb-5">
            <div className="main-container text-center d-flex justify-content-center  align-items-center">
                <form action="" method="get" className="search-form container p-4">
                    <h4>Search Recipes of Foods</h4>
                    <input
                        type="search"
                        id="search-inp"
                        placeholder="Search Recipes"
                        className="d-block w-75  mt-3 ms-5 p-2"
                        onChange={queryChange}
                        value={Query}
                    />
                    <label htmlFor="number"> Number Of Recipes: </label>
                    <select
                        id="numbers"
                        className="mt-3 ms-2"
                        onChange={numberChange}
                        value={Number}
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
                    <br/>
                    <input
                        type="button"
                        value="Search"
                        className="search-btn mt-3 w-50 p-2"
                        onClick={getData}
                    />
                </form>
            </div>
            <section
                className="main-section mt-5 d-flex flex-column justify-content-center  align-items-center container ">
                <h2 className="main-title p-1">New Recipes</h2>
                <div
                    className="row row-cols-1 g-5 row-cols-md-2 add-recipes-box mt-1 container d-inline-flex flex-wrap ">
                    {
                        Recipes.map((item, index) => (
                            <AddRecipes image={item.image} title={item.title} id={item.id} key={index}/>
                        ))}
                    {
                        RandomRecipes.map((item, index) => (
                            <AddRecipes image={item.image} title={item.title} key={index}/>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}

export default Home;
