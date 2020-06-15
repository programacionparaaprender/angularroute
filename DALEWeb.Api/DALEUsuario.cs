using System;
using System.Data;
using ObjectWeb.Api;
using DALEWeb.Api;
using Coneccion;
using System.Data.SqlClient;

namespace BLWeb.Api
{
    public class DALEUsuario
    {
        private string cadenaConexion = Conec.Instance.conexion;

        public int insertarUsuariosExcel(oUsuario o)
        {
            int resultado = 0;
            DataTable dt = new DataTable();
            //String cadenaConexion = ConfigurationManager.ConnectionStrings["CadenaConexion"].ConnectionString;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spInsertaUsuarioExcel";
                using (SqlCommand cmd = new SqlCommand(strCadSQL, conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Nombres", o.Nombres);
                    cmd.Parameters.AddWithValue("@Apellidos", o.Apellidos);
                    cmd.Parameters.AddWithValue("@Documento", o.Documento);
                    cmd.Parameters.AddWithValue("@TipoDocumento", o.TipoDocumento);
                    cmd.Parameters.AddWithValue("@CentroCosto", o.CentroCosto);
                    cmd.Parameters.AddWithValue("@TipoUsuario", o.TipoUsuario);
                    cmd.Parameters.AddWithValue("@Nacionalidad", o.Nacionalidad);
                    cmd.Parameters.AddWithValue("@TipoEmpleado", o.TipoEmpleado);
                    cmd.Parameters.AddWithValue("@Area", o.Area);
                    cmd.Parameters.AddWithValue("@FechaInicio", o.FechaInicio);
                    cmd.Parameters.AddWithValue("@FechaFin", o.FechaFin);
                    cmd.Parameters.AddWithValue("@empresaId", o.EmpresaId);
                    resultado = cmd.ExecuteNonQuery();
                    conexion.Close();
                }
            }
            catch (Exception e)
            {
                throw e;
                //Console.WriteLine(e.ToString());
            }
            return resultado;
        }

        public DataTable logearUsuario(oUsuario o)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerUsuarioLogin";
                using (SqlCommand cmd = new SqlCommand(strCadSQL, conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Username", o.Username);
                    cmd.Parameters.AddWithValue("@Password", o.Password);
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
        public DataTable obtenerUsuariosPorEmpresa(oUsuario o)
        {
            DataTable dt = new DataTable();
            //String cadenaConexion = ConfigurationManager.ConnectionStrings["CadenaConexion"].ConnectionString;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spObtenerUsuariosPorArea";
                using(SqlCommand cmd = new SqlCommand(strCadSQL, conexion)){
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@empresaId", o.EmpresaId);
                    cmd.Parameters.AddWithValue("@areaId", o.AreaId);
                    cmd.Parameters.AddWithValue("@centroCostoId", o.CentroCostoId);
                    cmd.Parameters.AddWithValue("@tipoEmpleadoId", o.TipoEmpleadoId);
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
