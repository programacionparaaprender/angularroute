### cursos 
>- https://udemy.com/course/sonarqube
>- https://udemy.com/course/angular-jasmine-karma
>- https://udemy.com/course/angular-jasmine-karma/learn/lecture/25126866#overview
>- https://www.udemy.com/course/angular-introduccion-a-pruebas-unitarias-y-tdd-en-espanol/learn/lecture/21281168#overview

### enlace karma
>- github.com/karma-nunner/karma-coverage/blob/master/README.md
>- npm install karma karma-coverage --save-dev
>- comentar en karma.conf.js //require('karma-coverage-istanbul-reporter'),
>- agregar en karma.conf.js require('karma-coverage'),

### mejorar presentación de reporte unitario en el terminal
>- https://www.npmjs.com/package/karma-mocha-reporter
>- npm install --save-dev karma-mocha-reporter
>- añadir luego al archivo karma.conf.js require('karma-mocha-reporter')
>- modificar reporters: ['progress', 'kjhtml'], a reporters: ['mocha', 'kjhtml'],

### json-server
>- github.com/typicode/json-server
>- npm install -g json-server
>- json-server --watch db.json

### página de scanner
https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/

### primero  
cd refugio 
luego ejecutar comandos

### corrección de error de moment
https://stackoverflow.com/questions/62273153/this-module-is-declared-with-using-export-and-can-only-be-used-with-a-defau

### comando token
### comando empleando token
```
C:\sonarqube-8.9.10.61524\ss-4.7.x-php\bin\
sonar-scanner -Dsonar.login=1dafde238dbde9821ab0fbc409e56008401b7fb0 -Dsonar.host.url=http://localhost:9000 -Dsonar.projectName=angularroute -Dsonar.projectKey=angularrouteID -Dsonar.projectVersion=1.0 -Dsonar.sources=.
```
### error consumo de memoria css
```
"development": {
                            "fileReplacements": [
                                {
                                    "replace": "src/environments/environment.ts",
                                    "with": "src/environments/environment.dev.ts"
                                }
                            ],
                            "optimization": true,
                            "outputHashing": "all",
                            "sourceMap": false,
                            "namedChunks": false,
                            "extractLicenses": true,
                            "vendorChunk": false,
                            "buildOptimizer": true,
                            "budgets": [
                                {
                                    "type": "initial",
                                    "maximumWarning": "5mb",
                                    "maximumError": "4mb"
                                },
                                {
                                    "type": "anyComponentStyle",
                                    "maximumWarning": "1mb",
                                    "maximumError": "1mb"
                                }
                            ]
                        }
```


### comando login

sonar-scanner -Dsonar.host.url=http://localhost:9000 -Dsonar.login=admin -Dsonar.password=admin -Dsonar.projectName=angularroute -Dsonar.projectKey=angularrouteID -Dsonar.projectVersion=1.0 -Dsonar.sources=.

### realizar publicación en apache tomcat o rethad 7.2 EAP
1 con powershell node .\node_modules\@angular\cli\bin\ng build --base-href="/angularroure/" --output-path="tomcat_publish/salida" 
2 abrir la carpeta salida ruta frontend/tomcat_publish/
3 copiar la carpeta WEB-INF dentro de salida ruta frontend/tomcat_publish/salida/
4 dentro de frontend/tomcat_publish/salida gitbash(unix, linux) si usas java 7 'C:\Program Files\Java\jdk1.7.0_80\bin\jar.exe' cvf angularroute.war *
5 copiar angularroute.war y pegar en otra ruta para que no se borre, se encuentra en frontend/tomcat_publish/salida/

### habilitar el coverage
https://www.tutorialspoint.com/angular_cli/angular_cli_code_coverage.htm

### habilitar eslint
@angular-devkit/build-angular": "~0.1102.12",
"@angular-eslint/builder": "4.3.0",
"@angular-eslint/eslint-plugin": "4.3.0",
"@angular-eslint/eslint-plugin-template": "4.3.0",
"@angular-eslint/schematics": "4.3.0",
"@angular-eslint/template-parser": "4.3.0",

npm install --save @angular-eslint/builder@4.3.0
npm install --save @angular-eslint/eslint-plugin@4.3.0
npm install --save @angular-eslint/eslint-plugin-template@4.3.0
npm install --save @angular-eslint/schematics@4.3.0
npm install --save @angular-eslint/template-parser@4.3.0


### pruebas unitarias a inyectables
https://medium.com/practical-angular-karma-testing/testing-angular-injectables-in-practice-part-1-bfde2e02fb35


