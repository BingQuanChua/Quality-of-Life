import "./Home.css";

export default function Home() {
  return (
    <div style={{ marginLeft: 10, marginTop: 10 }}>
      <h1>The Impact of Quality of Life on Infectious Diseases</h1>
      
      <p>
        A Data Visualization project presented by 
        Liew Kuan Yung and Chua Bing Quan
      </p>

      <h2>Overview</h2>

      <p>
        This project is intended to analyse the relationship between rate of 
        infectious disease and health-related quality of life, specifically, 
        in California. <br></br>Such information might be useful in handling situation 
        like Covid-19.
      </p>

      <h2>Datasets</h2>

      <p>
        This project uses two public datasets available on{" "}
        <a href="https://data.world/" target="_blank" rel="noreferrer">
          data.world
        </a>
        .
      </p>

      <h3>
        <a
          href="https://data.world/health/health-related-quality-of-life"
          target="_blank"
          rel="noreferrer"
        >
          Health-Related Quality of Life
        </a>
      </h3>
      <p>
        Data are from the Behavioral Risk Factor Surveillance System (BRFSS).
        <br></br>All respondents to the BRFSS are non-institutionalized adults, 18 years
        old or older. <strong>1993-2010</strong>
      </p>

      <div>
        List of columns:
        <table class="tg">
          <thead>
            <td class="tg-0lax">Year</td>
            <td class="tg-0lax">LocationAbbr</td>
            <td class="tg-0lax">LocationDesc</td>
            <td class="tg-0lax">Category</td>
            <td class="tg-0lax">Topic</td>
            <td class="tg-0lax">Question</td>
          </thead>
          <tbody>
            <td class="tg-0lax">Data_Value_Unit</td>
            <td class="tg-0lax">Data_Value_Type</td>
            <td class="tg-0lax">Data_Value</td>
            <td class="tg-0lax">Data_Value_Footnote_Symbol</td>
            <td class="tg-0lax">Data_Value_Footnote</td>
            <td class="tg-0lax">Data_Value_Std_Err</td>
          </tbody>
          <tbody>
            <td class="tg-0lax">Low_Confidence_Limit</td>
            <td class="tg-0lax">High_Confidence_Limit</td>
            <td class="tg-0lax">Sample_Size</td>
            <td class="tg-0lax">Break_Out</td>
            <td class="tg-0lax">Break_Out_Category</td>
            <td class="tg-0lax">GeoLocation</td>
          </tbody>
          <tbody>
            <td class="tg-0lax">CategoryId</td>
            <td class="tg-0lax">TopicId</td>
            <td class="tg-0lax">QuestionId</td>
            <td class="tg-0lax">LocationId</td>
            <td class="tg-0lax">BreakOutId</td>
            <td class="tg-0lax">BreakOutCategoryid</td>
          </tbody>
          <tbody>
            <td class="tg-0lax">DataSource</td>
          </tbody>
        </table>
      </div>
      <br></br>

      <h3>
        <a
          href="https://data.world/health/infectious-disease-2001-2014"
          target="_blank"
          rel="noreferrer"
        >
          Infectious Disease
        </a>
      </h3>

      <p>
        These data contain counts and rates for Centers for Infectious
        Diseases-related disease cases among California residents <br></br>by county,
        disease, sex, and year spanning <strong>2001-2014</strong> (As of September, 2015).
      </p>
      <div>
        List of columns:
        <table class="tg">
          <thead>
            <tr>
              <td class="tg-0lax">Disease</td>
              <td class="tg-0lax">County</td>
              <td class="tg-0lax">Year</td>
              <td class="tg-0lax">Sex</td>
              <td class="tg-0lax">Count</td>
              <td class="tg-0lax">Population</td>
              <td class="tg-0lax">Rate</td>
              <td class="tg-0lax">CI.lower</td>
              <td class="tg-0lax">CI.upper</td>
              <td class="tg-0lax">Unstable</td>
            </tr>
          </thead>
        </table>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
