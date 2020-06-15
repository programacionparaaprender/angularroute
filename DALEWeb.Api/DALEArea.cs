using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;
using Coneccion;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace BLWeb.Api
{
    public class DALEArea
    {
        private string cadenaConexion = Conec.Instance.conexion;
        private Errores error = new Errores();

        public Int32 eliminarArea(oArea o)
        {
            Int32 resultado = 0;
            Dictionary<string, string> hash = new Dictionary<string, string>();
            hash.Add("@AreaId", Convert.ToString(o.AreaId));
            hash.Add("@usuarioSys", Convert.ToString(o.UsuarioSys));
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                using (SqlCommand cmd = new SqlCommand("spEliminarAreas", conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AreaId", o.AreaId);
                    cmd.Parameters.AddWithValue("@usuarioSys", o.UsuarioSys);
                    resultado = cmd.ExecuteNonQuery();
                    conexion.Close();
                }
            }
            catch (Exception e)
            {
                error.error(e, "DALEArea", "eliminarArea", hash);
                throw e;
                //Console.WriteLine(e.ToString());
            }
            return resultado;
        }
        public Int32 insertaArea(oArea o)
        {
            Int32 resultado = 0;
            Dictionary<string, string> hash = new Dictionary<string, string>();
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                using (SqlCommand cmd = new SqlCommand("spInsertarAreas", conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@AreaId", o.AreaId);
                    cmd.Parameters.AddWithValue("@AreaPadreId", o.AreaPadreId);
                    cmd.Parameters.AddWithValue("@Nombre", o.Nombre);
                    cmd.Parameters.AddWithValue("@empresaId", o.EmpresaId);
                    cmd.Parameters.AddWithValue("@usuarioSys", o.UsuarioSys);
                    resultado = cmd.ExecuteNonQuery();
                    conexion.Close();
                }
            }
            catch (Exception e)
            {
                error.error(e, "DALEArea", "insertaArea", hash);
                throw e;
                //Console.WriteLine(e.ToString());
            }
            return resultado;
        }
        public DataTable obtenerAreasPorEmpresa(oArea o)
        {
            DataTable dt = new DataTable();
            //String cadenaConexion = ConfigurationManager.ConnectionStrings["CadenaConexion"].ConnectionString;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerAreasPorEmpresa";
                using(SqlCommand cmd = new SqlCommand(strCadSQL, conexion)){
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@empresaId", o.EmpresaId);
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
