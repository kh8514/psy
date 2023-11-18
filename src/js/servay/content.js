const servayList = [
  { image: { path: "servay", name: "Animal_carcass_3" } },
  { image: { path: "servay", name: "Animal_carcass_6" } },
  { image: { path: "servay", name: "Baby_7" } },
  { image: { path: "servay", name: "Cat_7" } },
  { image: { path: "servay", name: "Dead_bodies_2" } },
  { image: { path: "servay", name: "Dead_bodies_3" } },
  { image: { path: "servay", name: "Dirt_1" } },
  { image: { path: "servay", name: "Dog_attack_3" } },
  { image: { path: "servay", name: "Dog_24" } },
  { image: { path: "servay", name: "Dog_26" } },
  { image: { path: "servay", name: "Dummy_1" } },
  { image: { path: "servay", name: "Explosion_1" } },
  { image: { path: "servay", name: "Explosion_3" } },
  { image: { path: "servay", name: "Fire_5" } },
  { image: { path: "servay", name: "Fire_6" } },
  { image: { path: "servay", name: "Fire_9" } },
  { image: { path: "servay", name: "Injury_1" } },
  { image: { path: "servay", name: "Injury_4" } },
  { image: { path: "servay", name: "KKK_rally_2" } },
  { image: { path: "servay", name: "Lion_5" } },
  { image: { path: "servay", name: "Police_1" } },
  { image: { path: "servay", name: "Sad_face_1" } },
  { image: { path: "servay", name: "Scared_face_3" } },
  { image: { path: "servay", name: "Shark_4" } },
  { image: { path: "servay", name: "Shark_10" } },
  { image: { path: "servay", name: "Snake_2" } },
  { image: { path: "servay", name: "Snake_4" } },
  { image: { path: "servay", name: "Tumor_1" } },
  { image: { path: "servay", name: "War_1" } },
  { image: { path: "servay", name: "War_6" } },
];

const rehersalList = [
  {
    text: { main: "trnsv", sub: "practice" },
    image: { path: "rehearsal2", name: "Animal_carcass_4" },
  },
  {
    text: { main: "attnDi", sub: "practice" },
    image: { path: "rehearsal2", name: "Cemetery_4" },
  },
  {
    text: { main: "trnsv", sub: "practice" },
    image: { path: "rehearsal2", name: "Dog_24" },
  },
  {
    text: { main: "attnDi", sub: "practice" },
    image: { path: "rehearsal2", name: "Gun_3" },
  },
  {
    text: { main: "trnsv", sub: "practice" },
    image: { path: "rehearsal2", name: "Dead_bodies_1" },
  },
  {
    text: { main: "attnDi", sub: "practice" },
    image: { path: "rehearsal2", name: "Fire_7" },
  },
  {
    text: { main: "trnsv", sub: "practice" },
    image: { path: "rehearsal2", name: "Scary_face_2" },
  },
  {
    text: { main: "attnDi", sub: "practice" },
    image: { path: "rehearsal2", name: "Severed_finger_1" },
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const numbers = Array.from({ length: servayList.length }, (_, index) => index);
shuffleArray(numbers);

export { servayList, rehersalList, numbers };
