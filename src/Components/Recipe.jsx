import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Recipe = () => {
  const location = useLocation();
  const { recipe } = location.state; 
  const navigate = useNavigate();

  const handleLogoClick = () =>{
    navigate('/')
  }
 



  return (
    <div>
       <div className='Logo flex text-4xl font-bold mb-6 cursor-pointer font-mono' onClick={handleLogoClick}>
        <div className='text-orange-500'>Tasty</div>
        <div className='text-white'>Hunt</div>
      </div>
      <div
        className="Container relative w-full min-h-[100vh] p-8 flex flex-col rounded-4xl max-sm:p-3"
        style={{
          backgroundImage: `url(${recipe.r_thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 h-full rounded-4xl"></div>

        
        <div className="TextContainer relative">
          <h1 className="text-5xl font-bold mb-3 max-sm:text-3xl">{recipe.r_name} <i> {`(${recipe.r_area})`}</i></h1>
          <div className="flex gap-20 text-xl justify-center mb-10 max-md:text-lg">
            <div className="Ingredients">
              <div className="font-semibold text-2xl mb-2.5 max-sm:text-xl">Ingredients</div>
              <ul>
                {recipe.r_ingredients.map((ingredient, index) => (
                  <li key={index}> {ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="Measures">
              <div className="font-semibold text-2xl mb-2.5 max-md:text-xl">Measurments</div>
              <ul>
                {recipe.r_measurements.map((measure, index) => (
                  <li key={index}> {measure}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold">Instructions:</div>
            <p className="text-lg font-semibold max-sm:font-medium">
              {recipe.r_instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
