const User = require('./User');
const Bicycle = require('./Bicycle');
const Bicycle_Comment = require('./Bicycle-Comment');
const Part = require('./Part');
const SubPart = require('./Sub-Part');
const Image = require('./Image');

User.hasMany(Bicycle_Comment, { foreignKey: 'user_id' });
Bicycle_Comment.belongsTo(User, { foreignKey: 'user_id' });
Bicycle.hasMany(Bicycle_Comment, { foreignKey: 'bike_id' });
Part.hasMany(SubPart, { foreignKey: 'part_id' });
SubPart.belongsTo(Part, { foreignKey: 'part_id' });

User.hasOne(Image, { foreignKey: 'user_id' });
Image.belongsTo(User, { foreignKey: 'user_id' });
module.exports = {
  User,
  Bicycle,
  Bicycle_Comment,
  Part,
  SubPart,
  Image
};
