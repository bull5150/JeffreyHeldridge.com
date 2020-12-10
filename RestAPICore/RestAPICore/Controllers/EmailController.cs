using Microsoft.AspNetCore.Mvc;


namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        Services.EmailService emailService = new Services.EmailService()
        {
            AzureSendGridKey = Services.CredentialService.sendGridKey
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
