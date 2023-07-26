module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        role:{
          type:DataTypes.STRING
        }

        // token: {
        //   type: DataTypes.STRING
        // },
        // tokenExpiration: {
        //   type: DataTypes.DATE
        // }
      },
      {
        timestamps: false
      }
    );
  
    // User.prototype.generateToken = async function() {
    //   const token = jwt.sign({ id: this.id }, '9f711f102f7d4775ceb1e5be48c5b1b6488caad9bff1f0eb3f5a47asdadsdadas', { expiresIn: '1h' });
    //   this.token = token;
    //   this.tokenExpiration = Date.now() + 3600000; // 1 hour from now
    //   await this.save();
    //   return token;
    // };
  
    // User.prototype.verifyToken = async function(token) {
    //   if (this.token === token && this.tokenExpiration > Date.now()) {
    //     return true;
    //   }
    //   return false;
    // };
  
    return User;
  };
  