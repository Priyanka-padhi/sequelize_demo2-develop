module.exports = (sequelize,DataTypes) =>{
    const Product = sequelize.define('product',{       //product -model name
                                                       // Model attributes are defined here
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Product;
};