using System;
using System.Data;
using System.Collections;
using System.Collections.Generic;

namespace ObjectWeb.Api
{
    public class oArbol
    {
        public int areaId { get; set; }
        public Boolean eliminar { get; set; }
        public int areaPadreId { get; set; }
        public string text { get; set; }
        public Boolean opened { get; set; }
        public Boolean selected { get; set; }
        public List<oArbol> children { get; set; }

        public oArbol(){
            children = new List<oArbol>();
        }

        public void add(oArbol o){
            children.Add(o);
        }
 
    }
}
