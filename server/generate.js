// Copied from https://github.com/oopcoders/NGRX-Course/blob/master/server/generate.js
var faker = require("faker");

var database = {
  tasks: [],
  categories: [],
  carts: [],
  users: [],
};

for (var i = 1; i <= 10; i++) {
  database.tasks.push({
    id: i,
    title: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    group: '',
    time: '10:34am',
    isComplete: faker.random.boolean()
  });
}

for (var i = 1; i <= 50; i++) {
  database.categories.push({
    id: i,
    name: faker.lorem.word(),
    description: faker.lorem.sentence(),
  });
}

database.carts.push({
  id: 1,
  userid: 2,
  products: [],
});

database.carts.push({
  id: 2,
  userid: 1,
  products: [],
});

database.users.push({
  id: "1",
  username: "admin",
  email: "admin@admin.com",
  isadmin: true,
});

database.users.push({
  id: "2",
  username: "user",
  email: "user@user.com",
  isadmin: false,
});

console.log(JSON.stringify(database));
