using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;
using Coneccion;
using System.Data.SqlClient;

namespace BLWeb.Api
{
    public class DALEMenu
    {
        private string cadenaConexion = Conec.Instance.conexion;

        public DataTable ObtenerTipoUsuarioMenu(oMenu o)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                using (SqlCommand cmd = new SqlCommand("spObtenerTipoUsuarioMenu", conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@menuId", o.menuId);
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

        public DataTable ObtenerMenusHijos(oMenu o)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                using (SqlCommand cmd = new SqlCommand("spObtenerMenuHijos", conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@menuId", o.menuId);
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
        public DataTable ObtenerMenusPadres(oMenu o)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerMenuPadre";
                using (SqlCommand cmd = new SqlCommand(strCadSQL, conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    //cmd.Parameters.AddWithValue("@tipoUsuarioId", o.tipoUsuarioId);
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
        public DataTable obtenerMenuPorPermisos(oMenu o)
        {
            DataTable dt = new DataTable();
            //String cadenaConexion = ConfigurationManager.ConnectionStrings["CadenaConexion"].ConnectionString;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerMenuPorPermisos";
                using(SqlCommand cmd = new SqlCommand(strCadSQL, conexion)){
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@tipoUsuarioId", o.tipoUsuarioId);
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
