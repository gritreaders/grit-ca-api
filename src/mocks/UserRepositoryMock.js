/* eslint-disable no-magic-numbers */
'use strict';

const UserRepository = require('../application/contracts/UserRepository');
// FIXME: change for .json file
const usersMock = [
  {
    userId: 1,
    firstName: 'Bibbye',
    lastName: 'Jurczak',
    email: 'bjurczak0@list-manage.com',
    password: 'J2RSy3x',
    avatarUrl: 'http://dummyimage.com/196x191.jpg/dddddd/000000',
    isActive: true,
  },
  {
    userId: 2,
    firstName: 'Banky',
    lastName: 'Jewson',
    email: 'bjewson1@zdnet.com',
    password: 'ahBNn28g',
    avatarUrl: 'http://dummyimage.com/239x218.bmp/dddddd/000000',
    isActive: true,
  },
  {
    userId: 3,
    firstName: 'Morten',
    lastName: 'Rhoddie',
    email: 'mrhoddie2@imdb.com',
    password: 'emrJXjT',
    avatarUrl: 'http://dummyimage.com/249x160.png/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 4,
    firstName: 'Barbabas',
    lastName: 'Fargie',
    email: 'bfargie3@apple.com',
    password: 'tb4Wp0AJTTB',
    avatarUrl: 'http://dummyimage.com/250x179.png/cc0000/ffffff',
    isActive: false,
  },
  {
    userId: 5,
    firstName: 'Cary',
    lastName: 'Sunnucks',
    email: 'csunnucks4@huffingtonpost.com',
    password: 'bHR04p',
    avatarUrl: 'http://dummyimage.com/155x202.bmp/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 6,
    firstName: 'Maye',
    lastName: 'Hargate',
    email: 'mhargate5@reference.com',
    password: '3LWalTAS',
    avatarUrl: 'http://dummyimage.com/224x245.png/cc0000/ffffff',
    isActive: false,
  },
  {
    userId: 7,
    firstName: 'Arlina',
    lastName: 'Dome',
    email: 'adome6@state.gov',
    password: 'y7VAwE9SCw',
    avatarUrl: 'http://dummyimage.com/157x105.png/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 8,
    firstName: 'Terrell',
    lastName: 'Halburton',
    email: 'thalburton7@dailymail.co.uk',
    password: 'DnvjqBepbUG8',
    avatarUrl: 'http://dummyimage.com/125x227.bmp/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 9,
    firstName: 'Sharity',
    lastName: 'Purcell',
    email: 'spurcell8@ihg.com',
    password: 'DzWu8nxy',
    avatarUrl: 'http://dummyimage.com/151x239.png/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 10,
    firstName: 'Kalle',
    lastName: 'Gillespey',
    email: 'kgillespey9@jugem.jp',
    password: 'vDTdQTF7n4Mx',
    avatarUrl: 'http://dummyimage.com/110x187.jpg/dddddd/000000',
    isActive: false,
  },
  {
    userId: 11,
    firstName: 'Ferris',
    lastName: 'Izzat',
    email: 'fizzata@tripadvisor.com',
    password: 'uYoF4T',
    avatarUrl: 'http://dummyimage.com/141x148.jpg/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 12,
    firstName: 'Towny',
    lastName: 'Gager',
    email: 'tgagerb@geocities.com',
    password: 'haFOPr2rK',
    avatarUrl: 'http://dummyimage.com/164x125.bmp/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 13,
    firstName: 'Damiano',
    lastName: 'Girodin',
    email: 'dgirodinc@cornell.edu',
    password: 'KbwNTs3d',
    avatarUrl: 'http://dummyimage.com/224x122.bmp/ff4444/ffffff',
    isActive: true,
  },
  {
    userId: 14,
    firstName: 'Fayina',
    lastName: 'Pinsent',
    email: 'fpinsentd@bbc.co.uk',
    password: 'kd3GdQVrTT',
    avatarUrl: 'http://dummyimage.com/106x111.bmp/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 15,
    firstName: 'Bengt',
    lastName: 'Pauer',
    email: 'bpauere@gnu.org',
    password: '9YKahbAIivW',
    avatarUrl: 'http://dummyimage.com/124x135.png/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 16,
    firstName: 'Torey',
    lastName: 'Crilley',
    email: 'tcrilleyf@reddit.com',
    password: 'iRFsg21',
    avatarUrl: 'http://dummyimage.com/192x167.jpg/dddddd/000000',
    isActive: false,
  },
  {
    userId: 17,
    firstName: 'Agnesse',
    lastName: 'Ducaen',
    email: 'aducaeng@blogspot.com',
    password: 'uNvE9uZE',
    avatarUrl: 'http://dummyimage.com/207x108.bmp/dddddd/000000',
    isActive: false,
  },
  {
    userId: 18,
    firstName: 'Ephrem',
    lastName: 'Surfleet',
    email: 'esurfleeth@booking.com',
    password: 'lHzCBC',
    avatarUrl: 'http://dummyimage.com/183x200.bmp/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 19,
    firstName: 'Jaimie',
    lastName: 'McRoberts',
    email: 'jmcrobertsi@wp.com',
    password: 'Sdihl4EmL3tY',
    avatarUrl: 'http://dummyimage.com/208x215.png/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 20,
    firstName: 'Bunni',
    lastName: 'Creser',
    email: 'bcreserj@seattletimes.com',
    password: 'mcIPiIMvFHg',
    avatarUrl: 'http://dummyimage.com/143x189.jpg/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 21,
    firstName: 'Riobard',
    lastName: 'Bathow',
    email: 'rbathowk@yandex.ru',
    password: 'XpFiCz',
    avatarUrl: 'http://dummyimage.com/168x163.jpg/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 22,
    firstName: 'Erhard',
    lastName: 'Warrilow',
    email: 'ewarrilowl@xing.com',
    password: 'NzfcSU',
    avatarUrl: 'http://dummyimage.com/130x239.png/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 23,
    firstName: 'Giana',
    lastName: 'Burtenshaw',
    email: 'gburtenshawm@webmd.com',
    password: 'jvT28yD2',
    avatarUrl: 'http://dummyimage.com/114x188.bmp/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 24,
    firstName: 'Addy',
    lastName: 'Trask',
    email: 'atraskn@topsy.com',
    password: 'WAguIrv',
    avatarUrl: 'http://dummyimage.com/240x124.png/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 25,
    firstName: 'Foster',
    lastName: 'Dunbar',
    email: 'fdunbaro@ihg.com',
    password: 'c5ZJWrZI',
    avatarUrl: 'http://dummyimage.com/173x120.jpg/dddddd/000000',
    isActive: false,
  },
  {
    userId: 26,
    firstName: 'Eberto',
    lastName: 'Cabane',
    email: 'ecabanep@bandcamp.com',
    password: 'XCpOxIlP',
    avatarUrl: 'http://dummyimage.com/173x218.png/cc0000/ffffff',
    isActive: false,
  },
  {
    userId: 27,
    firstName: 'Erica',
    lastName: 'Ivanenkov',
    email: 'eivanenkovq@unc.edu',
    password: 'UCp7yabeFq',
    avatarUrl: 'http://dummyimage.com/133x198.png/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 28,
    firstName: 'Averell',
    lastName: 'Parratt',
    email: 'aparrattr@columbia.edu',
    password: '6gMbpSrfjaW',
    avatarUrl: 'http://dummyimage.com/100x177.jpg/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 29,
    firstName: 'Ferris',
    lastName: 'Strute',
    email: 'fstrutes@pinterest.com',
    password: 'rYaQGoNs8',
    avatarUrl: 'http://dummyimage.com/108x195.bmp/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 30,
    firstName: 'Greer',
    lastName: 'Harcourt',
    email: 'gharcourtt@squidoo.com',
    password: 'M6MkLk',
    avatarUrl: 'http://dummyimage.com/212x245.bmp/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 31,
    firstName: 'Johnna',
    lastName: 'Mac',
    email: 'jmacu@csmonitor.com',
    password: 'gUUhyQwvq',
    avatarUrl: 'http://dummyimage.com/157x238.png/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 32,
    firstName: 'Yehudi',
    lastName: 'Sondland',
    email: 'ysondlandv@dot.gov',
    password: 'NK8rMl5k6',
    avatarUrl: 'http://dummyimage.com/191x165.png/dddddd/000000',
    isActive: true,
  },
  {
    userId: 33,
    firstName: 'Felicio',
    lastName: 'Longina',
    email: 'flonginaw@cornell.edu',
    password: 'mzXiGWPvq',
    avatarUrl: 'http://dummyimage.com/184x165.jpg/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 34,
    firstName: 'Kirk',
    lastName: 'Chittleburgh',
    email: 'kchittleburghx@accuweather.com',
    password: 'UUxTBZ',
    avatarUrl: 'http://dummyimage.com/149x216.bmp/dddddd/000000',
    isActive: false,
  },
  {
    userId: 35,
    firstName: 'Livvy',
    lastName: 'Comber',
    email: 'lcombery@usa.gov',
    password: 'pPa4Br14',
    avatarUrl: 'http://dummyimage.com/111x146.png/dddddd/000000',
    isActive: false,
  },
  {
    userId: 36,
    firstName: 'Emlynn',
    lastName: 'Mercer',
    email: 'emercerz@ocn.ne.jp',
    password: 'eKrBsISdPT',
    avatarUrl: 'http://dummyimage.com/146x149.png/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 37,
    firstName: 'Bradly',
    lastName: 'Codi',
    email: 'bcodi10@histats.com',
    password: 'aNRlDEDjr',
    avatarUrl: 'http://dummyimage.com/239x154.png/ff4444/ffffff',
    isActive: true,
  },
  {
    userId: 38,
    firstName: 'Katha',
    lastName: 'Unstead',
    email: 'kunstead11@reverbnation.com',
    password: 'VMp1mORJuNI',
    avatarUrl: 'http://dummyimage.com/248x127.png/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 39,
    firstName: 'Christine',
    lastName: 'Hatterslay',
    email: 'chatterslay12@newsvine.com',
    password: 'kzincrD',
    avatarUrl: 'http://dummyimage.com/146x152.png/5fa2dd/ffffff',
    isActive: true,
  },
  {
    userId: 40,
    firstName: 'Locke',
    lastName: 'Erat',
    email: 'lerat13@jimdo.com',
    password: 'S7b9OSXRDw',
    avatarUrl: 'http://dummyimage.com/240x235.bmp/cc0000/ffffff',
    isActive: false,
  },
  {
    userId: 41,
    firstName: 'Jade',
    lastName: 'Fredi',
    email: 'jfredi14@topsy.com',
    password: 'pP5sY6C',
    avatarUrl: 'http://dummyimage.com/197x155.png/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 42,
    firstName: 'Kiele',
    lastName: 'Vedmore',
    email: 'kvedmore15@delicious.com',
    password: '6pLM2fNx6NP1',
    avatarUrl: 'http://dummyimage.com/215x238.bmp/dddddd/000000',
    isActive: false,
  },
  {
    userId: 43,
    firstName: 'Lemar',
    lastName: 'Serris',
    email: 'lserris16@wunderground.com',
    password: '9M6ZCOQR48H',
    avatarUrl: 'http://dummyimage.com/151x198.jpg/dddddd/000000',
    isActive: false,
  },
  {
    userId: 44,
    firstName: 'Faustine',
    lastName: 'Gislebert',
    email: 'fgislebert17@wikimedia.org',
    password: 'QVj64Dzu',
    avatarUrl: 'http://dummyimage.com/220x183.png/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 45,
    firstName: 'Mara',
    lastName: 'Dupree',
    email: 'mdupree18@nsw.gov.au',
    password: 'L8k1lIu',
    avatarUrl: 'http://dummyimage.com/136x250.jpg/5fa2dd/ffffff',
    isActive: false,
  },
  {
    userId: 46,
    firstName: 'Junette',
    lastName: 'Matteuzzi',
    email: 'jmatteuzzi19@yolasite.com',
    password: 'Wi1FEzA',
    avatarUrl: 'http://dummyimage.com/120x250.jpg/cc0000/ffffff',
    isActive: true,
  },
  {
    userId: 47,
    firstName: 'Renae',
    lastName: 'Giffen',
    email: 'rgiffen1a@chronoengine.com',
    password: 'px8xHqVb',
    avatarUrl: 'http://dummyimage.com/133x138.png/dddddd/000000',
    isActive: true,
  },
  {
    userId: 48,
    firstName: 'Allison',
    lastName: 'Jumont',
    email: 'ajumont1b@ted.com',
    password: 'c1V2uI9AuDS',
    avatarUrl: 'http://dummyimage.com/126x146.jpg/dddddd/000000',
    isActive: true,
  },
  {
    userId: 49,
    firstName: 'Margie',
    lastName: 'Oxer',
    email: 'moxer1c@typepad.com',
    password: '2bMQjVaO3D',
    avatarUrl: 'http://dummyimage.com/119x180.bmp/ff4444/ffffff',
    isActive: false,
  },
  {
    userId: 50,
    firstName: 'Perle',
    lastName: 'Stolze',
    email: 'pstolze1d@lulu.com',
    password: 'EODvrAjvD',
    avatarUrl: 'http://dummyimage.com/100x147.jpg/5fa2dd/ffffff',
    isActive: true,
  },
];

