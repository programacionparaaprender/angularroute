using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ObjectWeb.Api;
using Newtonsoft.Json;
using MiWeb.Util;
using BLWeb.Api;
using System.Data;
using ReactRedux.Models;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<string> get(int empresaId, int areaId=0, int centroCostoId=0, int tipoEmpleadoId=0)
        {   
            oUsuario o = new oUsuario();
            BLUsuario bl = new BLUsuario();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try{
                o.EmpresaId = empresaId;
                o.AreaId = areaId;
                o.CentroCostoId = centroCostoId;
                o.TipoEmpleadoId = tipoEmpleadoId;
                dt = bl.obtenerUsuariosPorEmpresa(o);
                if(dt.Rows.Count > 0){
                    resultado = util.DataTableToJSONWithStringBuilder(dt);
                }else{
                    resultado = "[]";
                }
            }catch(Exception ex){
                resultado = "error";
            }
            return StatusCode(200, resultado);
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
        [HttpPost("Login")]
        public ActionResult<string> logearUsuario(ModelLogin m)
        {
            oUsuario o = new oUsuario();
            BLUsuario bl = new BLUsuario();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado="0";
            try
            {
                o.Username = m.username;
                o.Password = m.password;
                dt = bl.logearUsuario(o);
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
                resultado = ex.Message;
                return StatusCode(602, resultado);
            }
            return StatusCode(200, resultado);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
