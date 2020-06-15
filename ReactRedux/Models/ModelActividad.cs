using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRedux.Models
{
    public class ModelActividad
    {
        public int actividadId { get; set; }
        public string color { get; set; }
        public string nombre { get; set; }
        public int empresaId { get; set; }
        public int usuarioSys { get; set; }
        public int tipoActividadId { get; set; }
    }
}
