using System;
using System.Collections.Generic;
using System.Text;

namespace ObjectWeb.Api
{
    public class oEmpresa
    {
        private int empresa_id;
        private string nombre;
        private int usuarioSys;
        private int estado;

        public int Empresa_id { get => empresa_id; set => empresa_id = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public int UsuarioSys { get => usuarioSys; set => usuarioSys = value; }
        public int Estado { get => estado; set => estado = value; }
    }
}
