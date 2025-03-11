let herbs = 0;
let berries = 0;
let mushrooms = 0;
let water = 0;
let flowers = 0;

function addHerb() {
  herbs++;
  console.log("Current herbs: ", herbs);
  cauldron();
}
function addBerries() {
  berries++;
  console.log("Current berries: ", berries);
  cauldron();
}

function addMushroom() {
  mushrooms++;
  console.log("Current mushrooms: ", mushrooms);
  cauldron();
}

function addWater() {
  water++;
  console.log("Current water: ", water);
  cauldron();
}

function addFlowers() {
  flowers++;
  console.log("Current flowers: ", flowers);
  cauldron();
}

function addIngredient(ingredient) {
  ingredient++;
  console.log("Added 1 " + ingredient + " to the cauldron");
}

const cauldron = () => {
  console.log("Cauldron contains:");
  console.log("herbs:", herbs);
  console.log("berries:", berries);
  console.log("Water:", water);
  console.log("Mushroom:", mushrooms);
  console.log("Flowers: ", flowers);
};
function cauldronReset() {
  herbs = 0;
  mushrooms = 0;
  berries = 0;
  water = 0;
  flowers = 0;
}

function brewHealingPotion() {
  if (herbs === 2 && mushrooms === 1 && berries === 1) {
    console.log("Succsesfully your created a healing potion");
    cauldronReset();
  } else {
    console.log("You fail!");
  }
}

function brewManaPotion() {
  if (water === 2 && flowers === 1 && berries === 1) {
    console.log("Succsesfully your created a mana potion");
    cauldronReset();
  } else {
    console.log("You mana fail!");
  }
}


