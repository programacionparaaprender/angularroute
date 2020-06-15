using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;


namespace BLWeb.Api
{
    public class BLTipoUsuario
    {
        public Int32 InsertaTipoUsuario(oTipoUsuario o)
        {
            DALETipoUsuario dale = new DALETipoUsuario();
            return dale.InsertaTipoUsuario(o);
        }
        public DataTable obtenerAreasPorEmpresa(oArea o)
        {
            DataTable dt = new DataTable();
            DALEArea dale = new DALEArea();
            dt = dale.obtenerAreasPorEmpresa(o);
            return dt;
        }
    }
}
