using System;

namespace ObjectWeb.Api
{
    public class oTipoUsuario
    {
        private int tipoUsuarioId;
        private string nombre;
        private int usuarioSys;
        private DateTime fechaSys;
        private int usuarioUpd;
        private DateTime fechaUpd;
        private int estado;
        private string permisos;
        private int empresaId;

        public int TipoUsuarioId { get => tipoUsuarioId; set => tipoUsuarioId = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public int UsuarioSys { get => usuarioSys; set => usuarioSys = value; }
        public DateTime FechaSys { get => fechaSys; set => fechaSys = value; }
        public int UsuarioUpd { get => usuarioUpd; set => usuarioUpd = value; }
        public DateTime FechaUpd { get => fechaUpd; set => fechaUpd = value; }
        public int Estado { get => estado; set => estado = value; }
        public string Permisos { get => permisos; set => permisos = value; }
        public int EmpresaId { get => empresaId; set => empresaId = value; }
    }
}
