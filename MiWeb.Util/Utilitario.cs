using System;
using System.Data;
using System.Text;
using System.Collections.Generic;
using ObjectWeb.Api;
using System.Linq;


namespace MiWeb.Util
{
    public class Utilitario
    {
        
        public List<oMenu> obtenerArbolMenu(DataTable dt){
            List<oMenu> lista1 = new List<oMenu>();
            List<oMenu> lista2 = new List<oMenu>();
            List<oMenu> lista3 = new List<oMenu>();
            
            foreach(DataRow row in dt.Rows){
                oMenu o = new oMenu();
                o.menuId =Convert.ToInt32(row["menuId"].ToString());
                o.nombre = row["nombre"].ToString();
                o.link = row["link"].ToString();
                o.menuPadreId = Convert.ToInt32(row["menuPadreId"].ToString());
                o.simbolo = "a";// row["simbolo"].ToString();
                o.eliminar = false;
                o.visible = "0";
                o.orden = Convert.ToInt32(row["orden"].ToString());
                lista1.Add(o);
            }
            lista2 = lista1;
            foreach(oMenu m1 in lista1){
                foreach(oMenu m2 in lista2){
                    if(m1.menuId != m2.menuId){
                        if(m1.menuId == m2.menuPadreId){
                            m1.add(m2);
                            m2.eliminar = true;
                            m1.visible = "1";
                        }
                    }
                }
            }
            foreach(oMenu o in lista2){
                if(o.eliminar == true){
                    lista3.Add(o);
                }
            }
            foreach(oMenu o in lista3){
                lista1.Remove(o);
            }
            foreach (oMenu o in lista1)
            {
                List<oMenu> submenu = o.submenu;
                if (submenu.Count > 0)
                {
                    IEnumerable<oMenu> temp = from s in submenu
                                              orderby s.orden descending
                                              select s;
                    submenu = new List<oMenu>();
                    foreach (oMenu m in temp)
                        submenu.Add(m);
                    
                    o.submenu = submenu;
                }
            }
            IEnumerable<oMenu> orderByResult = from s in lista1
                        orderby s.orden descending
                                select s;
            lista1 = new List<oMenu>();
            foreach (oMenu o in orderByResult)
            {
                lista1.Add(o);
            }

            return lista1;
        }
        public List<oArbol> obtenerArbol(DataTable dt, int AreaId)
        {
            List<oArbol> lista1 = new List<oArbol>();
            List<oArbol> lista2 = new List<oArbol>();
            List<oArbol> lista3 = new List<oArbol>();
            foreach (DataRow row in dt.Rows)
            {
                oArbol arbol = new oArbol();
                arbol.text = row["nombre"].ToString();
                arbol.areaId = Convert.ToInt32(row["areaId"].ToString());
                arbol.areaPadreId = Convert.ToInt32(row["areaPadreId"].ToString());
                arbol.opened = true;
                arbol.eliminar = false;
                arbol.selected = false;
                if (AreaId == arbol.areaId)
                {
                    arbol.selected = true;
                }
                lista1.Add(arbol);
            }
            lista2 = lista1;
            foreach (oArbol arbol1 in lista1)
            {
                foreach (oArbol arbol2 in lista2)
                {
                    if (arbol1.areaId != arbol2.areaId)
                    {
                        if (arbol2.areaPadreId == arbol1.areaId)
                        {
                            arbol1.add(arbol2);
                            arbol2.eliminar = true;
                        }
                    }
                }
            }
            foreach (oArbol o in lista1)
            {
                if (o.eliminar == true)
                {
                    lista3.Add(o);
                }
            }

            foreach (oArbol o in lista3)
            {
                lista1.Remove(o);
            }

            return lista1;
        }
        public List<oArbol> obtenerArbol(DataTable dt){
            List<oArbol> lista1 = new List<oArbol>();
            List<oArbol> lista2 = new List<oArbol>();
            List<oArbol> lista3 = new List<oArbol>();
            foreach(DataRow row in dt.Rows){
                oArbol arbol = new oArbol();
                arbol.text = row["nombre"].ToString();
                arbol.areaId = Convert.ToInt32(row["areaId"].ToString());
                arbol.areaPadreId = Convert.ToInt32(row["areaPadreId"].ToString());
                arbol.opened = true;
                arbol.eliminar = false;
                lista1.Add(arbol);
            }
            lista2 = lista1;
            foreach(oArbol arbol1 in lista1){
                foreach(oArbol arbol2 in lista2){
                    if(arbol1.areaId != arbol2.areaId){
                       if(arbol2.areaPadreId == arbol1.areaId){
                           arbol1.add(arbol2);
                           arbol2.eliminar = true;
                       } 
                    }
                }
            }
            foreach(oArbol o in lista1){
                if(o.eliminar == true){
                    lista3.Add(o);
                }
            }

            foreach(oArbol o in lista3){
                lista1.Remove(o);
            }
            
            return lista1;
        }
        public string DataTableToJSONWithStringBuilder(DataTable table)   
        {  
            var JSONString = new StringBuilder();  
            if (table.Rows.Count > 0)   
            {  
                JSONString.Append("[");  
                for (int i = 0; i < table.Rows.Count; i++)   
                {  
                    JSONString.Append("{");  
                    for (int j = 0; j < table.Columns.Count; j++)   
                    {  
                        if (j < table.Columns.Count - 1)   
                        {  
                            JSONString.Append("\"" + table.Columns[j].ColumnName.ToString() + "\":" + "\"" + table.Rows[i][j].ToString() + "\",");  
                        }   
                        else if (j == table.Columns.Count - 1)   
                        {  
                            JSONString.Append("\"" + table.Columns[j].ColumnName.ToString() + "\":" + "\"" + table.Rows[i][j].ToString() + "\"");  
                        }  
                    }  
                    if (i == table.Rows.Count - 1)   
                    {  
                        JSONString.Append("}");  
                    }   
                    else   
                    {  
                        JSONString.Append("},");  
                    }  
                }  
                JSONString.Append("]");  
            }  
            return JSONString.ToString();  
        }

        public string DataTableToJSONWithStringBuilderNoData(DataTable table)
        {
            var JSONString = new StringBuilder();
            JSONString.Append("[");
            int contador = 1;
            foreach (DataColumn col in table.Columns)
                JSONString.Append("{Column"+contador+":"+col.ColumnName+"}");
            JSONString.Append("]");
            return JSONString.ToString();
        }
    }
}
