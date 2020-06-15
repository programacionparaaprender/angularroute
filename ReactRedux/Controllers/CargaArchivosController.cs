using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using ReactRedux.Models;
using NPOI.SS.UserModel;
using NPOI.HSSF.UserModel;
using NPOI.XSSF.UserModel;
using System.Data;
using MiWeb.Util;
using ObjectWeb.Api;
using BLWeb.Api;

namespace ReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargaArchivosController : ControllerBase
    {

        [HttpPost("GuardarUsuariosExcel")]
        public IActionResult GuardarUsuariosExcel(ModelDatos m)
        {
            string resultado = "0";
            DataTable dt = new DataTable();
            List<oUsuario> listaUsuario = new List<oUsuario>();
            BLUsuario bl = new BLUsuario();
            try
            {
                foreach (ModelUsuariosExcel e in m.empleados)
                {
                    oUsuario o = new oUsuario();
                    o.Nombres = e.Nombres;
                    o.Apellidos = e.Apellidos;
                    o.Documento = e.Documento;
                    o.TipoDocumento = e.TipoDocumento;
                    o.CentroCosto = e.CentroCosto;
                    o.TipoUsuario = e.TipoUsuario;
                    o.Nacionalidad = e.Nacionalidad;
                    o.TipoEmpleado = e.TipoEmpleado;
                    o.Area = e.Area;
                    o.FechaInicio = e.FechaInicio;
                    o.FechaFin = e.FechaFin;
                    o.EmpresaId = m.empresaId;
                    listaUsuario.Add(o);
                }
                foreach (oUsuario o in listaUsuario)
                {
                    bl.insertarUsuariosExcel(o); 
                }
                    resultado = "1";
                if (dt.Rows.Count > 0)
                {
                    resultado = new Utilitario().DataTableToJSONWithStringBuilder(dt);
                }
                else
                {
                    resultado = "[]";
                }
            }
            catch (Exception ex)
            {
                resultado = ex.Message;
                //ErroresFrontEnd error = new ErroresFrontEnd();
                //oErrorFront o = error.error(ex);
                //return StatusCode(o.Code, o.Message);
            }


            return StatusCode(201, resultado);
        }

        [HttpPost("ExcelFile")]
        public IActionResult ExcelFile([FromForm] ArchivosModel archivo)
        {
            string resultado = "0";
            DataTable dt = new DataTable();

            //Para agregar las columnas y darles un nombre haremos lo siguiente:

            
            if (archivo.files == null || archivo.files.Length == 0)
                return StatusCode(200, 0);

            try
            {
                //var codigos = JsonConvert.DeserializeObject<List<Codigo>>(archivo.codigo);

                // Determine whether the directory exists.
                string pathuser = Path.Combine(Directory.GetCurrentDirectory(), "Documentos", archivo.tipoDocumento, archivo.usuario_id.ToString());
                if (!Directory.Exists(pathuser))
                {
                    DirectoryInfo di = Directory.CreateDirectory(pathuser);
                }

                var path = Path.Combine(pathuser, archivo.files.FileName);

                //using (var stream = new FileStream(path, FileMode.Create))
                //{
                //    await archivo.files.CopyToAsync(stream);
                //}
                IFormFile file = archivo.files;
                string sFileExtension = Path.GetExtension(file.FileName).ToLower();
                ISheet sheet;
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(stream);
                    stream.Position = 0;
                    if (sFileExtension == ".xls")
                    {
                        HSSFWorkbook hssfwb = new HSSFWorkbook(stream); //This will read the Excel 97-2000 formats  
                        sheet = hssfwb.GetSheetAt(0); //get first sheet from workbook  
                    }
                    else
                    {
                        XSSFWorkbook hssfwb = new XSSFWorkbook(stream); //This will read 2007 Excel format  
                        sheet = hssfwb.GetSheetAt(0); //get first sheet from workbook   
                    }
                    IRow headerRow = sheet.GetRow(0); //Get Header Row
                    int cellCount = headerRow.LastCellNum;
                    //sb.Append("<table class='table'><tr>");
                    List<string> columns = new List<string>();
                    for (int j = 0; j < cellCount; j++)
                    {
                        NPOI.SS.UserModel.ICell cell = headerRow.GetCell(j);
                        if (cell == null || string.IsNullOrWhiteSpace(cell.ToString())) continue;
                        //sb.Append("<th>" + cell.ToString() + "</th>");
                        columns.Add(cell.ToString());
                        dt.Columns.Add(cell.ToString());
                    }
                    //sb.Append("</tr>");
                    //sb.AppendLine("<tr>");
                    for (int i = (sheet.FirstRowNum + 1); i <= sheet.LastRowNum; i++) //Read Excel File
                    {
                        IRow row = sheet.GetRow(i);
                        if (row == null) continue;
                        if (row.Cells.All(d => d.CellType == CellType.Blank)) continue;
                        DataRow dtrow = dt.NewRow();
                        for (int j = row.FirstCellNum; j < cellCount; j++)
                        {

                            if (row.GetCell(j) != null)
                                dtrow[j] = row.GetCell(j).ToString();
                                //resultado = "";
                                //sb.Append("<td>" + row.GetCell(j).ToString() + "</td>");
                        }
                        dt.Rows.Add(dtrow);
                        //sb.AppendLine("</tr>");
                    }
                    //sb.Append("</table>");
                }



                resultado = "1";
                if (dt.Rows.Count > 0)
                {
                    resultado = new Utilitario().DataTableToJSONWithStringBuilder(dt);
                }
                else
                {
                    resultado = "[]";
                }


                //INSERTAR MANTENIMIENTO DOCUMENTO_USUARIO 
                //oDocumentoUsuario objDocumento = new oDocumentoUsuario();
                //foreach(var x in codigos)
                //{
                //    objDocumento.codigo = x.id;
                //    objDocumento.documento_id = archivo.documento_id;
                //    objDocumento.usuario_id = archivo.usuario_id;
                //    objDocumento.tipo_documento = archivo.idtipoDocumento;
                //    objDocumento.nombre = archivo.files.FileName;
                //    objDocumento.descripcion = "";
                //    objDocumento.ruta = path;
                //    objDocumento.usuario = archivo.coduslogeado;
                //    objDocumento.empresa_id = archivo.empresa_id;
                //    //objDocumento.codigo = archivo.codigo;
                //    resultado = new BLDocumentoUsuario().MantenimientoInsertarActualizar(objDocumento);
                //}

                //
            }
            catch (Exception ex)
            {
                resultado = ex.Message;
                //ErroresFrontEnd error = new ErroresFrontEnd();
                //oErrorFront o = error.error(ex);
                //return StatusCode(o.Code, o.Message);
            }


            return StatusCode(200, resultado);
        }
        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadFile([FromForm] ArchivosModel archivo)
        {
            int resultado = 0;
            if (archivo.files == null || archivo.files.Length == 0)
                return StatusCode(200, 0);

            try
            {
                //var codigos = JsonConvert.DeserializeObject<List<Codigo>>(archivo.codigo);

                // Determine whether the directory exists.
                string pathuser = Path.Combine(Directory.GetCurrentDirectory(), "Documentos", archivo.tipoDocumento, archivo.usuario_id.ToString());
                if (!Directory.Exists(pathuser))
                {
                    DirectoryInfo di = Directory.CreateDirectory(pathuser);
                }

                var path = Path.Combine(pathuser, archivo.files.FileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await archivo.files.CopyToAsync(stream);
                }
                resultado = 1;



                //INSERTAR MANTENIMIENTO DOCUMENTO_USUARIO 
                //oDocumentoUsuario objDocumento = new oDocumentoUsuario();
                //foreach(var x in codigos)
                //{
                //    objDocumento.codigo = x.id;
                //    objDocumento.documento_id = archivo.documento_id;
                //    objDocumento.usuario_id = archivo.usuario_id;
                //    objDocumento.tipo_documento = archivo.idtipoDocumento;
                //    objDocumento.nombre = archivo.files.FileName;
                //    objDocumento.descripcion = "";
                //    objDocumento.ruta = path;
                //    objDocumento.usuario = archivo.coduslogeado;
                //    objDocumento.empresa_id = archivo.empresa_id;
                //    //objDocumento.codigo = archivo.codigo;
                //    resultado = new BLDocumentoUsuario().MantenimientoInsertarActualizar(objDocumento);
                //}
              
                //
            }
            catch (Exception ex)
            {
                //ErroresFrontEnd error = new ErroresFrontEnd();
                //oErrorFront o = error.error(ex);
                //return StatusCode(o.Code, o.Message);
            }


            return StatusCode(200, resultado);
        }

        [HttpGet("DownloadFile")]
        public async Task<FileStreamResult> DownloadFile(string ruta = "")
        {
            string pathuser = ruta;
            try
            {
                var memory = new MemoryStream();
                using (var stream = new FileStream(pathuser, FileMode.Open))
                {
                    await stream.CopyToAsync(memory);
                }
                memory.Position = 0;


                //string sMimeType = GetContentType(contentType);
                //FileStreamResult oResult = new FileStreamResult(document, sMimeType);
                //oResult.FileDownloadName = outputName;
                //return oResult;


                return File(memory, GetContentType(pathuser), Path.GetFileName(pathuser));

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        //[HttpDelete("EliminaDocumentoUsuario")]
        //public IActionResult EliminaDocumentoUsuario(string ruta = "", string documento = "", string usuario = "", string tipodocumento = "")
        //{
        //    int resultado = 0;
        //    try
        //    {
        //        if (!Directory.Exists(ruta))
        //        {
        //            FileInfo fi = new FileInfo(ruta);
        //            fi.Delete();
        //            //Metodo para cambiar de estado al documento en BD
        //            resultado = new BLDocumentoUsuario().EliminaDocumentoUsuario(documento, usuario, tipodocumento);
        //            //
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        ErroresFrontEnd error = new ErroresFrontEnd();
        //        oErrorFront o = error.error(ex);
        //        return StatusCode(o.Code, o.Message);
        //    }


        //    return StatusCode(201, resultado);
        //}

        private string GetContentType(string path)
        {
            var types = GetMimeTypes();
            var ext = Path.GetExtension(path).ToLowerInvariant();
            return types[ext];
        }

        private Dictionary<string, string> GetMimeTypes()
        {
            return new Dictionary<string, string>
            {
                {".txt", "text/plain"},
                {".pdf", "application/pdf"},
                {".doc", "application/vnd.ms-word"},
                {".docx", "application/vnd.ms-word"},
                {".xls", "application/vnd.ms-excel"},
                {".xlsx", "application/vnd.openxmlformats officedocument.spreadsheetml.sheet"},
                {".png", "image/png"},
                {".jpg", "image/jpeg"},
                {".jpeg", "image/jpeg"},
                {".gif", "image/gif"},
                {".csv", "text/csv"}
            };
        }
    }
}