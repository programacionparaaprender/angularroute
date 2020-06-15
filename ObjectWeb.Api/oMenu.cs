using System;
using System.Collections.Generic;


namespace ObjectWeb.Api
{
    public class oMenu
    {
        public int menuId { get; set; }
        public string nombre { get; set; }
        public string link { get; set; }
        public int menuPadreId { get; set; }
        public string simbolo { get; set; }
        public int orden { get; set; }
        public string permisos { get; set; }
        public List<oMenu> submenu { get; set; }
        public Boolean eliminar { get; set; }

        public int tipoUsuarioId { get; set; }
        public string visible { get; set; }

        public oMenu(){
            this.submenu = new List<oMenu>();
        }

        public void add(oMenu o){
            this.submenu.Add(o);
        }

        

    }
}
