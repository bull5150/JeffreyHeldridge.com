using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace RestAPICore.Services
{
    public class PolygonIOServices
    {
        public string ConsumerKey { get; set; }

        public List<Models.PolygonIOTickerModel.Info> getTicketInfo(string symbol)
        {
            var requestUserTimeline = new HttpRequestMessage(HttpMethod.Get, string.Format(@"
https://api.polygon.io/v3/reference/tickers?ticker={0}&active=true&sort=ticker&order=asc&limit=10&apiKey=" + ConsumerKey
, symbol));
            var httpClient = new HttpClient();
            HttpResponseMessage responseUserTimeLine = httpClient.SendAsync(requestUserTimeline).GetAwaiter().GetResult();
            string json = responseUserTimeLine.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            return JsonConvert.DeserializeObject<Models.PolygonIOTickerModel.Rootobject>(json).results.ToList<Models.PolygonIOTickerModel.Info>();
        }

        public List<Models.PolygonIONewsModel.News> getTickerNews(string symbol)
        {
            var requestUserTimeline = new HttpRequestMessage(HttpMethod.Get, string.Format(@"
https://api.polygon.io/v2/reference/news?limit=10&order=descending&sort=published_utc&ticker={0}&published_utc.gte=2021-04-26&apiKey=" + ConsumerKey
, symbol));
            var httpClient = new HttpClient();
            HttpResponseMessage responseUserTimeLine = httpClient.SendAsync(requestUserTimeline).GetAwaiter().GetResult();
            string json = responseUserTimeLine.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            return JsonConvert.DeserializeObject<Models.PolygonIONewsModel.Rootobject>(json).results.ToList<Models.PolygonIONewsModel.News>();
        }

        public List<Models.PolygonIOCloseModel.Close> getPreviousClose(string symbol)
        {
            var requestUserTimeline = new HttpRequestMessage(HttpMethod.Get, string.Format(@"
https://api.polygon.io/v2/aggs/ticker/{0}/prev?unadjusted=true&apiKey=" + ConsumerKey
, symbol));
            var httpClient = new HttpClient();
            HttpResponseMessage responseUserTimeLine = httpClient.SendAsync(requestUserTimeline).GetAwaiter().GetResult();
            string json = responseUserTimeLine.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            return JsonConvert.DeserializeObject<Models.PolygonIOCloseModel.Rootobject>(json).results.ToList<Models.PolygonIOCloseModel.Close>();
        }

        public List<Models.PolygonIOFinancialsModel.Financials> getFinancials(string symbol)
        {
            var requestUserTimeline = new HttpRequestMessage(HttpMethod.Get, string.Format(@"
https://api.polygon.io/v2/reference/financials/{0}?limit=1&type=Q&apiKey=" + ConsumerKey
, symbol));
            var httpClient = new HttpClient();
            HttpResponseMessage responseUserTimeLine = httpClient.SendAsync(requestUserTimeline).GetAwaiter().GetResult();
            string json = responseUserTimeLine.Content.ReadAsStringAsync().GetAwaiter().GetResult();
            return JsonConvert.DeserializeObject<Models.PolygonIOFinancialsModel.Rootobject>(json).results.ToList<Models.PolygonIOFinancialsModel.Financials>();
        }
    }
}
