using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestAPICore.Models
{
    public class PolygonIOTickerModel
    {
        public class Rootobject
        {
            public Info[] results { get; set; }
            public string status { get; set; }
            public string request_id { get; set; }
            public int count { get; set; }
            public string next_url { get; set; }
        }
        public class Info
        {
            public string ticker { get; set; }
            public string name { get; set; }
            public string market { get; set; }
            public string locale { get; set; }
            public string primary_exchange { get; set; }
            public string type { get; set; }
            public bool active { get; set; }
            public string currency_name { get; set; }
            public string cik { get; set; }
            public string composite_figi { get; set; }
            public string share_class_figi { get; set; }
            public DateTime last_updated_utc { get; set; }
        }
    }
    public class PolygonIONewsModel
    {

        public class Rootobject
        {
            public News[] results { get; set; }
            public string status { get; set; }
            public string request_id { get; set; }
            public int count { get; set; }
        }

        public class News
        {
            public string id { get; set; }
            public Publisher publisher { get; set; }
            public string title { get; set; }
            public string author { get; set; }
            public DateTime published_utc { get; set; }
            public string article_url { get; set; }
            public string[] tickers { get; set; }
            public string amp_url { get; set; }
            public string image_url { get; set; }
            public string description { get; set; }
            public string[] keywords { get; set; }
        }

        public class Publisher
        {
            public string name { get; set; }
            public string homepage_url { get; set; }
            public string logo_url { get; set; }
            public string favicon_url { get; set; }
        }
    }
    public class PolygonIOCloseModel
    {
        public class Rootobject
        {
            public string ticker { get; set; }
            public int queryCount { get; set; }
            public int resultsCount { get; set; }
            public bool adjusted { get; set; }
            public Close[] results { get; set; }
            public string status { get; set; }
            public string request_id { get; set; }
            public int count { get; set; }
        }
        public class Close
        {
            public string T { get; set; }
            public string v { get; set; }
            public float vw { get; set; }
            public float o { get; set; }
            public float c { get; set; }
            public float h { get; set; }
            public float l { get; set; }
            public long t { get; set; }
            public int n { get; set; }
        }
    }
    public class PolygonIOFinancialsModel
    {

        public class Rootobject
        {
            public string status { get; set; }
            public Financials[] results { get; set; }
        }

        public class Financials
        {
            public string ticker { get; set; }
            public string period { get; set; }
            public string calendarDate { get; set; }
            public string reportPeriod { get; set; }
            public string updated { get; set; }
            public string dateKey { get; set; }
            public string accumulatedOtherComprehensiveIncome { get; set; }
            public string assets { get; set; }
            public string assetsCurrent { get; set; }
            public string assetsNonCurrent { get; set; }
            public string bookValuePerShare { get; set; }
            public string capitalExpenditure { get; set; }
            public string cashAndEquivalents { get; set; }
            public string cashAndEquivalentsUSD { get; set; }
            public string costOfRevenue { get; set; }
            public string consolidatedIncome { get; set; }
            public string currentRatio { get; set; }
            public string debtToEquityRatio { get; set; }
            public string debt { get; set; }
            public string debtCurrent { get; set; }
            public string debtNonCurrent { get; set; }
            public string debtUSD { get; set; }
            public string deferredRevenue { get; set; }
            public string depreciationAmortizationAndAccretion { get; set; }
            public string deposits { get; set; }
            public string dividendYield { get; set; }
            public string dividendsPerBasicCommonShare { get; set; }
            public string earningBeforeInterestTaxes { get; set; }
            public string earningsBeforeInterestTaxesDepreciationAmortization { get; set; }
            public string EBITDAMargin { get; set; }
            public string earningsBeforeInterestTaxesDepreciationAmortizationUSD { get; set; }
            public string earningBeforeInterestTaxesUSD { get; set; }
            public string earningsBeforeTax { get; set; }
            public string earningsPerBasicShare { get; set; }
            public string earningsPerDilutedShare { get; set; }
            public string earningsPerBasicShareUSD { get; set; }
            public string shareholdersEquity { get; set; }
            public string shareholdersEquityUSD { get; set; }
            public string enterpriseValue { get; set; }
            public string enterpriseValueOverEBIT { get; set; }
            public string enterpriseValueOverEBITDA { get; set; }
            public string freeCashFlow { get; set; }
            public string freeCashFlowPerShare { get; set; }
            public string foreignCurrencyUSDExchangeRate { get; set; }
            public string grossProfit { get; set; }
            public string grossMargin { get; set; }
            public string goodwillAndIntangibleAssets { get; set; }
            public string interestExpense { get; set; }
            public string investedCapital { get; set; }
            public string inventory { get; set; }
            public string investments { get; set; }
            public string investmentsCurrent { get; set; }
            public string investmentsNonCurrent { get; set; }
            public string totalLiabilities { get; set; }
            public string currentLiabilities { get; set; }
            public string liabilitiesNonCurrent { get; set; }
            public string marketCapitalization { get; set; }
            public string netCashFlow { get; set; }
            public string netCashFlowBusinessAcquisitionsDisposals { get; set; }
            public string issuanceEquityShares { get; set; }
            public string issuanceDebtSecurities { get; set; }
            public string paymentDividendsOtherCashDistributions { get; set; }
            public string netCashFlowFromFinancing { get; set; }
            public string netCashFlowFromInvesting { get; set; }
            public string netCashFlowInvestmentAcquisitionsDisposals { get; set; }
            public string netCashFlowFromOperations { get; set; }
            public string effectOfExchangeRateChangesOnCash { get; set; }
            public string netIncome { get; set; }
            public string netIncomeCommonStock { get; set; }
            public string netIncomeCommonStockUSD { get; set; }
            public string netLossIncomeFromDiscontinuedOperations { get; set; }
            public string netIncomeToNonControllingInterests { get; set; }
            public string profitMargin { get; set; }
            public string operatingExpenses { get; set; }
            public string operatingIncome { get; set; }
            public string tradeAndNonTradePayables { get; set; }
            public string payoutRatio { get; set; }
            public string priceToBookValue { get; set; }
            public string priceEarnings { get; set; }
            public string priceToEarningsRatio { get; set; }
            public string propertyPlantEquipmentNet { get; set; }
            public string preferredDividendsIncomeStatementImpact { get; set; }
            public string sharePriceAdjustedClose { get; set; }
            public string priceSales { get; set; }
            public string priceToSalesRatio { get; set; }
            public string tradeAndNonTradeReceivables { get; set; }
            public string accumulatedRetainedEarningsDeficit { get; set; }
            public string revenues { get; set; }
            public string revenuesUSD { get; set; }
            public string researchAndDevelopmentExpense { get; set; }
            public string shareBasedCompensation { get; set; }
            public string sellingGeneralAndAdministrativeExpense { get; set; }
            public string shareFactor { get; set; }
            public string shares { get; set; }
            public string weightedAverageShares { get; set; }
            public string weightedAverageSharesDiluted { get; set; }
            public string salesPerShare { get; set; }
            public string tangibleAssetValue { get; set; }
            public string taxAssets { get; set; }
            public string incomeTaxExpense { get; set; }
            public string taxLiabilities { get; set; }
            public string tangibleAssetsBookValuePerShare { get; set; }
            public string workingCapital { get; set; }
        }
    }
}
