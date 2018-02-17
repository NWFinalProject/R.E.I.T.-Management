module.exports = function(sequelize, DataTypes) {

    var Renter = sequelize.define("Renter", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        request_detail: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        request_status: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        contractor_name: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        scheduled_date: {
            type: DataTypes.STRING,
            allowNull: true,
            notEmpty: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

        Renter.associate = function(models) {
   // We're saying that a Post should belong to an Author
   // A Post can't be created without an Author due to the foreign key constraint
       Renter.belongsTo(models.User, {
         foreignKey: false,
         allowNull: true
       })
     };


    return Renter;
};