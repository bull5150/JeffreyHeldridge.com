using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FluentAssertions;

namespace RestAPITest
{
    /// <summary>
    /// Summary description for GoogleTests
    /// </summary>
    [TestClass]
    public class GoogleTests
    {
        [TestMethod]
        public void GoogleArbysMarkerTest()
        {
            RestAPI.Models.GoogleModel expectedMarker = new RestAPI.Models.GoogleModel();
            expectedMarker.ceo = "Paul Brown";
            expectedMarker.lat = "33.930450";
            expectedMarker.lng = "-84.349250";
            expectedMarker.icon = "arbys-logo.png";
            expectedMarker.title = "They have the meats!";
            RestAPI.Controllers.GoogleMapController googleMapController = new RestAPI.Controllers.GoogleMapController();
            List<RestAPI.Models.GoogleModel> markerList = googleMapController.getMarkers();
            RestAPI.Models.GoogleModel actualMarker = markerList[0];
            actualMarker.Should().BeEquivalentTo(expectedMarker);
        }
    }
}
