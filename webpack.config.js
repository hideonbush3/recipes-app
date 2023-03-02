const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",   // 진입파일, 메인파일, 시작파일
    output: {
        path: path.join(__dirname, "dist"),   // 번들파일 저장위치
        filename: "app.bundle.js"   // 기본파일명 : main.js
    },
    module: {   // 각 파일에 대한 세부적인 번들링 작업 정의, 어떤 파일들을 합칠것인지
        rules: [
            { test: /\.js$/,   // .js 로 끝나는 파일에 대한 규칙 정의
                exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(png|jpe?g|gif|svg|ico)$/i, // .js 로 끝나는 파일에 대한 규칙 정의
                use: [ { loader: "file-loader", }, ], },
        ]
    },
    devServer: {  // 서버 구동시 관련 내용 설정
        static: path.join(__dirname, 'dist'),   // dist를 루트 디렉토리로
        open: true,   // 자동으로 브라우져 실행
        hot: true,    // 수정사항 발생시 브라우져에 즉시 반영
    },

    // dist안에 index.html을 자동으로 생성해줌
    // 이게 없으면 내가 직접 dist 폴더내부에 html을 작성해야함
    plugins: [
        new HtmlWebpackPlugin({  // dist 안에 index.html 자동 생성
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};

