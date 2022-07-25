### realizar publicación en apache tomcat
1 con powershell node .\node_modules\@angular\cli\bin\ng build --base-href="/angularroure/" --output-path="tomcat_publish/salida" 
2 abrir la carpeta salida ruta frontend/tomcat_publish/
3 copiar la carpeta WEB-INF dentro de salida ruta frontend/tomcat_publish/salida/
4 dentro de frontend/tomcat_publish/salida gitbash(unix, linux) si usas java 7 'C:\Program Files\Java\jdk1.7.0_80\bin\jar.exe' cvf angularroute.war *
5 copiar angularroute.war y pegar en otra ruta para que no se borre, se encuentra en frontend/tomcat_publish/salida/

