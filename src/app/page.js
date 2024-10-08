import Image from "next/image";
import Omelette from "@/images/image-omelette.jpeg"
import { Young_Serif } from "next/font/google";
import Attribution from "@/components/Attribution";

const youngSerif = Young_Serif({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start ">
        <div className="flex flex-col gap-6 p-6 bg-white max-w-3xl sm:rounded-xl">
          <Image src={Omelette} className="rounded-xl" />
          <div>
            <h2 className={`${youngSerif.className} text-3xl font-bold`}>Simple Omelette Recipe</h2>

            <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
              to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </div>
          <div className="bg-custom-rose-50 rounded-xl px-4 py-2">
            <h4 className={`text-2xl font-semibold text-custom-rose-800`}>Preparation time</h4>

            <ul className="list-disc pl-5 marker:text-custom-rose-800">
              <li><span className="font-bold">Total:</span> Approximately 10 minutes</li>
              <li><span className="font-bold">Préparation:</span> 5 minutes</li>
              <li><span className="font-bold">Cuisson:</span> 5 minutes</li>
            </ul>
          </div>
          <div>
            <h3 className={`${youngSerif.className} text-2xl font-semibold text-custom-brown-800`}>Ingredients</h3>

            <ul className="list-disc pl-5 marker:text-custom-brown-800">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>
          <div>
            <h3 className={`${youngSerif.className} text-2xl font-semibold text-custom-brown-800`}>Instructions</h3>

            <ol className="list-decimal pl-5 marker:text-custom-brown-800 marker:font-bold">
              <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                the eggs evenly coat the surface.</li>
              <li>Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the
                middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li>Enjoy: Serve hot, with additional salt and pepper if needed.</li>
            </ol>
          </div>
          <div>
            <h3 className={`${youngSerif.className} text-2xl font-semibold text-custom-brown-800`}>Nutrition</h3>
            <table className="w-full text-left font-bold">
              <thead>
                <tr className="border-b">
                  <th className="text-custom-stone-600 py-2">Nutrient</th>
                  <th className="text-custom-brown-800 py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="text-custom-stone-600 py-2">Calories</td>
                  <td className="text-custom-brown-800 py-2">277kcal</td>
                </tr>
                <tr className="border-b">
                  <td className="text-custom-stone-600 py-2">Carbs</td>
                  <td className="text-custom-brown-800 py-2">0g</td>
                </tr>
                <tr className="border-b">
                  <td className="text-custom-stone-600 py-2">Protein</td>
                  <td className="text-custom-brown-800 py-2">20g</td>
                </tr>
                <tr className="">
                  <td className="text-custom-stone-600 py-2">Fat</td>
                  <td className="text-custom-brown-800 py-2">22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Attribution/>
    </div>
  );
}
