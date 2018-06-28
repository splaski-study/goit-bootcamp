const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        phone: '+1 (848) 556-2344',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        phone: '+1 (855) 582-2464',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        phone: '+1 (814) 593-3825',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        phone: '+1 (909) 547-2687',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        phone: '+1 (956) 512-2693',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        phone: '+1 (876) 411-2433',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        phone: '+1 (979) 504-2554',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
];

/*
  Используя массив (users) объектов пользователей, напишите функции которые с помощью
  функциональных методов массивов (никаких for, splice и т.д.) выполняют указанные операции.
*/

/**
 * 1) Получить массив имен (поле name) всех пользователей
 */

// classic:
/*
const getAllNames = function(arr) {
    return arr.map(function(user) {
        return user.name;
    })
};
*/

// arrow:
const getAllNames = arr => arr.map(user => user.name);

console.log(getAllNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


/**
 * 2) Получить массив объектов пользователей по цвету глаз (поле eyeColor)
 */

/*
// classic:
const getUsersByEyeColor = function(arr, color) {
    return arr.filter(function(user) {
        return user.eyeColor === color ? user : null;
    })
};
*/

// arrow function syntax:
const getUsersByEyeColor = (arr, color) => arr.filter( user => user.eyeColor === color ? user : null);

console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

/**
 * 3) Получить массив имен пользователей по полу (поле gender)
 */

// classic:
/*
const getUsersByGender = function(arr, gender) {
    let filteredUsers = arr.filter(function (user) {
        return user.gender === gender;   // the same as return user.gender === gender ? user : null
    });
    return filteredUsers.map(function(user) {
        return user.name
    })
};
*/

// arrow:
const getUsersByGender = (arr, gender) => arr.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersByGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


/**
 * 4) Получить массив только неактивных пользователей (поле isActive)
 */

// classic syntax:
/*
const getInactiveUsers = function(arr) {
    return arr.filter(function(user) {return !user.isActive}); // the same as return !user.isActive ? user : null
};
*/

// arrow syntax:
const getInactiveUsers = arr => arr.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

/**
 * 5) Получить пользоваля (не массив) по email (поле email, он уникальный)
 */

// classic function syntax:
/*
const getUserByEmail = function(arr, email) {
    return arr.find(function(user) {
        return user.email === email;
    })
};
*/

// arrow function syntax
const getUserByEmail = (arr, email) => arr.find(user => user.email === email);

console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


/**
 * 6) Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
 */

// classic syntax:
/*
const getUsersWithAge = function(arr, min, max) {
    return arr.filter(function(user) {
        return user.age >= min && user.age <= max;
    })
};
*/

// arrow function syntax:
const getUsersWithAge = (arr, min, max) => arr.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


/**
 * 7) Получить общую сумму баланса (поле balance) всех пользователей
 */

// classic syntax:
/*
const getTotalBalance = function(arr) {
    return arr.reduce(function(total, user) {
        return total + user.balance;
    }, 0)
};
*/

// arrow function syntax:
const getTotalBalance = arr => arr.reduce((total, user) => total + user.balance, 0);

console.log(getTotalBalance(users)); // 20916


/**
 * 8) Массив имен всех пользователей у которых есть друг с указанным именем
 */

// classic syntax:
/*
const getUsersByFriend = function(arr, name) {
    return arr.filter(function(user) {
        return user.friends.includes(name);
    })
};
*/

// arrow function syntax:
const getUsersByFriend = (arr, name) => arr.filter(user => user.friends.includes(name));

console.log(getUsersByFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
*/

/**
 * Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
 * повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
 */
const getAllSkills = arr => arr
    .map(user => user.skills)  // array; each element is an array of skills of each user
    .reduce((skills, userSkills) => skills.concat(userSkills), [])  // single array that combines all users' skills; has duplicates
    .sort()  // sorted alphabetically
    .filter((skill, index, skills) => skills[index] !== skills[index+1]);
// if element is the same as the next one in the array, exclude it.
// for the last element in the array, skills[index+1] is undefined


console.log(getAllSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


/**
 * Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
 */
const getUserNamesSortedByFriendsCount = arr => arr
    .sort((userA, userB) => userA.friends.length - userB.friends.length)
    .map(user => user.name);
// NOTE: remember that sort() works with two generic elements; it walks thru array and compares all pairs of elements

console.log(getUserNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]