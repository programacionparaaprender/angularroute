using System;

namespace ObjectWeb.Api
{
    public class oUsuario
    {
        private int areaId;
        private int empresaId;
        private int centroCostoId;
        private int tipoEmpleadoId;
        private string username;
        private string password;
        private int usuarioId;

        private int tipoUsuarioId;
        private string apellidos;
        private string nombres;
        private int tipoDocumentoId;
        private string tipoDocumento;
        private string documento;
        private string centroCosto;
        private string tipoUsuario;
        private string nacionalidad;
        private string tipoEmpleado;
        private string area;
        private string fechaInicio;
        private string fechaFin;


        public int EmpresaId { get => empresaId; set => empresaId = value; }
        public int CentroCostoId { get => centroCostoId; set => centroCostoId = value; }
        public int TipoEmpleadoId { get => tipoEmpleadoId; set => tipoEmpleadoId = value; }
        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public int AreaId { get => areaId; set => areaId = value; }
        public int UsuarioId { get => usuarioId; set => usuarioId = value; }
        public int TipoUsuarioId { get => tipoUsuarioId; set => tipoUsuarioId = value; }
        public string Apellidos { get => apellidos; set => apellidos = value; }
        public string Nombres { get => nombres; set => nombres = value; }
        public int TipoDocumentoId { get => tipoDocumentoId; set => tipoDocumentoId = value; }
        public string TipoDocumento { get => tipoDocumento; set => tipoDocumento = value; }
        public string Documento { get => documento; set => documento = value; }
        public string CentroCosto { get => centroCosto; set => centroCosto = value; }
        public string TipoUsuario { get => tipoUsuario; set => tipoUsuario = value; }
        public string Nacionalidad { get => nacionalidad; set => nacionalidad = value; }
        public string TipoEmpleado { get => tipoEmpleado; set => tipoEmpleado = value; }
        public string Area { get => area; set => area = value; }
        public string FechaInicio { get => fechaInicio; set => fechaInicio = value; }
        public string FechaFin { get => fechaFin; set => fechaFin = value; }
    }
}
