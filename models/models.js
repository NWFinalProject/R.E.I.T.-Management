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
            type: DataTypes.DATE,
            allowNull: true,
            notEmpty: true
        }
    });
    return Renter;
};