using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRedux.Models
{
    public class ArchivosModel
    {
        public IFormFile files { get; set; }
        public string userlogeado { get; set; }
        public int coduslogeado { get; set; }
        public int idtipoDocumento { get; set; }
        public string tipoDocumento { get; set; }
        public string observacion { get; set; }
        public int documento_id { get; set; }
        public int usuario_id { get; set; }
        public string ruta { get; set; }
        public int empresa_id { get; set; }
        public string codigo { get; set; }
    }

    public class Codigo
    {
        public int id { get; set; }
    }
}
