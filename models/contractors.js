module.exports = function(sequelize, DataTypes) {

    var Contractor = sequelize.define("Contractor", {
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
        company_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Contractor;
};