using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;


namespace BLWeb.Api
{
    public class BLArea
    {
        public DataTable obtenerAreasPorEmpresa(oArea o)
        {
            DataTable dt = new DataTable();
            DALEArea dale = new DALEArea();
            dt = dale.obtenerAreasPorEmpresa(o);
            return dt;
        }
        public int insertaArea(oArea o)
        {
            DALEArea dale = new DALEArea();
            return dale.insertaArea(o);
        }
        public int eliminarArea(oArea o)
        {
            DALEArea dale = new DALEArea();
            return dale.eliminarArea(o);
        }
    }
}
