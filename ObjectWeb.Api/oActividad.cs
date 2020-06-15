using System;
using System.Collections.Generic;
using System.Text;

namespace ObjectWeb.Api
{
    public class oActividad
    {
        private int actividadId;
        private string nombre;
        private string color;
        private int empresaId;
        private int usuarioSys;
        private int tipoActividadId;
        public int ActividadId { get => actividadId; set => actividadId = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Color { get => color; set => color = value; }
        public int EmpresaId { get => empresaId; set => empresaId = value; }
        public int UsuarioSys { get => usuarioSys; set => usuarioSys = value; }
        public int TipoActividadId { get => tipoActividadId; set => tipoActividadId = value; }
    }
}
