using Coneccion;
using ObjectWeb.Api;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DALEWeb.Api
{
    public class DALEEmpresa
    {
        private string cadenaConexion = Conec.Instance.conexion;

        public DataTable ObtenerEmpresasCombo(oEmpresa o)
        {
            DataTable dt = new DataTable();

            //String cadenaConexion = ConfigurationManager.ConnectionStrings["CadenaConexion"].ConnectionString;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerEmpresasCombo";
                using (SqlCommand cmd = new SqlCommand(strCadSQL, conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@empresaId", o.Empresa_id);
                    dt.Load(cmd.ExecuteReader());
                    conexion.Close();
                }
            }
            catch (Exception e)
            {
                throw e;
                //Console.WriteLine(e.ToString());
            }
            return dt;
        }
        public DataTable obtenerEmpresas(oEmpresa o)
        {
            DataTable dt = new DataTable();
            
            //String cadenaConexion = ConfigurationManager.ConnectionStrings["CadenaConexion"].ConnectionString;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerEmpresas";
                using (SqlCommand cmd = new SqlCommand(strCadSQL, conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@empresaId", o.Empresa_id);
                    dt.Load(cmd.ExecuteReader());
                    conexion.Close();
                }
            }
            catch (Exception e)
            {
                throw e;
                //Console.WriteLine(e.ToString());
            }
            return dt;
        }
    }
}
