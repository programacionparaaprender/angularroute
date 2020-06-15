using System;

namespace Coneccion
{
    public class Conec
    {
        // Because the _instance member is made private, the only way to get the single 
        // instance is via the static Instance property below. This can also be similarly 
        // achieved with a GetInstance() method instead of the property.
        public string conexion;
        private static Conec _instance = null;

        // Making the constructor private prevents other instances from being 
        // created via something like Singleton s = new Singleton(), protecting
        // against unintentional misuse.
        private Conec()
        {
            //conexion = @"Data Source=localhost\SQLEXPRESS;Initial Catalog=Ordenanza;Integrated Security=True";
            conexion = @"Data Source=localhost\SQLEXPRESS;Initial Catalog=Ordenanza;User ID=sa; Password=123";
        }

        public static Conec Instance
        {
            get 
            {
                // The first call will create the one and only instance.
                if (_instance == null)
                {
                    _instance = new Conec();
                }

                // Every call afterwards will return the single instance created above.
                return _instance;
            }
        }
    }
}
