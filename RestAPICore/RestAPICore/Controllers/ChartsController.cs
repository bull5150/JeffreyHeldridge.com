using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartsController : ControllerBase
    {
        /// <summary>
        /// Returns a list of coding skills
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("skills")]
        public List<Models.ChartModel> getCodingSkills()
        {
            List<Models.ChartModel> skillsList = new List<Models.ChartModel>();
            Models.ChartModel skill = new Models.ChartModel();
            skill.skill = "C#";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Java";
            skill.value = 7;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Angular";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = ".NET";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "SQL";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Angular.JS";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Javascript";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "CSS";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "VB";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Azure";
            skill.value = 7;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Communication";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Leadership";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Influencer";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Project Management";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Quick Learner";
            skill.value = 8;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Adaptability";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Dependability";
            skill.value = 9;
            skillsList.Add(skill);
            skill = new Models.ChartModel();
            skill.skill = "Team Oriented";
            skill.value = 7;
            skillsList.Add(skill);
            return skillsList;
        }
        /// <summary>
        /// Returns a json object of social media companies monthly active users by year
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("race")]
        public object getRaceSkills()
        {
#if DEBUG
            string allText = System.IO.File.ReadAllText(@"C:\Repos\JeffreyHeldridge.com_sidefiles\racechart.json");
#else
            string allText = System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "racechart.json");
#endif
            return JsonConvert.DeserializeObject(allText);
        }
    }
}
