using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;


namespace BLWeb.Api
{
    public class BLUsuario
    {
        public int insertarUsuariosExcel(oUsuario o)
        {
            DataTable dt = new DataTable();
            DALEUsuario dale = new DALEUsuario();
            return dale.insertarUsuariosExcel(o);
        }
        public DataTable obtenerUsuariosPorEmpresa(oUsuario o)
        {
            DataTable dt = new DataTable();
            DALEUsuario dale = new DALEUsuario();
            dt = dale.obtenerUsuariosPorEmpresa(o);
            return dt;
        }
        public DataTable logearUsuario(oUsuario o)
        {
            DataTable dt = new DataTable();
            DALEUsuario dale = new DALEUsuario();
            dt = dale.logearUsuario(o);
            return dt;
        }
    }
}
