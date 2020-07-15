using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestAPI.Controllers
{
    [RoutePrefix("api/file")]
    public class FileExportController : ApiController
    {
        [HttpGet]
        [Route("download")]
        public HttpResponseMessage DownloadFile()
        {
            HttpResponseMessage result = Request.CreateResponse(HttpStatusCode.OK);
            result.Content = new StreamContent(new FileStream((AppDomain.CurrentDomain.BaseDirectory + @"Jeff_Heldridge_Resume.pdf"), FileMode.Open, FileAccess.Read));
            result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = "Jeffrey_Heldridge_Resume.pdf";
            return result;

        }
    }
}
