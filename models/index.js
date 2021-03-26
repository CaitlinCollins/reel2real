const User = require('./User');

const Record = require('./Record');

Record.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Record, {
    foreignKey: 'user_id',
});


module.exports = { User, Record };