const getNextUserId = () => {
  return usersMock.length + 1;
};

const getFirstUser = () => {
  return usersMock[0];
};

const getCount = () => {
  return usersMock.length;
};

class UserRepositoryMock extends UserRepository {
  constructor(userModel) {
    super(userModel);
  }

  add(user) {
    user.userId = getNextUserId();
    usersMock.push(user);
    return Promise.resolve(usersMock[usersMock.length - 1]);
  }

  update(userId, user) {
    let searchedUser = this.getById(userId).then((finedUser) => {
      return finedUser;
    });

    searchedUser.firstName = user.firstName;
    searchedUser.lastName = user.lastName;
    searchedUser.email = user.email;
    searchedUser.password = user.password;
    searchedUser.avatarUrl = user.avatarUrl;
    searchedUser.isActive = user.isActive;

    return Promise.resolve(searchedUser);
  }

  delete(userId) {
    const userIndex = usersMock.findIndex((user) => {
      return user.userId === userId;
    });

    usersMock.slice(userIndex, 1);

    return Promise.resolve({ message: 'user deleted' });
  }

  getById(userId) {
    const searchedUser = usersMock.find((user) => {
      return user.userId === userId;
    });
    return Promise.resolve(searchedUser);
  }

  getByEmail(email) {
    const searchedUser = usersMock.find((user) => {
      return user.email === email;
    });
    return Promise.resolve(searchedUser);
  }

  getAll(page, limit) {
    return Promise.resolve(usersMock.slice(page, limit));
  }

  getCount() {
    return Promise.resolve(getCount());
  }
}

module.exports = {
  usersMock,
  getNextUserId,
  getFirstUser,
  getCount,
  UserRepositoryMock,
};
