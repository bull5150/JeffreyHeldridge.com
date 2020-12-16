using Microsoft.AspNetCore.Mvc;
using System;


namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
        /// <summary>
        /// Returns PDF Resume file on server for download.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("download")]
        public IActionResult DownloadFile()
        {
            string filePath = AppDomain.CurrentDomain.BaseDirectory + @"Jeff_Heldridge_Resume.pdf";
            string fileName = "Jeffrey_Heldridge_Resume.pdf";
            byte[] fileBytes = System.IO.File.ReadAllBytes(filePath);
            return File(fileBytes, "application/force-download", fileName);
        }
    }
}
