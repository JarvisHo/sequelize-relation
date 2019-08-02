var store = require('./models');

// https://sequelize.org/master/manual/models-usage.html

// How to rename attribute by 'AS'
store.user.findOne({
  where: { id: 1 },
  raw: true,
  attributes: ['id', ['firstname', 'nickname'], 'email']
}).then(user => {
  console.log(user)
})

// store.user.findAll({
//   where: {
//     id: 1
//   },
//   raw: true,
//   include: [
//     store.shop, store.userPlatform
//   ]
// }).then(users => {
//   console.log(users);
// })

// store.shop.findAll({
//   where: {
//     id: 1
//   },
//   raw: true,
//   include: [
//     store.user
//   ]
// }).then(users => {
//   console.log(users);
// })
