using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;


namespace BLWeb.Api
{
    public class BLMenu
    {
        public DataTable ObtenerTipoUsuarioMenu(oMenu o)
        {
            DataTable dt = new DataTable();
            DALEMenu dale = new DALEMenu();
            dt = dale.ObtenerTipoUsuarioMenu(o);
            return dt;
        }
        public DataTable ObtenerMenusHijos(oMenu o)
        {
            DataTable dt = new DataTable();
            DALEMenu dale = new DALEMenu();
            dt = dale.ObtenerMenusHijos(o);
            return dt;
        }
        public DataTable ObtenerMenusPadres(oMenu o)
        {
            DataTable dt = new DataTable();
            DALEMenu dale = new DALEMenu();
            dt = dale.ObtenerMenusPadres(o);
            return dt;
        }
        public DataTable obtenerMenuPorPermisos(oMenu o)
        {
            DataTable dt = new DataTable();
            DALEMenu dale = new DALEMenu();
            dt = dale.obtenerMenuPorPermisos(o);
            return dt;
        }
    }
}
