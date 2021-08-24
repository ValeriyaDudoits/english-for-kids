import { CategoryNames } from './models';

export const WORD_ARRAY: string[] = [];
export const TIME_OF_RESULT_DIV = 2000;
export const IN_PROCENT = 100;
export const MAX_NUMBER_OF_CARDS = 8;
export const CLASS_MARK = 'mark';
export const MIXING_COEFFICIENT = 0.5;
export const NUMBER_OF_STARS_IN_CONTAINER = 15;

export const appRoutes: { [key: string]: string } = {
  '/': CategoryNames.Main,
  'actions/': CategoryNames.Actions,
  'animals1/': CategoryNames.Animals1,
  'animals2/': CategoryNames.Animals2,
  'emotions/': CategoryNames.Emotions,
  'family/': CategoryNames.Family,
  'food/': CategoryNames.Food,
  'fruits/': CategoryNames.Fruits,
  'nature/': CategoryNames.Nature,
  'stat/': 'statistic',
};

export enum Mode {
  Play = 'Play',
  Train = 'Train',
}

export enum LSItem {
  Click = 'click',
  Correct = 'Correct',
  Wrong = 'Wrong',
}

export enum Criterion {
  Click = 'click',
  Correct = 'Correct',
  Wrong = 'Wrong',
  Translation = 'Translation',
  Category = 'Category',
  Persents = 'Persents',
  Name = 'Name',
}

export enum Link {
  Main = '#/',
  Actions = '#actions/',
  Animals1 = '#animals1/',
  Animals2 = '#animals2/',
  Emotions = '#emotions/',
  Family = '#family/',
  Food = '#food/',
  Fruits = '#fruits/',
  Nature = '#nature/',
  Stat = '#stat/',
}

export enum Word {
  Climb = 'climb',
  Dive = 'dive',
  Drive = 'drive',
  Fly = 'fly',
  Jump = 'jump',
  Ride = 'ride',
  Run = 'run',
  Walk = 'walk',
  Cat = 'cat',
  Elephant = 'elephant',
  Fish = 'fish',
  Monkey = 'monkey',
  Pig = 'pig',
  Shark = 'shark',
  Sheep = 'sheep',
  Squirrel = 'squirrel',
  Bee = 'bee',
  Dog = 'dog',
  Frog = 'frog',
  Giraffe = 'giraffe',
  Horse = 'horse',
  Lion = 'lion',
  Panda = 'panda',
  Rabbit = 'rabbit',
  Angry = 'angry',
  Brave = 'brave',
  Confused = 'confused',
  Crying = 'crying',
  Happy = 'happy',
  Sad = 'sad',
  Sick = 'sick',
  Surprised = 'surprised',
  Brother = 'brother',
  Father = 'father',
  Friend = 'friend',
  Grandma = 'grandma',
  Grandpa = 'grandpa',
  Mother = 'mother',
  Sister = 'sister',
  Bread = 'bread',
  Burger = 'burger',
  IceCream = 'ice-cream',
  Cake = 'cake',
  Cookies = 'cookies',
  Donuts = 'donuts',
  Rice = 'rice',
  Tako = 'tako',
  Apple = 'apple',
  Cherry = 'cherry',
  Banana = 'banana',
  Grapes = 'grapes',
  Lemon = 'lemon',
  Orange = 'orange',
  Peach = 'peach',
  Pear = 'pear',
  Beach = 'beach',
  Flower = 'flower',
  Forest = 'forest',
  Lake = 'lake',
  Mountain = 'mountain',
  Rainbow = 'rainbow',
  Snow = 'snow',
  Tree = 'tree',
}
