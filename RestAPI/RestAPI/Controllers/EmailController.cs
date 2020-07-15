using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace RestAPI.Controllers
{
    [RoutePrefix("api/email")]
    public class EmailController : ApiController
    {
        Services.EmailService emailService = new Services.EmailService()
        {
            AzureSendGridKey = "KeyHere"
        };
        [HttpPost]
        [Route("")]
        public string sendEmail(Models.EmailModel email)
        {
            emailService.sendEmail(email).GetAwaiter();
            if (email.reciept == "yes")
            {
                emailService.sendReciept(email).GetAwaiter();
            }
            return "success";
        }
    }
}
