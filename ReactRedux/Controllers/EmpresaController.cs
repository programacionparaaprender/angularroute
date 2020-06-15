using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using BLWeb.Api;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MiWeb.Util;
using ObjectWeb.Api;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        [HttpGet("ObtenerEmpresasCombo")]
        public ActionResult<string> ObtenerEmpresasCombo()
        {
            oEmpresa o = new oEmpresa();
            BLEmpresa bl = new BLEmpresa();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try
            {
                o.Empresa_id = 0;
                dt = bl.ObtenerEmpresasCombo(o);
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
        [HttpGet]
        public ActionResult<string> get()
        {
            oEmpresa o = new oEmpresa();
            BLEmpresa bl = new BLEmpresa();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            List<oArbol> lista = new List<oArbol>();
            string resultado = "";
            try
            {
                o.Empresa_id = 0;
                dt = bl.obtenerEmpresas(o);
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
            return StatusCode(200, JsonSerializer.Serialize(lista));
        }
    }
}