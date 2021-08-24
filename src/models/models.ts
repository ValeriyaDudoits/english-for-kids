export enum CategoryNames {
  Actions = 'actions',
  Animals1 = 'animals1',
  Animals2 = 'animals2',
  Emotions = 'emotions',
  Family = 'family',
  Food = 'food',
  Fruits = 'fruits',
  Nature = 'nature',
  Main = 'main',
  Stat = 'statistic',
}
export enum CategoryPass {
  Actions = '.main/actions.jpg',
  Animals1 = '.main/animals1.jpg',
  Animals2 = '.main/animals2.jpg',
  Emotions = '.main/emotions.jpg',
  Family = '.main/family.jpg',
  Food = '.main/food.jpg',
  Fruits = '.main/fruits.jpg',
  Nature = '.main/nature.jpg',
}
export const actionsMap = new Map([
  ['climb', 'карабкаться'],
  ['dive', 'дайвить'],
  ['drive', 'водить'],
  ['fly', 'летать'],
  ['jump', 'прыгать'],
  ['ride', 'кататься'],
  ['run', 'бежать'],
  ['walk', 'гулять'],
]);

export const animals1Map = new Map([
  ['cat', 'кот'],
  ['elephant', 'слон'],
  ['fish', 'рыба'],
  ['monkey', 'обезьяна'],
  ['pig', 'свинья'],
  ['shark', 'акула'],
  ['sheep', 'овца'],
  ['squirrel', 'белка'],
]);

export const animals2Map = new Map([
  ['bee', 'пчела'],
  ['dog', 'собака'],
  ['frog', 'лягушка'],
  ['giraffe', 'жираф'],
  ['horse', 'лошадь'],
  ['lion', 'лев'],
  ['panda', 'панда'],
  ['rabbit', 'кролик'],
]);

export const emotionsMap = new Map([
  ['angry', 'злой'],
  ['brave', 'смелый'],
  ['confused', 'сконфуженный'],
  ['crying', 'плачущий'],
  ['happy', 'счастливый'],
  ['sad', 'грустный'],
  ['sick', 'больной'],
  ['surprised', 'удивленный'],
]);

export const familyMap = new Map([
  ['brother', 'брат'],
  ['family', 'семья'],
  ['father', 'отец'],
  ['friend', 'друг'],
  ['grandma', 'бабушка'],
  ['grandpa', 'дедушка'],
  ['mother', 'мама'],
  ['sister', 'сестра'],
]);

export const foodMap = new Map([
  ['bread', 'хлеб'],
  ['burger', 'бургер'],
  ['cake', 'торт'],
  ['cookies', 'печенье'],
  ['donuts', 'пончики'],
  ['ice-cream', 'мороженое'],
  ['rice', 'рис'],
  ['tako', 'тако'],
]);

export const fruitsMap = new Map([
  ['apple', 'яблоко'],
  ['banana', 'банан'],
  ['cherry', 'вишня'],
  ['grapes', 'виноград'],
  ['lemon', 'лимон'],
  ['orange', 'апельсин'],
  ['peach', 'персик'],
  ['pear', 'груша'],
]);

export const natureMap = new Map([
  ['beach', 'пляж'],
  ['flower', 'цветок'],
  ['forest', 'лес'],
  ['lake', 'озеро'],
  ['mountain', 'гора'],
  ['rainbow', 'радуга'],
  ['snow', 'снег'],
  ['tree', 'дерево'],
]);

export interface ImageCategory {
  category: string,
  images: string[],
}

export interface AudioCategory {
  category: string,
  audio: string[],
}

export interface ArrayStatistic {
  category: string
  clicks: number
  correct: number
  persents: number
  translation: string
  word: string
  wrong: number
}
interface ImagesPathI {
  [key: string]: number
}

interface CategoryByNameI {
  [key: string]: string
}

