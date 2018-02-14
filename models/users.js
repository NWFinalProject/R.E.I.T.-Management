module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username:{
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true
        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        address: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        city: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        state: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        role: {
            type: DataTypes.STRING, 
            allowNull: false
        }

    });
    // User.associate = function(models){
    //     User.hasMany(models.Renter, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }
    return User;
}