// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
//var bcrypt = require("bcrypt-nodejs");
// Creating our User model

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
        },
        username: {
            type: DataTypes.STRING, 
            allowNull: false
        }

    });

          // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
      // User.prototype.validPassword = function(password) {
      //   return bcrypt.compareSync(password, this.password);
      // };
      // Hooks are automatic methods that run during various phases of the User Model lifecycle
      // In this case, before a User is created, we will automatically hash their password
      // User.hook("beforeCreate", function(user) {
      //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      // });

      User.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        User.hasMany(models.Renter, {
          primaryKey: {
            allowNull: false
          }
        });
      };


    return User;
}