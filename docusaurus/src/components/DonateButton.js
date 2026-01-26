import homepageHeaderConfig from "../../config/homepage-header.json";
export default function DonateButton() {
  return <iframe
        src={homepageHeaderConfig.donateButton.campaignUrl}
        height="850"
        width="500"
        style={{border: "none"}}
        sandbox="allow-forms allow-scripts allow-top-navigation allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
}