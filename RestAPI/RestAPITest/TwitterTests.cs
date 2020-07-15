using System;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web.Http;

namespace RestAPITest
{
    [TestClass]
    public class TwitterTests
    {
        //Test to make sure I get results running my username
        [TestMethod]
        public void TwitterGetUserTest()
        {
            RestAPI.Controllers.TwitterController twitterController = new RestAPI.Controllers.TwitterController();
            List<RestAPI.Models.TwitterModel.Status> tweetList = twitterController.getTweetsByUser("jmheldridge", 10);
            Assert.IsNotNull(tweetList);
        }
        //Test to make sure I get results using a keyword (corona/virus/beer)
        [TestMethod]
        public void TwitterGetKeywordTest()
        {
            RestAPI.Controllers.TwitterController twitterController = new RestAPI.Controllers.TwitterController();
            List<RestAPI.Models.TwitterModel.Status> tweetList = twitterController.getTweetsByKeyword("corona", 10);
            Assert.IsNotNull(tweetList);
        }
        //Test to make sure I get results using a geolocation (timessquare)
        [TestMethod]
        public void TwitterGetLocationTest()
        {
            RestAPI.Controllers.TwitterController twitterController = new RestAPI.Controllers.TwitterController();
            List<RestAPI.Models.TwitterModel.Status> tweetList = twitterController.getTweetsByGeoLocation("40.757024", "-73.986068", 1, 10);
            Assert.IsNotNull(tweetList);
        }
    }
}
