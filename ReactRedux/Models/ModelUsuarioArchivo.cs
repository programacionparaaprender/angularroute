using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRedux.Models
{
    public class ModelUsuarioArchivo
    {
        public IFormFile files { get; set; }
        public int usuarioId { get; set; }

    }
}
