const path = require('path');

module.exports = {
    entry: './src/index.jsx',  // Asegúrate de que esta ruta esté correcta.
    output: {
        path: path.resolve(__dirname, 'public/js'),  // Usa path.resolve o path.join para generar la ruta correcta
        filename: 'bundle.js'
    },
    mode: 'development', // O 'production'
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // Soporta tanto archivos .js como .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],  // Opcional: evita tener que poner la extensión al importar archivos .js o .jsx
    },
};
