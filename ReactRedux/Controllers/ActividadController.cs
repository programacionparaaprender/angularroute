using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactRedux.Models;
using MiWeb.Util;
using ObjectWeb.Api;
using BLWeb.Api;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActividadController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get(int empresaId)
        {
            oActividad o = new oActividad();
            BLActividad bl = new BLActividad();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try
            {
                o.EmpresaId = empresaId;
                dt = bl.ObtenerActividadesEmpresa(o);
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
        [HttpPost]
        public ActionResult<string> Post(ModelActividad m)
        {
            string resultado = "0";
            oActividad o = new oActividad();
            BLActividad bl = new BLActividad();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            try
            {
                o.ActividadId= m.actividadId;
                o.Nombre = m.nombre;
                o.Color = m.color;
                o.EmpresaId = m.empresaId;
                o.TipoActividadId = m.tipoActividadId;
                o.UsuarioSys = m.usuarioSys;
                resultado = Convert.ToString(bl.insertarActividad(o));
                
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