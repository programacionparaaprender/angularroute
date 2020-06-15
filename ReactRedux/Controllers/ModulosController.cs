using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BLWeb.Api;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactRedux.Models;
using MiWeb.Util;
using ObjectWeb.Api;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModulosController : ControllerBase
    {

        //[HttpGet("DownloadArchive2")]
        //public IActionResult Test()
        //{
        //    var path = AppContext.BaseDirectory + "Documentos\\Empleados\\DS.pdf";
        //   using (var stream = new FileStream(path, FileMode.Open))
        //    {
        //        //HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
        //        //result.Content = new StreamContent(stream);
        //        //result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
        //        //result.Content.Headers.ContentDisposition.FileName = Path.GetFileName(path);
        //        //result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
        //        //result.Content.Headers.ContentLength = stream.Length;
        //        //var content = new StreamContent(stream);
        //        var result = new HttpResponseMessage(HttpStatusCode.OK)
        //        {
        //            Content = new ByteArrayContent(stream.ToArray())
        //        };
        //        result.Content.Headers.ContentDisposition =
        //            new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment")
        //            {
        //                FileName = "CertificationCard.pdf"
        //            };
        //        result.Content.Headers.ContentType =
        //            new MediaTypeHeaderValue("application/octet-stream");
        //        return Ok(result);
        //    }
                
        //    return Ok("error");
        //}
        [HttpGet("DownloadArchive")]
        public IActionResult DownloadArchive()
        {
            string ruta;
            string resultado = "";
            try
            {
                ruta = AppContext.BaseDirectory + "Documentos\\Empleados\\DS.pdf";
                ruta = "Documentos\\Empleados\\DS.pdf";
            }
            catch (Exception ex)
            {
                resultado = ex.ToString();
                return StatusCode(602, resultado);
            }
            return StatusCode(200, File(ruta, "application/pdf", "Ejemplo 6.pdf"));
        }

        // GET: api/Modulos/5
        [HttpPost("UploadArchive")]
        public async Task<IActionResult> UploadArchive([FromForm] ModelUsuarioArchivo formData)
        {
            oUsuario o = new oUsuario();
            BLActividad bl = new BLActividad();
            DataTable dt = new DataTable();
            Utilitario util = new Utilitario();
            string resultado = "";
            try
            {
                if (formData.files.Length > 0)
                {
                    var filePath = Path.GetTempFileName() + "\"Documentos\"Empleados\""+ formData.usuarioId+"\"";

                    using (var stream = System.IO.File.Create(filePath))
                    {
                        await formData.files.CopyToAsync(stream);
                    }
                }
            }
            catch (Exception ex)
            {
                resultado = ex.ToString();
                return StatusCode(602, resultado);
            }
            return StatusCode(201, resultado);
        }

        // POST: api/Modulos
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Modulos/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
