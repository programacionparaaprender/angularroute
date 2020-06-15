using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactRedux.Models
{
    public class ModelArea
    {
        public int areaId { get; set; }
        public int areaPadreId { get; set; }
        public string text { get; set; }
        public int empresaId { get; set; }
        public int usuarioSys { get; set; }
    }
}
