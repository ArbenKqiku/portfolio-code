function main(){

  // replace xyz-xyz-xyzy with an account number
  var accountId = ["xyz-xyz-xyzy"];
  MccApp.select(MccApp.accounts().withIds(accountId).get().next());

  // define query
  var query = "SELECT CampaignName, AdGroupName, Criteria, Impressions, Clicks, Conversions" +
              " FROM KEYWORDS_PERFORMANCE_REPORT" +
              " WHERE Conversions > 2" +
              " DURING 20190505,20191031";

  // extract report and report rows
  var report = AdsApp.report(query);
  var rows = report.rows();

  // print rows of report
  while(rows.hasNext()){
    Logger.log(rows.next());
  }

}