export const imagesPath: ImagesPathI = {
  actions: 1,
  animals1: 2,
  animals2: 3,
  emotions: 4,
  family: 5,
  food: 6,
  fruits: 7,
  nature: 8,
};
export const audioPath: ImagesPathI = {
  actions: 0,
  animals1: 1,
  animals2: 2,
  emotions: 3,
  family: 4,
  food: 5,
  fruits: 6,
  nature: 7,
};

export const categoryByName: CategoryByNameI = {
  climb: 'actions',
  dive: 'actions',
  drive: 'actions',
  fly: 'actions',
  jump: 'actions',
  ride: 'actions',
  run: 'actions',
  walk: 'actions',
  cat: 'animals1',
  elephant: 'animals1',
  fish: 'animals1',
  monkey: 'animals1',
  pig: 'animals1',
  shark: 'animals1',
  sheep: 'animals1',
  squirrel: 'animals1',
  bee: 'animals2',
  dog: 'animals2',
  frog: 'animals2',
  giraffe: 'animals2',
  horse: 'animals2',
  lion: 'animals2',
  panda: 'animals2',
  rabbit: 'animals2',
  angry: 'emotions',
  brave: 'emotions',
  confused: 'emotions',
  crying: 'emotions',
  happy: 'emotions',
  sad: 'emotions',
  sick: 'emotions',
  surprised: 'emotions',
  brother: 'family',
  family: 'family',
  father: 'family',
  friend: 'family',
  grandma: 'family',
  grandpa: 'family',
  mother: 'family',
  sister: 'family',
  bread: 'food',
  burger: 'food',
  'ice-cream': 'food',
  cake: 'food',
  cookies: 'food',
  donuts: 'food',
  rice: 'food',
  tako: 'food',
  apple: 'fruits',
  cherry: 'fruits',
  banana: 'fruits',
  grapes: 'fruits',
  lemon: 'fruits',
  orange: 'fruits',
  peach: 'fruits',
  pear: 'fruits',
  beach: 'nature',
  flower: 'nature',
  forest: 'nature',
  lake: 'nature',
  mountain: 'nature',
  rainbow: 'nature',
  snow: 'nature',
  tree: 'nature',
};

export const translationByName: CategoryByNameI = {
  climb: 'карабкаться',
  dive: 'дайвить',
  drive: 'водить',
  fly: 'летать',
  jump: 'прыгать',
  ride: 'кататься',
  run: 'бежать',
  walk: 'гулять',
  cat: 'кот',
  elephant: 'слон',
  fish: 'рыба',
  monkey: 'обезьяна',
  pig: 'свинья',
  shark: 'акула',
  sheep: 'овца',
  squirrel: 'белка',
  bee: 'пчела',
  dog: 'собака',
  frog: 'лягушка',
  giraffe: 'жираф',
  horse: 'лошадь',
  lion: 'лев',
  panda: 'панда',
  rabbit: 'кролик',
  angry: 'злой',
  brave: 'смелый',
  confused: 'сконфуженный',
  crying: 'плачущий',
  happy: 'счастливый',
  sad: 'грустный',
  sick: 'больной',
  surprised: 'удивленный',
  brother: 'брат',
  family: 'семья',
  father: 'отец',
  friend: 'друг',
  grandma: 'бабушка',
  grandpa: 'дедушка',
  mother: 'мама',
  sister: 'сестра',
  bread: 'хлеб',
  burger: 'бургер',
  cake: 'торт',
  cookies: 'печенье',
  donuts: 'пончики',
  'ice-cream': 'мороженое',
  rice: 'рис',
  tako: 'тако',
  apple: 'яблоко',
  banana: 'банан',
  cherry: 'вишня',
  grapes: 'виноград',
  lemon: 'лимон',
  orange: 'апельсин',
  peach: 'персик',
  pear: 'груша',
  beach: 'пляж',
  flower: 'цветок',
  forest: 'лес',
  lake: 'озеро',
  mountain: 'гора',
  rainbow: 'радуга',
  snow: 'снег',
  tree: 'дерево',
};
