module.exports = function(sequelize, DataTypes) {

    var Renter = sequelize.define("Renters", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        request_detail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        request_status: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Renter;
};