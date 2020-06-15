using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ObjectWeb.Api;
using MiWeb.Util;
using BLWeb.Api;
using System.Data;
using System.Text.Json;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        [HttpGet("ObtenerTipoUsuarioMenu")]
        public ActionResult<string> ObtenerTipoUsuarioMenu(int menuId)
        {
            oMenu o = new oMenu();
            BLMenu bl = new BLMenu();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try
            {
                o.tipoUsuarioId = 0;
                o.menuId = menuId;
                dt = bl.ObtenerTipoUsuarioMenu(o);
                if (dt.Rows.Count > 0)
                {
                    resultado = util.DataTableToJSONWithStringBuilder(dt);
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
            return StatusCode(200, resultado);
        }
        [HttpGet("ObtenerMenusHijos")]
        public ActionResult<List<oMenu>> ObtenerMenusHijos(int menuId)
        {
            oMenu o = new oMenu();
            BLMenu bl = new BLMenu();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try
            {
                o.tipoUsuarioId = 0;
                o.menuId = menuId;
                dt = bl.ObtenerMenusHijos(o);
                if (dt.Rows.Count > 0)
                {
                    resultado = util.DataTableToJSONWithStringBuilder(dt);
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
            return StatusCode(200, resultado);
        }
        [HttpGet("ObtenerMenusPadres")]
        public ActionResult<List<oMenu>> ObtenerMenusPadres()
        {
            oMenu o = new oMenu();
            BLMenu bl = new BLMenu();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try
            {
                o.tipoUsuarioId = 0;
                dt = bl.ObtenerMenusPadres(o);
                if (dt.Rows.Count > 0)
                {
                    resultado = util.DataTableToJSONWithStringBuilder(dt);
                }
                else
                {
                    resultado = "[]";
                }
            }
            catch (Exception ex)
            {
                resultado = "error";
            }
            return StatusCode(200, resultado);
        }
        // GET api/values
        [HttpGet]
        public ActionResult<List<oMenu>> get(int tipoUsuarioId)
        {   
            oMenu o = new oMenu();
            BLMenu bl = new BLMenu();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            List<oMenu> menu = new List<oMenu>();
            try{
                o.tipoUsuarioId = tipoUsuarioId;
                dt = bl.obtenerMenuPorPermisos(o);
                if(dt.Rows.Count > 0){
                    menu = util.obtenerArbolMenu(dt);
                    //resultado = util.DataTableToJSONWithStringBuilder(dt);
                }else{
                    resultado = "[]";
                }
            }catch(Exception ex){
                resultado = "error";
            }
            return StatusCode(200, JsonSerializer.Serialize(menu));
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
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete]
        public ActionResult<string> Delete(int id)
        {
            string resultado = "0";
            try
            {

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
