using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ObjectWeb.Api;
using MiWeb.Util;
using System.Data;
using System.Text.Json;
using ReactRedux.Models;
using BLWeb.Api;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AreaController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<string> get(int empresaId=0)
        {   
            oArea o = new oArea();
            BLArea bl = new BLArea();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            List<oArbol> lista = new List<oArbol>();
            string resultado = "";
            try{
                o.EmpresaId = empresaId;
                dt = bl.obtenerAreasPorEmpresa(o);
                if(dt.Rows.Count > 0){
                    //resultado = util.DataTableToJSONWithStringBuilder(dt);
                    lista = util.obtenerArbol(dt);
                    //resultado = Newtonsoft.Json.JsonSerializer(lista);
                }else{
                    resultado = "[]";
                }
            }
            catch (Exception ex)
            {
                resultado = ex.ToString();
                return StatusCode(602, resultado);
            }
            return StatusCode(200, JsonSerializer.Serialize(lista));
        }


        [HttpGet("HojaSeleccionada")]
        public ActionResult<string> HojaSeleccionada(int empresaId=0, int AreaId=0)
        {
            oArea o = new oArea();
            BLArea bl = new BLArea();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            List<oArbol> lista = new List<oArbol>();
            string resultado = "";
            try
            {
                o.EmpresaId = empresaId;
                dt = bl.obtenerAreasPorEmpresa(o);
                if (dt.Rows.Count > 0)
                {
                    //resultado = util.DataTableToJSONWithStringBuilder(dt);
                    lista = util.obtenerArbol(dt, AreaId);
                    //resultado = Newtonsoft.Json.JsonSerializer(lista);
                }
                else
                {
                    resultado = "[]";
                }
            }
            catch (Exception ex)
            {
                resultado = ex.ToString();
                return StatusCode(602, resultado);
            }
            return StatusCode(200, JsonSerializer.Serialize(lista));
        }


        // GET api/values
        [HttpGet("create")]
        public ActionResult<string> create()
        {
            return StatusCode(201, "value1");
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return StatusCode(200, "value1");
        }

        // POST api/values
        [HttpPost]
        public ActionResult<string> Post(ModelArea m)
        {
            string resultado="0";
            oArea o = new oArea();
            BLArea bl = new BLArea();
            try
            {
                o.AreaId = m.areaId;
                o.AreaPadreId = m.areaPadreId;
                o.Nombre = m.text;
                o.UsuarioSys = m.usuarioSys;
                o.EmpresaId = m.empresaId;
                resultado = Convert.ToString(bl.insertaArea(o));
            }
            catch (Exception ex)
            {
                resultado = ex.ToString();
                return StatusCode(602, resultado);
            }
            return StatusCode(201, resultado);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete]
        public ActionResult<string>  Delete(int areaId, int usuarioSys)
        {
            string resultado = "0";
            oArea o = new oArea();
            BLArea bl = new BLArea();
            try 
            {
                o.AreaId = areaId;
                o.UsuarioSys = usuarioSys;
                resultado = Convert.ToString(bl.eliminarArea(o));
            }
            catch (Exception ex)
            {
                resultado = ex.ToString();
                return StatusCode(602, resultado);
            }
            return StatusCode(201, resultado);
        }
    }
}
