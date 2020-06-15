using Coneccion;
using ObjectWeb.Api;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace DALEWeb.Api
{
    public class DALETipoUsuario
    {
        private string cadenaConexion = Conec.Instance.conexion;
        public Int32 InsertaTipoUsuario(oTipoUsuario o)
        {
            Int32 resultado;
            try
            {
                SqlConnection conexion = new SqlConnection(cadenaConexion);
                conexion.Open();
                String strCadSQL = "spInsertaTipoUsuario";
                using (SqlCommand cmd = new SqlCommand(strCadSQL, conexion))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@empresaId", o.EmpresaId);
                    cmd.Parameters.AddWithValue("@nombre", o.Nombre);
                    cmd.Parameters.AddWithValue("@usuarioSys", o.UsuarioSys);
                    resultado = cmd.ExecuteNonQuery();
                    conexion.Close();
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            return resultado;
        }
    }
}
