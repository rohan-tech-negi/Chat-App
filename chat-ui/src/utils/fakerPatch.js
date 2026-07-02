import { faker } from "@faker-js/faker";

// 20 high-quality Unsplash portrait avatar images
const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150&q=80",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80"
];

// 10 high-quality cat images
const cats = [
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1513360309081-36f5e878fc11?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1501820488136-72669a482d14?auto=format&fit=crop&w=400&h=300&q=80"
];

// 10 high-quality food images
const food = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&h=300&q=80"
];

// 10 high-quality abstract images
const abstract = [
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1508247967583-7d982ea00926?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1500485035595-cbeaf2741630?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1502691876148-a84978e59fa8?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&h=300&q=80",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&h=300&q=80"
];

// Setup counters for sequential rotation to give different images to list items
let avatarCounter = 0;
let catsCounter = 0;
let foodCounter = 0;
let abstractCounter = 0;

// Override image methods
if (faker && faker.image) {
  faker.image.avatar = () => {
    const img = avatars[avatarCounter % avatars.length];
    avatarCounter++;
    return img;
  };

  faker.image.cats = () => {
    const img = cats[catsCounter % cats.length];
    catsCounter++;
    return img;
  };

  faker.image.food = () => {
    const img = food[foodCounter % food.length];
    foodCounter++;
    return img;
  };

  faker.image.abstract = () => {
    const img = abstract[abstractCounter % abstract.length];
    abstractCounter++;
    return img;
  };

  // Fallbacks for any catch-all image functions
  faker.image.image = () => {
    return abstract[Math.floor(Math.random() * abstract.length)];
  };
  
  faker.image.imageUrl = () => {
    return abstract[Math.floor(Math.random() * abstract.length)];
  };
}
