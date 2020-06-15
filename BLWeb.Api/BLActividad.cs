using DALEWeb.Api;
using ObjectWeb.Api;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace BLWeb.Api
{
    public class BLActividad
    {
        public Int32 insertarActividad(oActividad o)
        {
            DataTable dt = new DataTable();
            DALEActividad dale = new DALEActividad();
            return dale.insertarActividad(o);
            
        }
        public DataTable ObtenerActividadesEmpresa(oActividad o)
        {
            DataTable dt = new DataTable();
            DALEActividad dale = new DALEActividad();
            dt = dale.ObtenerActividadesEmpresa(o);
            return dt;
        }
    }
}
