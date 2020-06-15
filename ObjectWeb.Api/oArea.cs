using System;

namespace ObjectWeb.Api
{
    public class oArea
    {
        private int areaId;
        private int empresaId;
        private int centroCostoId;
        private int tipoEmpleadoId;
        private int areaPadreId;
        private string nombre;
        private int usuarioSys;
        public int AreaId { get => areaId; set => areaId = value; }
        public int EmpresaId { get => empresaId; set => empresaId = value; }
        public int CentroCostoId { get => centroCostoId; set => centroCostoId = value; }
        public int TipoEmpleadoId { get => tipoEmpleadoId; set => tipoEmpleadoId = value; }
        public int AreaPadreId { get => areaPadreId; set => areaPadreId = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public int UsuarioSys { get => usuarioSys; set => usuarioSys = value; }
    }
}
