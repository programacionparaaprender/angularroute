using Coneccion;
using ObjectWeb.Api;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DALEWeb.Api
{
    public class DALEActividad
    {
        private string cadenaConexion = Conec.Instance.conexion;

        public Int32 insertarActividad(oActividad o)
        {
            Int32 resultado = 0;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                using (SqlCommand cmd = new SqlCommand("spInsertarActividad", conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@empresaId", o.EmpresaId);
                    cmd.Parameters.AddWithValue("@actividadId", o.ActividadId);
                    cmd.Parameters.AddWithValue("@tipoActividadId", o.TipoActividadId);
                    cmd.Parameters.AddWithValue("@color", o.Color);
                    cmd.Parameters.AddWithValue("@nombre", o.Nombre);
                    cmd.Parameters.AddWithValue("@usuarioSys", o.UsuarioSys);
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
        public DataTable ObtenerActividadesEmpresa(oActividad o)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                using (SqlCommand cmd = new SqlCommand("spObtenerActividadesEmpresa", conexion))
                {
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
