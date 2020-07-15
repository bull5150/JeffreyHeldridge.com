using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FluentAssertions;

namespace RestAPITest
{
    [TestClass]
    public class ChartTests
    {
        [TestMethod]
        public void SoftSkillTest()
        {
            RestAPI.Models.ChartModel skill = new RestAPI.Models.ChartModel();
            skill.skill = "Influencer";
            skill.value = 8;
            RestAPI.Controllers.ChartsController chartController = new RestAPI.Controllers.ChartsController();
            List<RestAPI.Models.ChartModel> skills = chartController.getSoftSkills();
            RestAPI.Models.ChartModel actualSkill = skills[2];
            actualSkill.Should().BeEquivalentTo(skill);
        }
        [TestMethod]
        public void HardSkillTest()
        {
            RestAPI.Models.ChartModel skill = new RestAPI.Models.ChartModel();
            skill.skill = "Angular";
            skill.value = 9;
            RestAPI.Controllers.ChartsController chartController = new RestAPI.Controllers.ChartsController();
            List<RestAPI.Models.ChartModel> skills = chartController.getCodingSkills();
            RestAPI.Models.ChartModel actualSkill = skills[2];
            actualSkill.Should().BeEquivalentTo(skill);
        }
    }
}
