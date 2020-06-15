using DALEWeb.Api;
using ObjectWeb.Api;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace BLWeb.Api
{
    public class BLEmpresa
    {
        public DataTable ObtenerEmpresasCombo(oEmpresa o)
        {
            DataTable dt = new DataTable();
            DALEEmpresa dale = new DALEEmpresa();
            dt = dale.ObtenerEmpresasCombo(o);
            return dt;
        }
        public DataTable obtenerEmpresas(oEmpresa o)
        {
            DataTable dt = new DataTable();
            DALEEmpresa dale = new DALEEmpresa();
            dt = dale.obtenerEmpresas(o);
            return dt;
        }
    }
}
