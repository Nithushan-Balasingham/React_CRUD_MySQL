

module.exports=(sequelize,DataTypes)=>{
    const Product = sequelize.define("product", {
        title:{
            type: DataTypes.STRING,
            allowNull : false
        },
        description:{
            type: DataTypes.TEXT
        },
        price:{
            type:DataTypes.INTEGER
        }
    },
        {
            timestamps: false,
        })
    return Product
}