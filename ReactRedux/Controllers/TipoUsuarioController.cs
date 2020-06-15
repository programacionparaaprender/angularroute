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
    public class TipoUsuarioController : ControllerBase
    {
        [HttpPost("InsertaTipoUsuario")]
        public ActionResult<string> InsertaTipoUsuario(ModelTipoUsuario m)
        {
            BLTipoUsuario bl = new BLTipoUsuario();
            oTipoUsuario o = new oTipoUsuario();
            string resultado = "0";
            try
            {
                o.TipoUsuarioId = m.tipoUsuarioId;
                o.Nombre = m.nombres;
                o.UsuarioSys = m.usuarioSys;
                resultado = Convert.ToString(bl.InsertaTipoUsuario(o));
                
            }
            catch (Exception ex)
            {
                resultado = "error";
            }
            return StatusCode(201, resultado);
        }
    }
}