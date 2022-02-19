using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PolygonController : ControllerBase
    {
        Services.PolygonIOServices polyService = new Services.PolygonIOServices
        {
            ConsumerKey = Services.CredentialService.polyKey
        };
        /// <summary>
        /// Gets general info on ticker or symbol
        /// </summary>
        /// <param name="symbol"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("tickerinfo")]
        public List<Models.PolygonIOTickerModel.Info> getTicker(string symbol)
        {
            return polyService.getTicketInfo(symbol.ToUpper());
        }
        /// <summary>
        /// Gets News Articals related to passed symbol or ticker
        /// </summary>
        /// <param name="symbol"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("tickernews")]
        public List<Models.PolygonIONewsModel.News> getNews(string symbol)
        {
            return polyService.getTickerNews(symbol.ToUpper());
        }
        /// <summary>
        /// Gets previous day's close price
        /// </summary>
        /// <param name="symbol"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("tickerclose")]
        public List<Models.PolygonIOCloseModel.Close> getClosing(string symbol)
        {
            return polyService.getPreviousClose(symbol.ToUpper());
        }
        [HttpGet]
        [Route("tickerfinancials")]
        public List<Models.PolygonIOFinancialsModel.Financials> getFinancials(string symbol)
        {

            List<Models.PolygonIOFinancialsModel.Financials> financialsList = polyService.getFinancials(symbol.ToUpper());
            if(financialsList.Count == 0)
            {
                //if they havent had to report Financials yet
                financialsList = new List<Models.PolygonIOFinancialsModel.Financials>();
                Models.PolygonIOFinancialsModel.Financials financialsItem = new Models.PolygonIOFinancialsModel.Financials
                {
                    updated = "never",
                    assetsNonCurrent = "",
                    debtNonCurrent = "",
                    bookValuePerShare = "",
                    currentRatio = "",
                    debtToEquityRatio = "",
                    earningsPerBasicShareUSD = "",
                    grossProfit = "",
                    dividendsPerBasicCommonShare = "",
                    dividendYield = "",
                };
                financialsList.Add(financialsItem);
            }
            return financialsList;
        }
    }
}
